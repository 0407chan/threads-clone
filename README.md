# Threads clone

## .env

```bash
EXPO_PUBLIC_SUPABASE_URL=https://SUPABASE_USERNAME.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=SUPABASE_ANON_KEY
EXPO_PUBLIC_DATABASE_URL=postgresql://postgres.SUPABASE_USERNAME:SUPABSE_PASSWORD@aws-0-us-east-1.pooler.supabase.com:5432/postgres

EXPO_PUBLIC_GIPHY_API_KEY=GIPHY_API_KEY
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=GOOGLE_MAPS_API_KEY
EXPO_PUBLIC_BUCKET_URL=https://USPABSE_USERNAME.supabase.co/storage/v1/object/public/files
```

## supabase

```bash
grant usage on schema "public" to anon;
grant usage on schema "public" to authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA "public" TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA "public" TO anon;
```
