import type { NextApiRequest, NextApiResponse } from 'next';
import { MembersListItem } from 'shared/redux/organization/members';
import MockMember from '../vtmembers/mockMember';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const getOrgMembers = ()=>{
        const orgMembers:MembersListItem[] = MockMember.getMembers().map(member=>({
            id: member.id,
            name: member.name
        }))

        return orgMembers
    }
    res.status(200).json({ data: getOrgMembers() });
}