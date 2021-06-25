import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listArticles, deleteArticle, createArticle } from '../store/actions/articlesActions'

function BlogScreen({ history, match }) {

  const dispatch = useDispatch()

  const articleList = useSelector(state => state.articleList)
  const { loading, error, articles } = articleList

  const articleDelete = useSelector(state => state.articleDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = articleDelete

  const articleCreate = useSelector(state => state.articleCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, article: createdArticle } = articleCreate

  useEffect(() => {
    dispatch(listArticles)
    console.log("Articles: ", articleList)
  }, [dispatch,])

  return (
      <div>
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            <p className="lead mb-0"><Link to="#"   className="text-white fw-bold">Continue reading...</Link></p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <Link to="#"   className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <Link to="#"   className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>

            <div className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">January 1, 2021 by <Link to="#"  >Mark</Link></p>

              <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
              <hr />
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h2>Blockquotes</h2>
              <p>This is an example blockquote in action:</p>
              <blockquote className="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h3>Example lists</h3>
              <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
              <p>And this is an ordered list:</p>
              <ol>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ol>
              
              <h2>Heading</h2>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h3>Sub-heading</h3>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <pre><code>Example code block</code></pre>
              <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
            </div>
          
          </div>
          <div className="col-md-4">
            <div className="position-sticky">
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li><Link to="#"  >March 2021</Link></li>
                  <li><Link to="#"  >February 2021</Link></li>
                  <li><Link to="#"  >January 2021</Link></li>
                  <li><Link to="#"  >December 2020</Link></li>
                  <li><Link to="#"  >November 2020</Link></li>
                </ol>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li><Link to="#"  >Instagram</Link></li>
                  <li><Link to="#"  >Twitter</Link></li>
                  <li><Link to="#"  >Facebook</Link></li>
                  <li><Link to="#"  >Youtube</Link></li>
                </ol>
              </div>
            </div>
          </div>
        </div>


      </div>
  )
}

export default BlogScreen
