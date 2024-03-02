document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let password = document.getElementById('password').value;
  
    if (password === '12345') { 
      window.location.href = '';
    } else {
      alert('Senha incorreta. Tente novamente.');
      document.getElementById('password').value = ''; 
    }
  });
  