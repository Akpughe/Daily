import React from 'react'
import Nav from './nav'

const layout = ({children}) => {
    return (
        <>
            <Nav/>
                {children}
        </>
    )
}

export default layout
