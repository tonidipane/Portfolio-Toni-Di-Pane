const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");

  // Ajoute/enlève la croix sur le bouton
  burger.classList.toggle("active", isOpen);

  // Accessibilité
  burger.setAttribute("aria-expanded", isOpen);
});

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


const isTouchDevice = ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);

if (!isTouchDevice) {
  const cardDiv = document.getElementById('cardDiv');
  const imgCard = document.getElementById('card2');

  if (cardDiv && imgCard) {
    let bounds;

    cardDiv.addEventListener('mouseenter', (e) => {
      bounds = cardDiv.getBoundingClientRect();
      rotateToMouse(e);
      document.addEventListener('mousemove', rotateToMouse);
    });

    cardDiv.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', rotateToMouse);
      cardDiv.style.transform = '';
      cardDiv.style.background = '';
      imgCard.style.filter = 'drop-shadow(5px 5px 20px rgba(168, 168, 168, 0))';
    });

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;

      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      cardDiv.style.transform = `
        perspective(60em)
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;

      imgCard.style.filter = 'drop-shadow(5px 5px 15px rgba(168, 168, 168, 0.62))';
    }
  }
}


const form = document.querySelector(".contact-form");
const statusEl = document.querySelector(".form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusEl.textContent = "Envoi en cours...";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        statusEl.textContent = "Merci ! Votre message a bien été envoyé.";
        form.reset();
      } else {
        statusEl.textContent = "Oups, l’envoi a échoué. Réessayez.";
      }
    } catch (err) {
      statusEl.textContent = "Erreur réseau. Réessayez plus tard.";
    }
  });
}

function hideOnMobileDevice() {
  const el = document.querySelector('#cursor');
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile) {
    el.style.opacity = 0;
  } else {
    el.style.opacity = 1;
  }
}

window.addEventListener('load', hideOnMobileDevice);