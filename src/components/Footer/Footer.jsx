import React from 'react';
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaPinterest, FaBehance } from 'react-icons/fa';
import {Bio} from '../resume/portfolioData'

const Footer = () => {
  return (
    <div className='footer bg-black section-p flex items-center justify-center' id = "footer">
        <div className='container '>
            <div className='section-title flex items-center justify-center'>
                <h3 className='text-white'>Follow <span className='text-white'>Me</span></h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c justify-center'>
                    <li>
                        <a href = {Bio.github}className='text-white'>
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href = {Bio.linkedin} className='text-white'>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href = {Bio.insta} className='text-white'>
                            <FaInstagram />
                        </a>
                    </li>
                   
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text '>All Rights Reserved &copy; 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Footer