---
title: "Building This Portfolio with Claude Code and Astro"
description: "A behind-the-scenes look at how I built my portfolio website using AI-assisted development with Claude Code, Astro, and Tailwind CSS."
date: 2026-04-22
tags: ["Astro", "Tailwind CSS", "Claude Code", "Web Development"]
---

This portfolio site was built almost entirely through a conversation with Claude Code. Here's how it went.

## The Stack

- **Astro** — Static site generator with zero JS by default
- **Tailwind CSS v4** — Utility-first styling with the new Vite plugin
- **TypeScript** — Type-safe data layer for all profile information
- **GitHub Pages** — Free hosting with automatic deployment via GitHub Actions

## The Process

Instead of manually scaffolding the project, setting up configs, and writing boilerplate, I described what I wanted:

> "I want a professional, minimalist Software Engineer portfolio. Dark mode, Vercel/Linear aesthetic, emerald accents, Inter font."

From there, Claude Code:

1. Scraped my LinkedIn profile for experience data
2. Fetched my GitHub repos via the API
3. Initialized the Astro project with all dependencies
4. Built every component — Hero, Experience timeline, Skills bento grid, Certifications, Projects, Contact
5. Set up the GitHub Actions deployment workflow

The entire initial build took under an hour of conversation.

## Key Technical Decisions

### Centralized Data Layer

All personal data lives in a single `src/data/profile.ts` file. When I change jobs, add a certification, or update my tech stack, I edit one file. Every component imports from it.

### Build-Time GitHub API Fetching

The Projects section fetches repos from the GitHub API at build time, not on every page visit. This means zero client-side JavaScript and no API rate limit concerns.

### Image Optimization

Astro's built-in `<Image>` component automatically converts my profile photo to WebP — from 110KB to 8KB. That's a 93% reduction with no visible quality loss.

## What I Learned

The biggest takeaway: AI-assisted development isn't about generating code mindlessly. It's about having a conversation with a tool that understands context. I described my vision, provided my data, and iterated on the result — just like working with a colleague.

The future of software development is collaborative, and the collaborator might be an AI.
