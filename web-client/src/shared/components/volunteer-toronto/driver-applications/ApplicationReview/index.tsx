import React, { ChangeEvent, useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'shared/redux';
import { useRouter } from 'next/router'


import AlertDialog from './AlertDialog'
import { updateApplications, DriverApplication } from 'shared/redux/volunnteer-toronto/driverApplications';

interface Props {
    id: number
}

const ApplicationReview = ({ id }: Props): React.ReactElement => {

    const { applicationList } = useSelector((state: RootState) => state.driverApplication);
    const currentApplication = applicationList.find(a => a.id === id) as DriverApplication

    const [openReject, setOpenReject] = useState(false);
    const [openApprove, setOpenApprove] = useState(false);

    const [comment, setComment] = useState('')

    const router = useRouter()
    const dispatch = useDispatch()

    const handleReject = () => {
        dispatch(updateApplications({
            id: id,
            newApplication: { ...currentApplication, rejected: true, approved: false, comment: comment }
        }))
        setOpenReject(false)
        router.back()
    };

    const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const handleApprove = () => {
        dispatch(updateApplications({
            id: id,
            newApplication: { ...currentApplication, rejected: false, approved: true }
        }))
        setOpenApprove(false);
        router.back()
    };

    return (
        <>
            <Box display="flex" justifyContent="flex-end">
                <Box p={1}>
                    <Button variant="outlined" color="primary" onClick={() => router.back()}>Back</Button>
                </Box>
            </Box>
            <div style={{ width: '100%' }}>
                {/* TODO: replace with review component */}
                <div>{JSON.stringify(currentApplication)}</div>
                <div>
                    <Box display="flex" justifyContent="center">
                        <Box p={1}>
                            <Button variant="contained" onClick={() => setOpenReject(true)}>reject</Button>
                        </Box>
                        <Box p={1} >
                            <Button variant="contained" color="primary" onClick={() => setOpenApprove(true)}>approve </Button>
                        </Box>
                    </Box>

                    <AlertDialog
                        title='Are you sure you would like to reject this applicant?'
                        open={openReject}
                        handleCancel={() => setOpenReject(false)}
                        handleConfirm={handleReject}
                        confirmLabel='Reject'
                    >
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

                    <AlertDialog
                        open={openApprove}
                        handleCancel={() => setOpenApprove(false)}
                        handleConfirm={handleApprove}
                        confirmLabel='Approve'>
                        You would like to approve <span style={{ fontWeight: 'bold' }} >{currentApplication?.application.firstName} {currentApplication?.application.lastName}</span> to the volunteer driver list.
                    </AlertDialog>
                </div>
            </div>
        </>
    )
}

export default ApplicationReview



