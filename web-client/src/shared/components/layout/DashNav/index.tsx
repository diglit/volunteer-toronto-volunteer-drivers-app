import React, { useEffect } from 'react'
import {Tab, Tabs} from '@material-ui/core'
import {useRouter} from 'next/router'

interface DashNavProps {
    components: {
        slug:string, 
        component:JSX.Element, 
        label:string, 
        value?:number}[]
}

const DashNav:React.FunctionComponent<DashNavProps> = (props: DashNavProps)=>{
    const router = useRouter()
    const {components} = props
    const currentRoute = router.query.route

    const findSlugMatchingCmp = ()=>components.find(
        (cmp, i) =>{
            cmp.value = i
            return cmp.slug === currentRoute
        } 
    )

    const cmp = findSlugMatchingCmp()
    
    useEffect(()=>{
        const isMatch = cmp
        
        if(currentRoute && !isMatch)
        router.push('/404')

    },[router])

    const changeRouteTo = (slug:string)=>{
        const withoutSlugPath = router.asPath.split(`/${cmp?.slug}`)[0]
        router.push(`${withoutSlugPath}/${slug}`)
    }

    return (
        <div>
            <Tabs value={cmp?.value}>
                {components.map(cmp=>(
                    <Tab 
                        key={cmp.slug} 
                        label={cmp.label} 
                        onClick={()=>{changeRouteTo(cmp.slug)}} 
                    />
                ))}
            </Tabs>
            {cmp?.component}
        </div>
    )
}

export default DashNav