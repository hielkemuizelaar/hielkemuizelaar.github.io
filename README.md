# Dutch Clinical NLP Workshop 2027

Refreshed Jekyll website for Leiden University’s workshop on 5 February 2027.

## Editing the website

- `_data/workshop.yml`: organiser names, venue label, contact email, registration URL and abstract submission URL. Leave URLs empty until ready; buttons are hidden automatically.
- `index.html`: homepage introduction and announcements.
- `abstracts.html`: submission guidelines and deadlines.
- `registration.html`: fees, deadline and attendance information.
- `programme.html`: timetable, keynote and accepted contributions.
- `venue.html`: address, travel and accessibility.
- `organisers.html`: affiliations, contact and sponsors.
- `previous-editions.html`: archive links.
- `code-of-conduct.html`: approved policy and reporting contact.
- `assets/workshop.css`: colours, typography and responsive layout.
- `_layouts/workshop.html`: shared header, navigation and footer.

Search for `[` or “to be” to find visible placeholders. Do not publish registration until the approved code of conduct and contact details are supplied.

The homepage wording also contains the confirmed date; update it and the shared layout if the date changes.

## Preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. Check both desktop and mobile widths.

## Publish

Merge the reviewed branch into the branch selected under GitHub Settings → Pages. Check the existing Pages publishing source before merging. The old CLIN files remain in git but are excluded from the new Jekyll build; `_site` is generated output and should not be edited or used as an old deployment source.

For a custom domain, configure it in Pages settings and update DNS at the domain provider. Update `url` in `_config.yml` to the final domain.
