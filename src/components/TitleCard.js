import React from 'react'

const TitleCard = ({ data}) => {
  return (
    <>
        {console.log(data.backdrop_path)}
        <div className='card'>
            <img src={"https://image.tmdb.org/t/p/w500/"+data.backdrop_path} alt='name' />
          <div className='info'>
            <p>{data.title}</p>
          </div>
        </div>
    </>
  )
}

export default TitleCard