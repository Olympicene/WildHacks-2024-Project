import * as React from 'react'
import { Divider, Image, Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    require("./Landing.css");
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('./login')
      };

      const handleSignupClick = () => {
        navigate('./sign-up')
      };
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin : 0
        }}>
            <div class="left">
            <h1>
                    CribConnect
            </h1>
            <p className='p-text'>because great stories start with great roommates.</p>
            <div style={{display:"flex", flexDirection:"column"}}>
                <Button type="primary" size="large"className='button-login'
                onClick={handleLoginClick}>Log In</Button>
                <Button type="primary" size="large"className='button-login'
                onClick={handleSignupClick}>Create Account</Button>
            </div>

            </div>
            <div class="mid">
            <Divider type="vertical" />
            </div>
            <div class = "right">
                <h1> </h1>
                <h3> </h3>
                <Image class = "img"
                width={400}
                src="https://cdn-icons-png.flaticon.com/512/6676/6676508.png"
                />
            </div >
        </div>
        
    )
}

export default Landing;