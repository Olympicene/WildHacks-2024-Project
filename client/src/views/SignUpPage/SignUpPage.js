import * as React from 'react'
import { Divider, Image, Button} from 'antd';
import { Form, Input } from 'antd';

const SignUpPage = () => {

    require('./SignUpPage.css');

    const onFinish = (values) => {
        console.log('Success:', values);
      };
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="first name"
                name="first name"
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