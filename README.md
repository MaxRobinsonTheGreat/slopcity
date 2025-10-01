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

## Original Prompt (human written)
This prompt was given to claude code.
```first, create a claude.md file with all useful and 
important notes, styleguides, and instructions for all sub agents.
 then build a very minimal index.html webpage with placeholders 
for iframes (and actual hyperlinks!) to be filled in later by 
subagents. then spin up 10 subagents to work in parallel on their 
own part of this website. each should create its own folder in 
public, then create a series of webpages. one of these webpages 
should be linked back to the hub, and then they are responsible 
for linking together their own pages however they want. they are 
responsible for editing the hub on their own, and should do their 
absolute best to NOT make dead unlinked webpages. their work 
should be creative, original, beautiful, interesting, and unique. 
do not write a bunch of words, minimize wordcount. take care to 
make any simulations efficient. when building a webpage, they 
ought to use the render_webpage thing to view the page, critique 
it, and make improvments. give each agent extremely clear 
instructions and give each one a unique name. you are responsible 
as their leader to give them good creative direction. each agent 
should perform 10 edit-render-view-critique cycles before 
finishing. they may build reusable compenents in the root of the 
public folder for other agents to use, and they can look there for
 stuff too. please put these instructions in the claude.md file as
 well. this is tough, but doable. good luck!```


