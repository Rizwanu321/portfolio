import React from 'react'
import portfolios from './portfolioData'

const Modal = ({activeID,setShowModal}) => {
    const portfolio = portfolios.find(items => items.id === activeID)
  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40 '>
        <div className=" cert absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform
            -translate-x-1/2 -translate-y-1/2 p-5">
               <div>
                <figure >
                    <img className='cert1 rounded-[8px] max-w-[600px]   max-h-[600px]' src={portfolio.imgUrl} alt="" />
                </figure>
               </div>
               <button onClick={()=>setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem]
                text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>
                    &times;
                </button>
        </div>
    </div>
  )
}

export default Modal