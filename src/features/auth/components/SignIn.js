import { Button, Form, Input } from 'antd';
import React from 'react';
import {signin} from  "../services/firebase"

function SignIn({setVisible,handleCancel,setHasAccount,setConnected}) {
    const onFinish = async (values) => {
        try {
          await signin(values.email, values.password).then((res) => {
            localStorage.setItem("auth-token", res.user.accessToken);
            localStorage.setItem("user", res.user.email);
            setVisible();
            setConnected();
            window.location.reload();
          });
        } catch (error) {
          console.log(error);
        }
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (<>
    <h2 className='ant-modal-title'>Sign in</h2>

<Form
        name="signin"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input placeholder='Email'/>
        </Form.Item>
  
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder='Password' />
        </Form.Item>
  
        <Form.Item>
          <Button type="link" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
      <span className='f-form-footer'>Don't have an account? <Button type="link" onClick={() =>  setHasAccount()}>Sign up</Button></span>
    </>
    );
  };
  

export default SignIn