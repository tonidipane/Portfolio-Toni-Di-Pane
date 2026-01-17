  document.addEventListener("mousemove", function(event) {
    const x = event.clientX - 20;
    const y = event.clientY - 20;
    const cursor = document.querySelector("#cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });

  document.addEventListener("scroll", function(event) {
    const cursor = document.querySelector("#cursor");
    cursor.style.left = event.clientX;
    cursor.style.top = event.clientY;
  });
  
  document.addEventListener("mousedown",function(event) {
    document.getElementById("cursor").style.transform = 'scale(0.5)';
  })

  document.addEventListener("mouseup",function(event) {
    document.getElementById("cursor").style.transform = 'scale(1)';
  })


  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      burger.classList.toggle('toggle');
    });
  });

console.log(document.getElementById("text1"))

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Du Design Graphique.",
    "De l'Animation 3D.",
    "Du Motion Design.",
    "De l'Ui/Ux Design.",
    "Du Prototypage.",
    "Du Developpement.",

];

const morphTime = 1;
const cooldownTime = 0.7;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

console.log(elts,texts,texts[textIndex % texts.length])
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


  