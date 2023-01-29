import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";
import {InitialStateType} from "../../redux/dialogsReducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessageCreator: (newMessageBody: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {
    const {register, handleSubmit, reset} = useForm();
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSubmit = (d: any) => {
        props.sendMessageCreator(d.message);
        reset();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <textarea placeholder='Enter your message' {...register("message", {required: true, maxLength: 200})}></textarea>
                        </div>
                        <div>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;