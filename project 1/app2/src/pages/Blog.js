import React from 'react'
import Header2 from './common/Header2'
import { data } from './common/data'
import { Link } from 'react-router-dom';
const Blog = () => {
    let allblogsdata=data.map((data,inde)=>{
        return(
            <div>
            <p>
                {data.id}
                {data.title}
                {data.body}
            </p>
            <button> <Link to={`/blog/${data.id}`}>Read more</Link> </button>
       </div>
        )
    })
  return (
    <div>
        <Header2></Header2>
    <div>Blog</div>
    <div className='conatiner flex-wrap' >
          
            {allblogsdata}
            
    </div>
    </div>
  )
}

export default Blog