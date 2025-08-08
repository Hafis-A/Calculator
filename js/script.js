const display = document.getElementById("display");

function append(value) {
 
  const lastChar = display.value.slice(-1);
  if (/[+\-*/.]/.test(lastChar) && /[+\-*/.]/.test(value)) {
    return; 
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.trim() === "") return;

   
    if (/\/0(?!\.\d)/.test(display.value)) {
      display.value = "Error";
      return;
    }

    let result = eval(display.value);

    if (isNaN(result) || result === Infinity) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}
