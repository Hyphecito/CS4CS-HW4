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

  // Regex patterns
  const namePattern = /^[A-Za-z]+$/; // Letters only
  const matriculationPattern = /^[0-9]+$/; // Digits only

  // Validate Name Fields
  if (!namePattern.test(name)) {
    alert("The 'Name' field must contain only letters.");
    event.preventDefault();
    return;
  }

  if (middleInitial && !namePattern.test(middleInitial)) {
    alert("The 'M. Initial' field must contain only one letter.");
    event.preventDefault();
    return;
  }

  if (!namePattern.test(lastName)) {
    alert("The 'Last Name' field must contain only letters.");
    event.preventDefault();
    return;
  }

  // Validate Matriculation
  if (!matriculationPattern.test(matriculation)) {
    alert("The 'Matriculation' field must contain only digits.");
    event.preventDefault();
    return;
  }

  // Validate Feedback
  if (!feedback) {
    alert("The 'Feedback' field cannot be empty.");
    event.preventDefault();
    return;
  }
});
