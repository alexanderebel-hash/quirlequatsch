# Database Engineer Instructions: LernBoost (quirlequatsch)

## Schema Overview

**Database**: PostgreSQL (via Supabase)
**Total Tables**: 4 core tables
**Key Entities**: Families, Children, Learning Profiles, Mascots
**ID Strategy**: UUID (Primary Keys)
**Timestamp Strategy**: ISO 8601 strings (created_at, updated_at)

---

## Database Architecture

### Platform
- **Supabase PostgreSQL**: Version 15+
- **Extensions**: uuid-ossp (for UUID generation)
- **Connection Pooling**: Managed by Supabase
- **Backup Strategy**: Automatic daily backups (Supabase managed)

### Schema: `public`

All tables reside in the `public` schema.

---

## Table Definitions

### 1. `families`

**Purpose**: Stores family/household information for parent accounts

```sql
CREATE TABLE families (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  parent_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Columns**:
- `id` (UUID, PK): Unique family identifier
- `email` (TEXT, UNIQUE, NOT NULL): Parent's email address
- `parent_name` (TEXT, NULL): Parent's name (optional)
- `created_at` (TIMESTAMPTZ): Record creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

**Relationships**:
- One-to-Many with `children`

**Indexes**:
```sql
-- Recommended indexes
CREATE INDEX idx_families_email ON families(email);
CREATE INDEX idx_families_created_at ON families(created_at DESC);
```

---

### 2. `children`

**Purpose**: Stores individual child profiles within a family

```sql
CREATE TABLE children (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  age INTEGER CHECK (age >= 5 AND age <= 18),
  grade INTEGER CHECK (grade >= 1 AND grade <= 13),
  avatar_url TEXT,
  mascot_type TEXT,
  mascot_name TEXT,
  total_xp INTEGER DEFAULT 0,
  current_level INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Columns**:
- `id` (UUID, PK): Unique child identifier
- `family_id` (UUID, FK): Reference to families table
- `name` (TEXT, NOT NULL): Child's name
- `age` (INTEGER): Child's age (5-18)
- `grade` (INTEGER): School grade (1-13)
- `avatar_url` (TEXT): URL to child's avatar image
- `mascot_type` (TEXT): Type of mascot chosen
- `mascot_name` (TEXT): Name given to mascot
- `total_xp` (INTEGER): Total experience points earned
- `current_level` (INTEGER): Current level (derived from XP)
- `created_at` (TIMESTAMPTZ): Record creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

**Relationships**:
- Many-to-One with `families`
- One-to-One with `learning_profiles`
- One-to-One with `mascots`

**Indexes**:
```sql
-- Recommended indexes
CREATE INDEX idx_children_family_id ON children(family_id);
CREATE INDEX idx_children_total_xp ON children(total_xp DESC);
CREATE INDEX idx_children_current_level ON children(current_level DESC);
CREATE INDEX idx_children_created_at ON children(created_at DESC);

-- Composite index for leaderboard queries
CREATE INDEX idx_children_family_xp ON children(family_id, total_xp DESC);
```

**Constraints**:
```sql
ALTER TABLE children 
  ADD CONSTRAINT fk_children_family 
  FOREIGN KEY (family_id) 
  REFERENCES families(id) 
  ON DELETE CASCADE;

ALTER TABLE children 
  ADD CONSTRAINT chk_children_age 
  CHECK (age >= 5 AND age <= 18);

ALTER TABLE children 
  ADD CONSTRAINT chk_children_grade 
  CHECK (grade >= 1 AND grade <= 13);

ALTER TABLE children 
  ADD CONSTRAINT chk_children_xp 
  CHECK (total_xp >= 0);

ALTER TABLE children 
  ADD CONSTRAINT chk_children_level 
  CHECK (current_level >= 1);
```

---

### 3. `learning_profiles`

**Purpose**: Stores detailed learning preferences and styles for each child

```sql
CREATE TABLE learning_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID UNIQUE REFERENCES children(id) ON DELETE CASCADE,
  favorite_activities TEXT[] DEFAULT '{}',
  motivation_type TEXT CHECK (motivation_type IN ('intrinsic', 'extrinsic', 'mixed')),
  problem_solving_style TEXT,
  processing_preference TEXT,
  social_preference TEXT,
  favorite_subjects TEXT[] DEFAULT '{}',
  attention_span TEXT CHECK (attention_span IN ('short', 'medium', 'long')),
  feedback_need TEXT,
  challenge_preference TEXT,
  preferred_activity_types TEXT[] DEFAULT '{}',
  personal_details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Columns**:
- `id` (UUID, PK): Unique profile identifier
- `child_id` (UUID, FK, UNIQUE): Reference to children table (one-to-one)
- `favorite_activities` (TEXT[]): Array of preferred activity types
- `motivation_type` (TEXT): Enum-like constraint (intrinsic/extrinsic/mixed)
- `problem_solving_style` (TEXT): How child approaches problems
- `processing_preference` (TEXT): Visual/auditory/kinesthetic preference
- `social_preference` (TEXT): Solo/collaborative preference
- `favorite_subjects` (TEXT[]): Array of preferred subjects
- `attention_span` (TEXT): Short/medium/long
- `feedback_need` (TEXT): Frequency of feedback required
- `challenge_preference` (TEXT): Difficulty preference
- `preferred_activity_types` (TEXT[]): Quiz/memory/sorting preferences
- `personal_details` (TEXT): Additional free-form notes
- `created_at` (TIMESTAMPTZ): Record creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

**Relationships**:
- One-to-One with `children`

**Indexes**:
```sql
-- Recommended indexes
CREATE UNIQUE INDEX idx_learning_profiles_child_id ON learning_profiles(child_id);
CREATE INDEX idx_learning_profiles_motivation_type ON learning_profiles(motivation_type);

-- GIN index for array columns (for efficient array search)
CREATE INDEX idx_learning_profiles_favorite_subjects ON learning_profiles USING GIN (favorite_subjects);
CREATE INDEX idx_learning_profiles_favorite_activities ON learning_profiles USING GIN (favorite_activities);
```

**Constraints**:
```sql
ALTER TABLE learning_profiles 
  ADD CONSTRAINT fk_learning_profiles_child 
  FOREIGN KEY (child_id) 
  REFERENCES children(id) 
  ON DELETE CASCADE;

ALTER TABLE learning_profiles 
  ADD CONSTRAINT chk_motivation_type 
  CHECK (motivation_type IN ('intrinsic', 'extrinsic', 'mixed'));

ALTER TABLE learning_profiles 
  ADD CONSTRAINT chk_attention_span 
  CHECK (attention_span IN ('short', 'medium', 'long'));
```

---

### 4. `mascots`

**Purpose**: Stores custom mascot configurations for each child

```sql
CREATE TABLE mascots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID UNIQUE REFERENCES children(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  element TEXT,
  size TEXT CHECK (size IN ('small', 'medium', 'large')),
  personality TEXT,
  special_feature TEXT,
  custom_detail TEXT,
  image_url TEXT,
  image_prompt TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Columns**:
- `id` (UUID, PK): Unique mascot identifier
- `child_id` (UUID, FK, UNIQUE): Reference to children table (one-to-one)
- `name` (TEXT, NOT NULL): Mascot's name
- `element` (TEXT): Element type (fire/water/earth/air)
- `size` (TEXT): Mascot size (small/medium/large)
- `personality` (TEXT): Mascot personality traits
- `special_feature` (TEXT): Special characteristics
- `custom_detail` (TEXT): Free-form custom details
- `image_url` (TEXT): URL to generated mascot image
- `image_prompt` (TEXT): AI prompt used to generate image
- `created_at` (TIMESTAMPTZ): Record creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

**Relationships**:
- One-to-One with `children`

**Indexes**:
```sql
-- Recommended indexes
CREATE UNIQUE INDEX idx_mascots_child_id ON mascots(child_id);
CREATE INDEX idx_mascots_created_at ON mascots(created_at DESC);
```

**Constraints**:
```sql
ALTER TABLE mascots 
  ADD CONSTRAINT fk_mascots_child 
  FOREIGN KEY (child_id) 
  REFERENCES children(id) 
  ON DELETE CASCADE;

ALTER TABLE mascots 
  ADD CONSTRAINT chk_mascots_size 
  CHECK (size IN ('small', 'medium', 'large'));
```

---

## Entity Relationship Diagram

```
┌──────────────┐
│   families   │
│              │
│ • id (PK)    │
│ • email      │
│ • parent_name│
└──────┬───────┘
       │
       │ 1:N
       ▼
┌──────────────────┐
│    children      │
│                  │
│ • id (PK)        │
│ • family_id (FK) │◄───────┐
│ • name           │        │
│ • age            │        │
│ • grade          │        │
│ • total_xp       │        │
│ • current_level  │        │
└──────┬───────────┘        │
       │                    │
       │ 1:1                │ 1:1
       ▼                    ▼
┌──────────────────┐  ┌─────────────────┐
│learning_profiles │  │    mascots      │
│                  │  │                 │
│ • id (PK)        │  │ • id (PK)       │
│ • child_id (FK)  │  │ • child_id (FK) │
│ • favorite_      │  │ • name          │
│   activities[]   │  │ • element       │
│ • motivation_type│  │ • image_url     │
│ • favorite_      │  │ • image_prompt  │
│   subjects[]     │  │                 │
└──────────────────┘  └─────────────────┘
```

---

## Row Level Security (RLS) Status

⚠️ **CRITICAL**: RLS is NOT yet implemented on any tables

### Current State

| Table | RLS Enabled | Policies | Status |
|-------|-------------|----------|--------|
| families | ❌ | None | **Needs Implementation** |
| children | ❌ | None | **Needs Implementation** |
| learning_profiles | ❌ | None | **Needs Implementation** |
| mascots | ❌ | None | **Needs Implementation** |

### Recommended RLS Policies

#### 1. Families Table

```sql
-- Enable RLS
ALTER TABLE families ENABLE ROW LEVEL SECURITY;

-- Users can only view their own family
CREATE POLICY "Users can view own family" ON families
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own family
CREATE POLICY "Users can update own family" ON families
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can insert their own family
CREATE POLICY "Users can create family" ON families
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

**Note**: `user_id` column needs to be added to families table linking to Supabase auth.users

#### 2. Children Table

```sql
-- Enable RLS
ALTER TABLE children ENABLE ROW LEVEL SECURITY;

-- Users can view children in their family
CREATE POLICY "Users can view own children" ON children
  FOR SELECT
  USING (
    family_id IN (
      SELECT id FROM families WHERE user_id = auth.uid()
    )
  );

-- Users can create children in their family
CREATE POLICY "Users can create children" ON children
  FOR INSERT
  WITH CHECK (
    family_id IN (
      SELECT id FROM families WHERE user_id = auth.uid()
    )
  );

-- Users can update their children
CREATE POLICY "Users can update own children" ON children
  FOR UPDATE
  USING (
    family_id IN (
      SELECT id FROM families WHERE user_id = auth.uid()
    )
  );

-- Users can delete their children
CREATE POLICY "Users can delete own children" ON children
  FOR DELETE
  USING (
    family_id IN (
      SELECT id FROM families WHERE user_id = auth.uid()
    )
  );
```

#### 3. Learning Profiles Table

```sql
-- Enable RLS
ALTER TABLE learning_profiles ENABLE ROW LEVEL SECURITY;

-- Users can view profiles of their children
CREATE POLICY "Users can view own children's profiles" ON learning_profiles
  FOR SELECT
  USING (
    child_id IN (
      SELECT id FROM children WHERE family_id IN (
        SELECT id FROM families WHERE user_id = auth.uid()
      )
    )
  );

-- Similar policies for INSERT, UPDATE, DELETE
CREATE POLICY "Users can create children's profiles" ON learning_profiles
  FOR INSERT
  WITH CHECK (
    child_id IN (
      SELECT id FROM children WHERE family_id IN (
        SELECT id FROM families WHERE user_id = auth.uid()
      )
    )
  );

CREATE POLICY "Users can update children's profiles" ON learning_profiles
  FOR UPDATE
  USING (
    child_id IN (
      SELECT id FROM children WHERE family_id IN (
        SELECT id FROM families WHERE user_id = auth.uid()
      )
    )
  );
```

#### 4. Mascots Table

```sql
-- Enable RLS
ALTER TABLE mascots ENABLE ROW LEVEL SECURITY;

-- Same pattern as learning_profiles
CREATE POLICY "Users can view own children's mascots" ON mascots
  FOR SELECT
  USING (
    child_id IN (
      SELECT id FROM children WHERE family_id IN (
        SELECT id FROM families WHERE user_id = auth.uid()
      )
    )
  );

-- INSERT, UPDATE, DELETE policies follow same pattern
```

---

## Naming Conventions

### Tables
- **Format**: `snake_case`, plural nouns
- **Examples**: `families`, `children`, `learning_profiles`, `mascots`

### Columns
- **Format**: `snake_case`
- **Timestamps**: Always `created_at`, `updated_at`
- **IDs**: `id` for primary key, `{table}_id` for foreign keys
- **Arrays**: Plural names (`favorite_activities`, `favorite_subjects`)
- **Booleans**: Prefix with `is_`, `has_`, `can_`

### Constraints
- **Primary Keys**: `{table}_pkey` (auto-generated)
- **Foreign Keys**: `fk_{table}_{referenced_table}`
- **Check Constraints**: `chk_{table}_{column}`
- **Unique Constraints**: `uq_{table}_{column}`

### Indexes
- **Single Column**: `idx_{table}_{column}`
- **Composite**: `idx_{table}_{col1}_{col2}`
- **Unique**: `idx_{table}_{column}` (with UNIQUE flag)
- **GIN/GiST**: Specify type in name

---

## Data Types Strategy

### UUID vs Serial
- **Strategy**: UUID for all primary keys
- **Rationale**: 
  - Distributed-friendly
  - No sequential prediction
  - Supabase default
  - Better for public APIs

### Text vs VARCHAR
- **Strategy**: TEXT for all string columns
- **Rationale**: 
  - PostgreSQL TEXT has no performance penalty
  - More flexible
  - No arbitrary length limits

### Arrays
- **Usage**: `TEXT[]` for multiple values
- **Examples**: 
  - `favorite_activities TEXT[]`
  - `favorite_subjects TEXT[]`
- **Indexing**: Use GIN indexes for array search

```sql
CREATE INDEX idx_favorite_subjects 
  ON learning_profiles 
  USING GIN (favorite_subjects);

-- Query example
SELECT * FROM learning_profiles 
WHERE 'math' = ANY(favorite_subjects);
```

### JSONB
- **Current Usage**: None in current schema
- **Future Use Cases**:
  - Complex achievement data
  - Flexible metadata
  - Dynamic configuration

```sql
-- Example future column
ALTER TABLE children 
  ADD COLUMN achievements JSONB DEFAULT '{}';

CREATE INDEX idx_children_achievements 
  ON children 
  USING GIN (achievements);
```

### Timestamps
- **Strategy**: TIMESTAMPTZ (with timezone)
- **Default**: `NOW()` for created_at
- **Update Trigger**: Recommended for updated_at

```sql
-- Trigger for auto-updating updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_families_updated_at 
  BEFORE UPDATE ON families
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Repeat for other tables
```

### Enums vs Check Constraints
- **Current Strategy**: Check constraints (more flexible)
- **Examples**:
  ```sql
  motivation_type TEXT CHECK (motivation_type IN ('intrinsic', 'extrinsic', 'mixed'))
  attention_span TEXT CHECK (attention_span IN ('short', 'medium', 'long'))
  size TEXT CHECK (size IN ('small', 'medium', 'large'))
  ```

**Rationale**: Check constraints are easier to modify than ENUM types

---

## Performance Optimization

### Query Performance Patterns

#### 1. Fetching Child with All Related Data

```sql
-- Current pattern (multiple queries from client)
SELECT * FROM children WHERE id = $1;
SELECT * FROM learning_profiles WHERE child_id = $1;
SELECT * FROM mascots WHERE child_id = $1;

-- Optimized pattern (single query with joins)
SELECT 
  c.*,
  lp.* AS learning_profile,
  m.* AS mascot
FROM children c
LEFT JOIN learning_profiles lp ON c.id = lp.child_id
LEFT JOIN mascots m ON c.id = m.child_id
WHERE c.id = $1;
```

**Supabase Client Equivalent**:
```typescript
const { data } = await supabase
  .from('children')
  .select(`
    *,
    learning_profiles(*),
    mascots(*)
  `)
  .eq('id', childId)
  .single();
```

#### 2. Family Leaderboard Query

```sql
-- Optimized with composite index
SELECT 
  id, 
  name, 
  total_xp, 
  current_level
FROM children
WHERE family_id = $1
ORDER BY total_xp DESC
LIMIT 10;

-- Uses index: idx_children_family_xp
```

#### 3. Finding Children by Favorite Subject

```sql
-- Uses GIN index on array column
SELECT c.id, c.name
FROM children c
JOIN learning_profiles lp ON c.id = lp.child_id
WHERE 'math' = ANY(lp.favorite_subjects);

-- Requires: CREATE INDEX idx_learning_profiles_favorite_subjects 
--           ON learning_profiles USING GIN (favorite_subjects);
```

### N+1 Query Prevention

❌ **BAD**: N+1 Pattern
```typescript
// Fetches children
const { data: children } = await supabase
  .from('children')
  .select('*')
  .eq('family_id', familyId);

// Then for each child (N queries!)
for (const child of children) {
  const { data: profile } = await supabase
    .from('learning_profiles')
    .select('*')
    .eq('child_id', child.id)
    .single();
}
```

✅ **GOOD**: Single Query with Joins
```typescript
const { data: children } = await supabase
  .from('children')
  .select(`
    *,
    learning_profiles(*)
  `)
  .eq('family_id', familyId);
```

---

## Migration Strategy

### Current State
⚠️ **No formal migration system** in place

### Recommended Approach

#### 1. Use Supabase Migrations

```bash
# Initialize Supabase CLI
supabase init

# Create new migration
supabase migration new add_streak_column

# Edit migration file
# supabase/migrations/20231201_add_streak_column.sql

# Apply migration
supabase db push
```

#### 2. Migration File Structure

```sql
-- Migration: 20231201120000_add_streak_system.sql

-- Add streak columns to children table
ALTER TABLE children 
  ADD COLUMN streak_days INTEGER DEFAULT 0,
  ADD COLUMN last_activity_date DATE DEFAULT CURRENT_DATE;

-- Add check constraint
ALTER TABLE children 
  ADD CONSTRAINT chk_children_streak 
  CHECK (streak_days >= 0);

-- Create index for streak leaderboard
CREATE INDEX idx_children_streak 
  ON children(family_id, streak_days DESC);

-- Update existing records
UPDATE children SET streak_days = 0 WHERE streak_days IS NULL;
```

#### 3. Rollback Strategy

```sql
-- Migration: 20231201120000_add_streak_system_rollback.sql

-- Remove index
DROP INDEX IF EXISTS idx_children_streak;

-- Remove constraint
ALTER TABLE children DROP CONSTRAINT IF EXISTS chk_children_streak;

-- Remove columns
ALTER TABLE children 
  DROP COLUMN IF EXISTS last_activity_date,
  DROP COLUMN IF EXISTS streak_days;
```

### Migration Naming Convention

Format: `YYYYMMDDHHMMSS_description.sql`

Examples:
- `20231201120000_create_initial_schema.sql`
- `20231202153000_add_achievements_table.sql`
- `20231203090000_add_rls_policies.sql`

---

## Index Recommendations

### Current State
⚠️ **Only default indexes** (primary keys, unique constraints)

### Priority Indexes to Add

#### High Priority

```sql
-- 1. Family lookup by email (authentication)
CREATE INDEX idx_families_email ON families(email);

-- 2. Children by family (most common query)
CREATE INDEX idx_children_family_id ON children(family_id);

-- 3. Leaderboard queries
CREATE INDEX idx_children_total_xp ON children(total_xp DESC);
CREATE INDEX idx_children_family_xp ON children(family_id, total_xp DESC);

-- 4. Learning profile lookup
CREATE UNIQUE INDEX idx_learning_profiles_child_id ON learning_profiles(child_id);

-- 5. Mascot lookup
CREATE UNIQUE INDEX idx_mascots_child_id ON mascots(child_id);
```

#### Medium Priority

```sql
-- 6. Recent activity queries
CREATE INDEX idx_children_created_at ON children(created_at DESC);
CREATE INDEX idx_families_created_at ON families(created_at DESC);

-- 7. Array search on learning preferences
CREATE INDEX idx_learning_profiles_favorite_subjects 
  ON learning_profiles USING GIN (favorite_subjects);

CREATE INDEX idx_learning_profiles_favorite_activities 
  ON learning_profiles USING GIN (favorite_activities);
```

#### Low Priority (Add When Needed)

```sql
-- 8. Filtering by age/grade
CREATE INDEX idx_children_age ON children(age);
CREATE INDEX idx_children_grade ON children(grade);

-- 9. Motivation type filtering
CREATE INDEX idx_learning_profiles_motivation_type 
  ON learning_profiles(motivation_type);
```

### Index Maintenance

```sql
-- Check index usage
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_scan,
  idx_tup_read,
  idx_tup_fetch
FROM pg_stat_user_indexes
WHERE schemaname = 'public'
ORDER BY idx_scan ASC;

-- Find unused indexes
SELECT 
  schemaname,
  tablename,
  indexname
FROM pg_stat_user_indexes
WHERE idx_scan = 0
  AND indexname NOT LIKE '%_pkey'
  AND schemaname = 'public';

-- Rebuild indexes (if needed)
REINDEX TABLE children;
```

---

## Common Query Patterns

### 1. Get Family with All Children and Their Profiles

```sql
SELECT 
  f.id AS family_id,
  f.email,
  f.parent_name,
  json_agg(
    json_build_object(
      'id', c.id,
      'name', c.name,
      'age', c.age,
      'total_xp', c.total_xp,
      'learning_profile', lp.*,
      'mascot', m.*
    )
  ) AS children
FROM families f
LEFT JOIN children c ON f.id = c.family_id
LEFT JOIN learning_profiles lp ON c.id = lp.child_id
LEFT JOIN mascots m ON c.id = m.child_id
WHERE f.id = $1
GROUP BY f.id;
```

### 2. Update Child XP and Level

```sql
UPDATE children 
SET 
  total_xp = total_xp + $2,
  current_level = FLOOR(($2 + total_xp) / 200) + 1,
  updated_at = NOW()
WHERE id = $1
RETURNING *;
```

### 3. Find Children by Learning Preference

```sql
SELECT 
  c.id,
  c.name,
  c.total_xp,
  lp.favorite_subjects,
  lp.motivation_type
FROM children c
JOIN learning_profiles lp ON c.id = lp.child_id
WHERE 
  lp.motivation_type = $1
  AND $2 = ANY(lp.favorite_subjects)
ORDER BY c.total_xp DESC;
```

### 4. Family Leaderboard with Rankings

```sql
SELECT 
  id,
  name,
  total_xp,
  current_level,
  ROW_NUMBER() OVER (ORDER BY total_xp DESC) AS rank
FROM children
WHERE family_id = $1
ORDER BY total_xp DESC;
```

### 5. Bulk Insert Children

```sql
INSERT INTO children (family_id, name, age, grade)
VALUES 
  ($1, 'Leni', 10, 5),
  ($1, 'Lilly', 8, 3),
  ($1, 'Lenny', 12, 7),
  ($1, 'Milan', 6, 1)
RETURNING *;
```

---

## Database Maintenance

### Automated Tasks (Supabase Managed)
- ✅ Daily backups
- ✅ Connection pooling
- ✅ Automatic VACUUM
- ✅ Query performance insights

### Manual Maintenance Tasks

#### 1. Monitor Table Sizes

```sql
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

#### 2. Check for Bloat

```sql
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) AS table_size,
  n_dead_tup,
  n_live_tup,
  ROUND(100 * n_dead_tup / NULLIF(n_live_tup + n_dead_tup, 0), 2) AS dead_pct
FROM pg_stat_user_tables
WHERE schemaname = 'public'
ORDER BY n_dead_tup DESC;
```

#### 3. Analyze Query Performance

```sql
-- View slow queries (in Supabase dashboard)
SELECT 
  query,
  calls,
  total_time,
  mean_time,
  max_time
FROM pg_stat_statements
WHERE query NOT LIKE '%pg_stat%'
ORDER BY mean_time DESC
LIMIT 20;
```

---

## Do's ✅

1. **Always use UUIDs** for primary keys
2. **Enable RLS** on all tables before production
3. **Add indexes** for foreign keys and frequent WHERE clauses
4. **Use TIMESTAMPTZ** for all timestamp columns
5. **Add CHECK constraints** for data validation
6. **Use array types** for multi-value columns
7. **Cascade deletes** where appropriate (ON DELETE CASCADE)
8. **Version control migrations** with descriptive names
9. **Test rollback** migrations before deploying
10. **Monitor index usage** and remove unused indexes
11. **Use composite indexes** for multi-column queries
12. **Add updated_at triggers** for all tables
13. **Use TEXT** instead of VARCHAR
14. **Document complex queries** with comments
15. **Test queries** with EXPLAIN ANALYZE

---

## Don'ts ❌

1. **Don't use SERIAL** - use UUID instead
2. **Don't skip indexes** on foreign keys
3. **Don't forget ON DELETE CASCADE** for dependent data
4. **Don't use ENUMs** - use CHECK constraints
5. **Don't skip RLS policies** - security critical
6. **Don't create indexes** without testing query plans
7. **Don't use VARCHAR** - use TEXT
8. **Don't store denormalized data** without good reason
9. **Don't skip constraints** - validate at database level
10. **Don't forget updated_at** columns
11. **Don't use NULL** for arrays - use empty array
12. **Don't create circular dependencies** in foreign keys
13. **Don't skip migration** version control
14. **Don't test in production** - use staging database
15. **Don't ignore slow queries** - optimize proactively

---

## Future Enhancements

### Recommended Additions

#### 1. Achievements System

```sql
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  achievement_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  xp_reward INTEGER DEFAULT 0,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_achievements_child_id ON achievements(child_id);
CREATE INDEX idx_achievements_earned_at ON achievements(earned_at DESC);
```

#### 2. Progress Tracking

```sql
CREATE TABLE topic_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  topic_slug TEXT NOT NULL,
  sections_completed TEXT[] DEFAULT '{}',
  exercises_completed TEXT[] DEFAULT '{}',
  best_score INTEGER DEFAULT 0,
  attempts INTEGER DEFAULT 0,
  last_accessed TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
