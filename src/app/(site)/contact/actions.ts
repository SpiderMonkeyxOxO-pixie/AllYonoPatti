"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "topic" | "body", string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_TOPICS = ["correction", "verification", "general", "privacy"];

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real users never fill this hidden field. Bots that do are
  // silently accepted so they cannot learn from the response.
  if (String(formData.get("website") ?? "").trim() !== "") {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email))
    fieldErrors.email = "Please enter a valid email address.";
  if (!VALID_TOPICS.includes(topic))
    fieldErrors.topic = "Please choose a topic.";
  if (body.length < 20)
    fieldErrors.body = "Please write at least 20 characters so we can help.";
  if (body.length > 5000)
    fieldErrors.body = "Please keep your message under 5000 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Delivery endpoint is configured via environment variable so no service
  // credentials live in the codebase.
  const endpoint = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpoint) {
    return {
      status: "error",
      message:
        "The contact form is not connected to a delivery service yet. Please email us directly instead — the address is shown below the form.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, topic, body }),
    });
    if (!response.ok) throw new Error(`Delivery failed: ${response.status}`);
    return {
      status: "success",
      message:
        "Thank you — your message has been sent. We aim to respond within a few working days.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong while sending your message. Please try again later or email us directly.",
    };
  }
}
