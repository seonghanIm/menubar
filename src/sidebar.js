import React from 'react';
import { Collapse } from 'antd';

const {Panel} = Collapse;


const sidebar = () =>{
    const onChange = (key) =>{
        console.log(key);
    };

    return(

        <Collapse onChange={onChange}>
            <p>123123123</p>
            <Panel header="This is panel header 1" key="1">
                <p>test</p>
            </Panel>


        </Collapse>
    )
}

export default sidebar;