
import React from 'react'
import Head from 'next/head'
import {NextPage} from 'next'
import {Container} from '@material-ui/core'
import {MemberTable} from '../../shared/components/organization/members'

const OrganizationMembers: NextPage = ()=>{
    return (
        <>
            <Head>
                <title>Organization Members</title>
            </Head>
            <Container>
                <MemberTable />
            </Container>
        </>
    )
}

export default OrganizationMembers