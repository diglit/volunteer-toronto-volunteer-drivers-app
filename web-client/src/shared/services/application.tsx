import { AppListItem } from "shared/redux/driverApplications";

const url = 'http://localhost:3000/api/applications';

const getAll = async (): Promise<AppListItem[]> => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
    })
    return await (res.json()) as AppListItem[]
}

export default { getAll }