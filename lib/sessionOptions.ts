import { SessionData } from '@/types/types'
import {SessionOptions} from 'iron-session'

export const sessionOptions: SessionOptions = {
    cookieName: 'mark8-user-session',
    password: process.env.AUTH_SECRET as string,
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    },
}

export const defaultSession: SessionData = {
    isLoggedIn: false
}