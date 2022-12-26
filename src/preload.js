const { ipcRenderer } = require('electron');

window.captureScreen = () => {
    return ipcRenderer.invoke('capture-screen');
};

//const io = require('socket.io')

// Node.jsのすべてのAPIがプリロード処理で利用可能です。
// Chromeの拡張機能と同じサンドボックスを持っています。
// window.addEventListener("DOMContentLoaded", () => {
//     // DOM要素のテキストを変更します
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector);
//       if (element) {
//         element.textContent = text;
//       }
//     };
  
//     for (const dependency of ["chrome", "node", "electron"]) {
//       // HTMLページ内の文言を差し替えます
//       replaceText(`${dependency}-version`, process.versions[dependency]);
//     }

//     localVideo = document.getElementById('local_video');
//     container = document.getElementById('container');
//     _assert('container', container);
// });

// let localVideo=null
// let localStream = null;
// let container= null;

// //let remoteVideo = document.getElementById('remote_video');
// //let peerConnection = null;
// //let textForSendSdp = document.getElementById('text_for_send_sdp');
// //let textToReceiveSdp = document.getElementById('text_for_receive_sdp');

// // ---- for multi party -----
// let peerConnections = [];
// //let remoteStreams = [];
// let remoteVideos = [];
// const MAX_CONNECTION_COUNT = 3;

// // --- multi video ---

// function _assert(desc, v) {
//     if (v) {
//         return;
//     }
//     else {
//         let caller = _assert.caller || 'Top level';
//         console.error('ASSERT in %s, %s is :', caller, desc, v);
//     }
// }

// let port = 3001;
// //let socket = io.connect('http://localhost:' + port + '/');