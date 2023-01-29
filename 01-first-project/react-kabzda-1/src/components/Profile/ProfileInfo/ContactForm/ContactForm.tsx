import React from 'react';

type PropsType = {
    contactTitle: string
    contactValue: string
    register: any
}

const ContactForm: React.FC<PropsType> = ({contactTitle, contactValue, register}) => {
    return (
        <div>
            <b>{contactTitle}: </b>
            <input type="text" defaultValue={contactValue} {...register("contacts." + contactTitle, {required: false})}/>
        </div>
    );
};

export default ContactForm;