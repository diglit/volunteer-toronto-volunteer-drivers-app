import fetchMock from 'jest-fetch-mock'
import MockMembers from 'pages/api/vtmembers/mockMember'

export const spyFetch = ():void=>{
    fetchMock.enableMocks()

    fetchMock.mockResponse(async (req)=>{
        // /api/organization/members
        const orgMemberUrl = /[^]*\/api\/organization\/members/.test(req.url)
        // /api/vtmembers
        const vtMemberUrl = /[^]*\/api\/vtmembers/.test(req.url)
        // /api/vtmembers/delete
        const vtDeleteUrl = /[^]*\/api\/vtmembers\/delete/.test(req.url)


        if(vtDeleteUrl){
            const members = MockMembers.getMembers()
            return JSON.stringify( {data: members.shift() })
        }

        if(vtMemberUrl)
        return JSON.stringify( {data:MockMembers.getMembers()} )

        if(orgMemberUrl)
        return JSON.stringify( {data:MockMembers.getMembers()} )

        return Promise.reject(new Error('wrong url'))
    })
}

export const dontMock = ():void=>{
    fetchMock.dontMock()
}

export default spyFetch