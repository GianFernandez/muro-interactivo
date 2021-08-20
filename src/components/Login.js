import React, { Component } from 'react';
//import withFirebaseAuth from 'react-with-firebase-auth';
//import firebase from 'firebase/app';
import 'firebase/auth';

class Login extends Component {
    render() {
        const { user, signOut, signInWithGoogle} = this.props;
        return (
            <div>
                {
                    user ?
                        <p>Hola, {user.displayName}</p>
                        : <p>Por favor, inicie sesion</p>
                }
                {
                    user ?
                        <button onClick={signOut}>Cerrar sesion</button>
                        : <button onClick={signInWithGoogle}>Iniciar con google</button>
                }
            </div>
        );
    }
}

export default Login;