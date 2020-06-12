当前基于 serialport v9.0.0

官方简单 demo：https://github.com/TLScottChen/node-serialport-example

官方文档 v4.0.1：https://github.com/node-serialport/node-serialport/blob/4.0.1/README.md

websocket - npm：https://www.npmjs.com/package/websocket

websocket - github：https://github.com/theturtle32/WebSocket-Node#note-for-windows-users


#### 1、查看串口列表
```
node list.js
```

#### 2、port.js - methods
| 方法名 | 作用       | 参数       |
| ------ | ---------- | ---------- |
| open   | 打开串口   | -          |
| write  | 开关继电器 | true/false |


#### 3、通过 websocket 与服务端通信

```
node websocket.js
```

KeyWords: node、serialport、websocket
