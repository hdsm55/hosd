-- Setup script to create the first admin user
-- Run this in Supabase SQL Editor after setting up the database

-- First, create a user profile for the admin
-- Replace 'your-admin-email@example.com' with your actual email
INSERT INTO profiles (id, email, full_name, is_admin)
VALUES (
  '00000000-0000-0000-0000-000000000000', -- Replace with actual user ID from auth.users
  'your-admin-email@example.com', -- Replace with your email
  'Admin User',
  true
)
ON CONFLICT (id) DO UPDATE SET
  is_admin = true,
  updated_at = NOW();

-- Alternative: If you already have a user, update their profile to be admin
-- UPDATE profiles
-- SET is_admin = true, updated_at = NOW()
-- WHERE email = 'your-admin-email@example.com';

-- Verify the admin was created
SELECT id, email, full_name, is_admin, created_at
FROM profiles
WHERE is_admin = true;
