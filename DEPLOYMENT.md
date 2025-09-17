# Deployment Instructions for GitHub Pages

## Prerequisites
- GitHub account
- Your domain `codeynamics.com` from Hostinger

## Step 1: GitHub Repository Setup

1. **Create a new GitHub repository**
   - Name it `codeynamics-portfolio` (or any name you prefer)
   - Make it public
   - Don't initialize with README (we'll push existing code)

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/codeynamics-portfolio.git
   git push -u origin main
   ```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select "Deploy from a branch"
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

## Step 3: Configure Build Process

GitHub Pages doesn't support Vite builds by default. You need to add a GitHub Action:

1. Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

2. Update `vite.config.ts` to set the correct base path:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/codeynamics-portfolio/', // Replace with your repo name
  // ... rest of config
}));
```

## Step 4: Custom Domain Setup

1. **In GitHub Pages Settings:**
   - Go to your repository Settings > Pages
   - Under "Custom domain", enter: `codeynamics.com`
   - Check "Enforce HTTPS"

2. **In Hostinger DNS Settings:**
   - Login to your Hostinger account
   - Go to DNS management for `codeynamics.com`
   - Add these DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     
     Type: A
     Name: @
     Value: 185.199.109.153
     
     Type: A
     Name: @
     Value: 185.199.110.153
     
     Type: A
     Name: @
     Value: 185.199.111.153
     
     Type: CNAME
     Name: www
     Value: YOUR_USERNAME.github.io
     ```

3. **Create CNAME file:**
   - In your repository root, create a file named `CNAME`
   - Add your domain: `codeynamics.com`

## Step 5: Final Steps

1. **Wait for propagation** (up to 24 hours)
2. **Test your site** at `https://codeynamics.com`
3. **Verify SSL certificate** is working

## Updating Your Site

To update your portfolio:
1. Make changes locally
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. GitHub Actions will automatically build and deploy

## Troubleshooting

- **404 errors**: Make sure base path in `vite.config.ts` matches your repository name
- **DNS issues**: Double-check your Hostinger DNS settings
- **Build failures**: Check the Actions tab in your GitHub repository for error logs
- **HTTPS issues**: Ensure "Enforce HTTPS" is enabled in GitHub Pages settings

## Alternative: Direct Upload Method

If you prefer not to use GitHub Actions:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Push dist folder to gh-pages branch:**
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

3. **Set GitHub Pages to use gh-pages branch**

Your portfolio will be live at `https://codeynamics.com` once DNS propagates!