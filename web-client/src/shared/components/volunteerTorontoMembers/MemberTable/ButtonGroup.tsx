
import React from 'react'
import { MembersListItem, deleteMember } from '../../../redux/volunteerTorontoMembers'
import {Button, Link} from '@material-ui/core'
import {useDispatch} from 'react-redux'

interface ButtonGroupPropTypes {
    member: MembersListItem
}

const ButtonGroup: React.FunctionComponent<ButtonGroupPropTypes> = (props:ButtonGroupPropTypes)=>{
    const dispatch = useDispatch()

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
            <Button onClick={sendResetPassRequest}>
                Reset Password
            </Button>
            <Button color="secondary" onClick={sendDeleteUserRequest}>
                Delete
            </Button>
            <Button color="primary" onClick={navigateToEmailCompose}>
                <Link href="mailto:example@email.com">Email</Link>
            </Button>
        </div>
    )
}

export default ButtonGroup