import React from 'react';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/TextArea';

import './styles.css';
import Input from '../../components/Input';

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
          <Input name="subject" label="Subject" />
          <Input name="cost" label="Cost of your hour per class" />
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