import { DriverApplication } from "shared/redux/volunnteer-toronto/driverApplications";

const url = 'http://localhost:3000/api/applications';

const getAll = async (): Promise<DriverApplication[]> => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
    })
    return await (res.json()) as DriverApplication[]
}

export default { getAll }