
import React from 'react'
import {useSelector} from 'react-redux'
import ButtonGroup from './ButtonGroup'
import {filteredMemberListSelector} from '../../../redux/volunteerTorontoMembers'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box
} from '@material-ui/core'

const MemberTable:React.FunctionComponent = ()=>{
    const members = useSelector(filteredMemberListSelector)

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><Box fontWeight="bold">Name</Box></TableCell>
                    <TableCell><Box fontWeight="bold">Job Title</Box></TableCell>
                    <TableCell><Box fontWeight="bold">Actions</Box></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {members.map(member=>(
                    <TableRow key={member.id}>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.jobTitle}</TableCell>
                        <TableCell><ButtonGroup member={member}/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default MemberTable