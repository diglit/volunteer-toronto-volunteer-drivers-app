import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'

interface DashNavProps {
    components: {slug:string, component:JSX.Element}[]
}

const DashNav:React.FunctionComponent<DashNavProps> = (props: DashNavProps)=>{
    const router = useRouter()
    const {components} = props

    useEffect(()=>{
        const isMatch = findSlugMatchingCmp()
        
        if(router.query.route && !isMatch)
        router.push('/404')

    },[router])

    const findSlugMatchingCmp = ()=>components.find(
        cmp => cmp.slug === router.query.route
    )

    return (
        <div>
            {findSlugMatchingCmp()?.component}
        </div>
    )
}

export default DashNav