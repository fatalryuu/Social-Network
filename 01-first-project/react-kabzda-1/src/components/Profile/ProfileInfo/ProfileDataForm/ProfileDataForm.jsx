import React from 'react';
import {useForm} from "react-hook-form";
import s from "../ProfileInfo.module.css";
import ContactForm from "../ContactForm/ContactForm";

const ProfileDataForm = ({profile, setEditMode, saveProfileInfo}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) => {
        d["fullName"] = profile.fullName;
        saveProfileInfo(d)
            .then(() => setEditMode(false));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.about}>
                    <b>About me: </b>
                    <input type="text" {...register("aboutMe", {required: false})}
                           defaultValue={profile.aboutMe}
                           onBlur={() => {
                           }} placeholder={'About Me'}/>
                </div>
                <div>
                    <b>Looking for a job: </b>
                    <input type="checkbox" defaultChecked={profile.lookingForAJob} {...register("lookingForAJob", {required: false})}/>
                </div>
                <div className={s.job}>
                    <b>Soft skills: </b>
                    <input type="text" {...register("lookingForAJobDescription", {required: false})}
                           defaultValue={profile.lookingForAJobDescription}
                           onBlur={() => {
                           }} placeholder={'Soft skills'}/>
                </div>
                {Object.keys(profile.contacts).map(key => <ContactForm register={register} key={key} contactTitle={key}
                                                                   contactValue={profile.contacts[key]}/>)}
                <button>Done</button>
            </form>
        </div>
    )
};

export default ProfileDataForm;