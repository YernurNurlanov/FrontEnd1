const videoContainer = document.getElementById("video-container");
const video = document.getElementById("fullscreen-video");
video.addEventListener("click", toggleFullScreen);
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}