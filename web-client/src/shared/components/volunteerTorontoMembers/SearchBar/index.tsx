
import React from 'react'
import {TextField} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {filterUsers} from '../../../redux/volunteerTorontoMembers'

const SearchBar: React.FunctionComponent = ()=>{
    const dispatch = useDispatch()

    const filterUsersByName = (e)=>{
        console.log(e.target.value)
        dispatch(filterUsers(e.target.value))
    }

    return (
        <div>
            <TextField 
                variant = "outlined"
                placeholder = "Search"
                color="primary"
                onChange={filterUsersByName}
            />
        </div>
    )
}

export default SearchBar