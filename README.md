# SEMANTICS.WORKS

Professional data platform consultancy specializing in semantic architecture for high-growth eCommerce and agile SMEs.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd semantics.works

# Copy environment variables
cp .env.example .env.local

# Add your API keys to .env.local
# - GEMINI_API_KEY: Get from https://aistudio.google.com/app/apikey
# - RESEND_API_KEY: Get from https://resend.com/api-keys

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run validate` - Run all quality checks (types + lint + format)

## 🏗️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS Design System
- **Email**: Resend (via Vercel Serverless Functions)
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel
- **AI**: Google Gemini (optional features)

## 📁 Project Structure

```
.
├── components/          # React components
│   ├── Navigation.tsx
│   ├── WorkCard.tsx
│   ├── ContactForm.tsx
│   └── ...
├── api/                # Vercel serverless functions
│   └── send.ts         # Contact form email handler
├── public/             # Static assets
│   └── assets/         # Images, icons
├── artifacts/          # Documentation & plans
│   ├── architecture/   # Architecture decisions
│   └── plans/          # Implementation plans
├── App.tsx             # Main application component
├── index.tsx           # Entry point
├── index.css           # Design system & global styles
├── constants.ts        # Site content & configuration
├── types.ts            # TypeScript type definitions
└── vite.config.ts      # Vite configuration
```

## 🎨 Design System

The project uses a custom CSS design system defined in `index.css`:

- **Design Tokens**: Colors, typography, spacing scales
- **Component Patterns**: Buttons, cards, forms
- **Accessibility**: Focus states, skip links, ARIA labels
- **Responsive**: Mobile-first approach

## 🔒 Environment Variables

Required environment variables (see `.env.example`):

- `GEMINI_API_KEY` - Google Gemini API key (for AI features)
- `RESEND_API_KEY` - Resend API key (for contact form emails)

**Security Note**: Never commit `.env.local` to version control.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Manual Build

```bash
npm run build
# Output in ./dist directory
```

## 🧪 Quality Gates

Before committing, ensure all quality checks pass:

```bash
npm run validate
```

This runs:

1. TypeScript type checking (strict mode)
2. ESLint (zero warnings policy)
3. Prettier formatting check

## 📝 Git Workflow

Follow the project's semantic commit convention:

```
feat(scope): description     # New features
fix(scope): description      # Bug fixes
docs(scope): description     # Documentation only
refactor(scope): description # Code refactoring
chore(scope): description    # Build/tooling changes
```

See `.agent/workflows/git-workflow.md` for detailed workflow.

## 🎯 Content Management

Site content is managed in `constants.ts`:

- `WORKS` - Case studies/portfolio items
- `SERVICES` - Service offerings
- `CLIENT_LOGOS` - Client logo marquee

## 🔧 Troubleshooting

### TypeScript Errors

```bash
npm run type-check
```

### Linting Issues

```bash
npm run lint:fix
```

### Port Already in Use

```bash
# Change port in vite.config.ts
server: { port: 3001 }
```

## 📚 Documentation

- [Content Improvements Plan](./artifacts/plans/content_improvements.md)
- [Architecture Lessons Learned](./artifacts/architecture/lessons_learned.md)
- [Implementation Plans](./artifacts/plans/)

## 🤝 Contributing

1. Create a feature branch
2. Make changes
3. Run `npm run validate`
4. Commit with semantic message
5. Push and create PR

## 📄 License

Private - All Rights Reserved

## 🔗 Links

- **Website**: https://semantics.works
- **Contact**: welcome@semantics.works

---

**Built with precision. Deployed with confidence.**
