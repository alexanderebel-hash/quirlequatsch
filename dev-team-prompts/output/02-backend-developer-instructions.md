# Backend Developer Instructions: LernBoost (quirlequatsch)

## Architecture Overview

**Backend Pattern**: Backend as a Service (BaaS) with Supabase
**Deployment**: Vercel Edge Network (Serverless)
**No Traditional API Layer**: Direct client-to-Supabase communication

This project uses a modern BaaS architecture without custom API routes. All backend functionality is handled through:
1. **Supabase** - Database, Authentication, Real-time subscriptions
2. **Vercel Blob Storage** - Media file storage (videos, podcasts, images)
3. **Client-side data access** - Direct queries from React components

---

## Tech Stack

### Backend Services
- **Supabase**: 2.86.0 (PostgreSQL + Auth + Real-time)
- **Vercel Blob Storage**: Media file hosting
- **Next.js**: 16.0.4 (Edge Runtime for static + dynamic pages)

### Environment Variables
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# Media URLs (Vercel Blob)
NEXT_PUBLIC_BIO_VIDEO_URL=https://...blob.vercel-storage.com/leni/videos/...
NEXT_PUBLIC_BIO_PODCAST_URL=https://...blob.vercel-storage.com/leni/podcast/...
NEXT_PUBLIC_FRANZOESISCH_VIDEO_URL=...
NEXT_PUBLIC_FRANZOESISCH_PODCAST_URL=...
```

---

## Database Architecture

### Supabase Client Setup

```typescript
// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
```

### Database Schema

```typescript
// lib/supabase/types.ts
export type Database = {
  public: {
    Tables: {
      families: {
        Row: {
          id: string;
          email: string;
          parent_name: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      children: {
        Row: {
          id: string;
          family_id: string | null;
          name: string;
          age: number | null;
          grade: number | null;
          avatar_url: string | null;
          mascot_type: string | null;
          mascot_name: string | null;
          total_xp: number;
          current_level: number;
          created_at: string;
          updated_at: string;
        };
      };
      learning_profiles: {
        Row: {
          id: string;
          child_id: string | null;
          favorite_activities: string[];
          motivation_type: string | null;
          problem_solving_style: string | null;
          processing_preference: string | null;
          social_preference: string | null;
          favorite_subjects: string[];
          attention_span: string | null;
          feedback_need: string | null;
          challenge_preference: string | null;
          preferred_activity_types: string[];
          personal_details: string | null;
          created_at: string;
          updated_at: string;
        };
      };
      mascots: {
        Row: {
          id: string;
          child_id: string | null;
          name: string;
          element: string | null;
          size: string | null;
          personality: string | null;
          special_feature: string | null;
          custom_detail: string | null;
          image_url: string | null;
          image_prompt: string | null;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
};
```

### Table Relationships
```
families (1) ──→ (N) children
children (1) ──→ (1) learning_profiles
children (1) ──→ (1) mascots
```

---

## Data Access Patterns

### 1. Query Patterns

#### Single Record Query
```typescript
const { data, error } = await supabase
  .from('children')
  .select('*')
  .eq('id', childId)
  .single();

if (error) throw error;
return data;
```

#### Query with Relationships
```typescript
const { data, error } = await supabase
  .from('children')
  .select(`
    *,
    learning_profiles(*),
    mascots(*)
  `)
  .eq('family_id', familyId);

if (error) throw error;
return data;
```

#### Filtered Query
```typescript
const { data, error } = await supabase
  .from('children')
  .select('*')
  .eq('family_id', familyId)
  .gte('age', 10)
  .order('created_at', { ascending: false });
```

### 2. Insert Patterns

#### Single Insert
```typescript
const { data, error } = await supabase
  .from('children')
  .insert({
    family_id: familyId,
    name: 'Leni',
    age: 10,
    grade: 5,
  })
  .select()
  .single();

if (error) throw error;
return data;
```

#### Insert with Return
```typescript
const { data, error } = await supabase
  .from('learning_profiles')
  .insert({
    child_id: childId,
    favorite_subjects: ['math', 'science'],
    motivation_type: 'intrinsic',
    favorite_activities: ['quiz', 'memory'],
  })
  .select()
  .single();
```

### 3. Update Patterns

#### Simple Update
```typescript
const { data, error } = await supabase
  .from('children')
  .update({ 
    total_xp: newXP,
    current_level: newLevel 
  })
  .eq('id', childId)
  .select()
  .single();
```

#### Conditional Update
```typescript
const { data, error } = await supabase
  .from('children')
  .update({ avatar_url: newAvatarUrl })
  .eq('id', childId)
  .is('avatar_url', null) // Only update if currently null
  .select();
```

### 4. Delete Pattern

```typescript
const { error } = await supabase
  .from('learning_profiles')
  .delete()
  .eq('id', profileId);

if (error) throw error;
```

---

## Error Handling Patterns

### Standard Error Handling

```typescript
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

export function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const { data: result, error: supabaseError } = await supabase
          .from('children')
          .select('*');

        if (supabaseError) throw supabaseError;

        setData(result);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Lädt...</div>;
  if (error) return <div className="text-danger">Fehler: {error}</div>;
  if (!data) return <div>Keine Daten gefunden</div>;

  return <div>{/* Render data */}</div>;
}
```

### Error Types to Handle

```typescript
// Supabase error types
interface SupabaseError {
  message: string;
  details: string;
  hint: string;
  code: string;
}

// Common error codes:
// 23505 - Unique violation
// 23503 - Foreign key violation
// 42501 - Insufficient privilege
// PGRST116 - No rows found (single query)
```

---

## Authentication Patterns

### Current State
⚠️ **Authentication is NOT yet implemented** in this project.

### Planned Implementation (Supabase Auth)

When implementing authentication, follow this pattern:

```typescript
// lib/supabase/auth.ts
import { supabase } from './client';

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
```

### Protected Routes Pattern

```typescript
// middleware.ts (when auth is implemented)
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protect routes that require authentication
  if (!session && req.nextUrl.pathname.startsWith('/app')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/app/:path*', '/onboarding/:path*'],
};
```

---

## Data Validation

### Current State
⚠️ **No validation library is currently integrated** (Zod not installed)

### Recommended Validation Pattern (with Zod)

```typescript
// lib/validation/schemas.ts
import { z } from 'zod';

export const childSchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich').max(50),
  age: z.number().int().min(5).max(18).optional(),
  grade: z.number().int().min(1).max(13).optional(),
  family_id: z.string().uuid(),
});

export const learningProfileSchema = z.object({
  child_id: z.string().uuid(),
  favorite_subjects: z.array(z.string()).min(1),
  motivation_type: z.enum(['intrinsic', 'extrinsic', 'mixed']).optional(),
  favorite_activities: z.array(z.string()),
  attention_span: z.enum(['short', 'medium', 'long']).optional(),
});

// Usage
export type ChildInput = z.infer<typeof childSchema>;
export type LearningProfileInput = z.infer<typeof learningProfileSchema>;
```

### Validation in Components

```typescript
'use client';

import { childSchema } from '@/lib/validation/schemas';

function CreateChildForm() {
  const handleSubmit = async (formData: FormData) => {
    try {
      // Parse and validate
      const input = childSchema.parse({
        name: formData.get('name'),
        age: Number(formData.get('age')),
        grade: Number(formData.get('grade')),
        family_id: familyId,
      });

      // Insert into database
      const { data, error } = await supabase
        .from('children')
        .insert(input)
        .select()
        .single();

      if (error) throw error;

      // Success handling
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Handle validation errors
        console.error('Validation errors:', err.errors);
      } else {
        // Handle database errors
        console.error('Database error:', err);
      }
    }
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}
```

---

## Media Storage (Vercel Blob)

### Current Setup

Media files are stored in Vercel Blob Storage with public URLs configured in environment variables.

```typescript
// Accessing media URLs
const videoUrl = process.env.NEXT_PUBLIC_BIO_VIDEO_URL;
const podcastUrl = process.env.NEXT_PUBLIC_BIO_PODCAST_URL;

// Usage in components
<video src={videoUrl} controls>
  <source src={videoUrl} type="video/mp4" />
</video>

<audio src={podcastUrl} controls />
```

### File Upload Pattern (for future implementation)

```typescript
// lib/storage/upload.ts
import { put } from '@vercel/blob';

export async function uploadFile(file: File, pathname: string) {
  const blob = await put(pathname, file, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return blob.url;
}

// Usage example
const file = event.target.files[0];
const url = await uploadFile(file, `avatars/${childId}/${file.name}`);

// Update database with new URL
await supabase
  .from('children')
  .update({ avatar_url: url })
  .eq('id', childId);
```

---

## Performance Optimization

### 1. Query Optimization

```typescript
// ✅ GOOD: Select only needed columns
const { data } = await supabase
  .from('children')
  .select('id, name, total_xp, current_level')
  .eq('family_id', familyId);

// ❌ AVOID: Select all columns when not needed
const { data } = await supabase
  .from('children')
  .select('*')
  .eq('family_id', familyId);
```

### 2. Pagination

```typescript
const PAGE_SIZE = 20;

const { data, error, count } = await supabase
  .from('children')
  .select('*', { count: 'exact' })
  .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)
  .order('created_at', { ascending: false });
```

### 3. Real-time Subscriptions (when needed)

```typescript
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export function LiveData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Subscribe to changes
    const channel = supabase
      .channel('children-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'children',
          filter: `family_id=eq.${familyId}`,
        },
        (payload) => {
          console.log('Change received!', payload);
          // Update local state
        }
      )
      .subscribe();

    // Cleanup
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return <div>{/* render data */}</div>;
}
```

---

## Security Best Practices

### 1. Row Level Security (RLS)

⚠️ **Critical**: Configure RLS policies in Supabase dashboard

```sql
-- Example RLS policies to implement

-- Families: Users can only read their own family
CREATE POLICY "Users can view own family" ON families
  FOR SELECT USING (auth.uid() = user_id);

-- Children: Users can only access children in their family
CREATE POLICY "Users can view own children" ON children
  FOR SELECT USING (
    family_id IN (
      SELECT id FROM families WHERE user_id = auth.uid()
    )
  );

-- Insert policy
CREATE POLICY "Users can create children" ON children
  FOR INSERT WITH CHECK (
    family_id IN (
      SELECT id FROM families WHERE user_id = auth.uid()
    )
  );

-- Update policy
CREATE POLICY "Users can update own children" ON children
  FOR UPDATE USING (
    family_id IN (
      SELECT id FROM families WHERE user_id = auth.uid()
    )
  );
```

### 2. Environment Variable Security

```typescript
// ✅ GOOD: Use NEXT_PUBLIC_ only for client-safe values
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=... // This is safe, it's the anon key

// ❌ NEVER expose service role keys
SUPABASE_SERVICE_ROLE_KEY=... // Server-only, never NEXT_PUBLIC_
```

### 3. Input Sanitization

```typescript
// Always validate and sanitize user input
import DOMPurify from 'isomorphic-dompurify';

function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [] 
  });
}

