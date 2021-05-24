import React from 'react'
import styled from 'styled-components'
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const ListView = ({ videos }) => {
  return (
    <Wrapper>
      {videos.map((video) => {
        const { ytId, title, channel } = video
        return (
          <article key={ytId}>
            <LiteYouTubeEmbed
                id={ytId}
            />
            <div>
              <h4>{title}</h4>
              <h4>{channel}</h4>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .yt-lite {
    border: 2px solid #203647;
    background-color: #000;
    position: relative;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .yt-lite::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }

  .yt-lite > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  /* play button */
  .yt-lite > .lty-playbtn {
    width: 70px;
    height: 40px;
    background-color: #000;
    z-index: 1;
  }

  .yt-lite:hover > .lty-playbtn {
    background-color: #212121;
    opacity: 1;
  }

  /* play button triangle */
  .yt-lite > .lty-playbtn:before {
    content: '';
    border-style: solid;
    border-width: 11px 0 11px 19px;
    border-color: transparent transparent transparent #fff;
  }

  .yt-lite > .lty-playbtn,
  .yt-lite > .lty-playbtn:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  /* Post-click styles */
  .yt-lite.lyt-activated {
    cursor: unset;
  }

  .yt-lite.lyt-activated::before,
  .yt-lite.lyt-activated > .lty-playbtn {
    opacity: 0;
    pointer-events: none;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
