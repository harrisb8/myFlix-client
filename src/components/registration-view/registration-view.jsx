import axios from 'axios';
import Proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export const url= 'https://angular-m.herokuapp.com/';

export function RegistrationView (props) {
  
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
            axios.post(`${url}users`, {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        })
        .then(response => {
            const data = response.data;
            console.log(data);
            //window.open('/', '_self'); 
            // so the page will open in the current tab
        })
        .catch(e => {
            console.log('error registering the user')
        });
    }
         return (
            <Form>
                 <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                  
                </Form.Group>

            <Row>
                <Form.Group>
                    <Form.Label>Create Password:</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                   
                </Form.Group>
            </Row>

            <Row>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                   
                </Form.Group>
            </Row>
        
                <Form.Group>
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
                   
                </Form.Group>
            <span>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    <Link to="/">
                        <Button variant="secondary" type="button">Back</Button>
                    </Link>
            </span>
        </Form>
    );

}
