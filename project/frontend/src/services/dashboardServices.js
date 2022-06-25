import http from "../services/httpService"

const JWT_TOKEN = `JWT ${localStorage.getItem("access")}`
const DASHBOARD_WEEKLY_STATS_URL = "/api/dashboard/weekly_stats/"


export function get_weekly_stats() {
    return http.get(DASHBOARD_WEEKLY_STATS_URL,
        {
            headers: {
                'Authorization': JWT_TOKEN
            }
        })
}