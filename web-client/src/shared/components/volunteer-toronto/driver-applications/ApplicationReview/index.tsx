import React, { ChangeEvent, useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'shared/redux';
import { useRouter } from 'next/router'


import AlertDialog from './AlertDialog'
import { setReject, setApprove } from 'shared/redux/volunnteer-toronto/driverApplications';

interface Props {
    id: number
}

const ApplicationReview = ({ id }: Props): React.ReactElement => {

    const applicationList = useSelector((state: RootState) => state.driverApplication.applicationList);
    const data = applicationList.find(a => a.id === id)

    const [openReject, setOpenReject] = useState(false);
    const [openApprove, setOpenApprove] = useState(false);

    const [comment, setComment] = useState('')

    const router = useRouter()
    const dispatch = useDispatch()

    const handleReject = () => {
        const newState = applicationList.map(s => (s.id === id) ? { ...s, rejected: true, approved: false, comment: comment } : s)
        dispatch(setReject(newState))
        setOpenReject(false)
        router.back()
    };

    const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const handleApprove = () => {
        const newState = applicationList.map(s => (s.id === id) ? { ...s, rejected: false, approved: true } : s)
        dispatch(setApprove(newState))
        setOpenApprove(false);
        router.back()
    };

    return (
        <>
            <Button variant="outlined" color="primary" onClick={() => router.back()}>Back</Button>
            <div>
                {/* TODO: replace with review component */}
                <div>Review: {data?.application.firstName} {data?.application.lastName}</div>
                <div>
                    <Button variant="contained" onClick={() => setOpenReject(true)}>reject</Button>

                    <AlertDialog title='Are you sure you would like to reject this applicant?' contentText='' open={openReject} handleCancel={() => setOpenReject(false)} handleConfirm={handleReject} confirmLabel='Reject'>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="reject-comments"
                            label="Please add any comments here"
                            type="text"
                            fullWidth
                            onChange={handleComment}
                        >
                        </TextField>
                    </AlertDialog>

                    <Button variant="contained" color="primary" onClick={() => setOpenApprove(true)}>approve </Button>

                    <AlertDialog title='' contentText='' open={openApprove} handleCancel={() => setOpenApprove(false)} handleConfirm={handleApprove} confirmLabel='Approve'>
                        You would like to approve <span style={{ fontWeight: 'bold' }} >{data?.application.firstName} {data?.application.lastName}</span> to the volunteer driver list.
                    </AlertDialog>
                </div>
            </div>
        </>
    )
}

export default ApplicationReview



