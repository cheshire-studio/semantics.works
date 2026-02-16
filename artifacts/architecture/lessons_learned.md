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

## Professional Review Findings (2026-02-16)

### Missing CSS Design System

- **Problem**: `index.html` referenced `/index.css` but the file didn't exist. All styling relied on Tailwind CDN (bad for production).
- **Solution**: Created comprehensive `index.css` with design tokens, component patterns, accessibility utilities, and responsive breakpoints.
- **Key Takeaway**: A professional consultancy website must have a proper design system, not just CDN-loaded utilities. This demonstrates engineering rigor to potential clients.

### No Quality Gates

- **Problem**: Package.json had zero linting, formatting, or type-checking scripts. This violated our own git-workflow SOP which requires `npm run lint`, `npm run type-check`, and `npm run test` before commits.
- **Solution**: Added ESLint, Prettier, TypeScript strict mode, and validation scripts.
- **Key Takeaway**: "Practice what you preach." If you're selling data platform rigor, your own codebase must be a reference implementation. Missing quality gates undermine credibility.

### TypeScript Weak Configuration

- **Problem**: `tsconfig.json` had no strict mode, no `noUncheckedIndexedAccess`, no `noImplicitReturns`. This allows type-unsafe code.
- **Solution**: Enabled all strict TypeScript options for production-grade type safety.
- **Key Takeaway**: Strict TypeScript catches bugs at compile-time, not runtime. Always enable strict mode for professional projects.

### Accessibility Gaps

- **Problem**: No ARIA labels, no skip-to-content link, no keyboard navigation support, missing focus indicators.
- **Solution**: Added `aria-label`, `aria-current`, skip link, keyboard handlers (`onKeyDown`), and semantic HTML.
- **Key Takeaway**: Accessibility isn't optional. It's both a legal requirement (WCAG) and a quality signal. Use semantic HTML + ARIA where needed.

### Missing Documentation

- **Problem**: README was boilerplate from AI Studio. No `.env.example`, no setup instructions, no architecture docs.
- **Solution**: Created comprehensive README, `.env.example`, and content improvement plan.
- **Key Takeaway**: Documentation is part of the product. A professional project should be immediately understandable to new developers.

### ESLint Configuration for Modern React

- **Problem**: ESLint 9+ uses flat config format, not `.eslintrc`.
- **Solution**: Created `eslint.config.js` with TypeScript ESLint, React Hooks, and React Refresh plugins.
- **Key Takeaway**: Stay current with tooling changes. Flat config is the future of ESLint.

## Technical Debt Identified (Not Yet Fixed)

1. **No CI/CD pipeline** - Should add GitHub Actions for automated quality checks
2. **No error tracking** - Should integrate Sentry for production error monitoring
3. **Unoptimized images** - Project images should be WebP, not PNG (40-77KB → ~15KB)
4. **No lazy loading** - Below-fold images should lazy load
5. **Tailwind CDN in production** - Should use PostCSS build for smaller bundle
6. **No structured data** - Missing JSON-LD schema for SEO
7. **No sitemap/robots.txt** - Required for proper SEO
8. **No tests** - Should add Vitest for component testing

## Content Gaps Identified

See `artifacts/plans/content_improvements.md` for full details:

- Case studies lack quantifiable results (no metrics, no outcomes)
- Services lack deliverables and timelines (too abstract)
- No testimonials or social proof
- No team bios or credentials
- No blog or thought leadership content
- No downloadable resources (lead magnets)
- No pricing transparency
- No FAQ page
