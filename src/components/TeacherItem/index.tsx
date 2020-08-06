import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/1500873?s=460&u=5a9ec92a1b593df93e818429effaf392df609119&v=4" alt="Mhayk Whandson"/>
            <div>
              <strong>Mhayk Whandson</strong>
              <span>Chemistry</span>
            </div>
          </header>

          <p>
            Enthusiast of the best advanced chemistry technologies.
            <br />
            <br />
            Passionate about blowing things up in the laboratory and changing people's lives through experiments. More than 200,000 people have experienced one of my explosions.
          </p>

          <footer>
            <p>
              Price/hour
              <strong>$ 80.00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Contact Us
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;