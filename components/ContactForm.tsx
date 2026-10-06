"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))) });
    setState(res.ok ? "done" : "error");
  }
  if (state === "done") return <p>Thanks, your message is in. An agent will contact you within one working day.</p>;
  return (
    <form className="contact" onSubmit={submit}>
      <input name="name" placeholder="Full name" required aria-label="Full name" />
      <input name="email" type="email" placeholder="Email" required aria-label="Email" />
      <input name="phone" placeholder="Phone (optional)" aria-label="Phone" />
      <select name="intent" aria-label="I want to"><option>Buy a property</option><option>Sell a property</option><option>Book a viewing</option></select>
      <textarea name="message" rows={5} placeholder="How can we help?" required aria-label="Message" />
      <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden /> {/* honeypot */}
      <button className="btn gold" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
      {state === "error" && <p role="alert">Message not sent. Check your details and try again.</p>}
    </form>
  );
}
