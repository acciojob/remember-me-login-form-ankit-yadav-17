//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function() {
      // Check if there are saved details in local storage
      var savedUsername = localStorage.getItem('username');
      var savedPassword = localStorage.getItem('password');
      
      if (savedUsername && savedPassword) {
        var existingButton = document.createElement('button');
        existingButton.id = 'existing';
        existingButton.textContent = 'Login as existing user';
        existingButton.addEventListener('click', function() {
          alert('Logged in as ' + savedUsername);
        });
        document.body.appendChild(existingButton);
      }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var rememberMe = document.getElementById('checkbox').checked;
      
      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
      
      alert('Logged in as ' + username);
    });