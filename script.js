document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Example validation - you can replace this with your own logic
    if (username === 'useradmin' && password === 'pass@123') {
      alert('Login successful!');
      // Redirect to another page or perform any other action upon successful login
    } else {
      document.getElementById('error-message').innerText = 'Invalid username or password';
    }
  });
  