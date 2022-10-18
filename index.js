// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');

anime.timeline({ loop: true })
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let wave = document.querySelector('.wave')
let wave2 = document.querySelector('.wave2')
let wavearray = ["W", "A", "V", "E"]
let wavearray2 = [20, 40, 60, 80]
s = 1.5
for (let l = 0; l < 4; l++) {
    let wavechild = document.createElement("span")
    wavechild.textContent = wavearray[l]
    wavechild.style.left = wavearray2[l] + "%"
    wavechild.style.animation = "letteranime" + " " + s + "s" + " infinite"

    s = s + 0.3
    wave.appendChild(wavechild)
    wavechild.className = "wavechild"

}

for (let l = 0; l < 100; l++) {
    let x = Math.floor((Math.random() * 50) + 1);
    let wavechild = document.createElement("span")
    wavechild.textContent = "W"
    wavechild.style.left = l + "%"
    wavechild.style.top = "110%"
    wavechild.style.animation = "letters" + " " + x + "s" + " infinite"
    wavechild.className = "w"
    wave2.appendChild(wavechild)
}
for (let l = 0; l < 100; l++) {
    let x = Math.floor((Math.random() * 50) + 1);
    let wavechild = document.createElement("span")
    wavechild.textContent = "W"
    wavechild.style.left = l + "%"
    wavechild.style.top = "110%"
    wavechild.style.animation = "letters" + " " + x + "s" + " infinite"
    wavechild.className = "w"
    wave2.appendChild(wavechild)
}
for (let l = 0; l < 100; l++) {
    let x = Math.floor((Math.random() * 50) + 1);
    let wavechild = document.createElement("span")
    wavechild.textContent = "W"
    wavechild.style.left = l + "%"
    wavechild.style.top = "110%"
    wavechild.style.animation = "letters" + " " + x + "s" + " infinite"
    wavechild.className = "w"
    wave2.appendChild(wavechild)
}
for (let l = 0; l < 100; l++) {
    let x = Math.floor((Math.random() * 50) + 1);
    let wavechild = document.createElement("span")
    wavechild.textContent = "W"
    wavechild.style.left = l + "%"
    wavechild.style.top = "110%"
    wavechild.style.animation = "letters" + " " + x + "s" + " infinite"
    wavechild.className = "w"
    wave2.appendChild(wavechild)
}

// n = 50
// a = 48
// f = 50
// m = 52
// for (l = 0; l < 25; l++) {
//     let wavechild = document.createElement("span")
//     wavechild.textContent = l + "%{top:" + n + "%;}"
//     n = n - 0.08
//     wave.appendChild(wavechild)
// }
// for (l = 25; l < 50; l++) {
//     let wavechild = document.createElement("span")
//     wavechild.textContent = l + "%{top:" + a + "%;}"
//     a = a + 0.08
//     wave.appendChild(wavechild)
// }
// for (l = 50; l < 75; l++) {
//     let wavechild = document.createElement("span")
//     wavechild.textContent = l + "%{top:" + f + "%;}"
//     f = f + 0.08
//     wave.appendChild(wavechild)
// }
// for (l = 75; l < 100; l++) {
//     let wavechild = document.createElement("span")
//     wavechild.textContent = l + "%{top:" + m + "%;}"
//     m = m - 0.08
//     wave.appendChild(wavechild)
// }