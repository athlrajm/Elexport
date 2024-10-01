// rsfce
import React from 'react';
import './aboutCountry.css';

function AboutCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text">
        <div className='child1'>
          <p>High-quality education system and the availability of a wide range of programs...</p>
        </div>
        <div className='child2'>
          <p>High-quality education system and the availability of a wide range of programs...</p>
        </div>
        <div className='child3'>
          <p>High-quality education system and the availability of a wide range of programs...</p>
        </div>
        <div className='child4'>
          <p>High-quality education system and the availability of a wide range of programs...</p>
        </div>
        <div className='child5'>
          <p>High-quality education system and the availability of a wide range of programs...</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCountry;
