import { AppListItem } from "shared/redux/driverApplications";

const host = process.env.NEXT_PUBLIC_API_SERVER_URL;
const url = `${host}/api/applications`

const getAll = async (): Promise<AppListItem[]> => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
    })
    return await (res.json()) as AppListItem[]
}

export default { getAll }