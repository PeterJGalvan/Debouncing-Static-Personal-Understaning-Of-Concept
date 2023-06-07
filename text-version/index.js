const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
});

// a reusable debounce
function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

// simpler solution
// let timeout;

// function updateDebounceText(text) {
//   clearTimeout(timeout);

//   timeout = setTimeout(() => {
//     debounceText.textContent = text;
//   }, 1000);
// }
