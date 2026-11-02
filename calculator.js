const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const result = document.getElementById("result");
const operationButtons = document.querySelectorAll(".operation-btn");

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (num1Input.value === "" || num2Input.value === "") {
      result.textContent = "Введите оба числа";
      return;
    }

    const a = Number(num1Input.value);
    const b = Number(num2Input.value);
    const operation = button.dataset.operation;

    result.textContent = "Результат: " + calculate(a, b, operation);
  });
});
