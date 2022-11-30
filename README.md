# Electron + react MenuBar component

## 1. Description

### 1) dependency

| electron | 13.6.9 |
| --- | --- |
|   react |   18.2.0 |
| antd | 5.0.1 |
| mui/lab | 5.0.0-alpha.109 |
| mui/materal | 5.10.15 |
| re-resizable | 6.9.9 |
| node  | 14.16.0 |

### 2) Basic

- 기본폰트 : Inter
- 기본 폰트 크기 : 10px

```css
* {
  font-family: "Inter" !important;
  font-size: 10px !important;
}
```

### 3) components

- titlebar : 기존 electron의 타이틀바를 hide처리하고, header 태그를 사용해 새로운 타이틀바 생성, 타이틀바의 최대화, 최소화, 창닫기 구현 (Mac OS 의 경우 기존의 titlebar 를 없애더라도 traffic-lights 가 남아있기 때문에 구분하여 사용 ⇒ branch 로 구분(default : forWindows))
    
       - mui의 Button, icon, 사용하여 버튼 구현
    
       - ipc render, ipc main 사용하여  버튼 통신
    
    - Windows titlebar
    
    ![Untitled](https://user-images.githubusercontent.com/80394582/204409878-b10f3329-0cd7-4dab-828a-01a6272c0b71.png)
    
    - Mac OS titlebar
    
    ![Untitled](https://user-images.githubusercontent.com/80394582/204409906-49e2ebf0-8ca8-4caf-b740-831a1489ab39.png)
    

- Category :  Resizable ⇒Collapse ⇒Treeview ⇒TreeItem 순으로 사용 , overflowY로 resizing시 scroll 생성하게함,  props로 Collapse header 설정
  
    ![Untitled](https://user-images.githubusercontent.com/80394582/204440965-13f06e8c-76f4-484c-a175-0593041c7323.PNG)

## 2. Start

 

- git clone , dependency install( node의 경우 global version을 사용하지 않고, electron version에 따라 다른 version 을 사용함)
- git clone → yarn install → yarn start

- scripts

```json
"scripts": {
    "start": "concurrently \"yarn react-scripts start\" \"yarn electron\" ",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "electron": "wait-on http://localhost:3000 && electron ."
  },
```

- dependency

```json
"devDependencies": {
    "concurrently": "^7.6.0",
    "electron": "^13.6.9",
    "wait-on": "^6.0.1"
  }
```
