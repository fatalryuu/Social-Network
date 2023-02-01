import React, {useState} from "react";
import {FilterType} from "../../redux/usersReducer";
import s from './Users.module.css';
import type {RadioChangeEvent} from 'antd';
import {ConfigProvider, Input, Radio, Space} from 'antd';
import TuneIcon from '@mui/icons-material/Tune';
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/usersSelectors";

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    const filter = useSelector(getUsersFilter);
    const [friend, setFriend] = useState("");
    const {Search} = Input;

    const onChange = (e: RadioChangeEvent) => {
        setFriend(e.target.value);
    };

    const onSearch = (value: string) => {
        const filter: FilterType = {
            term: value,
            friend: friend === "null" ? null : friend === "true"
        }
        props.onFilterChanged(filter);
    };

    return (
        <div className={s.search_component}>
            <div className={s.wrap}>
                <TuneIcon />
                <span className={s.label}>Search</span>
            </div>
            <div className={s.form}>
                <ConfigProvider theme={{
                    token: {
                        colorPrimary: '#8d8d8d'
                    },
                    components: {
                        Radio: {
                            colorText: 'white'
                        }
                    }
                }}>
                    <div className={s.term}><Search placeholder="Name" onSearch={onSearch} style={{width: 200}}/></div>
                    <div className={s.filter}>
                        <Radio.Group onChange={onChange} defaultValue="null">
                            <Space direction="vertical">
                                <Radio value="null">All</Radio>
                                <Radio value="true">Followed</Radio>
                                <Radio value="false">Unfollowed</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                </ConfigProvider>
            </div>
        </div>
    )
})