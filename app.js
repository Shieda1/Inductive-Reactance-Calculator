// https://calculator.swiftutors.com/inductive-reactance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const inductiveReactanceRadio = document.getElementById('inductiveReactanceRadio');
const frequencyRadio = document.getElementById('frequencyRadio');
const inductanceRadio = document.getElementById('inductanceRadio');

let inductiveReactance;
const PI = Math.PI;
let frequency = v1;
let inductance = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

inductiveReactanceRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Frequency (hertz)';
  variable2.textContent = '(L) Inductance (henry)';
  frequency = v1;
  inductance = v2;
  result.textContent = '';
});

frequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(XL) Inductive Reactance (ohm)';
  variable2.textContent = '(L) Inductance (henry)';
  inductiveReactance = v1;
  inductance = v2;
  result.textContent = '';
});

inductanceRadio.addEventListener('click', function() {
  variable1.textContent = '(XL) Inductive Reactance (ohm)';
  variable2.textContent = '(f) Frequency (hertz)';
  inductiveReactance = v1;
  frequency = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(inductiveReactanceRadio.checked)
    result.textContent = `Inductive Reactance = ${computeInductiveReactance().toFixed(2)} ohm`;

  else if(frequencyRadio.checked)
    result.textContent = `Frequency = ${computeFrequency().toFixed(2)} hertz`;

  else if(inductanceRadio.checked)
    result.textContent = `Inductance = ${computeInductance().toFixed(2)} henry`;
})

// calculation

function computeInductiveReactance() {
  return 2 * PI *Number(frequency.value) * Number(inductance.value);
}

function computeFrequency() {
  return Number(inductiveReactance.value) / (2 * PI * Number(inductance.value));
}

function computeInductance() {
  return Number(inductiveReactance.value) / (2 * PI * Number(frequency.value));
}