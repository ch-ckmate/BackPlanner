<h1 align="center">
  <br>
  <a><img width="150" height="150" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Calendar_icon_2.svg/989px-Calendar_icon_2.svg.png" alt="BackPlanner"></a>
</h1>

<h2 align="center">A simple week planner that stay always on the background</h2>

  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
  [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/ch-ckmate) 
  [![Generic badge](https://img.shields.io/badge/cp-Electron-green.svg)](https://shields.io/)


      
---

<img src="appimg.png" alt="BackPlanner">

*Note: The background is transparent.*


---
## Download  
<p align="center">
    <a href="https://github.com/ch-ckmate/BackPlanner/releases/download/1.0.1/BackPlanner.zip" alt="Download">
        <img src="https://img.shields.io/static/v1?label=&message=Download&color=success" width="150" height="50"/></a>
</p>
  
  
      
## How to Use

Download the zip file, extract it wherever you want, execute the BackPlanner.exe, and Enjoy!
You will not see the menu bar icon app, instead you'll find the tray icon(in the bottom right corner) where you can quit the app.
I have not yet implemented an auto-update feature, so when in the menu of the tray icon there will be written "Update Available", just click on it and download the new version.


If you want the app to start at Windows startup, just follow this steps:

* With the file location open, press the Windows logo key  + R, type shell:startup, then select OK. This opens the Startup folder.

* Copy and paste the **shortcut** (right click on backplanner.exe, create shortcut) to the app from the file location to the Startup folder.  

**NOTE** →  The app starts with ignore mouse events, so it is like it doesn't exist(you can even move a file/folder behind it), to make change just press CTRL+K, and you will be able to modify your plan with double-click on the boxes, when you will click on another window, the app will reset the starting ignore mouse event.

This way we avoid the accidental clicks.

## Before Starting It

Before starting the app, open the settings file with the editor of your choice (wordpad,vscode...)  
**The settings file is in the */resources/app/* folder**  
Here you have 7 variables:  

* **height** →  This refers to the pixel number in height(this feature will be implemented shortly)  
* **width** →  Change this number according to the width of the app, if it is too big just lower the number(the content will resize automatically).  
* **xpos** →  The position on the x axis(Horizontal)  
* **ypos** →  The position on the y axis(Vertical)  
* **textcolor** →  Color of the text  
* **textareacolor** →  Color of the border around the text  
* **bordercolor** →  Color of the external border  
* **currentday** → Color of the border of the current day(if you don't want that current day differ just set the color like others border)


You can choose a color between this collection:  http://www.colors.commutercreative.com/grid/  
Just substitute the color name, so for example: instead of "white" → "darkblue"

Now start the exe, or if you have already started it, quit and start again so that changes will be saved.  
You may have to make some attempt in order to find the perfect settings for you.  

**Enjoy!**  
**Remember: To add or change text in the boxes just double-click!**  
      
## Second Monitor   
If you want to start the app on other monitors, just play with the **xpos** and **ypos** variables, <a href="https://stackoverflow.com/questions/53012896/using-setwindowpos-with-multiple-monitors/53026765">this answer</a> could help you find the right numbers.  
 
 
## License

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-orange.svg?style=flat-square)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

- Copyright © [Alessandro Pigato](https://github.com/ch-ckmate).
