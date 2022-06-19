import http from "../services/httpService"

const REGISTER_API_URL = "/auth/users/"
const LOGIN_API_URL = "/auth/jwt/create/"
const PROFILE_UPDATE_URL = '/Store/';


export function register(user) {
    return http.post(REGISTER_API_URL, {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        password: user.password,
    })
}

export async function login(user) {
    const response = await http.post(LOGIN_API_URL, {
        username: user.username,
        password: user.password,
    })
    if (response.status === 200) {
        localStorage.setItem("access", response.data.access)
        localStorage.setItem("refresh", response.data.refresh)
    }
}

export function update(profile) {
    return http.post(PROFILE_UPDATE_URL,
        {
            brand_name: profile.brand_name,
            company_website: profile.website_url,
            address: profile.address,
            cell_number: profile.phone,
            city: profile.city,
            ntn: profile.ntn,
            bank_account_number: profile.account,
            description: profile.description
        },
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        }
    )
}