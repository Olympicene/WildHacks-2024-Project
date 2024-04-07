import * as React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Divider, Image, Button} from 'antd';
import { Form, Input } from 'antd';

const LoginPage = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const [errors, setErrors] = useState('');

    const handleFormChange = (changedValues, allValues) => {
        console.log('Success:', allValues);
        setFormData({email:allValues.email, password: allValues.password});
    }

    const handleSubmit = async (values) => {
        setFormData({email:values.email, password: values.password});
        console.log(JSON.stringify(formData))

      try {
        const response = await fetch('http://localhost:3000/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
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

          throw new Error('Login failed');
        }
  
        const data = await response.json();
        navigate('/home')

      } catch (error) {
        console.error('Error:', error);
      }
      };


      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    require('./LoginPage.css');

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin : 0
        }}>
            <div class="left">
            <h1 className='login-title'>Log In</h1>

            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                onValuesChange={handleFormChange}
            >
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
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type="primary" className='button-on-signup' htmlType="submit"
                >Sign In</Button>
                </Form.Item>
            </Form>

            </div>


            <div>
            <Divider type="vertical" />
            </div>
            <div class = "right">
                <Image class = "img"
                width={500}
                src="/roomie.png"
                />
            </div >


        </div>
        
    )
}

export default LoginPage;