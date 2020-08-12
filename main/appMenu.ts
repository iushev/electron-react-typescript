import {
  app,
  MenuItem,
  MenuItemConstructorOptions,
  BrowserWindow,
  KeyboardEvent,
} from "electron";

export default (
  win: BrowserWindow
): Array<MenuItemConstructorOptions | MenuItem> => [
  {
    label: "File",
    submenu: [
      // {
      //   label: "Open",
      //   click() {
      //     win.openFile();
      //   },
      // },
      // {
      //     label: 'Close',
      //     id:    'closeMenuitem',
      //     click() { win.closeFile();},
      //     //enabled: false
      // },
      {
        label: "Quit",
        click(
          _menuItem: MenuItem,
          _browserWindow: BrowserWindow | undefined,
          _event: KeyboardEvent
        ) {
          app.quit();
        },
      },
    ],
  },
  // {
  //   label: "Action",
  //   submenu: [
  //     {
  //       id: "action-sign-up",
  //       label: "Register",
  //       click(
  //         _menuItem: MenuItem,
  //         browserWindow: BrowserWindow | undefined,
  //         _event: KeyboardEvent
  //       ) {
  //         browserWindow!.webContents.send("navigate:to", "/sign-up");
  //       },
  //     },
  //     {
  //       id: "action-sign-in",
  //       label: "Connect",
  //       click(
  //         _menuItem: MenuItem,
  //         browserWindow: BrowserWindow | undefined,
  //         _event: KeyboardEvent
  //       ) {
  //         browserWindow!.webContents.send("navigate:to", "/sign-in");
  //       },
  //     },
  //     {
  //       id: "action-sign-out",
  //       label: "Disconnect",
  //       click(
  //         _menuItem: MenuItem,
  //         browserWindow: BrowserWindow | undefined,
  //         _event: KeyboardEvent
  //       ) {
  //         browserWindow!.webContents.send("navigate:to", "/sign-out");
  //       },
  //     },
  //   ],
  // },
  // {
  //   label: "Settings",
  //   submenu: [
  //     {
  //       id: "settings-profile",
  //       label: "Profile",
  //       enabled: true,
  //       click(
  //         _menuItem: MenuItem,
  //         browserWindow: BrowserWindow | undefined,
  //         _event: KeyboardEvent
  //       ) {
  //         browserWindow!.webContents.send("navigate:to", "/settings/profile");
  //       },
  //     },
  //     {
  //       id: "settings-gameboard",
  //       label: "Games && Board",
  //       enabled: true,
  //       click(
  //         _menuItem: MenuItem,
  //         browserWindow: BrowserWindow | undefined,
  //         _event: KeyboardEvent
  //       ) {
  //         browserWindow!.webContents.send("navigate:to", "/settings/gameboard");
  //       },
  //     },
  //   ],
  // },
  {
    role: "help",
    submenu: [
      // {
      //   label: "About",
      //   click(
      //     _menuItem: MenuItem,
      //     _browserWindow: BrowserWindow | undefined,
      //     _event: KeyboardEvent
      //   ) {
      //     require("electron").shell.openExternal(
      //       "https://backgammon.international/about"
      //     );
      //   },
      // },
      // {
      //   label: "Contacts",
      //   click(
      //     _menuItem: MenuItem,
      //     _browserWindow: BrowserWindow | undefined,
      //     _event: KeyboardEvent
      //   ) {
      //     require("electron").shell.openExternal(
      //       "https://backgammon.international/contacts"
      //     );
      //   },
      // },
      {
        label: "Open DevTools",
        click(
          _menuItem: MenuItem,
          _browserWindow: BrowserWindow | undefined,
          _event: KeyboardEvent
        ) {
          win.webContents.openDevTools();
        },
      },
    ],
  },
];
