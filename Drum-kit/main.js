const sounds = {
    65: new Audio('./sounds/clap.wav'),
    83: new Audio('./sounds/hihat.wav'),
    68: new Audio('./sounds/kick.wav'),
    70: new Audio('./sounds/openhat.wav'),
    71: new Audio('./sounds/boom.wav'),
    72: new Audio('./sounds/ride.wav'),
    74: new Audio('./sounds/snare.wav'),
    75: new Audio('./sounds/tom.wav'),
    76: new Audio('./sounds/tink.wav')
}

const transition = element => {
    if(element.propertyName !== 'transform'){
        return
    }
    element.target.classList.remove('playing')
}

const playingSounds = element => {
    let code = element.keyCode
    const key = document.querySelector(`div[data-key="${code}"]`)
    
    key.classList.add('playing')
    sounds[code].currentTime = 0
    sounds[code].play()
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', transition))
window.addEventListener('keydown', playingSounds)