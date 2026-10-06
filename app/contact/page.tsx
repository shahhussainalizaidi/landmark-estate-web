import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact us", alternates: { canonical: "/contact" } };
export default function Contact() {
  return (
    <section className="top"><div className="wrap">
      <h1>Talk to an agent</h1>
      <p className="lead" style={{ margin: "16px 0 32px" }}>Tell us what you want to buy, sell or rent. An agent replies within one working day.</p>
      <ContactForm />
    </div></section>
  );
}
