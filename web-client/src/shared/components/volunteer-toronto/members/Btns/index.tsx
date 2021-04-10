
import React from 'react'
import { Button } from '@material-ui/core'

const Btns: React.FunctionComponent = ()=>{
    const createOrganization = ()=>{
        // implement
    }

    const createNewUser = ()=>{
        // implement
    }

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                style={{marginRight:'1em'}}
                onClick={createOrganization}
            >
                Create New Org
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={createNewUser}
            >
                Create New User
            </Button>
        </div>
    )
}

export default Btns