import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return(
    <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>

          <p>{teacher.bio}</p>

          <footer>
            <p>
              Price/hour
              <strong>$ {teacher.cost}</strong>
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