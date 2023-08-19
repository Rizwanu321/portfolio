import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <section id="resume">
    <div
      className="container lg:pt-5"
    >
      <div className='flex flex-col justify-center sm:py-12'>
        <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* =================verticle line through the middle=============== */}
            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* =================left card========== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">

                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className='bg-white p-4 rounded shadow group hover:bg-smallTextColor cursor-pointer ease-in duration-150'
                           data-aos='fade-right'
                           data-aos-duration='1200'
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                            MSc Computer Science
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600]">
                           Pondicherry University<br/>
                           (2021-23)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-8 h-8 absolute left-1/2 transform
                       -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  </div>

                </div>
              </div>
  
            {/* =================right card========== */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">

                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className='bg-white p-4 rounded shadow group hover:bg-smallTextColor cursor-pointer ease-in duration-150'
                           data-aos='fade-left'
                           data-aos-duration='1300'
                           data-aos-delay="50"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                            BSc Computer Science
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600]">
                           University Of Calicut<br/>
                           (2018-21)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-8 h-8 absolute left-1/2 transform
                       -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  </div>

                </div>
            </div>

            {/* =================left card========== */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">

                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className='bg-white p-4 rounded shadow group hover:bg-smallTextColor cursor-pointer ease-in duration-150'
                           data-aos='fade-right'
                           data-aos-delay="100"
                           data-aos-duration='1400'
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                            Higher Secondary
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600]">
                           S.V.H.S.S Palemad<br/>
                           (2016-18)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-8 h-8 absolute left-1/2 transform
                       -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  </div>

                </div>
              </div>

          </div>
          
        </div>
      </div>
 


    </div>
    </section>
  );
}

export default Education