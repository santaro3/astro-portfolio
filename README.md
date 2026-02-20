# Simple Astro Portfolio

This is a simple portfolio website built with [Astro](https://astro.build).

## Project Structure

- `src/pages/index.astro`: The main portfolio page. Edit this file to add your own content.
- `astro.config.mjs`: Configuration file. **You must update this with your GitHub Pages URL.**

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```

## Configuration

Open `astro.config.mjs` and update the `site` and `base` options:

- `site`: Your GitHub Pages URL (e.g., `https://username.github.io`).
- `base`: Your repository name (e.g., `/Portfolio`). If you are using a user site (`username.github.io`), set this to `/`.

## Deployment to GitHub Pages (No GitHub Actions)

Since you are not using GitHub Actions, you need to manually build and deploy the `dist` folder to the `gh-pages` branch.

### Option 1: Using `gh-pages` package (Recommended)

1.  Install the package:
    ```bash
    npm install --save-dev gh-pages
    ```
2.  Add a deploy script to `package.json`:
    ```json
    "scripts": {
      "deploy": "astro build && gh-pages -d dist"
    }
    ```
3.  Run the deploy script:
    ```bash
    npm run deploy
    ```

### Option 2: Manual Git Deployment

1.  Build the project:
    ```bash
    npm run build
    ```
2.  This creates a `dist` folder.
3.  Run the following commands (Git Bash or similar):
    ```bash
    git add dist -f
    git commit -m "deployment"
    git subtree push --prefix dist origin gh-pages
    ```
    *Note: You might need to remove `dist` from `.gitignore` temporarily or use `-f` to force add it.*

    **Alternative Manual Method (if subtree fails):**
    ```bash
    cd dist
    git init
    git checkout -b gh-pages
    git add -A
    git commit -m "deploy"
    git push -f https://github.com/<USERNAME>/<REPO>.git gh-pages
    cd ..
    ```
