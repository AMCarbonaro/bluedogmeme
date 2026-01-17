# Netlify Deployment Guide

## Quick Deploy Steps

1. **Push to Git Repository**
   - Create a new Git repository (GitHub, GitLab, or Bitbucket)
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - Blue Dog website"
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://www.netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect Next.js settings
   - The build command `npm run build` will be used automatically
   - Click "Deploy site"

3. **Verify Build Settings** (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** (handled by Next.js plugin - leave empty)
   - **Node version:** 18 (set in netlify.toml)

4. **Post-Deployment**
   - Your site will be live at `https://your-site-name.netlify.app`
   - Update the pump.fun link in Header/Hero components when ready
   - Add your Blue Dog image to `public/images/blue-dog-capitol.jpg`

## Files Ready for Deployment

- ✅ `netlify.toml` - Netlify configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `next.config.mjs` - Next.js configuration (ESLint disabled for builds)
- ✅ `.nvmrc` - Node version specification
- ✅ All source files in `app/` and `components/`

## Notes

- The site is configured as a single-page application with anchor link navigation
- All sections are on the homepage with smooth scrolling
- Build is configured to skip ESLint warnings (they don't affect functionality)
- The Next.js plugin will handle routing and static optimization automatically
