import React from 'react'
import { Route } from 'react-router-dom'
import Students from './Students'

function routes() {
    return (
        <div>
            <Route exact path="/hisms/students" component={Students} />
        </div>
    )
}

export default routes
