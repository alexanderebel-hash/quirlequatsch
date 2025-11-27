# 🚀 Vercel Environment Variables Setup

## Required Environment Variables

For the application to work correctly in production, you need to configure the following environment variables in your Vercel project dashboard.

---

## 📋 Variables to Add

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `BLOB_READ_WRITE_TOKEN` | `vercel_blob_rw_wE1ptd8ELoMH5S95_q2v55Rp0yfbP9X5jbK4uTGJo1RKSqN` | Token for Vercel Blob Storage access |
| `NEXT_PUBLIC_BIO_VIDEO_URL` | `https://we1ptd8elomh5s95.public.blob.vercel-storage.com/leni/videos/Pro-Eu.mp4` | URL for the Bio explanation video |
| `NEXT_PUBLIC_BIO_PODCAST_URL` | `https://we1ptd8elomh5s95.public.blob.vercel-storage.com/leni/podcast/Prokaryoten_Eukaryoten_Zwei_Lebensstrategien_im_Vergleich.m4a` | URL for the Bio podcast |

---

## 🔧 How to Add Environment Variables in Vercel

### Step 1: Open Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **quirlequatsch**

### Step 2: Navigate to Settings
1. Click on **Settings** (top navigation)
2. Select **Environment Variables** from the left sidebar

### Step 3: Add Each Variable
For each variable in the table above:

1. **Add New Variable**
2. **Key**: Enter the variable name (e.g., `BLOB_READ_WRITE_TOKEN`)
3. **Value**: Enter the corresponding value from the table
4. **Environments**: Select all three:
   - ✅ **Production**
   - ✅ **Preview**
   - ✅ **Development**
5. Click **Save**

### Step 4: Redeploy
After adding all variables:
1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **⋯** menu → **Redeploy**
4. Confirm the redeployment

---

## ✅ Verification Checklist

After setup, verify that:

- [ ] All 3 environment variables are added in Vercel Dashboard
- [ ] Each variable is enabled for Production, Preview, and Development
- [ ] Application has been redeployed
- [ ] Video player works on `/leni/bio` page
- [ ] Podcast player works on `/leni/bio` page

---

## 🎬 Expected Result

After successful setup, visiting [https://quirlequatsch.vercel.app/leni/bio](https://quirlequatsch.vercel.app/leni/bio) should show:

```
┌─────────────────────────────────┐
│  🔬 Zellen-Trainer              │
│                                 │
│  🎬 Erklär-Video                │
│  ┌───────────────────────────┐  │
│  │  ▶️ [Video Player]        │  │
│  │  Pro- & Eukaryoten        │  │
│  └───────────────────────────┘  │
│                                 │
│  🎧 Podcast                     │
│  ┌───────────────────────────┐  │
│  │ ▶️ ────●──────── 5:23     │  │
│  │ Zwei Lebensstrategien...  │  │
│  └───────────────────────────┘  │
│                                 │
│  📋 Was kommt dran?             │
│  🎯 Übungen                     │
└─────────────────────────────────┘
```

---

## 🔍 Troubleshooting

### Video/Podcast Not Loading

1. **Check Environment Variables**
   - Verify all variables are correctly set in Vercel Dashboard
   - Ensure no typos in variable names or values

2. **Clear Browser Cache**
   ```bash
   # In browser DevTools:
   Right-click → Inspect → Application → Clear Storage
   ```

3. **Check Browser Console**
   - Open DevTools (F12)
   - Look for any CORS or network errors
   - Verify the media URLs are accessible

4. **Redeploy**
   - Sometimes a fresh deployment resolves issues
   - Vercel Dashboard → Deployments → Redeploy

### Variables Not Taking Effect

- Environment variables are only applied on new builds
- Always redeploy after adding/changing variables
- For local development, restart your dev server after changing `.env.local`

---

## 📝 Notes

- `NEXT_PUBLIC_*` prefixed variables are exposed to the browser
- The `BLOB_READ_WRITE_TOKEN` is server-side only (no `NEXT_PUBLIC_` prefix)
- Media files are hosted on Vercel Blob Storage
- URLs are permanent and can be used directly

---

## 🆘 Need Help?

If you encounter issues:
1. Check the [Vercel Documentation](https://vercel.com/docs/concepts/projects/environment-variables)
2. Verify blob storage is accessible
3. Ensure your Vercel plan supports blob storage
