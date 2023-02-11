const handlePlay = (keyId) => {
  let drumKeys = document.querySelectorAll(`[data-key~="${keyId}"]`)[0];
  let audio = document.querySelectorAll(`[data-key~="${keyId}"]`)[1];
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    drumKeys.classList.add("press");
  }
};
// key down listener
window.addEventListener("keydown", (e) => {
  handlePlay(e.keyCode);
});
// click listener
document.querySelectorAll(".key").forEach((keynode) => {
  keynode.addEventListener("click", () => handlePlay(keynode.dataset.key));
});
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  this.classList.remove("press");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
