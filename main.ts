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

let mainWindow, serve;
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
    mainWindow = new BrowserWindow({
        // frame: false,
        x: appWindowX,
        y: appWindowY,
        width: appWindowWidth,
        height: appWindowHeight,
        icon: './logo.ico',
        fullscreenable: false,
        maximizable: false,
        transparent: true,
        useContentSize: true,
    });

    serveApp();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

function cleanupContextMenu() {
    systemTrayIcon.destroy();
}

function createSystemTrayButton() {
    systemTrayIcon = new Tray('./logo.ico');
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Open',
            click: () => restoreSearchWindow(),
        },
        {
            label: 'Preferences',
            click: () => {
                restoreSearchWindow();
                mainWindow.webContents.send('navToPreferences');
            }
        },
        {
            label: 'About',
            click: () => {
                restoreSearchWindow();
                mainWindow.webContents.send('navToAbout');
            }
        },
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

function loadGlobalShortcuts() {
    const ret = globalShortcut.register('CommandOrControl+Space', () => {
        if (mainWindow.isMinimized()) {
            restoreSearchWindow();
        } else {
            mainWindow.minimize();
        }
    });

    if (!ret) {
        throw new Error('hotkey registration failed');
    }
}

function restoreSearchWindow() {
    if (mainWindow === null) {
        createWindow();
    } else {
        mainWindow.restore();
    }
}

function serveApp() {
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`)
        });
        mainWindow.loadURL(`http://localhost:4200`);
    } else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, `dist/index.html`),
            protocol: 'file:',
            slashes: true
        }));
    }
}

app.on('ready', createWindow);
app.on('ready', loadGlobalShortcuts);
app.on('ready', createSystemTrayButton);
app.on('activate', () => restoreSearchWindow());

app.on('before-quit', cleanupContextMenu);
app.on('window-all-closed', () => {
    // noop - by default automatically quits when all windows are closed,
    // but we want to stay up until they quit from systray
});
