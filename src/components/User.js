// class based component
import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0, //state variable with default value 0
            count2 : 2 // state variable with defaulot value of 2
        }
    }
    
    
    render(){
     
        return(
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={
                    ()=>{
                        this.setState({
                            count:this.state.count + 1 ,
                        })
                    }
                }>Increase</button>
            <h1>{this.props.name}</h1>
            <h2>{this.props.location}</h2>
            </div>
        );
    }
};
export default User;