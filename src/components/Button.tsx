import React from 'react';
import { FloatButton } from 'antd';

const Buttoncase: React.FC = () => <FloatButton onClick={Click} tooltip={<div>Support</div>} />;
   function Click(){
    return(
        <div>
            <h1>Поддержка</h1>
        </div>
    )
   }

export default Buttoncase;