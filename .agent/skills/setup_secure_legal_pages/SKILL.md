---
name: setup_secure_legal_pages
description: Hardens legal pages (Imprint, Privacy) with SEO protection (noindex), anti-spam measures (image obfuscation), and privacy compliance updates (e.g., Vercel Analytics).
---

# Instructions

1.  **Analyze** the project for active analytics or tracking services (e.g., Vercel Analytics, Speed Insights, Google Analytics).
    - Check `package.json` and `App.tsx` / root layout.

2.  **Verify** the existence of `Imprint` and `Privacy` components.
    - If missing, create them using the standard project layout.

3.  **Harden** the components (SEO & Anti-Spam):
    - **SEO**: Inject `<meta name="robots" content="noindex, nofollow" />` in a `useEffect` hook or Head component.
    - **Anti-Spam**: Identify email addresses and phone numbers.
      - _Recommendation_: Replace plain text with images (e.g., `/assets/contact_email.png`) to prevent scraping.
      - _Alternative_: Use simple JS obfuscation if images are not available.

4.  **Update Privacy Policy**:
    - Add clauses for any detected analytics services.
    - _Vercel Analytics Example_:
      ```tsx
      <p>
        <strong>Vercel Web Analytics</strong>
        <br />
        Zur Verbesserung der Benutzerfreundlichkeit und technischen Stabilität nutzen wir "Vercel
        Analytics". Dieser Dienst verarbeitet Daten anonym und setzt keine Cookies. Die Verarbeitung
        erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      ```

5.  **Review**:
    - Ask the user to confirm the content, especially the legal clauses and contact details.

# Examples

**BAD**:

- Plain text email: `welcome@semantics.works` (Easily scraped)
- Indexed legal pages (Dilutes SEO relevance)
- Missing analytics disclosure

**GOOD**:

- Email as Image: `<img src="/assets/email.png" alt="Contact Email" />`
- Noindex Tag: `document.head.appendChild(meta)` with `noindex`
- Specific clauses for `Vercel Analytics` in Privacy Policy.
