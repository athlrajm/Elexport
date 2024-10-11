import React from 'react'
import './aboutCountry5.css'

function AboutCountry5(props) {
    const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text">
        <div className='child1'>
          <p>France is home to top-ranked institutions like Sorbonne University and École Polytechnique</p>
        </div>
        <div className='child2'>
          <p>Universities offer a wide variety of programs to suit international students career goals..</p>
        </div>
        <div className='child3'>
          <p>France offers affordable tuition fees with plenty of scholarships available for international students.</p>
        </div>
        <div className='child4'>
          <p>Learning French can enhance your cultural experience and career prospects globally.</p>
        </div>
        <div className='child5'>
          <p> France offering a wide range of English-taught programs.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCountry5