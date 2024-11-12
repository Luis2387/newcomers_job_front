import { NextResponse } from 'next/server';

export function middleware(req) {

  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;
  
  const PUBLIC_ROUTES = [];
  const EMPLOYER_ROUTES = ['/employers-dashboard', '/employers-dashboard/:path*'];
  const JOBSEEKER_ROUTES = ['/candidates-dashboard', '/candidates-dashboard/:path*'];

  const accessToken = req.cookies.get('access_token');
  const userType = req.cookies.get('user_type');

  if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  if (pathname === '/') {
    return NextResponse.next();
  }

  if (!accessToken) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  if (EMPLOYER_ROUTES.some((route) => pathname.startsWith(route))) {
    if (userType.value !== 'employer') {
      url.pathname = '/unauthorized';
      return NextResponse.redirect(url);
    }
  }

  if (JOBSEEKER_ROUTES.some((route) => pathname.startsWith(route))) {
    if (userType.value !== 'jobseeker') {
      url.pathname = '/unauthorized';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/employers-dashboard/:path*',
    '/candidates-dashboard/:path*',
    '/',
  ],
};
