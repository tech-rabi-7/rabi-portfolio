import { MdArrowOutward, MdCopyright } from "react-icons/md";
import Marquee from "react-fast-marquee";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    // Animate title from bottom
    contactTimeline.fromTo(
      ".contact-section h3",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Animate contact boxes with stagger from bottom
    contactTimeline.fromTo(
      ".contact-box",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.4"
    );

    // Clean up
    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      {/* Sliding Name Banner (Work-style horizontal slide) */}
      <div className="contact-name-slider" data-cursor="disable">
        <Marquee speed={65} gradient={false} pauseOnHover={false}>
          <div className="contact-slider-track">
            <span className="contact-slider-text contact-slider-glow">{config.developer.fullName.toUpperCase()}</span>
            <span className="contact-slider-dot">✦</span>
            <span className="contact-slider-text contact-slider-stroke">SOFTWARE ENGINEER</span>
            <span className="contact-slider-dot">✦</span>
            <span className="contact-slider-text contact-slider-glow">{config.developer.fullName.toUpperCase()}</span>
            <span className="contact-slider-dot">✦</span>
            <span className="contact-slider-text contact-slider-stroke">BACKEND &amp; SYSTEMS</span>
            <span className="contact-slider-dot">✦</span>
          </div>
        </Marquee>
        <Marquee speed={45} direction="right" gradient={false} pauseOnHover={false}>
          <div className="contact-slider-track contact-slider-track-sub">
            <span className="contact-slider-sub">DISTRIBUTED ARCHITECTURES</span>
            <span className="contact-slider-sub-dot">•</span>
            <span className="contact-slider-sub">ALGORITHMIC OPTIMIZATION</span>
            <span className="contact-slider-sub-dot">•</span>
            <span className="contact-slider-sub">SIMPSOFT INTERN</span>
            <span className="contact-slider-sub-dot">•</span>
            <span className="contact-slider-sub">ROUTERANKER &amp; DSA</span>
            <span className="contact-slider-sub-dot">•</span>
          </div>
        </Marquee>
      </div>

      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                {config.contact.email}
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span>{config.social.location}</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={config.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href={config.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href={config.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{config.developer.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
