const {app, BrowserWindow, Menu, Tray} = require('electron');
let tray = null
const fs = require('fs');
const path = require('path');
const shell = require('electron').shell;
const fetch = require('node-fetch');
const {globalShortcut } = require('electron');


function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        center:true,
        frame: false,
        alwaysOnTop:false,
        transparent:true,
        skipTaskbar: true,
        resizable:false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    globalShortcut.register('Control+K', () => {  // creates a global shortcut
        mainWindow.setIgnoreMouseEvents(false);     // action when shortcut is pressed
                        })
    mainWindow.loadFile('index.html');
    mainWindow.blur();   
    mainWindow.setIgnoreMouseEvents(true);

    (async () => {
        const response = await fetch('https://raw.githubusercontent.com/ch-ckmate/BackPlanner/main/version');
        const body = await response.text();
        console.log(body)
        if (body.toString().trim()=='1.0.0'){
            var versioneatt="Up to date"
        }else{
            var versioneatt="Update Available"

        }
        
        const contextMenu = Menu.buildFromTemplate([
            { label: versioneatt},
            { label: '© CheckMate', click: () =>{shell.openExternal("https://github.com/ch-ckmate")}},
            { label: 'Quit', click: () => { app.quit(); } },
          ]);
          tray.setContextMenu(contextMenu);
    
    })();

//./resources/app/
    tray = new Tray('./resources/app/icon.ico')
    
    let rawdata = fs.readFileSync(path.resolve(__dirname, 'settings.json'));
    let xpos = JSON.parse(rawdata).xpos;
    let ypos = JSON.parse(rawdata).ypos;
    mainWindow.setPosition(xpos,ypos);


    let heightt = JSON.parse(rawdata).height;
    let widthh = JSON.parse(rawdata).width;
    mainWindow.setSize(widthh,heightt,false);

    let bordercolor = JSON.parse(rawdata).bordercolor;
    let textcolor = JSON.parse(rawdata).textcolor;
    let textareacolor = JSON.parse(rawdata).textareacolor;

    mainWindow.webContents.executeJavaScript(`document.getElementById("lune").style.borderColor = '${bordercolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mar").style.borderColor = '${bordercolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mer").style.borderColor = '${bordercolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("gio").style.borderColor = '${bordercolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("ven").style.borderColor = '${bordercolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#lune h1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mar h1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mer h1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#gio h1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#ven h1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon1").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon2").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon2").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon3").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon4").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon5").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue1").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue2").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue3").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue4").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue5").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed1").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed2").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed3").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed4").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed5").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu1").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu2").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu3").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu4").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu5").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri1").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri2").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri3").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri4").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri5").style.borderColor = '${textareacolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#lune #mon1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#lune #mon2").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#lune #mon3").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#lune #mon4").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#lune #mon5").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mar #tue1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mar #tue2").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mar #tue3").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mar #tue4").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mar #tue5").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mer #wed1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mer #wed2").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mer #wed3").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mer #wed4").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#mer #wed5").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#gio #thu1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#gio #thu2").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#gio #thu3").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#gio #thu4").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#gio #thu5").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#ven #fri1").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#ven #fri2").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#ven #fri3").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#ven #fri4").style.color = '${textcolor}'`)
    mainWindow.webContents.executeJavaScript(`document.querySelector("#ven #fri5").style.color = '${textcolor}'`)

    additem();
    //mainWindow.webContents.openDevTools();
    //
    // Emitted when the window is closed.
    mainWindow.on('blur', () => {
        mainWindow.setIgnoreMouseEvents(true);
    });

    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

async function loop(json) {
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon1").innerHTML = '${json.mon1}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon2").innerHTML = '${json.mon2}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon3").innerHTML = '${json.mon3}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon4").innerHTML = '${json.mon4}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("mon5").innerHTML = '${json.mon5}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue1").innerHTML = '${json.tue1}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue2").innerHTML = '${json.tue2}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue3").innerHTML = '${json.tue3}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue4").innerHTML = '${json.tue4}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("tue5").innerHTML = '${json.tue5}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed1").innerHTML = '${json.wed1}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed2").innerHTML = '${json.wed2}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed3").innerHTML = '${json.wed3}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed4").innerHTML = '${json.wed4}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("wed5").innerHTML = '${json.wed5}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu1").innerHTML = '${json.thu1}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu2").innerHTML = '${json.thu2}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu3").innerHTML = '${json.thu3}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu4").innerHTML = '${json.thu4}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("thu5").innerHTML = '${json.thu5}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri1").innerHTML = '${json.fri1}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri2").innerHTML = '${json.fri2}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri3").innerHTML = '${json.fri3}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri4").innerHTML = '${json.fri4}'`)
    mainWindow.webContents.executeJavaScript(`document.getElementById("fri5").innerHTML = '${json.fri5}'`)
    
}

function additem() {
    fs.readFile(path.join(__dirname, 'weekplan.json'), 'utf8', (err, data) => {
        if (err) {
            alert('Could not read file.\n\nDetails:\n' + err.message)
            return
        }
        let json = JSON.parse(data)
        loop(json);

    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});