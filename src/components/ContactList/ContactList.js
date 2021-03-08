import React from 'react';
import s from './ContactList.module.css';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ title, children }) => {
  return (
    <div className={s.contacts}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default ContactList;
