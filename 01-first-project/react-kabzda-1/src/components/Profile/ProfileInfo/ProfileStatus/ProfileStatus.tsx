import React, {useEffect, useState} from 'react';

type PropsType = {
    status: string | null
    updateStatus: (status: string | null) => void
    isOwner: boolean
}

const ProfileStatus: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        props.isOwner ? setEditMode(true) : null;
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode ? (
                <div>
                    <span onDoubleClick={activateEditMode}>{!props.status ? "No status" : props.status}</span>
                </div>
            ) : (
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status ? status : ""} onBlur={deactivateEditMode}/>
                </div>
            )}
        </div>
    )
}

export default ProfileStatus;