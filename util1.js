function $(id) {
  return document.getElementById(id);
}

function $v(id) {
  return document.getElementById(id).value;
}

function q(cssSelector) {
  return document.querySelector(cssSelector).value;
}

let curr = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

function f(num) {
  return curr.format(num);
}

function sum(...nums) {
  return nums.reduce((total, el) => total + el);
}

function toDecimal(num) {
  return num.toFixed(2);
}

function ifp(num, text) {
  if (num) {
    return text + f(num) + "<br>";
  } else {
    return "";
  }
}

function ifDel(num) {
  if (num) {
    return f(num) + "+";
  } else {
    return "";
  }
}

function ifp2(num1, num2, text) {
  if (num1 || num2) {
    return (
      text + f(num1) + "+" + f(num2) + ") = " + f(sum(num1, num2)) + "<br>"
    );
  } else {
    return "";
  }
}

function ifDel2(num1, num2) {
  if (num1 || num2) {
    return f(sum(num1, num2)) + "+";
  } else {
    return "";
  }
}

function ifDel2End(num1, num2) {
  if (num1 || num2) {
    return f(sum(num1, num2));
  } else {
    return "";
  }
}

function toNum(ID) {
  const valueInNumber = parseFloat(
    document.getElementById(ID).value.replace(/[^0-9.-]/g, "")
  );
  return valueInNumber;
}