
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import React from 'react'

const ConfirmDeleteDialog = (props:{open:boolean, onClose():void , onAgree():void})=>{
    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
        >
            <DialogTitle>
                Are you sure?
            </DialogTitle>
            <DialogContent>
                You are going to delete the user. Do you want to process?
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.onAgree}
                    variant="contained"
                    color="primary"
                >
                    Yes
                </Button>
                <Button
                    onClick={props.onClose}
                    color="primary"
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDeleteDialog