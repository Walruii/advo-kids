export { default } from 'next-auth/middleware'

export const config = { matcher: ["/selection-menu", "/quiz/:path*"] }
