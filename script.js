AOS.init({
  duration: 700,
  once: true,
  offset: 60
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.querySelector('i').classList.toggle('fa-sun');
  themeToggle.querySelector('i').classList.toggle('fa-moon');
});

const burger = document.getElementById('burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    card.style.transform = `perspective(600px) rotateX(${ -dy * 6 }deg) rotateY(${ dx * 8 }deg) translateY(-6px) scale(1.01)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  if(!name || !email || !message) return alert('Please fill all fields');
  const mailto = `mailto:anuj94460@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + email)}`;
  window.location.href = mailto;
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();

