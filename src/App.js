import TreeView from '@mui/lab/TreeView';
import './App.css';
import React from 'react';
import {Collapse} from "antd";
import {TreeItem} from "@mui/lab";
import {Resizable} from "re-resizable";
import FolderIcon from '@mui/icons-material/Folder';
import File from '@mui/icons-material/InsertDriveFile';


const {Panel} = Collapse;
const data = {
    id: 'root',
    name: 'Folder 2',
    nodeID:'2',
    icon: FolderIcon,
    color: "warning",
    children: [
        {
            id: '1',
            name: 'File 1',
            icon: File,
            color: "primary",
        },
        {
            id: '2',
            name: 'File 2',
            icon: File,
            color: "primary",
        },
        {
            id: '3',
            name: 'File 3',
            icon: File,
            color: "primary",
        },
        {
            id: '4',
            name: 'File 4',
            icon: File,
            color: "primary",
        },
        {
            id: '5',
            name: 'File 5',
            icon: File,
            color: "primary",
        },
        {
            id: '6',
            name: 'File 6',
            icon: File,
            color: "primary",
        },
        {
            id: '7',
            name: 'File 7',
            icon: File,
            color: "primary",
        },
        {
            id: '8',
            name: 'File 8',
            icon: File,
            color: "primary",
        },
        {
            id: '9',
            name: 'File 9',
            icon: File,
            color: "primary",
        },
        {
            id: '10',
            name: 'File 10',
            icon: File,
            color: "primary",
        },
    ]
}



const App = () => {

    const makeTree = (nodes) => (
        <TreeItem nodeId={nodes.id} key={nodes.id} label={nodes.name} icon={<nodes.icon color={nodes.color}/>}>
            {Array.isArray(nodes.children) ? nodes.children.map((node) => makeTree(node)) : null}
        </TreeItem>
    )
    return (
        <body>
        <div style={{display: "table"}}>
            <header class="titlebar">milliman</header>
        </div>

        <Resizable className="main-content"
            defaultSize={{width:230, height:"100%"}}
           style={{
            position: "absolute",
            maxWidth: "230px",
            borderRight: "1px solid black",
            lineHeight: "0px"
        }}>
            <Collapse className="sidebar">
                <Panel header="Category 1" style={{borderBottom: "0px", overflowX:"hidden"}}>
                    <Resizable style={{overflowY:"auto", overflowX: "hidden", margin:"-16px"}}>
                    <TreeView sx={{height: 277}}>
                        <TreeItem
                            label="Folder 1"
                            nodeId="1"
                            icon={<FolderIcon color="warning"/>}
                            >
                        </TreeItem>
                        {makeTree(data)}
                    </TreeView>
                    </Resizable>
                </Panel>
            </Collapse>

            <Collapse className="sidebar">
                <Panel header="Category 2" style={{borderBottom:"0px", overflowX:"hidden"}}>
                    <Resizable style={{overflowY:"auto", overflowX: "hidden",margin:"-16px"}}>
                    <TreeView sx={{height: 277}}>
                        <TreeItem
                            label="Folder 1"
                            nodeId="1"
                            icon={<FolderIcon color="warning"/>}
                        >
                        </TreeItem>
                        {makeTree(data)}
                    </TreeView>
                    </Resizable>
                </Panel>
            </Collapse>
        </Resizable>
        </body>

    )
}

export default App;
