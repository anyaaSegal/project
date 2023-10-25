import {useRef} from 'react';

export default function Contact() {
    const form = useRef()

    const sendEmail = () => {}; // still need to finish function and Email.js
  return (
    <section>
      <div className='contact-container'>
        <h2 className='text-center'> Contact Us </h2>
        <form ref={form} onSubmit={sendEmail} className='form-control-card'>
          <input type='text' placeholder='Full Name' name='user_name' required />
          <input type='email' placeholder='Email' name='user_email' required />
          <input type='text' placeholder='Subject' name='subject' required />
          <textarea name='message' placeholder="Penny for your thoughts..." cols='30' rows='10'></textarea>
          <button type='submit' className='button'> Send Message </button>
        </form>
      </div>
    </section>
  )
};