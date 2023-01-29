import React from 'react';
import {useForm} from "react-hook-form";
import s from "../ProfileInfo.module.css";
import ContactForm from "../ContactForm/ContactForm";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
    setEditMode: (editMode: boolean) => void
    saveProfileInfo: (info: ProfileType) => any
}

const ProfileDataForm: React.FC<PropsType> = ({profile, setEditMode, saveProfileInfo}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d: any) => {
        if (profile)
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
                {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>).map(key => <ContactForm register={register} key={key} contactTitle={key}
                                                                   contactValue={profile.contacts[key]}/>)}
                <button>Done</button>
            </form>
        </div>
    )
};

export default ProfileDataForm;