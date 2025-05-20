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