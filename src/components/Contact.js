import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ym6x66r', 'template_6wew89d', form.current, 'uiW3ZIxttbFjq5HCz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
  return (
    <section>
        <div className='container-contact-form'>
            <h2 ref={form} onSubmit={sendEmail} className='text-center mt-4 mb-4'> Contact Me</h2>
            <form className='form-control card pt-2 pb-2 mx-auto text-center'>
                <input type='text' placeholder='Full Name Please' name='user_name' required/>
                <input type='email' placeholder='email123@mail.com' name='user_email' required/>
                <input type='text' placeholder='Leave a message!' name='subject' required/>
                <textarea name='message' cols='20' rows='10'></textarea>
                <button className='btn'>Send Email</button>
            </form>

        </div>
    </section>
    
  )
}

export default Contact