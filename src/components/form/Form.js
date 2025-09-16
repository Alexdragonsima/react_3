import React from "react";
import "./Form.css";
import { render } from "@testing-library/react";

class Form extends React.Component {
    state =
        {
            firstName: "",
            lastName: "",
            email: ""
        }

    update=(event)=>
    {
        this.setState({[event.target.name]:event.target.value});
    }

    render() 
    {
        const { firstName, lastName, email } = this.state;
        return (
            <div>
                <form>
                    <h3>Форма регистрации</h3>
                    <div><input value={firstName} name="firstName" placeholder="Name" onChange={this.update}/></div>
                    <div><input value={lastName} name="lastName" placeholder="Last Name" onChange={this.update}/></div>
                    <div><input value={email} name="email" placeholder="email" onChange={this.update}/></div>
                    <hr />
                    <div>{firstName}</div>
                    <div>{lastName}</div>
                    <div>{email}</div>
                </form>
            </div>
        )
    }
}

export default Form;