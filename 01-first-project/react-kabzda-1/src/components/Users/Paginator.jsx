import React from 'react';
import s from "./Users.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++)
        pages.push(i);

    return (
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? s.selected_page : s.page}
                             onClick={() => props.onPageChanged(p)}>{p} </span>
            })}
        </div>
    );
};

export default Paginator;