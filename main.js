let result = 0;

const resultEl = document.querySelector(".result");

resultEl.innerHTML = result;

function onClickNumber(number) {
  if (resultEl.innerHTML.length >= 13) {
    console.log("end");

    return;
  }

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}
/*
function onClickNumber(number) {
  if (resultEl.innerHTML.length >= 13) {
    console.log("end");

    return;
  }
  
  
  
  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}
/*
function onClickNumber(number) {
  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }

  console.log(resultEl);
}

console.log(resultEl.innerHTML.length);
/*
function onClickNumber(number) {
  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}
/*
function onClickNumber(number) {
  resultEl.innerHTML = number;
}
// 0 일때만 추가 -> 교체
function onClickNumber(number) {
  resultEl.innerHTML += number;
}

/*function test() {
 function onClickNumber(number) {
  resultEl.innerHTML += number;
} alert("Test!");
}*/
//1만 클릭됨
/*function onClickNumber() {
  resultEl.innerHTML = 1;
} */
