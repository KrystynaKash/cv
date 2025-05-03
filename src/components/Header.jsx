import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCity, FaRocket, FaHome } from 'react-icons/fa';

function Header() {
  return (
    <div className="navbar1">
      <Link to="/" title="Головна"><FaHome /> Головна</Link>
      <Link to="/about" title="Інформація про мене"><FaUser /> Про мене</Link>
      <Link to="/my-city" title="Інформація про моє місто"><FaCity /> Моє місто</Link>
      <Link to="/my-future" title="Мрії та плани"><FaRocket /> Майбутнє</Link>
    </div>
  );
}

export default Header;

