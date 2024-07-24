import { useCookies } from '@vueuse/integrations/useCookies';
const TokenKey = 'admin-token'
const cookies = useCookies()

export function getcookies() {
    return cookies.get(TokenKey)
}

export function setcookies(token) {
    return cookies.set(TokenKey, token)
}

export function removecookies() {
    return cookies.remove(TokenKey)
}