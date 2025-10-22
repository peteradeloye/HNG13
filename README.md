# HNG13 — Profile Card (refactor)

This repository contains a small static profile card site. I refactored file and folder names to remove spaces and improve consistency.

What changed
- Moved `Profile card/*` files into `profile-card/`.
- Renamed `profile card.css` to `profile-card.css` and placed it at `profile-card/css/profile-card.css`.
- Moved JS to `profile-card/js/index.js` and updated references.
- Updated root `index.html` to point to `profile-card/*` files and added descriptive alt text for the avatar.

How to preview
1. Open `index.html` in your browser (double-click or use your editor's Live Preview).
2. From the root you can navigate to `profile-card/about.html` and `profile-card/contact.html`.

Notes
- I removed the original files that used spaces in their names to avoid duplication. If you prefer to keep them, restore from version control.
- No behavior changes were introduced beyond path and small accessibility fixes.

If you'd like, I can:
- Serve the site with a simple static server (I can add a dev-server script to package.json).
- Add basic tests or linting.
