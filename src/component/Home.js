import React, { Component } from 'react'
import '../css/index.css'
import {Switch,Route,Redirect} from 'react-router-dom'
import Item from '../view/Item'
import {get,post} from '../utils/request'
import {Divider, Table} from "antd";
export default class Home extends Component {
    state={
        userlist:[],
        columns: [
            {
                title: "头像",
                dataIndex: "userIcon",
                key: "userIcon"

            },
            {
                title: "用户名",
                dataIndex: "userName",
                key: "userName"

            },
            {
                title: "操作",
                dataIndex: "action",
                key: "action",
                render: (text, record) => {
                    return (<span>
                        <a href="javascript:;">修改 {record.name}</a>
                        <Divider type="vertical"/>
                        <a href="javascript:;" onClick={this.handhsan.bind(this)}>删除</a>
                    </span>)

                }

            },

        ],
        ind:0
    }
    render() {
        let {userlist}=this.state;
        console.log(userlist)
        return (
            <div className='wrap'>
                <div className='head-top'></div>
                <div className='bottom-lun'>
                    <div className='left'>
                         <Item/>
                    </div>
                    <div className='lu-right'>
                         <Table columns={this.state.columns} dataSource={this.state.userlist}/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        get('/user').then(res=>{
            console.log(res)
            let userlistnew=[]
            res.result.forEach(item=>{
                userlistnew.push({
                    key: item.userId,
                    userName: item.userName,
                    userType: item.userType,
                    userIcon: item.userIcon,
                    phoneNum: item.phoneNum,
                    realName: item.realName
                })
            })
            this.setState({
                userlist:userlistnew
            })
        })
    }
    handhsan(){
        let {ind}=this.state;
        post('/user/delete',{
            userId:ind
        }).then(res=>{
            
        })
    }
}
