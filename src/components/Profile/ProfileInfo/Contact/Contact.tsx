import React from 'react';

type PropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<PropsType> = ({contactTitle, contactValue}) => {
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