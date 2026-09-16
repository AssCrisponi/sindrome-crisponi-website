import React from 'react';

const NavButton = ({ children, onClick, className }) => {
  return (

    <button onClick={onClick}  className={className}>
      {children}
    </button>
  );
};

export default NavButton;