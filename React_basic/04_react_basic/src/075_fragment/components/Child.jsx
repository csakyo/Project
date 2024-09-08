import './Child.css';
import React from 'react';

const Child = () => {
  console.log(React);
  return (
    <React.Fragment>
      <div className='component'>
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
        reprehenderit corrupti architecto veritatis reiciendis similique, quos
        aut libero unde quam earum repellendus officiis odio perspiciatis,
        incidunt impedit nostrum quia iure?
      </p>
    </React.Fragment>
  );
};

export default Child;
