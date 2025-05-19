function $(id) {
  return document.getElementById(id);
}

function $v(id) {
  return document.getElementById(id).value;
}

function q(cssSelector) {
  return document.querySelector(cssSelector).value;
}

function calcEndDate(startDateID, addDays) {
  const input = document.getElementById(startDateID);
  let startDate = input.value ? new Date(input.value) : new Date();
  return (startDate.getDate() + addDays).toISOString().split("T")[0];
}

//     function calcStartDate(endDateID, subtractDays) {
//       return calcEndDate(endDateID, -subtractDays);
// }

function insertedDate(id) {
  const input = document.getElementById(id);
  let startDate = input.value ? new Date(input.value) : new Date();
  // return startDate.getDate().toISOString().split("T")[0];
  return startDate.getDate();
}

// let currentDate = input.value ? new Date(input.value) : new Date();

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

function readDate(dateInputID) {
  const dateValue = $v(dateInputID);
  if (dateValue) {
    return new Date(dateValue).toISOString().split("T")[0];
  } else {
    return "Please select a date.";
  }
}

function calcDifferenceInDays(startDateID, endDateID) {
  const startDate = new Date($v(startDateID));
  const endDate = new Date($v(endDateID));

  if (!$v(startDateID) || !$v(endDateID)) {
    output.textContent = "Please select both dates.";
    return;
  }

  const differenceInTime = endDate.getTime() - startDate.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
  return differenceInDays;
}

function calcEndDate(startDateID, daysToAddID) {
  const startDateInput = $v(startDateID);
  const daysToAddInput = $v(daysToAddID);

  if (!startDateInput || !daysToAddInput) {
    output.textContent = "Please enter both a start date and number of days.";
    return;
  }

  const startDate = new Date(startDateInput);
  const daysToAdd = parseInt(daysToAddInput);

  if (isNaN(daysToAdd)) {
    output.textContent = "Please enter a valid number of days.";
    return;
  }

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + daysToAdd);

  const formattedEndDate = endDate.toISOString().split("T")[0];
  return formattedEndDate;
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

/**************** Sec 4: Modified Fee Schedule: ************** */

const Cumulative = $("Cumulative");

const CumPreliPh = $("CumPreliPh");
const PCumFee = $("PCumFee");
const PCumStaffing = $("PCumStaffing");
const PCumReimburse = $("PCumReimburse");

const CumFinalPh = $("CumFinalPh");
const FCumFee = $("FCumFee");
const FCumStaffing = $("FCumStaffing");
const FCumReimburse = $("FCumReimburse");

/**************** <<< Collapsible form end ************** */

