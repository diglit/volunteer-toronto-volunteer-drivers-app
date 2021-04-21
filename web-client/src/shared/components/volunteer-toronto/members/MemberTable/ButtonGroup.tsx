
import React, {useState} from 'react'
import { MembersListItem, deleteMember } from '../../../../redux/volunnteer-toronto/members'
import ConfirmDeleteDialog from './ConfirmDeleteDialog'
import {Button, Link} from '@material-ui/core'
import {useDispatch} from 'react-redux'

interface ButtonGroupPropTypes {
    member: MembersListItem
}

const ButtonGroup: React.FunctionComponent<ButtonGroupPropTypes> = (props:ButtonGroupPropTypes)=>{
    const dispatch = useDispatch()
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const sendResetPassRequest = ()=>{
        // implement
    }

    const sendDeleteUserRequest = ()=>{
        dispatch(deleteMember(props.member.id))
    }

    const navigateToEmailCompose = ()=>{
        // implement
    }
    
    return (
        <div>
            <ConfirmDeleteDialog 
                onAgree = {sendDeleteUserRequest}
                open={deleteDialogOpen}
                onClose = {()=>{setDeleteDialogOpen(false)}}
            />
            <Button onClick={sendResetPassRequest}>
                Reset Password
            </Button>
            <Button color="secondary" onClick={()=>setDeleteDialogOpen(true)}>
                Delete
            </Button>
            <Button color="primary" onClick={navigateToEmailCompose}>
                <Link href="mailto:example@email.com">Email</Link>
            </Button>
        </div>
    )
}

export default ButtonGroup