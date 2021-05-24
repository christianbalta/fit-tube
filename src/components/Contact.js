import React from 'react'
import styled from 'styled-components'
import {useForm, ValidationError} from "@formspree/react";

const Contact = () => {

  function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);
    if (state.succeeded) {
      return <p>Thanks for your message!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
          />
          <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
          />
          <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="form-input"
          />
          <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="submit-btn">
            Submit
          </button>
        </form>
    );
  }

  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Leave me a message</h3>
        <div className='content'>
          <p>
            Do you miss your favorite Youtube-Channel or do you have any recommendations? Feel free to leave me a message.
          </p>
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-gap: 10px;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
