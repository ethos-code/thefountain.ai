# thefountain.ai

FOUNTAIN® — the world's most beautiful AI pen. Static site.

## Local preview

```sh
cd ~/Desktop/dev/thefountain.ai
python3 -m http.server 8000
# open http://localhost:8000
```

## Email signup

The signup form posts to Formspree if configured, otherwise falls back to a `mailto:j@mcginn.co` link that opens the visitor's mail client with their address pre-filled.

To enable Formspree (recommended for real traffic):

1. Create a free account at https://formspree.io and add a new form pointed at `j@mcginn.co`. Verify the destination email when prompted.
2. Copy the form ID (looks like `xyzabc12`) from the form's endpoint URL `https://formspree.io/f/xyzabc12`.
3. In `index.html`, replace `REPLACE_WITH_YOUR_FORM_ID` in the `<form action="...">` attribute with that ID.
4. Commit and push.

Until step 3 is done, the form gracefully falls back to `mailto:` — the site works either way.
