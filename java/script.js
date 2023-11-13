const display = document.getElementById('display');

// Get all elements with class 'number' and add event listener

let  btn = document.querySelectorAll('.number');

btn.forEach(button => {
    button.addEventListener('click', function(){
        display.value += button.getAttribute('data-value')
    })
})
// document.querySelectorAll('.number').forEach(button => {
//   button.addEventListener('click', function() {
//     display.value += button.getAttribute('data-value');
//   });
// });

// Clear button
document.getElementById('clear').addEventListener('click', function() {
  display.value = '';
});

// Delete button
document.getElementById('delete').addEventListener('click', function() {
  display.value = display.value.slice(0, -1);
});

// Operation buttons
document.getElementById('add').addEventListener('click', function() {
  display.value += '+';
});

document.getElementById('subtract').addEventListener('click', function() {
  display.value += '-';
});

document.getElementById('multiply').addEventListener('click', function() {
  display.value += '*';
});

document.getElementById('divide').addEventListener('click', function() {
  display.value += '/';
});

// Equal button
document.querySelector('.equal').addEventListener('click', function() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
});

// Dot button
document.getElementById('dot').addEventListener('click', function() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
});