import React, {Component} from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state ={ email: '', password: ''};

    render(){
        return(
            <Card>
               <CardSection>
                   <Input
                   placeholder="example@gmail.com"
                   label = "Email"
                   value={this.state.email}
                   onChangeText={ text => this.setState({ email: text })} 
                   />
               </CardSection>
               <CardSection >
                   <Input
                   secureTextEntry
                   placeholder ="password"
                   label="Password"
                   value={this.state.password}
                   onChangeText={ text => this.setState({password: text})}
                   />
                </CardSection>
               <CardSection>
                   <Button>
                       Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;