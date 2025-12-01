# DevOps Engineer Instructions: LernBoost (quirlequatsch)

## Deployment Overview

**Platform**: Vercel (Serverless Edge Network)
**Framework**: Next.js 16.0.4 (App Router)
**Production URL**: https://quirlequatsch.vercel.app
**Repository**: https://github.com/alexanderebel-hash/quirlequatsch.git
**Branch Strategy**: Git Flow (main = production)

---

## Infrastructure Stack

### Frontend Hosting
- **Vercel Edge Network**
- Global CDN with 100+ edge locations
- Automatic HTTPS
- Instant rollbacks
- Preview deployments for every push

### Backend Services
- **Supabase PostgreSQL**: Database + Auth + Real-time
- **Vercel Blob Storage**: Media file hosting (videos, podcasts, images)
- **No custom API server**: BaaS architecture

### Domain & DNS
- **Primary Domain**: quirlequatsch.vercel.app (Vercel subdomain)
- **Custom Domain**: Not configured (future enhancement)
- **SSL**: Automatic via Vercel (Let's Encrypt)

---

## Build Configuration

### vercel.json

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

### Build Settings

```json
{
  "Framework": "Next.js",
  "Build Command": "npm run build",
  "Output Directory": ".next",
  "Install Command": "npm install",
  "Development Command": "npm run dev"
}
```

### Package.json Scripts

```json
{
  "dev": "next dev",           // Local development server
  "build": "next build",       // Production build
  "start": "next start",       // Production server (not used on Vercel)
  "lint": "eslint"            // Linting
}
```

### Build Process

1. **Install Dependencies**: `npm install`
2. **TypeScript Compilation**: Next.js compiles `.ts/.tsx` files
3. **React Compiler**: Babel plugin optimizes React components
4. **Tailwind Processing**: PostCSS processes Tailwind CSS
5. **Static Generation**: Pages are pre-rendered where possible
6. **Edge Function Bundling**: API routes bundled for edge runtime
7. **Asset Optimization**: Images, fonts optimized
8. **Output**: `.next` directory with optimized bundles

### Build Time
- Average: 45-90 seconds
- Dependencies: 60-90 packages
- Output Size: ~5-10MB

---

## Environment Variables

### Current Configuration

| Variable | Type | Description | Secret? | Required? |
|----------|------|-------------|---------|-----------|
| `BLOB_READ_WRITE_TOKEN` | Server | Vercel Blob Storage access token | ✅ Yes | ✅ Yes |
| `NEXT_PUBLIC_SUPABASE_URL` | Public | Supabase project URL | ❌ No | ✅ Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public | Supabase anon/public key | ❌ No | ✅ Yes |
| `NEXT_PUBLIC_BIO_VIDEO_URL` | Public | Bio explanation video URL | ❌ No | ✅ Yes |
| `NEXT_PUBLIC_BIO_PODCAST_URL` | Public | Bio podcast audio URL | ❌ No | ✅ Yes |
| `NEXT_PUBLIC_FRANZOESISCH_VIDEO_URL` | Public | French video URL | ❌ No | ⚠️ Optional |
| `NEXT_PUBLIC_FRANZOESISCH_PODCAST_URL` | Public | French podcast URL | ❌ No | ⚠️ Optional |

### Environment Scope

```
Production  ✅  All variables required
Preview     ✅  All variables required (use same as prod or staging)
Development ✅  Use .env.local file
```

### Security Levels

**Public Variables** (`NEXT_PUBLIC_*`):
- Exposed to browser/client-side code
- Safe for public consumption
- Included in JavaScript bundles
- Can be seen in DevTools/Network tab

**Server-Only Variables**:
- Only accessible in API routes and server components
- Never exposed to client
- Example: `BLOB_READ_WRITE_TOKEN`

### Adding Environment Variables

#### Via Vercel Dashboard

1. Navigate to https://vercel.com/dashboard
2. Select project: `quirlequatsch`
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter key-value pair
6. Select environments (Production, Preview, Development)
7. Click **Save**
8. **Redeploy** to apply changes

#### Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Set variable
vercel env add VARIABLE_NAME

# Pull latest env vars
vercel env pull .env.local
```

#### Local Development

Create `.env.local` file:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Vercel Blob
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Media URLs
NEXT_PUBLIC_BIO_VIDEO_URL=https://...
NEXT_PUBLIC_BIO_PODCAST_URL=https://...
```

**Important**: Never commit `.env.local` to git (already in `.gitignore`)

---

## Deployment Pipeline

### Automatic Deployments

**Production Deployment** (main branch):
```
git push origin main
  ↓
GitHub webhook triggers Vercel
  ↓
Vercel clones repository
  ↓
Install dependencies (npm install)
  ↓
Run build (npm run build)
  ↓
Deploy to edge network
  ↓
Assign production URL
  ↓
Send deployment notification
```

**Preview Deployment** (any branch/PR):
```
git push origin feature-branch
  ↓
Vercel creates preview deployment
  ↓
Unique preview URL generated
  ↓
Comment added to PR with preview URL
```

### Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel

# Deploy specific branch
git checkout feature-branch
vercel
```

### Deployment Hooks

No custom deployment hooks configured. All handled by Vercel automatically.

### Rollback Strategy

#### Via Vercel Dashboard
1. Go to **Deployments** tab
2. Find previous successful deployment
3. Click **⋯** menu → **Promote to Production**
4. Confirm promotion

#### Via CLI
```bash
# List deployments
vercel ls

# Promote specific deployment
vercel promote <deployment-url>

# Instant rollback
vercel rollback
```

**Rollback Time**: ~30-60 seconds

---

## CI/CD Pipeline

### Current State
⚠️ **No CI/CD configured** (GitHub Actions, GitLab CI, etc.)

Deployment is handled entirely by Vercel's built-in system:
- Automatic deployment on push to main
- Preview deployments for PRs
- No separate testing pipeline

### Recommended CI/CD Enhancements

#### GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: Type check
        run: npx tsc --noEmit
      
      - name: Run tests
        run: npm test
      
      - name: Build check
        run: npm run build
```

#### Future Enhancements

- [ ] Add automated testing (Jest, Playwright)
- [ ] Add code quality checks (SonarCloud)
- [ ] Add security scanning (Snyk, Dependabot)
- [ ] Add lighthouse CI for performance
- [ ] Add visual regression testing

---

## Monitoring & Observability

### Current State
⚠️ **No monitoring configured**

### Recommended Monitoring Stack

#### 1. Vercel Analytics (Built-in)
```bash
# Enable in Vercel Dashboard
Settings → Analytics → Enable
```

**Metrics Tracked**:
- Page views
- Unique visitors
- Top pages
- Referrers
- Devices
- Browsers

#### 2. Error Tracking

**Recommended**: Sentry

```bash
npm install @sentry/nextjs

# sentry.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.VERCEL_ENV || 'development',
  tracesSampleRate: 1.0,
});
```

#### 3. Performance Monitoring

**Vercel Web Analytics**:
- Core Web Vitals
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Time to First Byte (TTFB)

#### 4. Logging

**Current**: Console logs (visible in Vercel Function Logs)

**Access Logs**:
```bash
# Via Vercel CLI
vercel logs [deployment-url]

# Real-time logs
vercel logs --follow
```

**Recommended**: Structured logging

```typescript
// lib/logger.ts
export const logger = {
  info: (message: string, meta?: any) => {
    console.log(JSON.stringify({ level: 'info', message, meta, timestamp: new Date() }));
  },
  error: (message: string, error?: Error, meta?: any) => {
    console.error(JSON.stringify({ 
      level: 'error', 
      message, 
      error: error?.message, 
      stack: error?.stack,
      meta,
      timestamp: new Date() 
    }));
  },
};
```

#### 5. Uptime Monitoring

**Recommended**: UptimeRobot or Vercel's built-in monitoring

---

## Database Management (Supabase)

### Supabase Dashboard Access
- URL: https://app.supabase.com
- Project: quirlequatsch (exact name TBD)

### Database Backups

**Automatic Backups** (Supabase-managed):
- Daily automatic backups
- 7-day retention (free tier)
- 30-day retention (pro tier)

**Manual Backup**:
```bash
# Via Supabase CLI
supabase db dump > backup.sql

# Restore
psql <connection-string> < backup.sql
```

### Database Migrations

**Current State**: ⚠️ No migration system

**Recommended**: Supabase Migrations

```bash
# Initialize
supabase init

# Create migration
supabase migration new add_achievements_table

# Edit: supabase/migrations/TIMESTAMP_add_achievements_table.sql

# Apply to local
supabase db push

# Apply to remote
supabase db push --project-ref <project-ref>
```

### Connection Pooling

Managed by Supabase:
- Built-in PgBouncer
- Automatic connection management
- No manual configuration needed

---

## Blob Storage Management

### Vercel Blob Storage

**Dashboard Access**: https://vercel.com/dashboard/stores

**Current Usage**:
- Bio videos: `/leni/videos/`
- Bio podcasts: `/leni/podcast/`
- Future: Avatar images, mascot images

### Uploading Files

#### Via Vercel Dashboard
1. Go to **Storage** tab
2. Select **Blob** store
3. Click **Upload**
4. Select file
5. Copy public URL

#### Via API (Future)
```typescript
import { put } from '@vercel/blob';

const blob = await put('path/file.mp4', file, {
  access: 'public',
  token: process.env.BLOB_READ_WRITE_TOKEN,
});

console.log(blob.url); // Public URL
```

### Storage Limits

**Free Tier**:
- 1 GB storage
- 10 GB bandwidth/month

**Pro Tier**:
- 100 GB storage
- 1 TB bandwidth/month

### CDN & Caching

- Automatic CDN distribution
- Aggressive caching headers
- Edge caching for fast delivery

---

## Security Best Practices

### Environment Variables

✅ **Do's**:
- Use `NEXT_PUBLIC_` prefix only for truly public data
- Store secrets in Vercel environment variables
- Never commit `.env.local` to git
- Rotate tokens regularly
- Use different keys for prod/staging

❌ **Don'ts**:
- Never expose service role keys as `NEXT_PUBLIC_`
- Don't hardcode secrets in code
- Don't share `.env.local` files
- Don't commit Supabase service role keys

### HTTPS & SSL

- ✅ Automatic HTTPS via Vercel
- ✅ TLS 1.3 support
- ✅ HSTS headers
- ✅ Automatic certificate renewal

### CORS Configuration

Currently handled by Vercel/Next.js defaults. No custom CORS needed.

### Rate Limiting

**Current**: None configured

**Recommended**: Add rate limiting middleware

```typescript
// middleware.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function middleware(request: Request) {
  const ip = request.headers.get("x-forwarded-for");
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return new Response("Too Many Requests", { status: 429 });
  }
}
```

---

## Deployment Checklist

### Pre-Deployment

- [ ] Code reviewed and approved
- [ ] Tests passing (when implemented)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] `.env.example` updated with new variables
- [ ] Documentation updated
- [ ] Database migrations prepared (if any)

