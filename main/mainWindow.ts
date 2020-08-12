import {
  BrowserWindow,
  Menu,
  ipcMain,
  dialog,
  BrowserWindowConstructorOptions,
} from "electron";
import fs from "fs";

import appMenu from "./appMenu";

const debug = require("debug")("electron:main");

class MainWindow extends BrowserWindow {
  constructor(options: BrowserWindowConstructorOptions) {
    super(options);

    Menu.setApplicationMenu(Menu.buildFromTemplate(appMenu(this)));

    // ipcMain.on("match:open-file", () => {
    //   this.openFile();
    // });

    // ipcMain.on("auth:authenticated", (sender, authenticated) => {
    //   let menu = Menu.getApplicationMenu();

    //   menu!.getMenuItemById("settings-profile").enabled = authenticated;
    //   menu!.getMenuItemById("settings-game-board").enabled = authenticated;
    //   menu!.getMenuItemById("action-sign-up").enabled = !authenticated;
    //   menu!.getMenuItemById("action-sign-in").visible = !authenticated;
    //   menu!.getMenuItemById("action-sign-out").visible = authenticated;
    // });
  }

  // openFile() {
  //   dialog
  //     .showOpenDialog(this, {
  //       title: "Open Match",
  //       properties: ["openFile"],
  //     })
  //     .then((result) => {
  //       if (result.canceled) {
  //         return;
  //       }

  //       fs.readFile(result.filePaths[0], "utf-8", (err, data) => {
  //         if (err) {
  //           alert(`An error ocurred reading the file: ${err.message}`);
  //           return;
  //         }

  //         // handle the file content
  //         this.webContents.send("match:load", data);
  //       });
  //     });
  // }

  // closeFile() {
  //   this.webContents.send("match:init");
  // }
}

export default MainWindow;
