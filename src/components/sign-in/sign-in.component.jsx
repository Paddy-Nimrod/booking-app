import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custon-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: ''});
    }catch(err){
        console.log(err.message);
    }    
}

handleChange = event=>{
    const { value, name} = event.target;

    this.setState({ [name]: value })

}

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>Already have an Account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={ this.state.email } 
                    required 
                    handleChange = { this.handleChange } 
                    label='email' 
                    />
    
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={ this.state.password } 
                    handleChange = { this.handleChange } 
                    required  
                    label='password'
                    />
                    
                    <div className='buttons'>
                        <CustomButton type="submit" > SIGN IN</CustomButton>
                        <CustomButton onClick = { signInWithGoogle } isGoogleSignIn >Signin with Google</CustomButton>
                    </div>                    
                </form>
            </div>
        );
    }
}

export default SignIn;