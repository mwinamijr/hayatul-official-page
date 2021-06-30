import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listArticles, deleteArticle, createArticle } from '../store/actions/articlesActions'
import {Image} from 'react-bootstrap'

function BlogScreen({ history, match }) {

  const dispatch = useDispatch()

  const articleList = useSelector(state => state.articleList)
  const { loading, error, articles } = articleList
  /*
  const articleDelete = useSelector(state => state.articleDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = articleDelete

  const articleCreate = useSelector(state => state.articleCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, article: createdArticle } = articleCreate
*/

  useEffect(() => {
    dispatch(listArticles())
  }, [dispatch,])

  return (
    <div>
      { loading 
        ? (<Loader />)
        : error
          ? (<Message variant='danger'>{error}</Message>)
          : (

              <div>
                <div className="row p-4 p-md-5 mb-4 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p className="lead mb-0"><Link to="/longer-post/"   className="text-white fw-bold">Continue reading...</Link></p>
                  </div>
                  <div className="col-md-5 px-o">
                  <Image src="images/hic-logo.png" alt="hayatul complex logo" className="float-right" width="300" thumbnail />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">Elimu</strong>
                        <h3 className="mb-0">Mkakati wa elimu</h3>
                        <div className="mb-1 text-muted">June 30, 2021</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/ed-program/"   className="stretched-link">Continue reading</Link>
                      </div>
                      <div className="col-auto d-none d-lg-block">
                        <div className="row">
                        <Image src="images/hic-logo.png" alt="hayatul complex logo" width="150" thumbnail /> 
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Afya</strong>
                        <h3 className="mb-0">Ujenzi wa zahanati</h3>
                        <div className="mb-1 text-muted">Nov 11, 2020</div>
                        <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/health-program/"   className="stretched-link">Continue reading</Link>
                      </div>
                      <div className="col-auto d-none d-lg-block">
                      <div className="row">
                        <Image src="images/hic-logo-2.png" alt="hayatul complex logo" width="150" thumbnail /> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-md-8">
                    <h3 className="pb-4 mb-4 fst-italic border-bottom">
                      Habari mpya
                    </h3>

                    {articles .map(article => (
                      <div>
                      {
                        (article.picture) != null
                          ?
                          <span>
                            <div key={article.id} className='row'>
                              <div className="col-md-8">
                                <div className="blog-post">
                                  <h2 className="blog-post-title">{ article.title }</h2>
                                  <p className="blog-post-meta">January 1, 2021 by <Link to="#">Mark</Link></p>
    
                                  <p>{ article.content }</p>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <Image src={article.picture} alt={article.title} thumbnail />
                              </div>
                              <hr />
                            </div>
                          </span>

                          :
                          <span>
                            <div key={article.id} className='row'>
                              <div className="col-md-12">
                                <div className="blog-post">
                                  <h2 className="blog-post-title">{ article.title }</h2>
                                  <p className="blog-post-meta">January 1, 2021 by <Link to="#">Mark</Link></p>
    
                                  <p>{ article.content } <Link to="#">Read more ......</Link></p>
                                </div>
                              </div>
                            </div>
                          </span>
                      } 

                      </div>
                    ))}

                  </div>
                </div>
              </div>
          )}
    </div>
  )
}

export default BlogScreen