### Deployment

- [ ] All environment variables set in Vercel
- [ ] Supabase connection tested
- [ ] Blob storage URLs accessible
- [ ] Build succeeds locally (`npm run build`)
- [ ] Push to main branch or merge PR
- [ ] Vercel deployment completes successfully
- [ ] Deployment preview URL works

### Post-Deployment

- [ ] Production URL loads correctly
- [ ] Check homepage functionality
- [ ] Test user flows (onboarding, learning activities)
- [ ] Verify media files load (videos, podcasts)
- [ ] Check browser console for errors
- [ ] Test on mobile devices
- [ ] Verify Supabase connection
- [ ] Monitor error logs for 24 hours
- [ ] Update team on deployment

### Rollback Plan

If deployment fails:
1. Check Vercel deployment logs
2. Identify error cause
3. Fix in code or revert commit
4. If critical, promote previous deployment
5. Communicate status to team

---

## Performance Optimization

### Vercel Edge Network

- **Global CDN**: Content served from nearest edge location
- **Edge Functions**: API routes run at the edge
- **Static Assets**: Aggressive caching (immutable)
- **Dynamic Content**: Smart caching strategies

### Next.js Optimizations

✅ **Enabled**:
- Automatic code splitting
- Image optimization
- Font optimization
- React Server Components
- React Compiler (automatic optimization)

