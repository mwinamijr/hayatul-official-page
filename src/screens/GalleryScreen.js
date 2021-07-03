import React from 'react'
import { Link } from 'react-router-dom'
import Message from '../components/Message'

function GalleryScreen() {
    return (
        <div>
            <div className="p-4 p-md-5 mb-4 text-black rounded bg-light">
            <Link to="/" className='btn btn-light my-3'>Go Back</Link>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 px-0">
                    <p className="lead my-3">
                        <Message variant="success">Gallery will be available SOON!!!!!!!</Message>
                    </p>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default GalleryScreen
