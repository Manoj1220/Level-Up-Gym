import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (url.pathname.startsWith('/admin')) {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      // Simple credentials check (should use env vars in production)
      const validUser = process.env.ADMIN_USER || 'admin'
      const validPwd = process.env.ADMIN_PASS || 'leveluppro'

      if (user === validUser && pwd === validPwd) {
        return NextResponse.next()
      }
    }
    url.pathname = '/api/auth'

    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }
}

export const config = {
  matcher: '/admin/:path*',
}
