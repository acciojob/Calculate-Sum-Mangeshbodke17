//your JS code here. If required.


document.getElementById("sum_btn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("n1").value);
  const num2 = parseFloat(document.getElementById("n2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    document.getElementById("sum").textContent = "Sum: " + result;
  } else {
    document.getElementById("sum").textContent = "";
  }
});
