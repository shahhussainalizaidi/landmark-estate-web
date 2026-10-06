import Link from "next/link";
export default function Nav() {
  return (
    <header className="nav">
      <Link href="/" aria-label="Landmark Estates home"><img src="/logo.png" alt="Landmark Estates" /></Link>
      <nav aria-label="Main">
        <Link href="/listings">Properties</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
