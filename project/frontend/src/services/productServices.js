import http from "../services/httpService"

const PRODUCT_URL = "/api/product/"
// const LOGIN_API_URL = "/auth/jwt/create/"
// const PROFILE_UPDATE_URL = '/Store/';


export function get_store_products() {
    return http.get(PRODUCT_URL,
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        })
}

export function delete_product(id) {
    return http.delete(PRODUCT_URL + id + "/",
        {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        });
}