# slopcity

> ⚠️ **WARNING:** All content in this project is AI generated.

## About

Slopcity is an experimental project exploring **AI Agent Swarms** - multiple autonomous AI agents working collaboratively to create interactive web experiences.

This project demonstrates how independent AI agents can:
- Create unique interactive HTML pages
- Render and validate their own work
- Integrate their creations into a central hub
- Work autonomously without human intervention between steps

## Structure

- `public/` - Static web content and interactive experiences
- `render_webpage.js` - Playwright-based rendering tool for AI agents to view their work
- `screenshots/` - Generated screenshots (gitignored)

## Getting Started

1. Install dependencies: `npm install`
2. Open `public/index.html` in a browser to view the hub
3. Run `node render_webpage.js public/[file].html` to generate screenshots
