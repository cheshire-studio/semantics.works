---
name: setup_vercel_resend_form
description: Implements a serverless contact form using Resend on Vercel.
---

# Instructions

Use this skill when the user needs a contact form backend on a Vercel-hosted project without a dedicated server.

## 1. Prerequisites

- Project must be hosted on Vercel.
- User must have a Resend account and API Key.

## 2. Install Dependencies

```bash
npm install resend
```

## 3. Create Serverless Function

Create `api/send.ts` (or `.js`) in the root (for Vercel) or `app/api/send/route.ts` (for Next.js App Router).

### Example (`api/send.ts` for Standard/Vite Projects on Vercel)

```ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: Request) {
  if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  try {
    const { name, email, message } = await request.json();

    // Validate
    if (!name || !email || !message) {
      return new Response('Missing fields', { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['YOUR_EMAIL@DOMAIN.COM'], // Replace this
      reply_to: email,
      subject: `New Inquiry from ${name}`,
      html: `<p>${message}</p>`,
    });

    if (error) throw error;

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
```

## 4. Frontend Integration

Verify the frontend `fetch` call points to `/api/send`.

```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });
  // Handle success/error
};
```

## 5. Environment Variables

Remind the user to add `RESEND_API_KEY` to Vercel Environment Variables.
