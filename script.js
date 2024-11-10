const places = ['USA', 'India', 'France', 'Germany', 'Japan'];
let index = 0;

function changePlace() {
  document.getElementById('place').textContent = places[index];
  index = (index + 1) % places.length;
}

setInterval(changePlace, 200);

document.querySelector('.btn-book').addEventListener('click', function (event) {
  event.preventDefault();
  
 
  const destination = document.getElementById('destination').value;
  const persons = document.getElementById('persons').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const description = document.getElementById('description').value;


  const currentDate = new Date();
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  if (!destination || !persons || !startDate || !endDate || description.length < 50) {
    alert('Please fill all fields correctly.');
  } else if (startDateObj < currentDate) {
    alert('Start date must be in the future.');
  } else if (endDateObj <= startDateObj) {
    alert('End date must be later than start date.');
  } else {
    alert('Booking successful');
  }
});

function validateRegisterForm() {
  const fullname = document.getElementById('fullname').value;
  const contact = document.getElementById('contact').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const gender = document.getElementById('gender').value;

  if (!fullname || !contact || !dob || !email || !password || !gender) {
      alert("All fields are required.");
      return false;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }
  if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return false;
  }
  return true;
}

function validateLoginForm() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
      alert("Both email and password are required.");
      return false;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }
  return true;
}
