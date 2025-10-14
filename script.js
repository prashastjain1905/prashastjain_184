function increment(id) {
  const counter = document.getElementById(id);
  counter.textContent = parseInt(counter.textContent) + 1;
}