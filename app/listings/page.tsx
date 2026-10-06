import type { Metadata } from "next";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export const metadata: Metadata = { title: "Properties for sale", alternates: { canonical: "/listings" } };

export default async function Listings({ searchParams }: { searchParams: Promise<{ q?: string; type?: string; beds?: string }> }) {
  const { q = "", type = "", beds = "" } = await searchParams;
  const list = properties.filter((p) =>
    (!q || `${p.city} ${p.area}`.toLowerCase().includes(q.toLowerCase())) &&
    (!type || p.type === type) && (!beds || p.beds >= Number(beds)));
  return (
    <section className="top"><div className="wrap">
      <h1>Properties for sale</h1>
      <form className="search" style={{ margin: "24px 0 40px" }}>
        <input name="q" defaultValue={q} placeholder="City or area" aria-label="City or area" />
        <select name="type" defaultValue={type} aria-label="Type"><option value="">Any type</option><option>House</option><option>Apartment</option><option>Commercial</option></select>
        <select name="beds" defaultValue={beds} aria-label="Bedrooms"><option value="">Any beds</option><option value="2">2+</option><option value="3">3+</option><option value="4">4+</option></select>
        <button className="btn gold">Filter</button>
      </form>
      {list.length ? <div className="grid">{list.map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
        : <p>No properties match these filters. Try a wider area or fewer bedrooms.</p>}
    </div></section>
  );
}
