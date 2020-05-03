import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component
{
    constructor()
    {
        super();

        this.state={
            email : '',
            password : ''
        }
    }

    handleSubmit = event =>
    {
        event.preventDefault();
        this.setState({email : '', password: ''})
    }
    
    handleChange = event =>
    {
        console.log(event.target);
        const{value,name} = event.target;
        console.log([name]);
        this.setState({[name]:value})
    }

    render()
    {
        return(
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and passowrd</span>

                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} 
                     onChange={this.handleChange}   required></input>
                    <label>Email</label>
                    <input name="password" type="password" value={this.state.password}
                    onChange={this.handleChange} required></input>
                    <label>Password</label>

                    <input type="submit" value="Submit Form"/>
                </form>

            </div>
        );
    }
}

export default SignIn;