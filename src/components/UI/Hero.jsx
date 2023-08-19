import React from 'react'
import img1 from './img2.png'
import CountUp from 'react-countup'
import Typed from 'react-typed';
import {Bio} from '../resume/portfolioData'


const Hero = () => {
  return (
    <section className='pt-0 ' id="about">
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* ============= hero left content ============*/}
                <div className='w-full md:basic-1/2'>
                    <h5
                       data-aos="fade-right"
                       data-aos-duration="1500"
                       className='text-headingColor font-[600] text-[16px]'
                    >
                        Hello Welcome
                    </h5>
                    <h1 
                        data-Aos="fade-up"
                        data-aos-duration="1500"
                        className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
                        sm:leading-[46px] mt-5'
                    >
                
                        I'm Rizwanu Rahman <br/>
                        <Typed
                strings={[
                    'Full Stack Developer',
                    'UI/UX Designer',
                    "Programmer"
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop >
                </Typed>
                    </h1>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        data-aos-delay="200"
                        className='flex items-center gap-6 mt-7'
                    >
                        <a href="#">
                            <button 
                                className='bg-primaryColor text-white font-[500] flex items-center gap-2
                                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]' 
                            ><a href={Bio.resume}>
                                Check Resume</a>
                                </button>
                        </a>
                        <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] 
                                border-b border-solid border-smallTextColor'
                        >
                            See Portfolio
                        </a>
                    </div>
                    <p
                        data-Aos="fade-left"
                        data-aos-duration="1500"
                        className='flex gap-2 mt-14 text-headingColor font-[500] text-[15px] sm:pl-14 leading-7 sm:pr-10'
                    >
                        <span>
                            <i class="ri-app-2-line"></i>
                        </span>
                        I'm Rizwanu Rahman, a Full Stack Developer and UI/UX Designer from India, with a postgraduate degree in Computer Science, creating user-friendly websites that
                         look great and work well.                    </p>
                    <div className='flex items-center gap-9 mt-14'> 
                        <span className='text-[15px] text-smallTextColor font-[600]'>
                             Follow me:
                        </span>
                        <span>
                            <a 
                                href={Bio.github}
                                className='text-[18px] text-smallTextColor font-[600]'
                            >
                                <li class="ri-github-line"></li>
                            </a>
                        </span>
                        <span>
                            <a 
                                href={Bio.insta}
                                className='text-[18px] text-smallTextColor font-[600]'
                            >
                                <li class="ri-instagram-line"></li>
                            </a>
                        </span>
                        <span>
                            <a 
                                href={Bio.linkedin}
                                className='text-[18px] text-smallTextColor font-[600]'
                            >
                                <li class="ri-linkedin-line"></li>
                            </a>
                        </span>
                    </div>
                </div>
                {/* ============= hero left end ============*/}
                {/* ============= hero img ============*/}
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center '>
                       <img className='heroimg rounded-full border-8 border-smallTextColor shadow-2xl' src={img1} alt="" />
                    </figure>
                </div> 
                {/* ============= hero img end ============*/}
                {/* ============= hero content right ============*/}
                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                                md:flex-col md:justify-end md:text-end'
                >
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={100} duration={2} suffix='%' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[16px]'>
                            Success Rate
                        </h4>
                    </div>
                    <div className='mb-10'>
                        <h2 className='text-headingColor font-[700] text-[32px]'>
                            <CountUp start={0} end={17} duration={2} suffix='+' />
                        </h2>
                        <h4 className='text-headingColor font-[600] text-[16px]'>
                            Project Completed
                        </h4>
                    </div>
                </div>
                {/* ============= hero content right end ============*/}
            </div>
        </div>
    </section>
  )
}

export default Hero