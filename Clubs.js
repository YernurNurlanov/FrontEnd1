const image = document.getElementById("image-element");
    const audio = document.getElementById("audio-element");
    function playSound() {
      image.classList.add("spin");
      audio.play();
      audio.addEventListener("ended", function() {
        image.classList.remove("spin");
      });
    }
    image.addEventListener("click", playSound);