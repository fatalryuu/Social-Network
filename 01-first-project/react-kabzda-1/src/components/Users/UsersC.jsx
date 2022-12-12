import React from 'react';
import s from './Users.module.css'
import avatar from "../../img/user_avatar.jpg";
import axios from "axios";

class UsersC extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }
    render() {
        return (
            <div className={s.items}>
                {this.props.users.map(u =>
                    <div key={u.id} className={s.item}>
                        <a href=""><img src={u.photos.small != null ? u.photos.small : avatar} alt="" className={s.avatar}/></a>
                        <div>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.btn_wrapper}>
                                {u.followed ?
                                    <button onClick={() => {this.props.unfollow(u.id)}} className={s.followed}>Unfollow</button> :
                                    <button onClick={() => {this.props.follow(u.id)}} className={s.unfollowed}>Follow</button>
                                }
                            </div>
                            <div className={s.location}>{u.status != null ? u.status : 'BSUIR'}</div>
                        </div>
                    </div>)
                }
                <div className={s.show_more}>
                    <a href="#" className={s.link}>Show More</a>
                </div>

            </div>
        );
    }
}

export default UsersC;