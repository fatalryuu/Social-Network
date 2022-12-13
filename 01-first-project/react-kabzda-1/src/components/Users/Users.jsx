import React from 'react';
import s from './Users.module.css'
import avatar from "../../img/user_avatar.jpg";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++)
            pages.push(i);
        debugger
        return (
            <div className={s.items}>
                <div>
                    {pages.map(p => {
                        return <span key={p} className={this.props.currentPage === p ? s.selected_page : s.page} onClick={() => this.onPageChanged(p)}>{p} </span>
                    })}
                </div>
                {this.props.users.map(u =>
                    <div key={u.id} className={s.item}>
                        <a href=""><img src={u.photos.small != null ? u.photos.small : avatar} alt="" className={s.avatar}/></a>
                        <div>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.btn_wrapper}>
                                {u.followed ?
                                    <button onClick={() => this.props.unfollow(u.id)} className={s.followed}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(u.id)} className={s.unfollowed}>Follow</button>
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

export default Users;