
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });

  const form = document.getElementById('form-contacto');
  const mensaje = document.getElementById('mensaje-enviado');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdkddzjq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      mensaje.style.display = "block";
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 6000);
    } else {
      mensaje.innerText = "❌ Error al enviar el mensaje. Intenta nuevamente.";
      mensaje.style.display = "block";
      mensaje.style.color = "#ff4d4d";
    }
  });
});

const toggleBtn = document.getElementById("modo-toggle");
const icono = document.querySelector(".icono-tema");
const texto = document.querySelector(".texto-tema");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const esClaro = root.style.getPropertyValue("--bg-color") === "#ffffff";

  if (esClaro) {
    // Volver a oscuro
    root.style.setProperty("--bg-color", "#0d1117");
    root.style.setProperty("--text-color", "#c9d1d9");
    root.style.setProperty("--box-bg", "#161b22");
    icono.textContent = "🌙";
    texto.textContent = "Modo Oscuro";
    icono.style.transform = "rotate(-360deg)";
  } else {
    // Cambiar a claro
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--text-color", "#0d1117");
    root.style.setProperty("--box-bg", "#f3f4f6");
    icono.textContent = "🌞";
    texto.textContent = "Modo Claro";
    icono.style.transform = "rotate(360deg)";
  }
});
