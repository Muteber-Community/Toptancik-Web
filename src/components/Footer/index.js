import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';
import logo from '../../images/logomuz.png';
import Scroll from '../ScrollButton/ScrollToTop';

import './footer.css';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <div className='footer-left'>
              <img className='footer-logo' src={logo} alt='' />
              <SocialLogo to='/'> Toptancık</SocialLogo>
            </div>
            <SocialIcons className='social-icons'>
              <SocialIconLink
                href='https://instagram.com/toptancik?igshid=13n0wgijsuymu'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href=''
                target='_blank'
                aria-label='E-Mail'
              >
                <GoMail />
              </SocialIconLink>
              <SocialIconLink
                href=''
                target='_blank'
                aria-label='Whatsapp'
              >
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink
                href=''
                target='_blank'
                aria-label='Phone'
              >
                <FiPhone />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
          <a
            href=''
            className='whatsapp_float'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-whatsapp whatsapp-icon'></i>
          </a>
          <Scroll />
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