❌ **Not Enabled**:
- ISR (Incremental Static Regeneration)
- On-Demand Revalidation

### Caching Strategy

```typescript
// Static pages (infinite cache)
export const revalidate = false;

// Dynamic pages (revalidate every hour)
export const revalidate = 3600;

// API routes
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
```

### Performance Metrics (Target)

```
Lighthouse Score: > 90
LCP: < 2.5s
FID: < 100ms
CLS: < 0.1
TTFB: < 600ms
```

---

## Troubleshooting Guide

### Build Failures

**Error**: `Module not found`
```bash
# Solution: Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error**: TypeScript errors
```bash
# Solution: Fix type errors
npx tsc --noEmit
# Fix reported errors
```

**Error**: Out of memory during build
```bash
# Solution: Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Runtime Errors

**Issue**: Environment variables not working

1. Check variable names (exact match)
2. Verify `NEXT_PUBLIC_` prefix for client variables
3. Redeploy after adding variables
4. Clear browser cache

**Issue**: Media files not loading

1. Check CORS settings
2. Verify blob storage URLs are public
3. Check network tab in DevTools
4. Verify environment variables are set

**Issue**: Supabase connection failed

1. Check `NEXT_PUBLIC_SUPABASE_URL`
2. Check `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Verify Supabase project is active
4. Check Supabase dashboard for issues

### Performance Issues

**Issue**: Slow page loads

1. Check Network tab waterfall
2. Analyze bundle size (`npm run build -- --analyze`)
3. Check image sizes/formats
4. Review dynamic imports
5. Check Vercel analytics for bottlenecks

**Issue**: High memory usage

1. Review component memoization
2. Check for memory leaks
3. Analyze React DevTools Profiler
4. Review Zustand store size

---

## Monitoring Dashboards

### Vercel Dashboard

**Key Metrics to Monitor**:
- Deployment success rate
- Build duration trend
- Function execution time
- Bandwidth usage
- Storage usage
- Error rate

**Access**: https://vercel.com/dashboard → quirlequatsch

### Supabase Dashboard

**Key Metrics to Monitor**:
- Database size
- Active connections
- Query performance
- API requests
- Storage usage

**Access**: https://app.supabase.com/project/_/settings

---

## Disaster Recovery

### Backup Strategy

**Code**:
- ✅ Git repository (GitHub)
- ✅ Automatic Vercel deployment history
- ✅ Can roll back to any commit

**Database**:
- ✅ Daily automatic backups (Supabase)
- ⚠️ Manual exports recommended monthly
- ✅ Point-in-time recovery (pro tier)

**Media Assets**:
- ✅ Vercel Blob Storage (durable)
- ⚠️ No automatic external backups
- 📝 Recommended: External backup solution

### Recovery Procedures

**Code Recovery**:
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or promote previous Vercel deployment
vercel promote <deployment-url>
```