// Usage
const safeName = sanitizeInput(userInput);
```

### 4. API Rate Limiting

Supabase has built-in rate limiting, but consider client-side throttling:

```typescript
import { throttle } from 'lodash';

// Throttle expensive operations
const updateProgress = throttle(async (childId, xp) => {
  await supabase
    .from('children')
    .update({ total_xp: xp })
    .eq('id', childId);
}, 1000); // Max once per second
```

---

## Database Migration Patterns

### Schema Changes

When modifying the database schema:

1. **Use Supabase Dashboard or SQL Editor**
2. **Version control your migrations**
3. **Update TypeScript types**

```sql
-- Example migration: Add new column
ALTER TABLE children 
ADD COLUMN streak_days INTEGER DEFAULT 0;

-- Update RLS policies if needed
-- Regenerate types
```

### Type Generation

After schema changes, regenerate TypeScript types:

```bash
npx supabase gen types typescript --project-id your-project-id > lib/supabase/types.ts
```

---

## Testing Patterns

### 1. Mock Supabase Client

```typescript
// __mocks__/supabase/client.ts
export const supabase = {
  from: jest.fn(() => ({
    select: jest.fn().mockResolvedValue({ data: [], error: null }),
    insert: jest.fn().mockResolvedValue({ data: {}, error: null }),
    update: jest.fn().mockResolvedValue({ data: {}, error: null }),
    delete: jest.fn().mockResolvedValue({ error: null }),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn().mockReturnThis(),
  })),
};
```

### 2. Integration Tests

```typescript
// tests/integration/children.test.ts
import { supabase } from '@/lib/supabase/client';

