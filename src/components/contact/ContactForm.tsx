"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 p-5"
      >
        <h2 className="font-semibold text-emerald-900">Message sent</h2>
        <p className="mt-1.5 text-sm text-emerald-900">
          {state.message ??
            "Thank you — your message has been received. We aim to respond within a few working days."}
        </p>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900"
        >
          {state.message}
        </div>
      )}

      {/* Honeypot field: hidden from real users, attractive to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-slate-900"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1 text-sm text-rose-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-slate-900"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1 text-sm text-rose-700">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "contact-topic-error" : undefined}
          className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-slate-900"
        >
          <option value="" disabled>
            Choose a topic
          </option>
          <option value="correction">Report an error or correction</option>
          <option value="verification">Supply verification evidence</option>
          <option value="privacy">Privacy request</option>
          <option value="general">General enquiry</option>
        </select>
        {errors.topic && (
          <p id="contact-topic-error" className="mt-1 text-sm text-rose-700">
            {errors.topic}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-body"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Your message
        </label>
        <textarea
          id="contact-body"
          name="body"
          required
          rows={6}
          minLength={20}
          aria-invalid={Boolean(errors.body)}
          aria-describedby={errors.body ? "contact-body-error" : undefined}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900"
        />
        {errors.body && (
          <p id="contact-body-error" className="mt-1 text-sm text-rose-700">
            {errors.body}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center rounded-lg bg-brand-600 px-5 text-base font-medium text-white hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
