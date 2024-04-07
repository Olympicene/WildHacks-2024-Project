import * as React from 'react'
import { useState } from 'react';
import { Divider, Image, Button} from 'antd';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const navigate = useNavigate();
    const [signData, setSignData] = useState({
      first_name:'',
      email: '',
      password: '',
    });

    const [errors, setErrors] = useState('');

    const handleFormChange = (changedValues, allValues) => {
        console.log('Success:', allValues);
        setSignData({first_name: allValues.first_name, email:allValues.email, password: allValues.password});
    }

    const handleSubmit = async () => {
        console.log(JSON.stringify(signData))

      try {
        const response = await fetch('http://localhost:3000/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signData),
          credentials: 'include'
        });
  
        if (!response.ok) {
          let res = await response.json()
          console.log(res)

          if ('error' in res) {
            // validator error
            setErrors(res.error['undefined'])
          } else {
            // account error
            setErrors(res.message)
          }

          throw new Error('Sign In failed');
        }
  
        const data = await response.json();
        navigate('/home')

      } catch (error) {
        console.error('Error:', error);
      }
    };

    require('./SignUpPage.css');

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return (
        <div className='main-login-body' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin : 0
        }}>
            <div class="left">
            <h1 className='login-title'>Create an Account</h1>

            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16
                }}
                style={{
                maxWidth: 600
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                onValuesChange={handleFormChange}
                autoComplete="off"
            >
                <Form.Item
                label="first_name"
                name="first_name"
                rules={[
                    {
                    required: true,
                    message: 'Please input your first name!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="email"
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Please input your email!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    span: 16,
                }}
                >
                <Button type="primary" className='button-on-login' htmlType="submit"
                >Submit</Button>
                </Form.Item>
            </Form>

            </div>


            <div>
            <Divider type="vertical" />
            </div>
            <div class = "right">
            <Image class = "img"
                width={500}
                src="/roomates.png"
                />
            </div >
        </div>
        
    )
}

export default SignUpPage;