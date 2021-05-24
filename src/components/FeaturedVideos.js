import React from 'react'
import {useVideosContext} from '../context/videos_context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Video from './Video'

const FeaturedVideos = () => {
    // const {
    //     videos_loading: loading,
    //     videos_error: error,
    //     featured_videos: featured,
    // } = useVideosContext()
    // if (loading) {
    //     return <Loading/>
    // }
    // if (error) {
    //     return <Error/>
    // }
    return (
        <Wrapper className='section'>
            <div className='title'>
                <h2>featured videos</h2>
                <div className='underline'></div>
            </div>
            <div>
                <h4 className="text-center">Your video here? Contact me.</h4>
            </div>
            {/*<div className='section-center featured'>*/}
            {/*    {featured.slice(0, 3).map((video) => {*/}
            {/*        return <Video key={video.id} {...video} />*/}
            {/*    })}*/}
            {/*</div>*/}
            <Link to='/videos' className='btn'>
                all videos
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;

    img {
      height: 225px;
    }
  }
  
  h4 {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedVideos
