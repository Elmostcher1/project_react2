import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ButtonTop = () => {
  const [Top, setTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    Top && (
      <button className='btn_top' onClick={scrollToTop}       
      style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
        }}>
       <FaArrowUp /> 
      </button>
    )
  );
};


export default ButtonTop;

