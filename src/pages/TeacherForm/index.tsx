import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="How amazing you want to teach"
        description="The first step is to fill out this application form."
       />

       <main>
         <fieldset>
           <legend>Your informations</legend>
          <Input name="name" label="Full name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Bio" />
         </fieldset>

         <fieldset>
           <legend>About the class</legend>
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: 'Arts', label: 'Arts' },
              { value: 'Math', label: 'Math' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Alchemy', label: 'Alchemy' },
              { value: 'History', label: 'History' },
              { value: 'Geography', label: 'Geography' },
              { value: 'English', label: 'English' },
              { value: 'Portuguese', label: 'Portuguese' },
            ]}
          />
          <Input name="cost" label="Cost of your hour per class" />
         </fieldset>

         <fieldset>
           <legend>
             Times Available
             <button type="button">
               + New time
             </button>
             </legend>

             <div className="schedule-item">
             <Select
              name="week_day"
              label="Week Day"
              options={[
                { value: '0', label: 'Sunday' },
                { value: '1', label: 'Monday' },
                { value: '2', label: 'Tuesday' },
                { value: '3', label: 'Wednesday' },
                { value: '4', label: 'Thursday' },
                { value: '5', label: 'Friday' },
                { value: '6', label: 'Saturday' },
              ]}
            />
            <Input name="from" label="From" type="time" />
            <Input name="To" label="To" type="time" />
             </div>
         </fieldset>

         <footer>
           <p>
             <img src={warningIcon} alt="Important warning"/>
             important! <br />
             Fill all the fields
           </p>
           <button type="button">
             Save
           </button>
         </footer>
       </main>
    </div>
  )
}

export default TeacherForm;