import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the proffys availables.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Week Day</label>
            <input type="text" name="week_day" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" name="time" id="time"/>
          </div>
        </form>
      </PageHeader>
      <main>
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
      </main>
    </div>
  )
}

export default TeacherList;