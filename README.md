# Angeline Office static site

This is a single-page static rebuild for Angeline Office. It is designed to run on GitHub Pages or any static host.

## Files

- `index.html` - one-page lead generation site and Formspree-compatible intake form
- `styles.css` - Angeline Office brand system and responsive layout
- `script.js` - copyright year and post-submit success anchor handling
- `assets/angeline-office-logo.jpeg` - Angeline Office circular seal logo

## Replace before launch

1. Replace the Formspree placeholder action in `index.html`:

```html
action="https://formspree.io/f/REPLACE_WITH_FORM_ID"
```

2. Confirm the visible email address in the footer:

```html
drew@angelineoffice.com
```

The form redirects to `https://angelineoffice.com/#received` so the inline success message appears after a completed Formspree submission.