**Database Recovery**:
```bash
# Via Supabase Dashboard
Dashboard → Database → Backups → Restore
```

**Full System Recovery**:
1. Restore database from backup
2. Deploy last known good commit
3. Verify all environment variables
4. Test critical user flows
5. Monitor for issues

### Recovery Time Objectives (RTO)

- **Code rollback**: < 5 minutes
- **Database restore**: < 30 minutes
- **Full system recovery**: < 1 hour

---

## Scaling Considerations

### Current Limits

**Vercel Free Tier**:
- 100 GB bandwidth/month
- 100 serverless function executions/day
- 6,000 build minutes/month
- 1 concurrent build

**Supabase Free Tier**:
- 500 MB database
- 1 GB bandwidth
- 2 GB storage
- 50,000 monthly active users

### When to Scale

**Upgrade Vercel**:
- > 80 GB bandwidth/month
- Need more concurrent builds
- Need more build minutes
- Need better analytics

**Upgrade Supabase**:
- > 400 MB database size
- Need connection pooling
- Need point-in-time recovery
- Need 24/7 support

### Scaling Strategy

1. Monitor usage metrics weekly
2. Set up alerts at 80% capacity
3. Plan upgrades 2 weeks in advance
4. Test on staging environment first
5. Schedule during low-traffic periods

