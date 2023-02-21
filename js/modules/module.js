export const audios = [
    {letter: "A", route: "sounds/clap.wav"},
    {letter: "S", route: "sounds/hihat.wav"},
    {letter: "D", route: "sounds/kick.wav"},
    {letter: "F", route: "sounds/openhat.wav"},
    {letter: "G", route: "sounds/boom.wav"},
    {letter: "H", route: "sounds/ride.wav"},
    {letter: "J", route: "sounds/snare.wav"},
    {letter: "K", route: "sounds/tom.wav"},
    {letter: "L", route: "sounds/tink.wav"},
];

export const sound  = (letterText) => {
    for (let i = 0; i < audios.length; i++) {
      const obj = audios[i];
      if (obj.letter === letterText) {
        console.log(obj.route)
        const sound= new Audio(obj.route)
        return sound
      }
    }
  }

export const ligthBorder = (element) =>{
    element.classList.add("playing")            
    setTimeout(function() {
    element.classList.remove("playing");
    }, 1000);
  }
