const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#0f172a',
    icon: path.join(__dirname, 'src', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    show: false
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
  mainWindow.once('ready-to-show', () => mainWindow.show());
  Menu.setApplicationMenu(null);
}

ipcMain.handle('save-backup', async (_e, data) => {
  const { filePath } = await dialog.showSaveDialog(mainWindow, {
    title: 'Guardar backup',
    defaultPath: `job-tracker-backup-${new Date().toISOString().split('T')[0]}.json`,
    filters: [{ name: 'JSON', extensions: ['json'] }]
  });
  if (filePath) {
    fs.writeFileSync(filePath, data, 'utf-8');
    return { success: true, path: filePath };
  }
  return { success: false };
});

ipcMain.handle('load-backup', async () => {
  const { filePaths } = await dialog.showOpenDialog(mainWindow, {
    title: 'Cargar backup',
    filters: [{ name: 'JSON', extensions: ['json'] }],
    properties: ['openFile']
  });
  if (filePaths && filePaths[0]) {
    const data = fs.readFileSync(filePaths[0], 'utf-8');
    return { success: true, data };
  }
  return { success: false };
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
