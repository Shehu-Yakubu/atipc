import { useForm, ValidationError } from "@formspree/react";
import { Helmet } from "react-helmet";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xnngwreq");
  
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>ATIPC — Contact</title>
      </Helmet>

      <h1 className="text-3xl font-semibold mb-6">Contact ATIPC</h1>
      <p className="text-[var(--muted)] max-w-2xl">
        For inquiries, partnership opportunities, or to submit investment
        proposals, please contact us using the form below or email
        info@atipc.org.
      </p>

      <form className="mt-6 max-w-2xl" action={handleSubmit} method="POST">
        <label className="block">
          <span className="text-sm">Name</span>
          <input
            name="name"
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </label>
        <label className="block mt-4">
          <span className="text-sm">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <label className="block mt-4">
          <span className="text-sm">Message</span>
          <textarea
            name="message"
            required
            className="mt-1 block w-full border rounded px-3 py-2 h-32"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-[var(--brand)] text-white px-4 py-2 rounded"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-semibold">Office</h2>
        <p className="text-[var(--muted)]">Abuja, Nigeria • info@atipc.org</p>
      </div>
    </div>
  );
};
