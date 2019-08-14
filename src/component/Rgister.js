import React, { Component } from 'react'
import axios from 'axios'
export default class Rgister extends Component {
    state={
        name:"",
        sword:"",
        lName:""
    }
    
    render() {
        let {name,sword,lName}=this.state;
        return (
            <div>
             
                    <input type="text" placeholder="Your username" value={name} onChange={(e)=>{
                            this.setState({
                                name:e.target.value
                            })
                    }}/>
                    <input type="passwrod" placeholder="Your password" value={sword} onChange={(e)=>{
                                this.setState({
                                    sword:e.target.value
                                })
                        }}/>


                    <input type="text" placeholder="realName" value={lName} onChange={(e)=>{
                                this.setState({
                                    lName:e.target.value
                                })
                        }}/>
                    
                   
                        <button onClick={this.bindzhu.bind(this)}>注册</button>

            </div>
        )
        
    }
    bindzhu(){
        console.log(1)
        console.log(this.state.name)
        axios.post('/register',{userName:this.state.name,password:this.state.sword,realName:this.state.lName}).then(res=>{
            console.log(res.data)
            if(res.data.code===1){
                
                this.props.history.push('/signin')
            }
        })
    }
}
