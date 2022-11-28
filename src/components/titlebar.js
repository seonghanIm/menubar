import {Button} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import MinimizeIcon from '@mui/icons-material/Minimize';

export const Titlebar = () => {
    //icp main과 통신을 위한 icpRender  선언
    const ipcRenderer = window.require("electron").ipcRenderer;
    const ipc = ipcRenderer;
    // btn onclick 함수로 icp render와 icp main을 통신
    // function btnClose() {
    //     ipc.send('closeApp');
    // }
    //
    // function btnMinimize() {
    //     ipc.send('minimizeApp');
    // }
    //
    // function btnMaximize() {
    //     ipc.send('maximizeApp')
    // }
    return (
        <div style={{dispaly: "table"}}>
            <header class="titlebar">milliman
                <div class="titleButton">
                    {/*<Button style={{marginRight: "10px", minWidth: "5px", width: "10px"}} variant="text" color="inherit"*/}
                    {/*        onClick={btnMinimize} startIcon={<MinimizeIcon/>}></Button>*/}
                    {/*<Button style={{marginRight: "10px", minWidth: "5px", width: "10px"}} variant="text" color="inherit"*/}
                    {/*        onClick={btnMaximize} startIcon={<ContentCopyIcon/>}></Button>*/}
                    {/*<Button style={{marginRight: "10px", minWidth: "5px", width: "10px"}} variant="text" color="inherit"*/}
                    {/*        onClick={btnClose} startIcon={<CloseIcon/>}></Button>*/}
                </div>
            </header>
        </div>
    )
}
