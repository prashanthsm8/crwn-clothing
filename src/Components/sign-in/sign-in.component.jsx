import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.jsx'
import CustomButton from '../custom-button/cutom-button.component.jsx'

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
                    <FormInput name="email" type="email" value={this.state.email} 
                     handleChange={this.handleChange}  label="Email" required></FormInput>

                    <FormInput name="password" type="password" value={this.state.password}
                    handleChange={this.handleChange} label="Password" required></FormInput>

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>

            </div>
        );
    }
}

export default SignIn;