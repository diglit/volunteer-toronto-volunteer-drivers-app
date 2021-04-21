
import React from 'react'
import {TextField} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {filterMembers} from '../../../../redux/volunnteer-toronto/members'

const SearchBar: React.FunctionComponent = ()=>{
    const dispatch = useDispatch()

    const filterUsersByName = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(filterMembers(e.target.value))
    }

    return (
        <div>
            <TextField 
                variant = "outlined"
                placeholder = "Search"
                inputProps={{'aria-label':"Search"}}
                color="primary"
                onChange={filterUsersByName}
            />
        </div>
    )
}

export default SearchBar