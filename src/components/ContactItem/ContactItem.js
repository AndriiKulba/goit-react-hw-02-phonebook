import React from 'react';
import s from './ContactItem.module.css';
import { v4 as uuidv4 } from 'uuid';

const ContactItem = ({ visibleContacts, deleteContact }) => {
  return (
    <ul className={s.contacts__list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contacts__item}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactItem;
