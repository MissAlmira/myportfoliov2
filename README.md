# Almira R. Bogayan - Portfolio Website

A responsive, multi-page portfolio for GitHub Pages. Built with HTML, CSS, and vanilla JavaScript; no build tools or backend are required.

## Pages

- `index.html` - Home
- `about.html` - About and career timeline
- `expertise.html` - Skills and workflow
- `case-studies.html` - Fictional email support case studies
- `ai-evaluation.html` - H2H / SxS evaluation and transcription demonstrations
- `beyond-work.html` - Personal interests and photo gallery
- `resume.html` - Resume overview and download link
- `contact.html` - Contact information

## Preview locally

Open `index.html` in a browser. For the closest match to GitHub Pages, you can also use VS Code's Live Server extension.

## Add Almira's actual profile photo

The site currently uses `assets/images/profile-placeholder.svg` as a clearly labeled placeholder; it is **not a photograph of Almira**.

1. Add an approved professional photo to `assets/images/` (recommended: `profile-photo.jpg`, portrait orientation, at least 800 px tall).
2. In every HTML file, replace `assets/images/profile-placeholder.svg` with `assets/images/profile-photo.jpg`.
3. The header photo/name and the larger home-page portrait are links to `index.html`, so both return visitors to Home.
4. Keep the photo professional and use a photo Almira has approved for public use.

## Add the resume PDF

The supplied resume has been converted to PDF and included at `assets/Almira-Bogayan-Resume.pdf`. Review the PDF before publishing to confirm that the formatting and personal details are correct.

## Social sharing thumbnail (Messenger, LinkedIn, etc.)

A custom 1200 × 630 px preview image is included at `assets/images/social-preview.png`. Open each HTML file and replace these placeholder URLs in the `<head>` with the actual public GitHub Pages URL:

- `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/assets/images/social-preview.png` in `og:image` and `twitter:image`
- `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` in `og:url`

For a user-site repository named `YOUR-USERNAME.github.io`, the URL usually does not include a repository subpath. For a project repository, include the repository name in the URL.

After deployment, check the homepage URL in LinkedIn Post Inspector or Meta Sharing Debugger to refresh the cached link preview. Some messaging apps cache previews, so the new thumbnail may not appear immediately. Social preview cards are controlled by the receiving platform and cannot be guaranteed for every app.

## GitHub Pages publishing

1. Create a GitHub repository.
2. Upload the **contents** of this folder (not the ZIP itself) to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Wait for the deployment and open the published URL.
5. Replace the placeholder social URLs in all HTML files with that URL, commit the changes, and wait for deployment again.

## Visual and accessibility notes

- Nature-inspired palette: forest green, blue-green, sage, cream, and muted botanical tones.
- Responsive navigation and layouts for phones, iPhones, tablets, laptops, and desktops.
- Reduced-motion preferences are respected.
- The PUP seal is used beside the education credential. Source: [Wikimedia Commons - Polytechnic University of the Philippines seal](https://commons.wikimedia.org/wiki/File:Polytechnic_University_of_the_Philippines.svg). The page uses the Wikimedia-hosted image; it needs internet access to load.
- The AI evaluation and email examples are explicitly illustrative, not real client cases or confidential work.

## Before publishing

- Replace the profile placeholder with Almira's approved photo.
- Add the real resume PDF.
- Confirm any project dates marked “to be confirmed.”
- Replace the placeholder GitHub Pages URLs in social metadata.
- Check all contact details and public disclosures with Almira.


## Photography gallery

A dedicated `photography.html` page is included. To add images, upload the files to `assets/images/photography/`, then list each filename in `assets/images/photography/photography.json`. Example:

```json
{
  "photos": [
    { "src": "nature.jpg", "alt": "Sunlight through green leaves", "caption": "Morning light" },
    { "src": "street-photo.png", "alt": "A quiet street scene", "caption": "A quiet afternoon" }
  ]
}
```

When the manifest is empty, the gallery is hidden and its navigation link is hidden. GitHub Pages is static hosting, so it cannot reliably detect new files in a folder without a manifest or an external API.

The portfolio copy avoids em dashes. The LinkedIn profile is linked at https://www.linkedin.com/in/almirabogayan/. Before launch, replace `YOUR-USERNAME` and `YOUR-REPOSITORY` in the social preview metadata with the actual GitHub Pages address.
