import { DriverApplication } from "shared/redux/volunnteer-toronto/driverApplications";

const url = 'http://localhost:3001/applications';

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

const updateById = async (id: number, data: DriverApplication): Promise<DriverApplication> => {
    const res = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    })

    const resData = await (res.json()) as DriverApplication
    return resData
}

export default { getAll, updateById }
