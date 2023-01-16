import React from 'react';

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactValue ? <div>
                <b>{contactTitle}: </b>
                <a href={contactValue}>{contactValue}</a>
            </div> : null}
        </div>
    )
};

export default Contact;