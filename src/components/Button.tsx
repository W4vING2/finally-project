import React from 'react';
import { FloatButton } from 'antd';

function Support(){
    const Buttoncase: React.FC = () => <FloatButton onClick={Click} tooltip={<div>Support</div>} />;
   function Click(){
    return(
        <div>
            <p>d</p>
        </div>
    )
   }
    return(
        <div>
            <Buttoncase/>
        </div>
    )
}

export default Support;