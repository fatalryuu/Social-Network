import React from 'react';

type PropsType = {
    contactTitle: string
    contactValue: string
    register: any
}

const ContactLabels: React.FC<PropsType> = ({contactTitle, contactValue, register}) => {
    return (
        <div>
            <b>{contactTitle}: </b>
        </div>
    );
};

export default ContactLabels;