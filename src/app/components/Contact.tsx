"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./Marks";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Delivery failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <details>
      <summary>Send a message</summary>
      <form
        method="POST"
        action="https://formspree.io/f/meqbkrap"
        onSubmit={send}
      >
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea rows={3} name="message" required />
        </label>
        <button type="submit" disabled={status === "sending"} className="button">
          {status === "sending" ? "Sending…" : "Send message"} <Arrow />
        </button>
        <div role="status">
          {status === "sent" && "Thanks. Your message was sent."}
          {status === "error" &&
            "Your message couldn’t be sent. Try again or use the email link."}
        </div>
      </form>
    </details>
  );
}
