import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaInbox, FaSignOutAlt, FaLink } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="logo" />
                    <span>amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact US</span>
                        <span className={css.pngLine}>
                            <FaLocationDot className={css.icon} />
                            <span>111 north avenue Orlando, FL 32801</span>
                        </span>
                        <span className={css.pngLine}>
                            <FaPhoneAlt className={css.icon} />
                            <span>352-306-4415</span>
                        </span>
                        <span className={css.pngLine}>
                            <FaInbox className={css.icon} />
                            <span>support@amazon.com</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <FaSignOutAlt className={css.icon} />
                            <span>Sign in</span>
                        </span>

                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <IoPeople className={css.icon} />
                            <span>Sign in</span>
                        </span>

                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <FaLink className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>

                    </div>
                </div>
            </div>
            <div className={css.copy}>
                <span>© 2021 Amazon. All rights reserved.</span>

            </div>
        </div>
    )
}

export default Footer
