import Link from "next/link";
import HeroScene from "@/components/HeroScene";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

const jsonLd = { "@context": "https://schema.org", "@type": "RealEstateAgent", name: "Landmark Estates", url: process.env.NEXT_PUBLIC_SITE_URL, logo: "/logo.png" };

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero">
        <HeroScene />
        <div className="wrap copy">
          <h1>Find the address that fits your life.</h1>
          <p>Browse verified homes, apartments and commercial property, or list yours and reach serious buyers.</p>
          <div className="cta">
            <Link href="/listings" className="btn gold">Browse properties</Link>
            <Link href="/contact" className="btn ghost">Sell your property</Link>
          </div>
          <form className="search" action="/listings" role="search">
            <input name="q" placeholder="City or area" aria-label="City or area" />
            <select name="type" aria-label="Property type"><option value="">Any type</option><option>House</option><option>Apartment</option><option>Commercial</option></select>
            <button className="btn gold">Search</button>
          </form>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Featured properties</h2>
          <p className="lead">Recently listed and checked by our agents.</p>
          <div className="grid">{properties.slice(0, 3).map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
        </div>
      </section>

      <section className="band" aria-label="Our approach">
        <div className="layer" data-speed="0.25" />
        <h2>Every sale starts with a conversation, not a form.</h2>
      </section>

      <section className="block">
        <div className="wrap">
          <h2>Buying or selling, one team handles it.</h2>
          <p className="lead">From valuation to paperwork, an agent stays with you until the keys change hands.</p>
          <div className="stats">
            <div><b>350+</b>homes sold</div><div><b>12</b>areas covered</div><div><b>48 hrs</b>average first viewing</div>
          </div>
        </div>
      </section>
    </>
  );
}
