# Osman Mohammed Zamin - Portfolio

A personal portfolio for Osman Mohammed Zamin, an AI Engineer. Built with Next.js, TypeScript, and Tailwind CSS, it includes an interactive AI workflow explorer, an expandable career timeline, and a TradBot case study.

The workflow explorer is an illustration, not a live AI service. It runs locally in the browser with no API keys or backend. Career and project disclosures use native HTML details, and the design respects reduced-motion preferences.

## Run locally

Use Node.js 24 LTS (verified with 24.21.0) and npm (updated to 12.1.0 on this machine). Install the locked project dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually [http://localhost:3000](http://localhost:3000). Next.js automatically refreshes the page when source files change.

On Windows, restart terminals opened before Node/npm installation or updates. The standard installation is `C:\Program Files\nodejs`; `Get-Command node,npm,npx` shows which executables PowerShell resolves. This project does not override Vercel settings.

## Edit portfolio content

Profile details, experience, education, technical skills, contact information, project entries and typed `workflowStages` live in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file when content changes; the components in `src/components/` control how the content is displayed.

## Add a project

Add an object to the `projects` array in `src/data/portfolio.ts`. The required fields are `title`, `slug`, `summary`, `status`, and `technologies`. Status can be `planned`, `in-progress`, `completed`, or `prototype`. Optional fields include `year`, `subtitle`, `sourceNote`, `problem`, `approach`, `results` (implemented capabilities), `architecture` (label/detail pairs), `repositoryUrl`, and `demoUrl`.

```ts
{
  title: "Project name",
  slug: "project-name",
  summary: "A short, factual description.",
  status: "in-progress",
  technologies: ["Python"],
}
```

Only add results and links when they are verified. Missing optional fields are not rendered.

The projects section and its navigation link are hidden when the array is empty. TradBot is labeled **2022 · Prototype** and described from [its source](https://github.com/Osman0810/TradBot/tree/b3ff72414a10aff231fa10d6ffdfafec6d134d52). Its exchange connectors, strategy logic, SQLite workspace storage and Tkinter interface were inspected; the trading bot was not executed. No profitability, production-readiness or current API compatibility claims are made.

## Replace the resume

Replace `public/Osman_SE.pdf` with the updated PDF and keep the same filename. Files in `public/` are served from the site root, so the resume remains available at `/Osman_SE.pdf`.

## Check the project

```bash
npm run lint
npm run build
```

`npm run build` creates and validates the optimized production version of the site.

For browser checks, verify all four workflow stages, keyboard activation, the initially expanded latest role, the TradBot disclosure, the résumé download and contact links. Check layouts at desktop, tablet and narrow phone widths, and enable reduced motion to confirm smooth scrolling and transitions are disabled.
