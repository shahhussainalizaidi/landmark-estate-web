import Link from "next/link";
import { Property, pkr } from "@/lib/properties";
export default function PropertyCard({ p }: { p: Property }) {
  return (
    <Link href={`/property/${p.slug}`} className="card">
      <div className="img"><img src={p.image} alt={`${p.title} in ${p.area}, ${p.city}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
      <div className="body">
        <h3>{p.title}</h3>
        <div className="price">{pkr(p.price)}</div>
        <div>{p.area}, {p.city}</div>
        <div className="meta">{p.beds > 0 && <span>{p.beds} beds</span>}<span>{p.baths} baths</span><span>{p.sqft} sq ft</span></div>
      </div>
    </Link>
  );
}
