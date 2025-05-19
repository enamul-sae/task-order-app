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

/*******************Collapsible Form start ******* */
const form1 = $("myForm");

/**************** Section 4: STO variables: ************** */

const Total_Amount = $("Total_Amount");

/**************** Sec 4: Previous Fee Schedule: ************** */

const Preli_NTE = $("Preli_NTE");
const Preli_Fee = $("Preli_Fee");
const Preli_staffing = $("Preli_staffing");
const Preli_art = $("Preli_art");
const Preli_Reimburse = $("Preli_Reimburse");

const Final_NTE = $("Final_NTE");
const Final_Fee = $("Final_Fee");
const Final_staffing = $("Final_staffing");
const Final_Reimburse = $("Final_Reimburse");

/**************** <<< Collapsible form end ************** */

$("btn").onclick = function () {
  var n1 = toNum("preli-fee1");
  var n3 = toNum("preli-reimburse1");
  var n4 = toNum("pArtwork1");

  var n6 = toNum("final-fee1");
  var n7 = toNum("fAllowance1");
  var n8 = toNum("final-reimburse1");
  var n10 = toNum("fCSS1");

  var pest = $v("pEstimate");
  var Total = n1 + n3 + n4 + n6 + n7 + n8 + n10;

  /*********************************************** */

  $("displayArea1").innerHTML =
    "<h2>FEE SCHEDULE</h2><br>" +
    "<h3><b><u>Initial Task Order # " +
    pest +
    "</u></b></h3><br>" +
    "<i><u>Preliminary Design Phase</i></u> <br>" +
    "Preliminary Design Fee: " +
    f(n1) +
    "<br>" +
    ifp(n3, "Reimbursable for Preliminary design phase: ") +
    ifp(n4, "Artwork for Preliminary design phase: ") +
    "Preliminary design phase not-to-exceed amount: (" +
    f(n1) +
    " + " +
    f(n3) +
    " + " +
    f(n4) +
    " ) = " +
    f(n1 + n3 + n4) +
    "<br><br>" +
    "<i><u>Final Design Phase</i></u> <br>" +
    "Final Design Fee: " +
    f(n6) +
    "<br>" +
    ifp(n7, "Allowances for Additional Final Design Services: ") +
    "Sub-total of Final Design Fee: (" +
    f(n6) +
    " + " +
    f(n7) +
    " ) = " +
    f(n6 + n7) +
    "<br><br>" +
    ifp(n8, "Reimbursable for the Final design phase: ") +
    ifp(n10, "CSS for Final design phase: ") +
    "Final design phase not-to-exceed amount: (" +
    f(n6) +
    f(n7) +
    " + " +
    f(n8) +
    " + " +
    f(n10) +
    " ) = " +
    f(n6 + n7 + n8 + n10) +
    "<br><br>" +
    "Total Preliminary and Final design phase NTE amount: (" +
    f(n1 + n3 + n4) +
    " + " +
    f(n6 + n7 + n8 + n10) +
    ") = " +
    f(Total);

  /************* Variables for amount information section: ***********************/
  Total_Amount.value = f(n1 + n3 + n4 + n6 + n7 + n8 + n10);

  Preli_NTE.value = f(n1 + n3 + n4);
  Preli_Fee.value = f(n1);
  Preli_art.value = f(n4);
  Preli_Reimburse.value = f(n3);

  Final_NTE.value = f(n6 + n7 + n8 + n10);
  Final_Fee.value = f(n6 + n7);
  Final_staffing.value = f(n10);
  Final_Reimburse.value = f(n8);
};

/*********** Format number into accounting style *************************/
function formatAccounting(value) {
  const number = parseFloat(value);
  if (isNaN(number)) return "";
  const formatted = Math.abs(number).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return number < 0 ? `(${formatted})` : formatted;
}

// Parse formatted accounting text to number
function parseAccounting(str) {
  const cleaned = str.replace(/[\$,()]/g, "");
  const number = parseFloat(cleaned);
  return str.includes("(") ? -Math.abs(number) : number;
}

// Apply formatting to all accounting inputs
function formatAllInputs() {
  document.querySelectorAll(".accounting").forEach((input) => {
    const raw = parseAccounting(input.value);
    input.value = formatAccounting(raw);
  });
}

// On blur, format individual input
document.querySelectorAll(".accounting").forEach((input) => {
  input.addEventListener("blur", () => {
    const raw = parseAccounting(input.value);
    input.value = formatAccounting(raw);
  });

  input.addEventListener("focus", () => {
    // Show plain number while editing
    const raw = parseAccounting(input.value);
    input.value = raw || "";
  });
});

// Initial formatting
formatAllInputs();

/************************************************************/
