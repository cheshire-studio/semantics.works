# Implementation Plan - Privacy-Compliant Tracking

## Goal Description

Enable usage tracking and performance monitoring for the website in a way that strictly adheres to the commitments made in `components/Privacy.tsx`.

The current privacy policy states:

- **No Cookies** requiring consent are used.
- **No external tracking tools** that store PII (like Google Analytics) are used.
- The site is hosted on **Vercel**.

## User Review Required

> [!IMPORTANT]
> **Decision Point: Tooling vs. Custom Logging**
>
> **Option A: Vercel Analytics (Recommended)**
>
> - **Pros**: Zero-config, beautiful dashboards, auto-GDPR compliance (no PII), measures Web Vitals (speed).
> - **Cons**:
>   - **Hobby Plan (Free)**: Limited to 2,500 events/month, 1-month retention.
>   - **Pro Plan ($20/mo)**: includes 25,000 events, pay-as-you-go after.
>
> **Option B: "Basic Log File" / Custom Logging**
>
> - **Constraint**: Vercel is **serverless**, so we cannot "write to a file" on the server. The file system is read-only.
> - **Alternative**: We would need to send logs to an external service (e.g., Supabase, Axiom, or a custom API).
> - **Pros**: Full control, potentially cheaper if you have high volume but low storage needs.
> - **Cons**:
>   - **High Effort**: Requires building a custom API route to receive events, implementing IP hashing (for GDPR), and building a UI to actually _read_ the data.
>   - **Maintenance**: You become responsible for the privacy compliance implementation.
>
> **Recommendation**: Start with **Vercel Analytics (Hobby)**. If you hit the 2,500 events limit, we can re-evaluate. It is the minimal-effort, high-value solution.

## Proposed Changes (Assuming Vercel Analytics)

### [Dependencies]

- **Install**:
  - `@vercel/analytics`
  - `@vercel/speed-insights`

### [App Structure]

#### [MODIFY] [App.tsx](file:///Users/disco.tennis/15%20data.build/App.tsx)

- Import `Analytics` from `@vercel/analytics/react`.
- Import `SpeedInsights` from `@vercel/speed-insights/react`.
- Render these components within the `App` (or `main.tsx`) to enable data collection.

### [Content]

#### [MODIFY] [components/Privacy.tsx](file:///Users/disco.tennis/15%20data.build/components/Privacy.tsx)

- Update Section 2 (Hosting) to transparently mention Vercel Analytics.
- **Draft Text (German)**:
  > "Zur Verbesserung der Benutzerfreundlichkeit und technischen Stabilität nutzen wir 'Vercel Analytics'. Dieser Dienst verarbeitet Daten anonym und setzt keine Cookies. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO)."

## Verification Plan

### Automated Tests

- Run `npm run build` to ensure types and imports are correct.

### Manual Verification

- **Cookie Check**: Open Developer Tools -> Application -> Cookies. Verify that **no** cookies are set by the application.
- **Network Check**: Verify requests are being sent to `_vercel/insights`.
