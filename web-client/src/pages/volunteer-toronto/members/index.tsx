
import React from 'react'
import Head from 'next/head'
import {NextPage} from 'next'
import Members from 'shared/components/volunteer-toronto/members'

const VolunteerTorontoMembers: NextPage = ()=>{
    return (
        <>
            <Head>
                <title>Voluteer Toronto Members</title>
            </Head>
            <Members />
        </>
    )
}

export default VolunteerTorontoMembers