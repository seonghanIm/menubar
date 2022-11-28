const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')
const ipc = ipcMain;

let win;
function createWindow() {
     win = new BrowserWindow({
        width: 960,
        height: 630,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        titleBarStyle:'hidden',
        trafficLightPosition:{
            x :10,
            y :10,
        }

    });
    console.log(process.versions.node);
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();


};


ipc.on('minimizeApp',()=>{
    win.minimize();
});

ipc.on('maximizeApp',()=>{
    if(win.isMaximized()){
        win.restore();
    }else{
        win.maximize();
    }
});

ipc.on('closeApp',()=>{
    win.close();
});

app.whenReady().then(() => {
    createWindow()
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

