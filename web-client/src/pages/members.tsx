
import React from 'react'
import Head from 'next/head'
import {Container} from '@material-ui/core'
import SearchBar from '../shared/components/members/SearchBar'
import Btns from '../shared/components/members/Btns'
import MemberTable from '../shared/components/members/MemberTable'

export default ()=>{
    return (
        <>
            <Head>
                <title>Members</title>
            </Head>
            <Container>
                <SearchBar />
                <Btns />
                <MemberTable />
            </Container>
        </>
    )
}