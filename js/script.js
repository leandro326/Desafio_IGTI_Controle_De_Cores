window.addEventListener('load', start);
var redColor = 0;
var greenColor = 0;
var blueColor = 0;

function start() {
  preventFormSubmit();
  inputMove();
  colorRGB();
}

//Para não deixar o navegador carregar.
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

// função para controlar a movimentação do cursor do input
function inputMove() {
  function inputredColor(event) {
    var resultR = document.querySelector('#control1');
    redColor = event.target.value;
    resultR.value = redColor;
    console.log('passei 4');
    console.log(redColor);
    colorRGB(redColor, greenColor, blueColor);
    return redColor;
  }

  function inputgreenColor(event) {
    var inputG = document.querySelector('#green');
    var resultG = document.querySelector('#control2');
    greenColor = event.target.value;
    resultG.value = greenColor;
    console.log('passei 5');
    colorRGB(redColor, greenColor, blueColor);
    return greenColor;
  }

  function inputblueColor(event) {
    var inputB = document.querySelector('#blue');
    var resultB = document.querySelector('#control3');
    blueColor = event.target.value;
    resultB.value = blueColor;
    console.log('passei 6');
    colorRGB(redColor, greenColor, blueColor);
    return blueColor;
  }

  var inputR = document.querySelector('#red');
  inputR.addEventListener('input', inputredColor);

  var inputG = document.querySelector('#green');
  inputG.addEventListener('input', inputgreenColor);

  var inputB = document.querySelector('#blue');
  inputB.addEventListener('input', inputblueColor);
  console.log('passei penulto');
}

function colorRGB(redColor, greenColor, blueColor) {
  var colorDone = document.querySelector('#colorDone');
  colorDone.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  console.log('passei ultimo');
}