$("btn").onclick = function () {
  var n1 = toNum("preli-fee1");
  // var n2 = toNum("pAllowance1");
  var n3 = toNum("preli-reimburse1");
  var n4 = toNum("pArtwork1");
  // var n5 = toNum("pCSS1");

  var n6 = toNum("final-fee1");
  var n7 = toNum("fAllowance1");
  var n8 = toNum("final-reimburse1");
  // var n9 = toNum("fArtwork1");
  var n10 = toNum("fCSS1");

  var n11 = toNum("preli-fee2");
  // var n12 = toNum("pAllowance2");
  var n13 = toNum("preli-reimburse2");
  var n14 = toNum("pArtwork2");
  // var n15 = toNum("pCSS2");

  var n16 = toNum("final-fee2");
  var n17 = toNum("fAllowance2");
  var n18 = toNum("final-reimburse2");
  // var n19 = toNum("fArtwork2");
  var n20 = toNum("fCSS2");

  var pest = $v("pEstimate");
  var mest = $v("mEstimate");

  var PreviousTotal = n1 + n3 + n4 + n6 + n7 + n8 + n10;
  var ModifiedTotal =
    n1 + n11 + n3 + n13 + n4 + n14 + n6 + n16 + n7 + n17 + n8 + n18 + n10 + n20;
  var addedAmount = ModifiedTotal - PreviousTotal;

  // var NTP_date = insertedDate("NTP_date");
  // var current_end_date = insertedDate("current_end_date");
  // var extendedEndDate = calcEndDate("NTP_date", time_extension);

  var NTP_date = readDate("NTP_date");
  var current_end_date = readDate("current_end_date");
  var time_extension = $v("time_extension");

  var duration = calcDifferenceInDays("NTP_date", "current_end_date");

  var endDate = calcEndDate("current_end_date", "time_extension");
  var overallDuration = parseInt(duration) + parseInt(time_extension)+1;

  /*********************************************** */

  $("displayArea1").innerHTML =
    "<h2>FEE SCHEDULE</h2>" +
    "<h3><b><u>Previous Fee Schedule: </u></b></h3>" +
    "<p>" +
    pest +
    "</p><br>" +
    "<i><u>Preliminary Design Phase</i></u> <br>" +
    "Preliminary Design Fee: " +
    f(n1) +
    "<br>" +
    ifp(n3, "Reimbursable for Preliminary design phase: ") +
    ifp(n4, "Artwork for Preliminary design phase: ") +
    "Preliminary design phase not-to-exceed amount: " +
    f(n1 + n3 + n4) +
    "<br><br>" +
    "<i><u>Final Design Phase</i></u> <br>" +
    "Final Design Fee: " +
    f(n6) +
    "<br>" +
    ifp(n7, "Allowances for Additional Final Design Services: ") +
    "Sub-total of Final Design Fee: " +
    f(n6 + n7) +
    "<br><br>" +
    ifp(n8, "Reimbursable for the Final design phase: ") +
    ifp(n10, "CSS for Final design phase: ") +
    "Final design phase not-to-exceed amount: " +
    f(n6 + n7 + n8 + n10) +
    "<br>" +
    "Total Preliminary and Final design phase NTE amount: (" +
    f(n1 + n3 + n4) +
    " + " +
    f(n6 + n7 + n8 + n10) +
    ") = " +
    f(n1 + n3 + n4 + n6 + n7 + n8 + n10) +
    "<br>" +
    // /******************************************************************/
    "<h3><b><u>Modified Fee Schedule:</u></b></h3>" +
    "<p>" +
    mest +
    "</p><br>" +
    "<i><u>Preliminary Design Phase</i></u> <br>" +
    ifp2(n1, n11, "Preliminary Design Fee: (") +
    "<br>" +
    ifp2(n3, n13, "Reimbursable for Preliminary design phase: (") +
    ifp2(n4, n14, "Artwork for Preliminary design phase: (") +
    "Preliminary design phase not-to-exceed amount: (" +
    ifDel2(n1, n11) +
    ifDel2(n3, n13) +
    ifDel2(n4, n14) +
    ") = " +
    f(n1 + n11 + n3 + n13 + n4 + n14) +
    "<br><br>" +
    "<i><u>Final Design Phase</i></u> <br>" +
    ifp2(n6, n16, "Final Design Fee: (") +
    ifp2(
      n7,
      n17,
      "Allowances for Additional Preliminary & Final Design Services: ("
    ) +
    "Sub-total of Final Design Fee: (" +
    ifDel2(n6, n16) +
    ifDel2End(n7, n17) +
    ") = " +
    f(n6 + n16 + n7 + n17) +
    "<br><br>" +
    ifp2(n8, n18, "Reimbursable for Final design phase: (") +
    ifp2(n10, n20, "CSS for Final design phase: (") +
    "Final design phase not-to-exceed amount: (" +
    ifDel2(n6 + n16, n7 + n17) +
    ifDel2(n8, n18) +
    ifDel2End(n10, n20) +
    ") = " +
    f(n6 + n16 + n7 + n17 + n8 + n18 + n10 + n20) +
    "<br><br>" +
    "Total Preliminary and Final design phase NTE amount: (" +
    f(n1 + n11 + n3 + n13 + n4 + n14) +
    " + " +
    f(n6 + n16 + n7 + n17 + n8 + n18 + n10 + n20) +
    ") = " +
    f(
      n1 +
        n11 +
        n3 +
        n13 +
        n4 +
        n14 +
        n6 +
        n16 +
        n7 +
        n17 +
        n8 +
        n18 +
        n10 +
        n20
    ) +
    "<br><br>" +
    "Total amount added under this STO: (" +
    f(ModifiedTotal) +
    " - " +
    f(PreviousTotal) +
    ") = " +
    f(addedAmount) +
    "<br><br>" +
    "In addition, a time extension is requested to extend the previous completion date of " +
    current_end_date +
    ", to the new completion date of " +
    endDate +
    ", which is an additional " +
    time_extension +
    " CCDs with an overall duration of " +
    overallDuration +
    " CCDs from the NTP date of " +
    NTP_date +
    ".";

  Total_Amount.value = f(n11 + n13 + n14 + n16 + n17 + n18 + n20);

  Preli_NTE.value = f(n11 + n13 + n14);
  Preli_Fee.value = f(n11);
  Preli_art.value = f(n14);
  Preli_Reimburse.value = f(n13);

  Final_NTE.value = f(n16 + n17 + n18 + n20);
  Final_Fee.value = f(n16 + n17);
  Final_staffing.value = f(n20);
  Final_Reimburse.value = f(n18);

  /********** SEC 4 */
  Cumulative.value = f(
    n1 + n4 + n11 + n14 + n3 + n13 + n6 + n7 + n16 + n17 + n10 + n20 + n8 + n18
  );

  CumPreliPh.value = f(n1 + n4 + n11 + n14 + n3 + n13);

  PCumFee.value = f(n1 + n4 + n11 + n14);
  PCumStaffing.value = f(0);
  PCumReimburse.value = f(n3 + n13);

  CumFinalPh.value = f(n6 + n7 + n16 + n17 + n10 + n20 + n8 + n18);

  FCumFee.value = f(n6 + n7 + n16 + n17);
  FCumStaffing.value = f(n10 + n20);
  FCumReimburse.value = f(n8 + n18);
};

/******************************************************************/
// Format number into accounting style
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
