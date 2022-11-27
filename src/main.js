const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
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
    // win.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow()
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});