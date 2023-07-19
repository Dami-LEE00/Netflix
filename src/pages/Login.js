import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const isLogin = useState(false);

  const onSubmit = () => {
    if(id !== '') {
      if(pw !== '') {
        navigate('/');
        return !isLogin;
      }
    }
  }

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
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="text" 
                placeholder="아이디를 입력해주세요" 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control 
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                type="password" 
                placeholder="비밀번호를 입력해주세요" 
              />
            </Form.Group>
            <Button 
              onClick={onSubmit}
              variant="danger" 
              type="submit"
            >
              {isLogin ? 'Logout' : 'Login'}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
