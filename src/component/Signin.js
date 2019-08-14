import React, { Component } from 'react'
import axios from 'axios';

export default class Signin extends Component {
    state={
        Name:'',
        word:''
    }
    render() {
        let {Name,word} =this.state;
        return (
            <div>
                <label>用户名</label><input type='text' value={Name} onChange={(e)=>{
                        this.setState({
                            Name:e.target.value
                        })
                }}/>
                <label>密码</label><input type='text' value={word}  onChange={(e)=>{
                    this.setState({
                        word:e.target.value
                    })
                }}/>
                <button onClick={this.handdeng.bind(this)}>登录</button>
            </div>
            
        )
    }
    handdeng(){
        axios.post('/login',{
            userName:this.state.Name,
            password:this.state.word
        }).then(res=>{
            console.log(res.data)
            if(res.data.code===1){
                let token=res.data.token
                window.localStorage.setItem("token",token)
                this.props.history.push('/home')
            }else{
                alert("登录失败")
            }
        })
    }
}
