



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
    f(n6+n7) +
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



/************************************************************/
