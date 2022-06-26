import http from "../services/httpService"

const JWT_TOKEN = `JWT ${localStorage.getItem("access")}`
const DASHBOARD_WEEKLY_STATS_URL = "/api/dashboard/weekly_stats/"
const DASHBOARD_SIMILARITY_LIST_URL = "/api/dashboard/get_similarity_list/"


export function get_weekly_stats() {
    return http.get(DASHBOARD_WEEKLY_STATS_URL,
        {
            headers: {
                'Authorization': JWT_TOKEN
            }
        })
}

export function get_similarity_list() {
    return http.get(DASHBOARD_SIMILARITY_LIST_URL,
        {
            headers: {
                'Authorization': JWT_TOKEN
            }
        })
}