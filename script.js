const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const mensaje = document.getElementById("mensaje");

let contadorNo = 0;

// Fondos que cambian cuando dice "No"
const fondosNo = [
  "img/no1.png",
  "img/no2.png",
  "img/no3.png",
  "img/no4.png",
  "img/no5.png",
  "img/no6.png",
  "img/no7.png"
];

const frasesNo = [
  "¿Segura que no? 😭",
  "Vamos, di que sí, prometo muchas risas 🎃",
  "No me rompas el corazón 💔",
  "Piensa en la salchipapa 😋",
  "Y en pintarnos la cara juntos 🧡",
  "Y en caminar tomados de la mano 💫",
  "Por favorrrr 🙏 di que sí, te amo 😭"
];

// Fondos que cambian cuando dice "Sí"
const fondosSi = [
  "img/fondo_si1.jpg",
  "img/fondo_si2.jpg",
  "img/fondo_si3.jpg"
];

let cambioSi;
let indexSi = 0;

btnSi.addEventListener("click", () => {
  document.body.style.backgroundImage = `url('${fondosSi[indexSi]}')`;
  cambioSi = setInterval(() => {
    indexSi = (indexSi + 1) % fondosSi.length;
    document.body.style.backgroundImage = `url('${fondosSi[indexSi]}')`;
  }, 4000);

  mensaje.innerHTML = `
    💖 Gracias por decir que sí, mi amor 💖<br><br>
    Mañana a las <b>2:30</b> salimos a pasarla increíble 💫.<br>
    Vamos a hacer <b>salchipapa y malteada si quieres</b> en mi casa, caminar, reír, 
    pintarnos la cara y pedir dulces pues si quieres o compramos y no se que mas jaja me dices 🎃🍭.<br><br>
    Gracias por hacer mi vida más feliz cada día, por ser mi razón de sonreír, 
    por acompañarme en todo y por dejarme compartir contigo momentos tan lindos pero ojala te dejen salir me avisas ya para saber :). 💕<br><br>
    Te amo con todo mi corazón 🧡<br><br>
    — Con amor, <b>Dylan 💀🎃</b>
  `;

  btnSi.style.display = "none";
  btnNo.style.display = "none";
});

btnNo.addEventListener("click", () => {
  contadorNo++;
  if (contadorNo >= frasesNo.length) contadorNo = 0;

  mensaje.textContent = frasesNo[contadorNo];
  document.body.style.backgroundImage = `url('${fondosNo[contadorNo]}')`;

  // Mueve el botón aleatoriamente
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;

  // Encoge un poco el botón
  const size = Math.max(0.5, 1 - contadorNo * 0.1);
  btnNo.style.transform = `scale(${size})`;
});
