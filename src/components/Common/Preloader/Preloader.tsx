import React from 'react';
import preloader from "../../../img/preloader.svg";

const Preloader: React.FC = () => {
    return (
        <div>
           <img src={preloader} alt=""/>
        </div>
    );
};

export default Preloader;