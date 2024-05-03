import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'


const Newsboard = ({category}) => {
    let [articles,setarticles]=useState([])
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b5215c6d3ec74790804cb2ecac30690b`
        fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles))
    },[category])
   
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-evenly'>

    
        <h1 className='text-center mt-5 mb-5 '>Latest <span className='badge bg-danger'>News</span></h1>
        {articles.map((news,index)=>{
            return <Newsitem key={index} id={index+1}  title={news.title} desciption={news.description} image={news.urlToImage} url={news.url} />
        })}
            </div>
       </div>
      
    </div>
  )
}

export default Newsboard