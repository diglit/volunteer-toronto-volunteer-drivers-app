import * as React from 'react';
import {Box, Container} from '@material-ui/core'
import SearchBar from './SearchBar'
import Btns from './Btns'
import MemberTable from './MemberTable'

const Members: React.FunctionComponent= ()=>(
    <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <SearchBar />
            <Btns />
        </Box>
        <MemberTable />
    </Container>
)

export default Members