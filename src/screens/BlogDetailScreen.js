import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listArticleDetails, deleteArticle } from '../store/actions/articlesActions'
import {Image} from 'react-bootstrap'


function BlogDetailScreen({ match, history }) {
    const dispatch = useDispatch()
    const articleDetails = useSelector(state => state.articleDetails)
    const { loading, error, article } = articleDetails
    
    useEffect(() => {
      dispatch(listArticleDetails(match.params.id))
    }, [ dispatch, match ])

    return (
        <div>
            <Link to="/blogu/" className='btn btn-light my-3'>Go Back</Link>
            <div>
              {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
                      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                        <div className="col-md-6 px-0">
                          <h1 className="display-4 fst-italic">{ article.title }</h1>
                          <p className="lead my-3">{ article.content }</p>
                        </div>
                      </div>
                      )}
             </div>
                    
        </div>
    )
}

export default BlogDetailScreen
