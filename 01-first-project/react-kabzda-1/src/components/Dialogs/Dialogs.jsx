import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {useForm} from "react-hook-form";

const Dialogs = (props) => {
    const {register, handleSubmit} = useForm();
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSubmit = (d) => {
        props.sendMessage(d.message);
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
                            <textarea placeholder='Enter your message' {...register("message")}></textarea>
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