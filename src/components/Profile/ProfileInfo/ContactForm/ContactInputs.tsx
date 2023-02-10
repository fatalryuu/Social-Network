import React from 'react';
import s from "../ProfileInfo.module.css";

type PropsType = {
    contactTitle: string
    contactValue: string
    register: any
}

const ContactInputs: React.FC<PropsType> = ({contactTitle, contactValue, register}) => {
    return (
        <div>
            <input className={s.contact_input} placeholder={'Type here...'} type="text"
                   defaultValue={contactValue} {...register("contacts." + contactTitle, {required: false})}/>
        </div>
    );
};

export default ContactInputs;