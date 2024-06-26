document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.ys');

  form.onsubmit = function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const isAdmin = document.getElementById('ad').checked;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert('A user with this email already exists!');
      return;
    }

    // Clear the form
    form.reset();
    
    // Optionally redirect
    // window.location.href = 'some_url_here'; 
  };

});




























// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.querySelector('.ys');
//   const loginUrl = "{% url 'login' %}";

//   form.onsubmit = async function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const email = document.getElementById('email').value;
//     const isAdmin = document.getElementById('ad').checked;

//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     // Check if email already exists in the database
//     const response = await fetch("{% url 'sign' %}", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': '{{ csrf_token }}'
//       },
//       body: JSON.stringify({ email: email })
//     });
    
//     const data = await response.json();

//     if (data.exists) {
//       alert('A user with this email already exists!');
//       return;
//     } else {
//       let users = JSON.parse(localStorage.getItem('users')) || [];

//       // Check if email already exists in localStorage
//       const userExists = users.some(user => user.email === email);
//       if (userExists) {
//         alert('A user with this email already exists!');
//         return;
//       }

//       const user = {
//         username: username,
//         password: password,
//         confirmPassword: confirmPassword,
//         email: email,
//         isAdmin: isAdmin,
//       };

//       users.push(user);
//       localStorage.setItem('users', JSON.stringify(users));

//       form.reset();
      
//       window.location.href = loginUrl;
//     }
//   };
// });





















// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.querySelector('.ys');

//   form.onsubmit = function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const email = document.getElementById('email').value;
//     const isAdmin = document.getElementById('ad').checked;

//     if (password !== confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if email already exists
//     const userExists = users.some(user => user.email === email);
//     if (userExists) {
//       alert('A user with this email already exists!');
//       return;
//     }

//     // const user = {
//     //   username: username,
//     //   password: password,
//     //   confirmPassword: confirmPassword,
//     //   email: email,
//     //   isAdmin: isAdmin,
//     // };

//     // users.push(user);
//     // localStorage.setItem('users', JSON.stringify(users));

//     // form.reset();
    
//     // window.location.href = sad; 
    
//   };

// });

