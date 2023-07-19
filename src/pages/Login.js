import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  return (
    <div className='Login'>
      <div className='login-bg'>
        <div className='login-wrapper'>
          <Navbar.Brand href="#">
            <img width={200} src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/>
          </Navbar.Brand>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>아이디</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="아이디를 입력해주세요" 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="비밀번호를 입력해주세요" 
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              로그인
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
