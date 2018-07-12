import {
    app,
    BrowserWindow,
    globalShortcut,
    Menu,
    screen,
    Tray
} from 'electron';
import * as path from 'path';
import * as url from 'url';

let win, serve;
let systemTrayIcon: Tray;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function createWindow() {
    const electronScreen = screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    const appWindowWidth = size.width / 2;
    const appWindowHeight = 600;
    const appWindowX = (size.width / 2) - (appWindowWidth / 2);
    const appWindowY = (size.height / 2) - (appWindowHeight / 2);

    // Create the browser window.
    win = new BrowserWindow({
        //        frame: false,
        x: appWindowX,
        y: appWindowY,
        width: appWindowWidth,
        height: appWindowHeight,
        fullscreenable: false,
        maximizable: false,
        transparent: true,
        useContentSize: true,
    });

    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`)
        });
        win.loadURL('http://localhost:4200');
    } else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

function loadGlobalShortcuts() {
    const ret = globalShortcut.register('CommandOrControl+Space', () => {
        if (win.isMinimized()) {
            restoreSearchWindow();
        } else {
            win.minimize();
        }
    });

    if (!ret) {
        throw new Error('hotkey registration failed');
    }
}

function createSystemTrayButton() {
    systemTrayIcon = new Tray('./logo.ico');
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Open',
            click: () => restoreSearchWindow(),
        },
        { label: 'Options', role: 'options' },
        { type: 'separator' },
        {
            label: 'Exit',
            role: 'exit',
            click: () => app.quit(),
        }
    ]);
    systemTrayIcon.setToolTip('NuCard');
    systemTrayIcon.setContextMenu(contextMenu);

    systemTrayIcon.on('click', () => {
        restoreSearchWindow();
    });
}

function cleanupContextMenu() {
    systemTrayIcon.destroy();
}

function restoreSearchWindow() {
    if (win === null) {
        createWindow();
    } else {
        win.restore();
    }
}

app.on('ready', createWindow);
app.on('ready', loadGlobalShortcuts);
app.on('ready', createSystemTrayButton);
app.on('before-quit', cleanupContextMenu);

app.on('window-all-closed', () => {
    // noop - by default automatically quits when all windows are closed,
    // but we want to stay up until they quit from systray
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
