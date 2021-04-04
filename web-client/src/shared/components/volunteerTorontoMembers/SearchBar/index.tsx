
import React from 'react'
import {TextField} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {filterMembers} from '../../../redux/volunteerTorontoMembers'

const SearchBar: React.FunctionComponent = ()=>{
    const dispatch = useDispatch()

    const filterUsersByName = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        dispatch(filterMembers(e.target.value))
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