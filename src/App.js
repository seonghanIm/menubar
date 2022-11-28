import './App.css';
import React, {useEffect} from 'react';
import {Resizable} from "re-resizable";
import {Titlebar} from "./components/titlebar";
import {Category} from "./components/category";

const App = () => {
    return (
        <body>
        <Titlebar/>
       {/*width resize를 위한 wrap*/}
        <Resizable className="main-content"
                   defaultSize={{width: 230, height: "100%"}}
                   style={{
                       position: "absolute",
                       maxWidth: "230px",
                       borderRight: "1px solid black",
                       lineHeight: "0px"
                   }}>
            <Category name="Category 1" overflowY="auto"/>
            <Category name="Category 2" overflowY="none"/>
        </Resizable>
        </body>
    )
}

export default App;
