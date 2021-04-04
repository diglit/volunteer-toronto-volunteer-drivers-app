
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ButtonGroup from './ButtonGroup'
import {
    filteredMemberListSelector, 
    loadingSelector,
    fetchMembers
} from '../../../redux/volunteerTorontoMembers'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box,
    CircularProgress,
    Typography
} from '@material-ui/core'

const MemberTable:React.FunctionComponent = ()=>{
    const dispatch = useDispatch()
    const members = useSelector(filteredMemberListSelector)
    const loading = useSelector(loadingSelector)

    useEffect(()=>{
        dispatch(fetchMembers())
    },[])

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><Box fontWeight="bold">Name</Box></TableCell>
                    <TableCell><Box fontWeight="bold">Job Title</Box></TableCell>
                    <TableCell><Box fontWeight="bold">Actions</Box></TableCell>
                </TableRow>
            </TableHead>
            {loading
            ? <CircularProgress />
            : <TableBody>
                {members.length > 0 
                ? members.map(member=>(
                    <TableRow key={member.id}>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.jobTitle}</TableCell>
                        <TableCell><ButtonGroup member={member}/></TableCell>
                    </TableRow>
                ))
                : <Typography>No Member to show</Typography>
                }
            </TableBody>
            }
        </Table>
    )
}

export default MemberTable