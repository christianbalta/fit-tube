import React from 'react'
import styled from 'styled-components'
import { Filters, VideoList, Sort, PageHero } from '../components'

const VideosPage = () => {
  return (
    <main>
      <PageHero title='videos' />
      <Wrapper className='page'>
        <div className='section-center videos'>
          <Filters />
          <div>
            <Sort />
            <VideoList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .videos {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .videos {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default VideosPage
