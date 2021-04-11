
import React from 'react'
import Head from 'next/head'
import {NextPage} from 'next'
import {Box, Container} from '@material-ui/core'
import SearchBar from '../../shared/components/volunteer-toronto/members/SearchBar'
import Btns from '../../shared/components/volunteer-toronto/members/Btns'
import MemberTable from '../../shared/components/volunteer-toronto/members/MemberTable'

const VolunteerTorontoMembers: NextPage = ()=>{
    return (
        <>
            <Head>
                <title>Voluteer Toronto Members</title>
            </Head>
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <SearchBar />
                    <Btns />
                </Box>
                <MemberTable />
            </Container>
        </>
    )
}

export default VolunteerTorontoMembers