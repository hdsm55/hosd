import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          res.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          res.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Check if the request is for admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    // Skip middleware for login page and auth callback
    if (req.nextUrl.pathname === '/admin/login' || req.nextUrl.pathname.startsWith('/admin/auth/')) {
      return res;
    }

    try {
      // Get the session
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        // No session, redirect to login
        return NextResponse.redirect(new URL('/admin/login', req.url));
      }

      // Check if user is admin
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', session.user.id)
        .single();

      if (!profile?.is_admin) {
        // User is not admin, redirect to login with error
        return NextResponse.redirect(new URL('/admin/login?error=unauthorized', req.url));
      }
    } catch (error) {
      // Error checking auth, redirect to login
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
