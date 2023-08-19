import React,{useState,useEffect} from 'react'
import data from './portfolioData'
import Modal from './Modal'

const Achievement = () => {
  const [nextItems, setNextItems] = useState(6)
  const [portfolios, setPortfolios] = useState(data)
  const [showModal, setShowModal] = useState(false)
  const [activeID,setActiveID] = useState(null)

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3)
  }
  const showModalHandler = id => {
    setShowModal(true)
    setActiveID(id)
  }

  return (
    <section id="portfolio">
        <div className="container">
            <div className='flex items-center justify-between flex-wrap'>
                <div className='mb-7 sm:mb-0'>
                    <h3 className='text-headingColor text-[2rem] font-[700]'>
                        My Certificates
                    </h3>
                </div>


            </div>

            <div className='flex items-center justify-center gap-4 flex-wrap mt-12'>
                {portfolios.slice(0,nextItems).map((portfolio,index)=>(
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="50"
                            className="group  sm:w-[48.5%] lg:w-[32.2%] md:w-[31.8%] relative z-[1]">
                            <figure>
                                <img className='rounded-[8px]  w-[300px] h-[300px]' src={portfolio.imgUrl} alt="" />

                            </figure>
                            <div className=' w-[300px] h-[300px] bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5]
                                    hidden group-hover:block'>
                                        <div className='w-full h-full flex items-center justify-center'>
                                            <button onClick={()=>showModalHandler(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4
                                                    rounded-[8px] font-[500] ease-in duration-200'>
                                                See Details
                                            </button>
                                        </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className='text-center mt-6'>
                {nextItems < portfolios.length && data.length > 6 && 
                <button onClick={loadMoreHandler} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4
                         rounded-[8px] font-[500] ease-in duration-200'>
                        Load More
                </button>}
            </div>

        </div>
        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  )
}

export default Achievement;
