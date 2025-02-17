import React from 'react';
import { CONTACT } from '../Constants';
import { motion } from 'framer-motion';

const Contact = () => {
 
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ba02b664-c4d2-43b2-9aa7-c16121884043");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-5xl text-blue-300'
      >
        Get in touch
      </motion.h1>

      <div className='text-center tracking-tight'>
        <p className='text-2xl font-semibold'>
          📞 Phone:{' '}
          <a href={`tel:${CONTACT.phone}`} className='hover:text-blue-600'>
            {CONTACT.phone}
          </a>
        </p>
        <p className='text-2xl font-semibold font-poppins'>
          📧 Email:{' '}
          <a href={`mailto:${CONTACT.email}`} className='hover:text-blue-600'>
            {CONTACT.email}
          </a>
        </p>
        <p className='my-4 text-2xl font-medium'>📍 Location: {CONTACT.location}</p>
      </div>

      {/* Form Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className='max-w-2xl mx-auto mt-10 p-6 bg-neutral-900 rounded-lg shadow-lg'
      >
        <h2 className='text-3xl text-blue-300 font-semibold mb-6'>Send a Message</h2>
        <form className='space-y-6' onSubmit={onSubmit}>
          <div>
            <label htmlFor='name' className='block text-lg text-neutral-300 mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your name'
              className='w-full px-4 py-2 bg-neutral-800 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-lg text-neutral-300 mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your email'
              className='w-full px-4 py-2 bg-neutral-800 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <div>
            <label htmlFor='message' className='block text-lg text-neutral-300 mb-2'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='5'
              placeholder='Your message'
              className='w-full px-4 py-2 bg-neutral-800 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors'
          >
            Send Message
          </button>
          <span>{result}</span>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;