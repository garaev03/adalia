import { useState, useEffect } from 'react';
import Loading from "../../components/loading/loading"
import Image2 from '../../image.jpg';
import { Slide } from "react-awesome-reveal";
import './about.css';

function About() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="about-container">
      {
        loading ?
          <Loading /> :
          <div>
            <div class="about-cap">
              <img class="about-cap-image" src={Image2} />

              <div className='about-cap-centered'>
                About Us
              </div>
            </div>

            <div className="about-section">

              <div className="about-text">
                <Slide direction='left' triggerOnce>
                  <h2>We Are A Dynamic Team Of Creative Minds With Relentless Hustle</h2>
                  <p>
                    At Jives Media, we work together as a team with our clients. Our group of award-winning marketers take the time to listen to your unique needs. We enjoy doing the heavy lifting while carrying out a seamless execution for our clients.

                    Run your business smarter with the help of expert in digital marketing & advertising.
                  </p>
                  <button className="about-contact-button border-2 border-red-700 rounded-3xl px-6 py-2">
                    Contact Us
                  </button>
                </Slide>
              </div>
              <div className="about-photo">
                <Slide direction='right' triggerOnce>
                  <img src={Image2} className="rounded-md" alt="About Us" />
                </Slide>
              </div>
            </div>

            <div className="about-section">
              <div className="about-photo mr-5">
                <Slide triggerOnce >
                  <img src={Image2} className="rounded-md" alt="About Us" />
                </Slide>
              </div>
              <div className="about-text ml-5">
                <Slide direction='right' triggerOnce>
                  <h2>We Have Completed Over 5000 Projects Around The Globe</h2>
                  <p>
                    Jives Media is a Marketing Agency Consisting Of Award-Winning Web Designers, Growth Hackers, And MBA Brand Strategists. We decided to bring our unique superpowers together to form one lethal digital marketing team. We help organizations from early stage startups to Fortune 500 corporations meet their marketing goals while serving a wide range of industries including: tech, doctor offices, law firms, government affiliated organizations, hospitals, pharma, retailers, restaurants, e-commerce, cannabis and more. We provide our clients with A-Z marketing solutions that include web design,  search engine marketing (PPC & SEO), social media management, video production, and 1:1 consulting.
                  </p>
                  <button className="about-contact-button border-2 border-red-700 rounded-3xl px-6 py-2">
                    Contact Us
                  </button>
                </Slide>
              </div>
            </div>

          </div>
      }
    </div>
  );
}

export default About;
