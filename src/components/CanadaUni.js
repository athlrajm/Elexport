import React from 'react'

import CanadaImg from './assets/canada1.jpg';
import Canada2 from './assets/canada2.jpg';
import uni1 from './assets/1University of Manitoba.jpg';
import uni2 from './assets/University of Waterloo.png';
import uni3 from './assets/Lakehead University.jpg';
import uni4 from './assets/University of Regina.jpg';
import uni5 from './assets/cape breton uc.jpg';
import uni6 from './assets/CONESTOGA.jpg';
import uni7 from './assets/FANSHAWE.jpg';
import uni8 from './assets/GEORGIAN.jpeg';
import uni9 from './assets/CENTENNIAL COLLEGE.jpg';
import uni10 from './assets/SHERIDAN.jpg';
import uni11 from './assets/Niagra College.webp';
import uni12 from './assets/FLEMING.jpeg';
import CountryHome2 from './UniversitiesContainer/countryHome/CountryHome2';
import AboutCountry2 from './UniversitiesContainer/aboutCountry/AboutCountry2';
import PopUniversities2 from './UniversitiesContainer/popUniversities/PopUniversities2';
import PopCourses2 from './UniversitiesContainer/popCourses/PopCourses2';
function CanadaUni() {
  return (
    <div> <CountryHome2 rel_country_img = {CanadaImg} rel_country_name = "CANADA" img_dec_prop = ""/>
    <AboutCountry2 rel_country_flag = {Canada2} here_we_go_again = ""/> 
    <PopUniversities2 pop_uni_img1 = {uni1} pop_uni1 = "University of Manitoba " pop_uni_img2 = {uni2} pop_uni2 = "University of Waterloo" pop_uni_img3 = {uni3} pop_uni3 = "Lakehead University" pop_uni_img4 = {uni4} pop_uni4 = "University of Regina" pop_uni_img5 = {uni5} pop_uni5 = "Cape Breton University" pop_uni_img6 = {uni6} pop_uni6 = "CONESTOGA " pop_uni_img7 = {uni7} pop_uni7 = "FANSHAWE" pop_uni_img8 = {uni8} pop_uni8 = "GEORGIAN" pop_uni_img9 = {uni9} pop_uni9 = "CENTENNIAL COLLEGE"  pop_uni_img10 = {uni10} pop_uni10 = "SHERIDAN"  pop_uni_img11 = {uni11} pop_uni11 = "Niagra College" pop_uni_img12 = {uni12} pop_uni12 = "FLEMING"/>    
    <PopCourses2 /> </div>
  )
}

export default CanadaUni