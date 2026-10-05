# vish-karthikeyan.github.io

Personal website of Vish Karthikeyan, built with Jekyll and hosted on GitHub Pages.
Every change you commit to the `master` branch goes live automatically in about a minute.

## How to update the site

Almost everything lives in **plain-text data files**. You never need to touch HTML or CSS
for routine updates. The easiest way to edit is directly on GitHub: open the file, click the
pencil icon, make the change, and click **Commit changes**.

| I want to… | Edit this file | What to do |
|---|---|---|
| Change my bio | `index.md` | Edit the paragraphs below the `---` line. Links: `[text](address)`. |
| Change the tagline, roles line or affiliation cards | `index.md` | Edit the lines at the top (between the two `---` lines). |
| Add a LinkedIn post to **Updates** | `_data/updates.yml` | Add `- embed: "…"` at the **top** of the list (instructions in the file). |
| Add or edit a **research** project | `_data/research.yml` | Copy an existing item and edit it. |
| Add or edit a **discourse / teaching / service** entry | `_data/discourse.yml` | Copy an existing entry and edit it. |
| Add an **op-ed** | `_data/writing.yml` | Add a new entry at the **top** of the list. |
| Add **book recommendations** (hidden page) | `_data/reading.yml` | Follow the example in the file. |
| Replace my résumé | `resume.pdf` | Upload a new file with exactly the same name. |
| Change the navigation, email or social links | `_config.yml` | Edit the labelled settings. |

Every data file starts with a comment block explaining each field. Optional fields can simply
be left out.

### Adding images

Upload images to the matching folder under `assets/images/` (e.g. `assets/images/research/`)
and refer to them as `/assets/images/research/your-file.jpg`. A full web address
(`https://…`) also works, but images hosted on other websites can disappear or carry copyright
restrictions — uploading your own copy is safer.

Thumbnails are cropped to a 4:3 rectangle; wide images look best. Resize large photos to
around 800 pixels wide before uploading so pages load quickly.

### Three formatting rules for the `.yml` files

1. **Indentation matters.** Use spaces (never tabs) and line items up exactly as in the
   existing entries.
2. **Put text in double quotes** if it contains a colon (`:`) or starts with a special
   character. If the text itself contains a double quote, use curly quotes (“ ”) instead.
3. **Multi-paragraph text** goes after `description: |` on the following lines, indented,
   with a blank line between paragraphs.

If a change breaks the site, GitHub emails you and the old version stays live. Open the
repository's **Actions** tab to see the error, or simply revert the last commit.

## Previewing locally (optional)

Requires Ruby. From this folder:

```
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. (LinkedIn embeds only display on the live site or a local
server like this one, not when opening an HTML file directly.)

## Where things are

```
_config.yml          site settings, navigation, email, social links
index.md             home page: bio + tagline + affiliation cards
research.html        research page template      → content in _data/research.yml
discourse.html       discourse/teaching/service  → content in _data/discourse.yml
writing.html         writing page template       → content in _data/writing.yml
reading.html         hidden reading page          → content in _data/reading.yml
_layouts/            page skeletons (default, page, home)
_includes/           shared pieces (head, navigation bar, icons)
assets/css/site.css  all styling
assets/js/site.js    external-link handling and the Updates carousel buttons
assets/fonts/        self-hosted Latin Modern and TeX Gyre Pagella fonts
assets/images/       photos, logos, thumbnails
assets/projects/     report PDFs and posters
```

Old addresses (`/projects/`, `/teaching/`, `/blog/`) redirect to the new pages.
