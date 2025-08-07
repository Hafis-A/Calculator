const display = document.getElementById("display");

      function append(value) {
        display.value += value;
      }

      function clearDisplay() {
        display.value = "";
      }

      function del() {
        display.value = display.value.slice(0, -1);
      }

      function calculate() {
        if (display.value.length > 1) {
          display.value = eval(display.value);
        }
      }