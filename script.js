function increment(id) {
  const counter = document.getElementById(id);
  counter.textContent = parseInt(counter.textContent) + 1;
}

function decrement(id) {
  const counter = document.getElementById(id);
  let value = parseInt(counter.textContent);
  if (value > 0) {
    counter.textContent = value - 1;
  }
}

function reset(id) {
  document.getElementById(id).textContent = 0;
}
