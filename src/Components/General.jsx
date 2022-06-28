import React, { useEffect, useState } from 'react'

const General = () => {
  const [news , setNews] = useState([]);

  const getNews = async () =>{
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b496050f845467abf94ae79f016212c');
    const data = await response.json();
    setNews(data.articles);
  }
  useEffect(()=>{
    getNews();
  },[]);
  return (
    <>
      <div className='mt-5'>
        <p className='h1 text-center'>General News</p>
      </div>
      <div className="container">
        <div className="row">
        {news.map((data)=>{
          return(
            <div className="col-10 col-md-4 mt-5">
              <div className="card">
                  <img src={data.urlToImage} alt="Img" className='card-img-top'  />
                <div className="card-body text-light" style={{background:'grey'}}>
                  <p className='h4'>{data.title}</p>
                  <p>{data.description}</p>
                  <p>{data.author}</p>
                  <a href={data.url} className="btn btn-dark">Read More ..</a>
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
      <br />
    </>
  )
}

export default General