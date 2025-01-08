// You cant input wrong numbers real time
document.getElementById('name').addEventListener('input', function (event) {
  this.value = this.value.replace(/[^A-Za-z]/g, '');
});

document.getElementById('mInitial').addEventListener('input', function (event) {
  this.value = this.value.replace(/[^A-Za-z]/g, '');                                                     
});

document.getElementById('lastName').addEventListener('input', function (event) {
  this.value = this.value.replace(/[^A-Za-z]/g, ''); 
});

// same thing but matriculation
document.getElementById('matriculation').addEventListener('input', function (event) {
  this.value = this.value.replace(/[^0-9]/g, ''); 
});

// Final form validation on submit
document.getElementById('graduateForm').addEventListener('submit', function (event) {
  const name = document.getElementById('name').value;
  const middleInitial = document.getElementById('mInitial').value;
  const lastName = document.getElementById('lastName').value;
  const matriculation = document.getElementById('matriculation').value;
  const feedback = document.getElementById('feedback').value.trim();
 
  // Validate Feedback
  if (!feedback) {
    alert("The 'Feedback' field cannot be empty.");
    event.preventDefault();
    return;
  }
});
