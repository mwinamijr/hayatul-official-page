import React from 'react'
import { Link } from 'react-router-dom'

function LongerPost() {
    return (
        <div>
            <div className="p-4 p-md-5 mb-4 text-black rounded bg-light">
            <Link to="/blog/" className='btn btn-light my-3'>Go Back</Link>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 px-0">
                    <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
                    Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
                    </p>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default LongerPost
