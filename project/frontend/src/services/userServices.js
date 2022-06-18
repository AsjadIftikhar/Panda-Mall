import http from "../services/httpService"

const BASE_URL = "http://127.0.0.1:8000"

const REGISTER_API_URL = BASE_URL + "/auth/users/"
const LOGIN_API_URL = BASE_URL + "/auth/jwt/create"


export function register(user) {
    return http.post(REGISTER_API_URL, {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        password: user.password,
    })
}

export function login(user) {
    return http.post(LOGIN_API_URL, {
        username: user.username,
        password: user.password,
    })
}