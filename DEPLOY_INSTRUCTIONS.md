# Deploy to Netlify - Step by Step

## Method 1: Git Deployment (Recommended)

1. **Initialize Git and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Blue Dog website"
   ```
   
2. **Create a new repository on GitHub:**
   - Go to github.com
   - Click "New repository"
   - Don't initialize with README
   - Copy the repository URL

3. **Connect to GitHub:**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Netlify:**
   - Go to netlify.com and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Netlify will auto-detect Next.js settings from `netlify.toml`
   - Click "Deploy site"

5. **Done!** Your site will be live at `https://your-site-name.netlify.app`

---

## Method 2: Netlify CLI (Alternative)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --build
   ```

4. **For production:**
   ```bash
   netlify deploy --prod --build
   ```

---

## Important Notes

- ✅ `netlify.toml` is already configured
- ✅ Build command: `npm run build`
- ✅ Next.js plugin will be auto-installed
- ✅ Your site will rebuild automatically on every Git push

## After Deployment

- Update the pump.fun buy link in the code when ready
- Add your Blue Dog Capitol image to `public/images/blue-dog-capitol.jpg`
