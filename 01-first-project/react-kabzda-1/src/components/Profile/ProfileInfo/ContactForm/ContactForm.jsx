import React from 'react';

const ContactForm = ({contactTitle, contactValue, register}) => {
    return (
        <div>
            <b>{contactTitle}: </b>
            <input type="text" defaultValue={contactValue} {...register("contacts." + contactTitle, {required: false})}/>
        </div>
    );
};

export default ContactForm;