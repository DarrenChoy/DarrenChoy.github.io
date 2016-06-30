function start() {
  var form = document.getElementById("form1");
  var first;
  var second;
  var operator;
  var ans;
  first = parseInt(form.elements[0].value);
  operator = form.elements[1].value;
  second = parseInt(form.elements[2].value);
  if (operator == "+") {
    ans = first+second;
  } else if (operator == "-") {
    ans = first-second;  
  } else if (operator == "*") {
    ans = first*second;  
  } else if (operator == "/") {
    ans = first/second;  
  }
  document.getElementById("ans").innerHTML = ans;
}