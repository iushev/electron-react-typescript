import { ipcMain } from "electron";
import { autoUpdater } from "electron-updater";
import MainWindow from "./mainWindow";

const debug = require("debug")("electron:main");

export default (win: MainWindow) => {
  autoUpdater.autoInstallOnAppQuit = false;

  autoUpdater.on("checking-for-update", () => {
    debug("Checking for update ...");
    win.webContents.send("autoUpdater:checking-for-update");
  });

  autoUpdater.on("update-available", (info) => {
    debug("Update available.");
    win.webContents.send("autoUpdater:update-available", info);
  });

  autoUpdater.on("update-not-available", (info) => {
    debug("Update not available.");
    win.webContents.send("autoUpdater:update-not-available", info);
  });

  autoUpdater.on("error", (err) => {
    debug("Error in auto-updater.");
    debug(err);
    win.webContents.send("autoUpdater:error", err.message);
  });

  autoUpdater.on("download-progress", (progressObj) => {
    debug("Download progress ...");
    debug(progressObj);
    win.webContents.send("autoUpdater:download-progress", progressObj);
  });

  autoUpdater.on("update-downloaded", (info) => {
    debug("Update downloaded.");
    win.webContents.send("autoUpdater:update-downloaded", info);
  });

  ipcMain.on("install-update", () => {
    debug("Installing update.");
    process.nextTick(() => {
      autoUpdater.quitAndInstall();
    });
  });
};
