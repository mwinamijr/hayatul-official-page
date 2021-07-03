import React from 'react'
import { Link } from 'react-router-dom'
import Message from '../../components/Message'


function NextProgress() {
    return (
        <div>
            <div className="p-4 p-md-5 mb-4 text-black rounded bg-light">
            <Link to="/health/" className='btn btn-light my-3'>Go Back</Link>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 px-0">
                    <h1 className="display-4 fst-italic">Hatua inayofuata</h1>
                    <p className="lead my-3">M
                        <Message variant="danger">Taarifa hizi zitawekwa muda mfupi ujao</Message>
                    </p>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default NextProgress
