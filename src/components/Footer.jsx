import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p> 
        <a href="https://github.com/KrystynaKash" target="_blank" rel="noreferrer" title="GitHub">
          <FaGithub /> GitHub
        </a> | 
        krystynakash@gmail.com
      </p>
      <p>© {year} Христина Каштанова</p>
    </footer>
  );
}

export default Footer;
