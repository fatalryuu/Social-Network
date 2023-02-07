import React from 'react';
import s from '../ProfileInfo.module.css'

type PropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<PropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactValue ? <div className={s.contact}>
                <b>{contactTitle}: </b>
                <a href={contactValue}>{contactValue}</a>
            </div> : null}
        </div>
    )
};

export default Contact;