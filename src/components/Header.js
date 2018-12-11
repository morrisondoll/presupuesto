import React from 'react';

const Header = (props) => {
  return (
    <header className="bit-col-100 bg-blue text-center">
      <h1>{props.titulo}</h1>
    </header>
  );
}

export default Header;