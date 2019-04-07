# 创建Angular
```shell
ng new mx-app
```

# Electron

在package.json下的devDependencies添加electron依赖

`"electron": "^4.1.3"`

`npm install --save`

在根目录下创建main.js

```js
const { app, BrowserWindow } = require("electron");

const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    var args = process.argv.slice(1);

    dev = args.some(function(val) {
        return val === "--dev";
    });

    const winURL = dev
        ? "http://localhost:4200/"
        : `file://${__dirname}/dist/mx-app/index.html`;

    // and load the index.html of the app.
    mainWindow.loadURL(winURL);

    // mainWindow.webContents.openDevTools();

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on("closed", function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

```

在package.json下添加main

```json
{
    ...
    "main":"main.js",
    ...
}
```

在scripts下添加两个运行命令:

```json
...
"dev": "concurrently \"ng serve\" \"electron . --dev\"",
"win-pack": "ng build --prod --build-optimizer && electron-builder -w"
...
```

安装其他包:

```shell
npm install --save concurrently
npm install --save ngx-electron
```

# Material

```shell
npm install --save @angular/material @angular/cdk @angular/animations
# 布局工具
npm install --save @angular/flex-layout
```

添加样式:

```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

在需要使用的module中引入

```typescript
import { MatButtonModule, MatCheckboxModule, MatInputModule } from "@angular/material";
```

html 示例:

```html
<form class="example-form">
    <mat-form-field class="example-full-width">
        <input matInput placeholder="Favorite food" value="Sushi" />
    </mat-form-field>

    <mat-form-field class="example-full-width">
        <textarea matInput placeholder="Leave a comment"></textarea>
    </mat-form-field>
</form>
```

