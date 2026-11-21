const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.textContent = "☰";
}));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    const category = button.dataset.filter;
    document.querySelectorAll(".product").forEach(product => {
      product.hidden = category !== "todos" && product.dataset.category !== category;
    });
  });
});

let cart = [];
const cartStatus = document.getElementById("cartStatus");
document.querySelectorAll(".quick-add").forEach(button => {
  button.addEventListener("click", () => {
    cart.push({ name: button.dataset.name, price: Number(button.dataset.price) });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartStatus.innerHTML = `${cart.length} ${cart.length === 1 ? "buquê adicionado" : "buquês adicionados"} · Total: R$ ${total.toFixed(2).replace(".", ",")} <span>♡</span>`;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Personalize o número abaixo com o WhatsApp da floricultura, incluindo código do país e DDD.
const whatsappNumber = "5500000000000";
document.getElementById("whatsappLink").href = `https://wa.me/${whatsappNumber}`;
