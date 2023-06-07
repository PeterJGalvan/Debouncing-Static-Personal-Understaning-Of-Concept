const button = document.querySelector("button");

button.addEventListener("click", () => {
  displayMessage();
});

// a reusable debounce
function debounce(callback, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const displayMessage = debounce(() => {
  console.log("can't over click");
});

let timeout;

function displayMessage() {
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    console.log("can't over click");
  }, 1000);
}
