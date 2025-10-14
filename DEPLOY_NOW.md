# 🚀 30-MINUTE DEPLOYMENT GUIDE

Your portfolio is ready to go live! Follow these steps:

## ⚡ FASTEST METHOD: Vercel (15 minutes)

### Step 1: Push to GitHub (5 minutes)
```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit: Demarick Webb-Rivera Portfolio"

# Create GitHub repo and push
# Go to github.com → New Repository → "WebbPortfolio"
git remote add origin https://github.com/WebbOfCode/WebbPortfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel (3 minutes)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click "New Project"
4. Import your `WebbPortfolio` repository
5. Click "Deploy" (Vercel auto-detects Next.js)
6. **DONE!** Your site is live at `https://yourapp.vercel.app`

### Step 3: Custom Domain (Optional - 5 minutes)
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain (if you have one)
3. Follow DNS setup instructions

## 🌐 ALTERNATIVE METHODS

### Option B: Netlify (20 minutes)
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag/drop your `out` folder
4. Live instantly!

### Option C: GitHub Pages (25 minutes)
1. Add to `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   }
   ```
2. Build: `npm run build`
3. Push to `gh-pages` branch
4. Enable GitHub Pages in repo settings

## 🔧 PRE-DEPLOYMENT CHECKLIST

✅ Build successful (`npm run build` works)
✅ All files in place:
   - `public/logo dwr com.png` (your logo)
   - `public/resumewebb-1.docx` (your resume)
✅ Contact form configured (EmailJS IDs in code)
✅ Personal info updated (phone, email, GitHub)

## 🎯 RECOMMENDED: Vercel Deployment

**Why Vercel?**
- ✅ Made by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free tier (perfect for portfolios)
- ✅ Auto-deploys on Git push

**Your live URL will be:**
`https://webb-portfolio-[random].vercel.app`

You can customize this in Vercel settings!

## 🚀 GO LIVE NOW!

1. **Push to GitHub** (5 min)
2. **Deploy on Vercel** (3 min)
3. **Share your live portfolio** ✨

**Total time: 8 minutes to live website!**