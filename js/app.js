import { sound, ligthBorder } from './modules/module.js'

document.addEventListener("keydown", function(event) {
    const letterText= event.code[3]
    const keys = document.querySelectorAll('.key .letter')
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].textContent === letterText) {
       const key = keys[i].parentElement
       ligthBorder(key)
      }
    }
    
    const soundPlay= sound(letterText)
    soundPlay.play()
  });

document.querySelectorAll(".key .letter, .key .sound").forEach(function(element) {
    element.addEventListener("click", function(event) {
      const key = this.parentElement;
      let letterText = key.querySelector(".letter").textContent
      ligthBorder(key)
      const soundPlay= sound(letterText)
      soundPlay.play()
    });
  });

