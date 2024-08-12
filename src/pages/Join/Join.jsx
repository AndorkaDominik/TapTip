import React from 'react'
import "./Join.css"
import { Link } from 'react-router-dom';
import discordLogo from '../../assets/Logos/discord.svg';
import communityImg from '../../assets/community.png';
import logo from "../../assets/logo.svg";

const Join = () => {
  return (
        <div className="join-community-page">
          <section className="intro-section">
            <div className="intro-content">
              <h1>Join Our <span>Developer Community</span> on Discord</h1>
              <p>Connect, collaborate, and grow with fellow developers in our vibrant Discord community. Whether you're a seasoned pro or just starting, you'll find valuable resources, support, and friendships here.</p>
              <img src={communityImg} alt="Community" draggable="false" />
            </div>
          </section>

          {/* Why Join Us Section */}
          <section className="why-join-section">
            <h2>Why <span>Join Us</span>?</h2>
            <div className="reasons-container">
              <div className="reason-card">
                <img src={discordLogo} alt="Discord" />
                <h4>Real-time Collaboration</h4>
                <p>Work on projects, share your progress, and get instant feedback from a community of like-minded developers and contributors.</p>
              </div>
              <div className="reason-card">
                <img src={logo} alt="Discord" />
                <h4>Exclusive Content</h4>
                <p>Access to exclusive tutorials, coding challenges, and live events tailored for our community members on this server.</p>
              </div>
              <div className="reason-card">
                <img src={discordLogo} alt="Discord" />
                <h4>Networking Opportunities</h4>
                <p>Expand your professional network, meet potential collaborators, and land job opportunities through our community.</p>
              </div>
            </div>
          </section>


          {/* How to Get Started Section */}
          <section className="get-started-section">
            <h2>How to <span>Get Started</span> </h2>
            <p>Joining is easy! Just follow these steps:</p>
            <ol>
              <li><strong>Sign Up:</strong> If you don't already have a Discord account, create one for free.</li>
              <li><strong>Click the Link:</strong> Use the invite link below to join our server.</li>
              <li><strong>Introduce Yourself:</strong> Head over to the introduction channel and tell us a bit about yourself!</li>
            </ol>
            <div className="btn-container">
              <a href="https://discord.com/invite/your-server-invite-link" target="_blank" rel="noopener noreferrer" className="cta">Join Discord</a>
              <Link to="/" className="cta-secondary">Return Home</Link>
            </div>
          </section>


          {/* Testimonials Section */}
          <section className="testimonials-section">
            <h2>What Our <span>Members Say</span></h2>
            <div className="testimonials-container">
              <div className="testimonial-card">
                <p>"This community has completely transformed my learning journey. The support and resources available here are unmatched!"</p>
                <h4>- Jane Doe</h4>
              </div>
              <div className="testimonial-card">
                <p>"Joining this Discord server was the best decision I made as a developer. The networking opportunities are fantastic!"</p>
                <h4>- John Smith</h4>
              </div>
              <div className="testimonial-card">
                <p>"The exclusive content and real-time collaboration have helped me grow both personally and professionally."</p>
                <h4>- Emily Davis</h4>
              </div>
            </div>
          </section>


          {/* FAQs Section */}
          <section className="faqs-section">
            <h2><span>F</span>requently <span>A</span>sked <span>Q</span>uestions</h2>
            <div className="faqs-container">
              <div className="faq-item">
                <h4>Is this community free to join?</h4>
                <p>Yes, joining our community on Discord is completely free. We welcome developers of all levels to participate.</p>
              </div>
              <div className="faq-item">
                <h4>What if I’m new to programming?</h4>
                <p>No worries! Our community is very supportive, and we have resources specifically for beginners.</p>
              </div>
              <div className="faq-item">
                <h4>How active is the community?</h4>
                <p>Our community is very active with members from around the globe, so you'll always find someone online to chat with or collaborate on projects.</p>
              </div>
            </div>
          </section>
        </div>
  )
}

export default Join;
