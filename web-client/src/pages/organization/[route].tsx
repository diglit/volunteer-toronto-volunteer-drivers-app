
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import DashNav from 'shared/components/layout/DashNav'
import {MemberTable} from '../../shared/components/organization/members'
import DriversSearch from '../drivers-search'

const Dashboard: NextPage = ()=>{
    const components = [
        {slug: 'members', component: <MemberTable />},
        {slug: 'drivers-search', component: <DriversSearch />}
    ]
    return (
        <div>
            <Head>
                <title>Organization Dashboard</title>
            </Head>
            <DashNav 
                components = {components}
            />
        </div>
    )
}

export default Dashboard