




import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = async (data) => {
    try {
      emailjs.sendForm('service_vd882dl', 'template_8lkfnri', form.current, 'gk-wfj9sh3FfwWg6j')
      toast.success('Message sent successfully');
      reset();
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  return (
    <section id='contact' className='pb-16'>
      <div className='container'>
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
        <div className='md:flex justify-between items-center'>
          {/* ... Google Maps iframe ... */}
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.465911190728!2d76.27633808748945!3d11.
                266422052881682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba625f96483e2fd%3A0xe0bdb544d390627b!2sSal
                afi%20Masjid%20Kootampara!5e0!3m2!1sen!2sin!4v1691654010039!5m2!1sen!2sin" className='border-0 w-full h-full'
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form className='w-full' ref={form} onSubmit={handleSubmit(sendEmail)}>
              <div className='mb-5'>
                <input
                  type='text'
                  required
                  {...register('from_name', { required: true })}
                  placeholder='Enter your name'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
                {errors.from_name && <span>This field is required</span>}
              </div>
              <div className='mb-5'>
                <input
                  type='text'
                  required
                  {...register('from_email', { required: true })}
                  placeholder='Enter your email'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
                {errors.from_email && <span>This field is required</span>}
              </div>
              <div className='mb-5'>
                <input
                  type='text'
                  required
                  {...register('subject', { required: true })}
                  placeholder='Subject'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
                {errors.subject && <span>This field is required</span>}
              </div>
              <div className='mb-5'>
                <textarea
                  {...register('message', { required: true })}
                  rows={3}
                  required
                  placeholder='Enter your message'
                  className='w-full p-3 focus:outline-none rounded-[5px]'
                />
                {errors.message && <span>This field is required</span>}
              </div>
              <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>
                Send Message
              </button>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
