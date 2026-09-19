# Portfolio site

Plain HTML/CSS/JS, no build step. Home page and both project case-study pages
(`projects/stretch.html`, `projects/wave-maze.html`) are built.

Each project card links two places: **Case study** (the styled page in this
site) and **Repo** (a separate documentation-style GitHub repo — see
`../repos/` alongside this folder, delivered separately since those are
meant to become their own repos, not part of this one).

## Deploy on GitHub Pages

1. Create a repo named `<your-github-username>.github.io`.
2. Push the contents of this folder to its `main` branch (the files, not this
   folder itself — `index.html` should sit at the repo root).
3. In the repo's Settings → Pages, source should already default to the
   `main` branch / root — GitHub serves it automatically at
   `https://<your-username>.github.io`.
4. Give it a minute or two after each push for the live site to update.

## Before you publish — placeholders to replace

- [ ] `index.html`, `projects/stretch.html`, `projects/wave-maze.html`: swap
      every `YOUR-PROFILE` (sidebar social links, and the
      "Repo" / "Full write-up on GitHub" links on each project) for your
      real ones — including once you've actually created the
      `stretch-writeup` and `wave-maze-writeup` repos from the `../repos/`
      folder.
- [ ] `assets/Henrey_Hu_Resume.pdf`: drop your actual resume PDF in at this
      path (the Download Resume button links here).
- [ ] `assets/gifs/stretch-placeholder.svg` and `wavemaze-placeholder.svg`:
      replace with real looping GIFs (`stretch.gif`, `wave-maze.gif`) and
      update the two `<img src>` paths in `index.html` to match.
- [ ] Double check the Google Data Analytics cert year in the timeline —
      it's a placeholder (2026).

## Notes

- Dark/light theme follows the visitor's system preference and can be
  toggled with the button top-right; the choice isn't saved between visits
  by design (no localStorage).
- The two "Systems & Demos" and "Data & ML" sections are intentionally
  built as empty/planned stub cards — fill them in as those side projects
  get built, same visual slot.
