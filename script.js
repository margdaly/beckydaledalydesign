
  function validateForm() {
      const email = document.getElementById('email').value;
      if (email.includes('@')) {
          return true;
      } else {
          alert('Please enter a valid email address.');
          return false;
      }
  }
