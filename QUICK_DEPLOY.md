# Quick Deploy to Netlify

## ⚠️ Note: Next.js needs Git deployment (not drag-and-drop)

## Fastest Method:

### Step 1: Create GitHub Repo
1. Go to github.com → Click "New repository"
2. Name it (e.g., "bluedog-website")
3. Don't check any boxes, just click "Create repository"
4. Copy the repo URL (looks like: `https://github.com/yourname/bluedog-website.git`)

### Step 2: Push Your Code
Run these commands in your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <paste-your-github-repo-url-here>
git push -u origin main
```

### Step 3: Deploy on Netlify
1. Go to netlify.com → Sign in
2. Click "Add new site" → "Import an existing project"
3. Click "Deploy with GitHub"
4. Authorize Netlify
5. Select your repository
6. Netlify auto-detects Next.js from `netlify.toml` ✅
7. Click "Deploy site"

### Done! 🎉
Your site will be live in 2-3 minutes at `https://your-site-name.netlify.app`

---

## Your Build Settings (Auto-detected):
- Build command: `npm run build`
- Publish directory: (handled by Next.js plugin)
- Node version: 18
