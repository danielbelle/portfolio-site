import React, { useState, useEffect } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    text: '',
  });

  const handleFormEdit = async (event, name) => {
    try {
      event.preventDefault();
      const response = await fetch('LOCAL NO BACK', {
        method: POST,
        body: JSON.stringify(formData)
      });

      const json = await response.json();

    } catch (error) {

    }
  }


  return (
    <section id='contact' className='pb-16'>
      <div className='container'>
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
          Get in touch
        </h2>
        <div className='md:flex justify-between items-center'>
          <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
            <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14145.292284065736!2d-48.54963182924121!3d-27.58351174217983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273816b92d1303%3A0x8e51529bcc5674b1!2sBeiramar%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1692107705438!5m2!1spt-BR!2sbr"
              className='border-0 w-full h-full'
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form className='w-full'>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                  value={formData.name}
                  onChange={(e) => { handleFormEdit(e, 'name') }}
                />
              </div>

              <div className='mb-5'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                  value={formData.email}
                />
              </div>

              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Subject'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                  value={formData.subject}
                />
              </div>

              <div className='mb-5'>
                <textarea
                  type='text'
                  rows={3}
                  placeholder='Write your message'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                  required
                  value={formData.text}
                />
              </div>

              <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact