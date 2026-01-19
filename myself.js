const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
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