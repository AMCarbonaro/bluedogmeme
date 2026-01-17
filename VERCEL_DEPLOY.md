# Deploy to Vercel - 2 Easy Methods

## Method 1: Git Integration (Recommended - 2 minutes)

1. **Go to vercel.com** → Sign in with GitHub
2. **Click "Add New Project"**
3. **Import your repository:**
   - Select `AMCarbonaro/bluedogmeme`
   - Vercel auto-detects Next.js ✅
4. **Deploy Settings (auto-detected):**
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)
5. **Click "Deploy"**

🎉 **Done!** Your site will be live in ~1 minute at `https://bluedogmeme.vercel.app`

---

## Method 2: Drag & Drop (Alternative)

1. **Build your project locally:**
   ```bash
   npm run build
   ```

2. **Go to vercel.com** → Sign in
3. **Click "Add New Project"** → **"Deploy" tab**
4. **Drag your project folder** onto the deploy area
   - Make sure you've run `npm run build` first
   - Vercel will detect Next.js automatically

---

## What Happens Next:

✅ **Auto-deploys on every Git push** (with Method 1)
✅ **Free SSL certificate** (HTTPS)
✅ **Global CDN** for fast loading
✅ **Preview deployments** for every branch/PR

## Your Repository:
https://github.com/AMCarbonaro/bluedogmeme

## After Deployment:

- Your site will be live at: `https://bluedogmeme.vercel.app` (or custom domain)
- Update the pump.fun buy link when ready
- Add your Blue Dog image to `public/images/blue-dog-capitol.jpg`
