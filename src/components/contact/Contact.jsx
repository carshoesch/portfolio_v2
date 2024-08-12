import React from "react";
import "./styles.scss";
import { ReactComponent as EmailIcon } from "../../assets/img/email.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/img/logo--linkedin.svg";
import { ReactComponent as XingIcon } from "../../assets/img/logo--xing.svg";

const Contact = () => {
    const socials = [
        {
            name: "LinkedIn",
            Icon: LinkedInIcon,
            url: "https://www.linkedin.com/in/carsten-h%C3%B6schele-958882270/",
        },
        {
            name: "Xing",
            Icon: XingIcon,
            url: "https://www.xing.com/profile/Carsten_Hoeschele2/web_profiles?expandNeffi=true",
        },
    ];
    return (
        <div className="contactWrapper" id="contact">
            <section className="contact">
                <div className="contact__description">
                    <h2>Contact</h2>
                    <p className="contactTxt">
                        I am currently looking for new opportunities and would love to hear
                        from you. Please feel free to reach out.
                    </p>
                    {/*socials*/}
                    <div className="social-links">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.Icon className="social-icon" />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
