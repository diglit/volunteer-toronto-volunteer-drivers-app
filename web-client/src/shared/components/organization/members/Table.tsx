
import React, { useEffect } from 'react'
import {
    loadingSelector,
    membersSelector,
    fetchMembers
} from '../../../redux/organization/members'

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
import { useSelector, useDispatch } from 'react-redux'

const MembersTable:React.FunctionComponent = ()=>{
    const dispatch = useDispatch()
    const loading = useSelector(loadingSelector)
    const members = useSelector(membersSelector)

    useEffect(()=>{
        dispatch(fetchMembers())
    },[])

    return (
        <Table>
        <TableHead>
            <TableRow>
                <TableCell><Box fontWeight="bold">Name</Box></TableCell>
            </TableRow>
        </TableHead>
        {loading
        ? <TableBody>
            <TableRow>
                <TableCell>
                    <CircularProgress />
                </TableCell>
            </TableRow>
        </TableBody>

        : <TableBody>
            {members.length > 0 
            ? members.map(member=>(
                <TableRow key={member.id}>
                    <TableCell>{member.name}</TableCell>
                </TableRow>
            ))
            
            : <TableRow>
                    <TableCell>
                        <Typography>No member to show</Typography>
                    </TableCell>
                </TableRow>
            }
        </TableBody>
        }
    </Table>
    )
}

export default MembersTable