import React from 'react';

import PageHeader from '../../components/PageHeader';

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
    </div>
  )
}

export default TeacherList;