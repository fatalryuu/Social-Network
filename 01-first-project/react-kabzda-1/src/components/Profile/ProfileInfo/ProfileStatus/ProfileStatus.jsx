import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
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

    const onStatusChange = (e) => {
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
                    <input onChange={onStatusChange} autoFocus={true} value={status.toString()} onBlur={deactivateEditMode}/>
                </div>
            )}
        </div>
    )
}

export default ProfileStatus;