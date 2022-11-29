const {app, BrowserWindow,ipcMain} = require('electron')
const ipc = ipcMain; // ipc 통신

let win;
function createWindow() {
     win = new BrowserWindow({
        width: 960,
        height: 630,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        titleBarStyle:'hidden', // custom title bar를 위한
        trafficLightPosition:{
            x :10,
            y :10,
        }
    });
    console.log(process.versions.node); // node version 확인
    win.loadURL("http://localhost:3000"); //리엑트
    //win.webContents.openDevTools(); 개발자 모드
};
ipc.on('minimizeApp',()=>{   // ipc 통신 코드 channel별 최소화, 최대화, 닫기 버튼 연결
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

