import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className='main-footer mb-5'>
                <div>
                    <p className='text-2xl text-red-700 mb-2'>
                        Adalia Agency
                    </p>
                    <p className='font-bold'>
                        email
                    </p>
                    <p className='font-medium text-2xl text-red-700'>
                        0290349023
                    </p>
                </div>
                <div>
                    <p className='text-xl font-bold text-red-700 mb-2'>
                        Servislər
                    </p>
                    <div class="item-box">
                        <p>
                            Website Design
                        </p>
                        <p>
                            Google Ads
                        </p>
                        <p>
                            Social Media
                        </p>
                        <p>
                            Video Marketing
                        </p>
                        <p>
                            Search Engine
                        </p>
                        <p>
                            1v1 Marketing
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-xl font-bold text-red-700 mb-2'>
                        Qısa Yollar
                    </p>
                    <div class="item-box">
                        <p>
                            Home
                        </p>
                        <p>
                            About
                        </p>
                        <p>
                            Blog
                        </p>
                        <p>
                            Contact us
                        </p>
                        <p>
                            Service Areas
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-xl font-bold text-red-700 mb-2'>
                        Ünvan
                    </p>
                    <div class="address-box">
                        <p class="address-text">
                            100 Van Ness Ave
                            Suite 2213
                            San Francisco, CA 94102
                            Open 24 hours
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-xl font-bold text-red-700 mb-2'>
                        Sosial şəbəkələr
                    </p>
                    <div class="social-links">
                        <a id='fb-icon'>
                            <FaFacebookF />
                        </a>
                        <a id='tw-icon'>
                            <FaTwitter />
                        </a>
                        <a id='ins-icon'>
                            <FaInstagram />
                        </a>
                        <a id='ln-icon'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <hr class="line"></hr>
            <div className='bottom-footer pt-2 px-2'>
                <p className='font-bold'>
                </p>
                <p className='font-bold'>
                </p>
            </div>
        </div>
    )
}

export default Footer