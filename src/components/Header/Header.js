//jshint esversion:9

import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 className='header' data-testid='header-1'>
        {title}
      </h1>
      {/* <h1 className='header' title='cat-header'>
        Cats
      </h1> */}
    </>
  );
}
