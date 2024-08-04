import { useEffect, useState } from 'react';
import instagram from '../assets/redes/instagram.png';
import telefone from '../assets/telefone.png';
import User from '../assets/user.jpg';
import './styles.css';


// import PhoneBKG from '../assets/logo.png';

export default function Main() {
  return (
    <>
      <div className="container">
        <div className='container-about'>
          <div className='content'>
            <div className='img-content'>
              <img className='img-user' src={User} alt='User' />
            </div>

            <div className='about-content'>
              <h1 className="about">Sobre</h1>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea non, tempore ipsa voluptas molestias labore voluptatum iure consequatur et delectus incidunt harum nam pariatur quae id, temporibus consectetur a deserunt?</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos eveniet consequuntur enim non in eius error sit veniam fuga.</p><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, aperiam aliquam? Cum ipsam deleniti iure debitis cumque.
                  Consequatur sit quis doloribus ipsum explicabo nobis sapiente, debitis exercitationem natus, esse aspernatur optio similique placeat vero officiis, voluptatum itaque omnis cupiditate eveniet at nisi neque laboriosam! Est sed ex repellendus velit dolorum!</p><br />
              </div>
              <div className='a-contacts'>
                <a href="http://"><img src={telefone} className="social-icons img-icons"></img></a>
                <a href=""><img src={instagram} className="social-icons img-icons"></img></a>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>

  );
}