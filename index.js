const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 900
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
