import React from 'react'
import styled from 'styled-components'
import Video from './Video'

const GridView = ({ videos }) => {
  return (
    <Wrapper>
      <div className='videos-container'>
        {videos.map((video) => {
          return <Video key={video._id} {...video} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .videos-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .videos-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .videos-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
