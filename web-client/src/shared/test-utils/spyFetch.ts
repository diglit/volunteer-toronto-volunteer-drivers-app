import fetchMock from 'jest-fetch-mock'
import MockMembers from 'pages/api/vtmembers/mockMember'

const spyFetch = ()=>{
    fetchMock.enableMocks()

    fetchMock.mockResponse(async (req)=>{
        if(req.url === "http://localhost:3000/api/vtmembers")
        return JSON.stringify( {data:MockMembers.getMembers()} )

        if(req.url === "http://localhost:3000/api/organization/members")
        return JSON.stringify( {data:MockMembers.getMembers()} )

        if(req.url === "http://localhost:3000/api/vtmembers/delete"){
            const members = MockMembers.getMembers()
            return JSON.stringify( {data: members.shift() })
        }

        return Promise.reject(new Error('wrong url'))
    })
}

export default spyFetch