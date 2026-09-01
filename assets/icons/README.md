# Icons

Site icons are currently inline SVGs embedded directly in each HTML page
(feature icons, footer social icons, form icons) so they inherit
`currentColor` and require no extra network requests.

If you'd rather manage icons as standalone files, place `.svg` assets here
and reference them with `<img src="assets/icons/your-icon.svg" alt="">` or
via an inline `<use>` reference.
