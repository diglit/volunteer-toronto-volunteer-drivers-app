
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import DashNav from 'shared/components/layout/DashNav'
import {MemberTable} from 'shared/components/organization/members'
import Header from 'shared/components/layout/Header'
import DriversSearch from '../drivers-search'
import {
    Container
} from '@material-ui/core'

const Dashboard: NextPage = ()=>{
    const welcomeMsg = "Welcome back, Organization Name"
    const components = [
        {slug: 'members',  label:'Organization Members', component: <MemberTable />},
        {slug: 'drivers-search', label:'Driver Pre-Screen', component: <DriversSearch />}
    ]

    return (
        <div>
            <Head>
                <title>Organization Dashboard</title>
            </Head>
            <Container>
                <Header 
                    headline={welcomeMsg}
                />
                <DashNav 
                    components = {components}
                />
            </Container>
        </div>
    )
}

export default Dashboard