export default function authHeader() {
    const userStr = localStorage.getItem('user')
    let user = null

    if (userStr) {
        user = JSON.parse(userStr)
    }

    if (user && user.accessToken) {
        return { 'x-access-tokne': user.accessToken }
    } else {
        return {}
    }
}