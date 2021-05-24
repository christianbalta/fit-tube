import React from 'react'
import styled from 'styled-components'
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Video = ({ ytId, channel }) => {
  return (
    <Wrapper>
      <div className='container'>
          <LiteYouTubeEmbed
              id={ytId}
          />
      </div>
      <footer>
        <h5>{channel}</h5>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
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
`
export default Video
