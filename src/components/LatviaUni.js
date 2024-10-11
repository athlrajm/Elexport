import React from 'react'
import LatviaImg from './assets/latviaimg.jpg';
import Latvia2 from './assets/latvia2.png';
import uni1 from './assets/kazimieras.jpeg';
import uni2 from './assets/Baltijas Starptautiskā Akadēmija.jpg';
import uni3 from './assets/Tio university of applied sciences.jpg';
import uni4 from './assets/TILBURG UNIVERSITY.jpg';
import uni5 from './assets/Univerza V Mariboru.jpg';
import uni6 from './assets/Vytautas Magnus University.jpg';
import uni7 from './assets/The RISEBA University.jpg';
import uni8 from './assets/Riga Stradins University.jpg';
import uni9 from './assets/Vilnius University.jpg';
import uni10 from './assets/uni10.jpg';
import uni11 from './assets/uni11.jpg';
import uni12 from './assets/uni12.jpg';
import CountryHome3 from './UniversitiesContainer/countryHome/CountryHome3';
import AboutCountry3 from './UniversitiesContainer/aboutCountry/AboutCountry3';
import PopUniversities3 from './UniversitiesContainer/popUniversities/PopUniversities3';
import PopCourses3 from './UniversitiesContainer/popCourses/PopCourses3';
function LatviaUni() {
  return (
    <div> <CountryHome3 rel_country_img = {LatviaImg} rel_country_name = "LATVIA" img_dec_prop = ""/>
    <AboutCountry3 rel_country_flag = {Latvia2} here_we_go_again = ""/> 
    <PopUniversities3 pop_uni_img1 = {uni1} pop_uni1 = "Kazimieras Simonavicius University " pop_uni_img2 = {uni2} pop_uni2 = "Baltijas Starptautiskā Akadēmija" pop_uni_img3 = {uni3} pop_uni3 = "Tio university of applied sciences " pop_uni_img4 = {uni4} pop_uni4 = "TILBURG UNIVERSITY" pop_uni_img5 = {uni5} pop_uni5 = "Univerza V Mariboru" pop_uni_img6 = {uni6} pop_uni6 = "Vytautas Magnus University " pop_uni_img7 = {uni7} pop_uni7 = "The RISEBA University" pop_uni_img8 = {uni8} pop_uni8 = "Riga Stradins University" pop_uni_img9 = {uni9} pop_uni9 = "Vilnius University"  pop_uni_img10 = {uni10} pop_uni10 = "SHERIDAN"  pop_uni_img11 = {uni11} pop_uni11 = "Niagra College" pop_uni_img12 = {uni12} pop_uni12 = "FLEMING"/>    
    <PopCourses3 /> </div>
  )
    
  
}

export default LatviaUni