---

## Do's ✅

1. **Always test builds locally** before deploying
2. **Use environment variables** for all configuration
3. **Document all environment variables** in `.env.example`
4. **Monitor deployment logs** after each deploy
5. **Keep dependencies updated** regularly
6. **Use Vercel preview deployments** for testing
7. **Set up monitoring** as soon as possible
8. **Back up database** before major changes
9. **Test rollback procedure** regularly
10. **Keep Vercel CLI installed** for quick operations
11. **Use git tags** for production releases
12. **Document deployment procedures** as they evolve
13. **Monitor performance metrics** weekly
14. **Set up alerts** for critical errors
15. **Review Vercel analytics** monthly

---

## Don'ts ❌

1. **Don't commit `.env.local`** to version control
2. **Don't expose secrets** as `NEXT_PUBLIC_` variables
3. **Don't skip testing** preview deployments
4. **Don't deploy on Fridays** (unless necessary)
5. **Don't ignore build warnings** - fix them
6. **Don't skip rollback testing** - practice it
7. **Don't hardcode URLs** - use environment variables
8. **Don't delete old deployments** prematurely
9. **Don't ignore performance degradation** trends
10. **Don't skip security updates** for dependencies
11. **Don't modify production database** directly
12. **Don't share production credentials** in chat
13. **Don't deploy without backup** of database
14. **Don't ignore error monitoring** - set it up
15. **Don't scale prematurely** - monitor first

---

## Future DevOps Enhancements

### Short Term (1-3 months)

- [ ] Set up Sentry for error tracking
- [ ] Implement automated testing
- [ ] Add GitHub Actions for CI
- [ ] Configure custom domain
- [ ] Set up staging environment
- [ ] Add performance monitoring
- [ ] Implement database migrations
- [ ] Set up uptime monitoring

### Medium Term (3-6 months)

- [ ] Add E2E testing (Playwright)
- [ ] Implement feature flags
- [ ] Add blue-green deployments
- [ ] Set up A/B testing infrastructure
- [ ] Implement CDN caching strategy
- [ ] Add security scanning
- [ ] Set up backup automation
- [ ] Add deployment notifications (Slack)

### Long Term (6-12 months)

- [ ] Multi-region deployment
- [ ] Advanced caching strategies
- [ ] Real-time monitoring dashboard
- [ ] Automated performance optimization
- [ ] Infrastructure as Code (Terraform)
- [ ] Kubernetes migration (if needed)
- [ ] Advanced security hardening
- [ ] Disaster recovery drills

---

## Resources

### Documentation Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel Blob Storage](https://vercel.com/docs/storage/vercel-blob)

### Support Channels

- Vercel Support: https://vercel.com/help
- Supabase Discord: https://discord.supabase.com
- Next.js Discord: https://discord.gg/nextjs

### Tools

- Vercel CLI: `npm i -g vercel`
- Supabase CLI: `npm i -g supabase`
- GitHub CLI: `brew install gh`

---

## Conclusion

The LernBoost DevOps infrastructure is built on modern serverless architecture using Vercel and Supabase, providing automatic scaling, global distribution, and minimal operational overhead. The current setup prioritizes developer experience and rapid deployment while maintaining good security practices. Future enhancements should focus on monitoring, testing automation, and disaster recovery procedures as the application scales.

**Key Principle**: Ship fast, monitor closely, iterate continuously.
