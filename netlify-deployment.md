# Deploying RMWC to Netlify

This guide provides instructions for deploying your RMWC (Rocky Mountain Wedding Consultants) website to Netlify.

## Prerequisites

- GitHub repository with your RMWC website code
- Netlify account

## Deployment Steps

### 1. Install Dependencies

Before deploying, make sure all dependencies are installed:

```bash
cd rmwc
npm install
```

### 2. Push to GitHub

If you haven't already, push your code to GitHub:

```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push
```

### 3. Connect to Netlify

1. Log in to your Netlify account: https://app.netlify.com/
2. Click "Add new site" -> "Import an existing project"
3. Connect to your GitHub account and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

### 4. Environment Variables

If your application requires environment variables, add them in the Netlify UI:
1. Go to Site settings > Build & deploy > Environment
2. Add your environment variables

### 5. Custom Domain (Optional)

To set up a custom domain:
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to set up your domain

## Troubleshooting

If you encounter issues with your Netlify deployment, try these steps:

### Build Failures

1. **Check Netlify build logs for specific errors**
   - Look for red error messages in the Netlify deployment logs
   
2. **Common Next.js build issues:**
   - Missing dependencies: Make sure all required packages are in your package.json
   - Environment variables: Check if required environment variables are set in Netlify
   - Memory limits: Large builds may exceed Netlify's memory limits

3. **Try local build first:**
   ```bash
   npm run build
   ```
   
4. **Specific fixes for common errors:**

   - **"Module not found" errors:**
     ```bash
     npm install --legacy-peer-deps
     ```
   
   - **Next.js version conflicts:**
     Make sure your @netlify/plugin-nextjs version is compatible with your Next.js version

   - **Image optimization errors:**
     Ensure `unoptimized: true` is set in the images config of next.config.js

### Deployment Issues

1. **Check for Netlify configuration conflicts:**
   - Review your netlify.toml file settings
   - Make sure build command and publish directory are correct

2. **Fix routing issues:**
   - Ensure your Next.js routes are properly configured
   - Add proper redirects in netlify.toml for client-side routing

3. **API routes not working:**
   - Make sure they're properly set up as Netlify functions
   - Check function logs in Netlify dashboard

### Debug Build Process

Run the included debug script locally to identify issues:

```bash
node netlify-build-debug.js
```

### Contact Netlify Support

If all else fails, reach out to Netlify support with your:
- Repository link
- Build logs
- Steps to reproduce the issue

## Local Testing

Test your Netlify deployment locally before pushing to GitHub:

```bash
npm install -g netlify-cli
netlify login
netlify build
netlify dev
``` 