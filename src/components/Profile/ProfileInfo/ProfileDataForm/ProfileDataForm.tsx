import React from 'react';
import {useForm} from "react-hook-form";
import s from "../ProfileInfo.module.css";
import ContactLabels from "../ContactForm/ContactLabels";
import {ProfileType} from "../../../../types/types";
import ContactInputs from "../ContactForm/ContactInputs";
import DoneIcon from '@mui/icons-material/Done';

type PropsType = {
    profile: ProfileType
    setEditMode: (editMode: boolean) => void
    setIsEnabled: (isEnabled: boolean) => void
    saveProfileInfo: (info: ProfileType) => any
}

const ProfileDataForm: React.FC<PropsType> = ({profile, setEditMode, setIsEnabled, saveProfileInfo}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d: any) => {
        if (profile)
            d["fullName"] = profile.fullName;
        saveProfileInfo(d)
            .then(() => setEditMode(false));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={`${s.columns} ${s.labels}`}>
                    <div>
                        <b>About me: </b>
                    </div>
                    <div>
                        <b>Looking for a job: </b>
                    </div>
                    <div>
                        <b>Soft skills: </b>
                    </div>
                    {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>).map(key => <ContactLabels
                        register={register} key={key} contactTitle={key}
                        contactValue={profile.contacts[key]}/>)}
                </div>
                <div className={`${s.columns} ${s.inputs}`}>
                    <div>
                        <input type="text" {...register("aboutMe", {required: false})}
                               defaultValue={profile.aboutMe}
                               onBlur={() => {
                               }} placeholder={'Type here...'} className={s.about}/>
                    </div>
                    <div>
                        <input type="checkbox"
                               defaultChecked={profile.lookingForAJob}
                               placeholder={'Type here...'} {...register("lookingForAJob", {required: false})}/>
                    </div>
                    <div>
                        <input type="text" {...register("lookingForAJobDescription", {required: false})}
                               defaultValue={profile.lookingForAJobDescription}
                               onBlur={() => {
                               }} placeholder={'Type here...'} className={s.soft_skills}/>
                    </div>
                    {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>).map(key => <ContactInputs
                        register={register} key={key} contactTitle={key}
                        contactValue={profile.contacts[key]}/>)}
                </div>
                <div>
                    <button onClick={() => setIsEnabled(true)}><DoneIcon style={{width: "15px"}}/></button>
                </div>
            </form>
        </div>
    )
};

export default ProfileDataForm;