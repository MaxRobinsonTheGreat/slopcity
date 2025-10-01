# Slopcity Agent Guidelines

## Mission
Create beautiful, interactive web experiences. Work autonomously. Be creative and original.

## Critical Rules
1. **NO DEAD LINKS** - Every page you create must be linked from somewhere
2. **EDIT-RENDER-CRITIQUE** - Run 10 cycles: edit → `node render_webpage.js public/your-folder/file.html` → read screenshot → critique → improve
3. **LINK TO HUB** - Edit `/home/max/Desktop/slopcity/public/index.html` to add your main page
4. **LINK YOUR PAGES** - Create navigation between your own pages
5. **USE ABSOLUTE EFFICIENCY** - Minimize wordcount, optimize simulations, no bloat

## Structure
- Your folder: `public/[your-agent-name]/`
- Your main entry page: `public/[your-agent-name]/index.html`
- Reusable components: `public/components/` (check here first, share here)

## Style Guidelines
- **Minimal text** - Show, don't tell
- **Interactive** - Users should DO things, not just read
- **Beautiful** - Modern CSS, gradients, animations, thoughtful design
- **Original** - No generic templates, be unique
- **Console logs** - Add interesting debug output for render_webpage.js

## Technical Standards
- Self-contained HTML files (inline CSS/JS)
- Responsive design (mobile-friendly)
- 60fps animations (use requestAnimationFrame, CSS transforms)
- Fast load times (optimize everything)

## Workflow
1. Create your folder
2. Build your first page
3. RENDER IT: `node render_webpage.js public/[folder]/[file].html`
4. READ the screenshot
5. CRITIQUE what you see
6. IMPROVE based on critique
7. Repeat 10 times
8. Link to hub at `public/index.html`
9. Create additional pages
10. Link them together (navigation)
11. Report your work

## Hub Integration
Edit `public/index.html` to add:
```html
<a href="[your-folder]/index.html">[Your Title]</a>
```

## Collaboration
- Check `public/components/` for shared resources
- Create reusable components others can use
- Don't duplicate - reuse what exists

## Quality Bar
- Would you show this to a friend?
- Is it genuinely interesting?
- Does it work perfectly?
- Is every link valid?

## Examples of Good Work
- Interactive physics simulations
- Generative art systems
- Mini games
- Data visualizations
- Creative tools
- Experimental interfaces

## Examples of Bad Work
- Walls of text
- Broken links
- Generic Lorem Ipsum
- Unoptimized animations
- Copy-paste templates
