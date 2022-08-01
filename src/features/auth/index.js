import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function Auth({setConnected}) {
    const [hasAccount,setHasAccount]  = useState(true)
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {hasAccount ? 'Sign in' : 'Sign up'}
      </Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        closable
      >
        {hasAccount ? 
        <SignIn setConnected={setConnected} setHasAccount={() => setHasAccount(!hasAccount)} setVisible={() => setVisible(false)} handleCancel={handleCancel} /> 
        : <SignUp setConnected={setConnected} setHasAccount={() => setHasAccount(!hasAccount)} setVisible={() => setVisible(false)} handleCancel={handleCancel} />}
      </Modal>
    </>
  );
};

export default Auth