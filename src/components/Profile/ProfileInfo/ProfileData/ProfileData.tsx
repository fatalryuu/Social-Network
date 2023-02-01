import React from 'react';
import s from "../ProfileInfo.module.css";
import Contact from "../Contact/Contact";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<PropsType> = ({profile, isOwner, goToEditMode}) => {
    return <>
        {isOwner ? <button onClick={goToEditMode}>edit</button> : null}
        {profile.aboutMe ? <div>
            <b>About me: </b>
            <span className={s.about}>{profile.aboutMe}</span>
        </div> : null}
        <div>
            <b>Looking for a job: </b>
            {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJob ?
            <div className={s.job}>
                <b>Soft skills: </b>
                {profile.lookingForAJob ? profile.lookingForAJobDescription : null}
            </div> : null}
        {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>).map(key => <Contact key={key} contactTitle={key}
                                                                                                      contactValue={profile.contacts[key]}/>)}
        </>
}

export default ProfileData;