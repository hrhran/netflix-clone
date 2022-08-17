import React, {useEffect, useRef} from 'react'
import axios from 'axios'
import TitleCard from './TitleCard';
import CoverLogo from'../media/spiderman-logo.png';
import CoverBanner from'../media/spiderman.png';
import CoverTeaser from '../media/cover-teaser.mp4'
import {ReactComponent as PlayIcon} from '../media/play.svg'
import {ReactComponent as InfoIcon} from '../media/info.svg'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles } from '../redux/actions/titleActions';

const Home = () => {
  const dispatch = useDispatch()
  const video = useRef()
  const image = useRef()
  const titles = useSelector(state => state.titles.results)
  console.log(titles)

  const endHandler = () => {
    video.current.style.display = 'none';
    image.current.style.display = 'inline';
  }

  useEffect(() => {
    dispatch(fetchTitles())
  }, [])
  return (
    <div className='home'>
      <div className='cover'>
        <img src={CoverBanner} ref={image} className='cover-banner image' alt='cover-banner' />
        <video ref={video} autoPlay muted onEnded={endHandler} className='cover-banner video'>
            <source src={CoverTeaser} type="video/mp4" />
        </video>
        <div className='cover-items'>
          <img src={CoverLogo} className='cover-logo' alt='cover-logo' />
          <div className='cover-info'>
            <p>Peter Parker seeks Doctor Strange's help to make people forget about Spiderman's identity. However, when the spell he casts gets corrupted, several unwanted guests enter their universe.</p>
          </div>
          <div className='cover-btn'>
            <button className='play-btn'><PlayIcon /> Play</button>
            <button className='info-btn'><InfoIcon /> More Info</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='trending'>
          <div className='home-title'>Trending Movies</div>
          <div className='titles'>
            {titles?titles.map(title => <TitleCard key={title.id} data={title} />):null}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home