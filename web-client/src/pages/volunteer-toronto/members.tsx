
import React from 'react'
import Head from 'next/head'
import {Container} from '@material-ui/core'
import SearchBar from '../../shared/components/volunteerTorontoMembers/SearchBar'
import Btns from '../../shared/components/volunteerTorontoMembers/Btns'
import MemberTable from '../../shared/components/volunteerTorontoMembers/MemberTable'

export default ()=>{
    return (
        <>
            <Head>
                <title>Voluteer Toronto Members</title>
            </Head>
            <Container>
                <SearchBar />
                <Btns />
                <MemberTable />
            </Container>
        </>
    )
}