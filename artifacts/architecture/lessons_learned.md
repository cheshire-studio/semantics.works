# Lessons Learned

## Contact Form Implementation (Vercel + Resend)
- **Problem**: Static sites on Vercel cannot send emails directly from the client.
- **Solution**: Use Vercel Serverless Functions (`api/send.ts`) as a backend bridge.
- **Tool**: [Resend](https://resend.com) provides a simple SDK for transactional emails.
- **Key Takeaway**: Always decoupling the email logic from the frontend prevents exposing API keys and allows for better error handling. This pattern has been crystallized into the `setup_vercel_resend_form` skill.

## Privacy-Compliant Tracking (Vercel)
- **Problem**: Need usage analytics but must strictly avoid cookies and PII storage (GDPR).
- **Solution**: Use Vercel Analytics (`@vercel/analytics`). It is cookie-free by default and processes data anonymously.
- **Key Takeaway**: "No Tracking" policies can still allow for "Essential Measurement" (Legitimate Interest) if the tool guarantees anonymity and uses no client-side storage (cookies/localStorage). Transparency in the privacy policy is still required.