describe('Children CRUD', () => {
  test('should create a child', async () => {
    const { data, error } = await supabase
      .from('children')
      .insert({
        name: 'Test Child',
        family_id: 'test-family-id',
      })
      .select()
      .single();

    expect(error).toBeNull();
    expect(data).toHaveProperty('id');
    expect(data.name).toBe('Test Child');
  });
});
```

---

## Monitoring & Logging

### 1. Supabase Dashboard Monitoring

Monitor through Supabase dashboard:
- Query performance
- Database size
- API usage
- Error logs

### 2. Client-Side Error Logging

```typescript
// lib/logger.ts
export function logError(error: Error, context?: Record<string, any>) {
  console.error('Error:', {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
  });

  // In production, send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Sentry, LogRocket, etc.
  }
}

// Usage
try {
  await supabase.from('children').insert(data);
} catch (error) {
  logError(error as Error, { operation: 'create_child', data });
  throw error;
}
```

---

## Do's ✅

1. **Always handle errors** from Supabase queries
2. **Use TypeScript types** from lib/supabase/types.ts
3. **Implement RLS policies** for all tables
4. **Validate input** before database operations
5. **Use .select()** after insert/update to get returned data
6. **Check for error** before accessing data
7. **Use .single()** when expecting one record
8. **Use environment variables** for all credentials
9. **Log errors** with context for debugging
10. **Test database operations** in development first
11. **Use transactions** for multi-table operations
12. **Optimize queries** - select only needed columns
13. **Add indexes** for frequently queried columns
14. **Version control** database migrations
15. **Monitor query performance** in Supabase dashboard

---

## Don'ts ❌

1. **Don't expose service role keys** in client code
2. **Don't skip error handling** - always check for errors
3. **Don't use SELECT*** - be specific about columns
4. **Don't forget RLS policies** - security first
5. **Don't store sensitive data** unencrypted
6. **Don't make unnecessary queries** - batch when possible
7. **Don't ignore TypeScript types** - use generated types
8. **Don't skip validation** - validate all user input
9. **Don't use raw SQL** unless absolutely necessary
10. **Don't forget to clean up** real-time subscriptions
11. **Don't commit .env files** to version control
12. **Don't create N+1 queries** - use joins/relationships
13. **Don't skip indexes** on foreign keys
14. **Don't ignore database limits** - implement pagination
15. **Don't test in production** - use separate environments

---

## Common Tasks & Solutions

### Task 1: Add New Table

```sql
-- 1. Create table in Supabase
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  earned_at TIMESTAMP DEFAULT NOW(),
  xp_reward INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 2. Add RLS policies
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own achievements" ON achievements
  FOR SELECT USING (
    child_id IN (
      SELECT id FROM children WHERE family_id IN (
        SELECT id FROM families WHERE user_id = auth.uid()
      )
    )
  );

-- 3. Regenerate TypeScript types
-- 4. Use in application
```

### Task 2: Complex Query with Multiple Joins

```typescript
const { data, error } = await supabase
  .from('children')
  .select(`
    id,
    name,
    total_xp,
    learning_profiles (
      favorite_subjects,
      motivation_type
    ),
    mascots (
      name,
      image_url
    ),
    achievements (
      title,
      earned_at
    )
  `)
  .eq('family_id', familyId)
  .order('created_at', { ascending: false });
```

### Task 3: Batch Insert

```typescript
const children = [
  { name: 'Leni', age: 10, family_id: familyId },
  { name: 'Lilly', age: 8, family_id: familyId },
  { name: 'Lenny', age: 12, family_id: familyId },
];

const { data, error } = await supabase
  .from('children')
  .insert(children)
  .select();
```

### Task 4: Upsert (Insert or Update)

```typescript
const { data, error } = await supabase
  .from('learning_profiles')
  .upsert({
    child_id: childId,
    favorite_subjects: ['math', 'science'],
    motivation_type: 'intrinsic',
  }, {
    onConflict: 'child_id', // Unique constraint
  })
  .select()
  .single();
```

---

## Project-Specific Context

### Current Architecture
- **No custom API routes** - pure BaaS with Supabase
- **Client-side data fetching** - all queries from React components
- **No authentication yet** - planned for future
- **Static learning content** - stored in /lib/data/*.ts files
- **Media files** - Vercel Blob Storage with public URLs

### Data Flow
1. User interacts with UI (React component)
2. Component calls Supabase client directly
3. Supabase handles query/mutation
4. Component receives response and updates UI
5. XP/progress updates stored in both Zustand (client) and Supabase (persistent)

### Future Enhancements Needed
- [ ] Implement Supabase Authentication
- [ ] Add RLS policies to all tables
- [ ] Integrate Zod for validation
- [ ] Add server-side API routes for sensitive operations
- [ ] Implement real-time features for collaborative learning
- [ ] Add database migrations version control
- [ ] Set up automated backups
- [ ] Implement rate limiting middleware

---

## Resources

- [Supabase JavaScript Client Docs](https://supabase.com/docs/reference/javascript)
- [Supabase Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Vercel Blob Storage Docs](https://vercel.com/docs/storage/vercel-blob)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Supabase Auth Helpers (Next.js)](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
