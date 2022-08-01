import { Button, Form, Input } from 'antd';
import React from 'react';
import { signup} from  "../services/firebase"

function SignUp({setVisible,handleCancel,setHasAccount, setConnected}) {
  const onFinish = async (values) => {
      try {
        await signup(values.email, values.password).then((res) => {
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
    <h2 className='ant-modal-title'>Sign up</h2>

<Form
      name="signup"
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
          Sign up
        </Button>
      </Form.Item>
    </Form>
    <span className='f-form-footer'>Already have an account? <Button type="link" onClick={() =>  setHasAccount()}>Sign in</Button></span>
  </>
  );
};


export default SignUp