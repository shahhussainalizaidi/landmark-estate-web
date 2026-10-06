import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { properties, pkr } from "@/lib/properties";

type Props = { params: Promise<{ slug: string }> };
const find = (s: string) => properties.find((p) => p.slug === s);
export const generateStaticParams = () => properties.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = find((await params).slug);
  if (!p) return {};
  return { title: `${p.title} in ${p.area}, ${p.city}`, description: p.summary, alternates: { canonical: `/property/${p.slug}` } };
}

export default async function PropertyPage({ params }: Props) {
  const p = find((await params).slug);
  if (!p) notFound();
  const ld = { "@context": "https://schema.org", "@type": "RealEstateListing", name: p.title, description: p.summary,
    offers: { "@type": "Offer", price: p.price, priceCurrency: "PKR" }, address: { "@type": "PostalAddress", addressLocality: p.city, streetAddress: p.area } };
  return (
    <section className="top"><div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h1>{p.title}</h1>
      <p className="price">{pkr(p.price)}</p>
      <p>{p.area}, {p.city} · {p.beds} beds · {p.baths} baths · {p.sqft} sq ft</p>
      <p className="lead" style={{ marginTop: 24 }}>{p.summary}</p>
      <Link className="btn gold" href={`/contact?property=${p.slug}`}>Book a viewing</Link>
    </div></section>
  );
}
