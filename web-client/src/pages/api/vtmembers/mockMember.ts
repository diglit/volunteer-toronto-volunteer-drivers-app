import {MembersListItem} from '../../../shared/redux/volunteerTorontoMembers'


class MockMember{
    private  mockMembersList: MembersListItem[] = [
        {
            id: '1',
            name: "Pam",
            jobTitle: 'Senior Manager'
        },
        {
            id: '2',
            name: "Bam",
            jobTitle: 'Senior Manager'
        },
        {
            id: '3',
            name: "Sam",
            jobTitle: 'Senior Manager'
        },
        {
            id: '4',
            name: "Henry Ford",
            jobTitle: 'Senior Manager'
        }
    ]

    public deleteMember(id:string){
        const newMembersList = this.mockMembersList.filter(member=>(
            member.id != id
        ))
        this.mockMembersList = newMembersList
    }

    public getMembers(){
        return this.mockMembersList
    }
}

export default new MockMember()