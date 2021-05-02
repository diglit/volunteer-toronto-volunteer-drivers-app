import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

interface PopupProps {
    openPopup: boolean;
    setOpenPopup: (arg0: boolean) => void;
}

export const MessagingPopup = ({ openPopup, setOpenPopup }: PopupProps): JSX.Element => {
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Placeholder for Title</div>
            </DialogTitle>
            <DialogContent>
                <div>Placeholder for Body Content</div>
                <button onClick={() => { setOpenPopup(false) }}>Close Card</button>
            </DialogContent>
        </Dialog>
    )
}

export default MessagingPopup;