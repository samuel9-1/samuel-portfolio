Portfolio Website

A personal portfolio site by Rentapalli Samuel. It is a single self-contained file (portfolio.html) with no build step and no dependencies beyond Google Fonts.

Features
Hero name whose letters thicken as the cursor moves near them (disabled when the visitor prefers reduced motion)
Project grid with category filters and cards that expand in place
Light and dark themes: follows the system setting, with a manual toggle that remembers the choice
Contact form that opens the visitor's email app with the message filled in
Responsive layout, visible keyboard focus, and semantic HTML
Run it

Open portfolio.html in any browser. To host it, upload the file to any static host (GitHub Pages, Netlify, Vercel) and rename it index.html.

Make it yours

Everything you need to edit is inside portfolio.html:

What	Where
Page title	<title> in the <head>
Name in the hero	The string "Alex Rivera" in the script (also in the aria-label on #name)
Intro text	The paragraph inside <header class="hero">
Projects	The projects array at the top of the script: t title, c category, d description, a and b thumbnail gradient colours
About text and tools	The #about section
Contact email	The mailto: address in the form's submit handler (currently you@example.com)
Colours	The CSS variables at the top of the <style> block (light and dark sets)

Replace all placeholder content before publishing. Only list projects, links and credentials that are real.

Project structure
portfolio.html   the whole site: HTML, CSS and JavaScript
README.md        this file
