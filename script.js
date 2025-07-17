let a=document.getElementById("sum_btn")
	a.addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("n1").value);
  const num2 = parseFloat(document.getElementById("n2").value);

 /* if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    document.getElementById("Sum").textContent = result; // Capital S
  } else {
    document.getElementById("Sum").textContent = "";
  }
  */


		let d= document.getElementById("Sum")
	let c=num1+num2;
	
		d.innerText=c;

	
});
