
window.addEventListener('keydown', function (e) {
    // console.log(e)
    const keyValue = e.which

    const drumKeys = document.getElementsByClassName('key')
    const audioFile = document.getElementsByTagName('audio')
    // console.log(drumKeys)
    for (let a = 0; a < drumKeys.length; a = a + 1) {
        let audioValue = drumKeys[a]
        let audioTag = audioFile[a]

        if (keyValue == audioValue.dataset.key) {
            audioTag.currentTime = 0;
            audioTag.play()
            audioValue.classList.add('press')
        }
    }
    
})

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName)
    this.classList.remove('press');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));