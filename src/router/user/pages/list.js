import React from 'react'
import {withRouter} from 'react-router-dom'
import { Table, Badge } from "antd"
import { inject, observer } from "mobx-react"

@inject("UserListStore")
@observer
class UserListPage extends React.Component {

    componentDidMount() {
        const { UserListStore } = this.props;
        UserListStore.getUserList();
    }

    push = ()=>{
        this.props.history.push("/user/add?name=231");
    };



    setName = ()=>{
        const { UserListStore } = this.props;
        UserListStore.setName('ha ha ha');
    };

    render(){
        const { UserListStore } = this.props;

        const column = [
            {
                title: '编号',
                dataIndex: 'id',
            },
            {
                title: '用户标识',
                dataIndex: 'user_id',
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
            },
            {
                title: '状态',
                dataIndex: 'status',
                render: (text) => text? <Badge status="success" /> : <Badge status="error" />
            },
            {
                title: '头像',
                dataIndex: 'avatar',
                render: text => <img src={text} alt='' style={{ width: 20 }} />
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
            },

        ];
        console.log(UserListStore.userList);
        return (
            <div>
                <Table
                    rowKey='id'
                    columns={column}
                    dataSource={UserListStore.userList}
                />
            </div>
        )
    }
}

export default withRouter(UserListPage);
