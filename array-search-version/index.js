const input = document.querySelector("input");
const button = document.querySelector("button");
const returnValue = document.getElementById("returnValue");

const arrayValues = ["apple", "banana", "watermelon"];

input.addEventListener("input", (e) => {
  updateDebounceText(e.target.value);
});

const updateDebounceText = debounce((text) => {
  const filteredArray = filteringArray(arrayValues, text);

  displayItems(filteredArray);
});

function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function updateInputValue(e) {
  input.value = e.textContent;

  const filteredArray = filteringArray(arrayValues, input.value);

  displayItems(filteredArray);
}

function filteringArray(array, filterValue) {
  return array.filter((item) => {
    return item.includes(filterValue) === true;
  });
}

function displayItems(array = arrayValues) {
  const displayArray = array.map((item) => {
    return `<button onclick=updateInputValue(this)>${item}</button>`;
  });

  returnValue.innerHTML = displayArray.join("");
}
