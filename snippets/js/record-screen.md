# 屏幕分享/视频录制

```javascript
const player = document.querySelector("#player");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const download = document.querySelector("#download");

let recorder;
let captureStream;
const displayMediaOptions = {
  video: {
    cursor: "never",
    displaySurface: "window",
  },
  audio: true,
};

const startCapture = async () => {
  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    );
  } catch (err) {
    console.log("Error: " + err);
    return alert("capture is error or cancel!");
  }
  window.URL.revokeObjectURL(player.src);
  player.srcObject = captureStream;
  recorder = new MediaRecorder(captureStream);
  recorder.start();
};
const stopCapture = () => {
  let tracks = player.srcObject.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
  recorder.stop();
  recorder.addEventListener("dataavailable", (event) => {
    let videoUrl = URL.createObjectURL(event.data, { type: "video/mp4" });
    player.srcObject = null;
    player.src = videoUrl;
  });
};
const downloadVideo = () => {
  const name = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ")
    .replace(" ", "_")
    .replace(/:/g, "-");
  const a = document.createElement("a");
  a.href = player.src;
  a.download = `${name}.mp4`;
  document.body.appendChild(a);
  a.click();
};

start.addEventListener("click", (e) => startCapture(), false);
stop.addEventListener("click", (e) => stopCapture(), false);
download.addEventListener("click", (e) => downloadVideo(), false);
```
