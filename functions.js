function convertTemperature(celsius, toFahrenheit) {
  if (toFahrenheit) {
    return (celsius * 9 / 5) + 32;
  }
  return (celsius - 32) * 5 / 9;
}

function validatePassword(password) {
  if (password.length <= 8) {
    return false;
  }

  let hasLetter = false;
  let hasDigit = false;

  for (let char of password) {
    if (char.toLowerCase() !== char.toUpperCase()) {
      hasLetter = true;
    }
    if (char >= "0" && char <= "9") {
      hasDigit = true;
    }
  }

  return hasLetter && hasDigit;
}

function calculate(a, b, operation) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    if (b === 0) {
      return "Ошибка: деление на ноль";
    }
    return a / b;
  }
  return "Неизвестная операция";
}
