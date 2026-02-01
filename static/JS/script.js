const toggleBtn = document.querySelector('#toggle-password');
    const passwordInput = document.querySelector('#password');

    toggleBtn.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      const isPressed = toggleBtn.getAttribute('aria-pressed') === 'true';
      toggleBtn.setAttribute('aria-pressed', !isPressed);
      
      if (type === 'text') {
        toggleBtn.textContent = 'Masquer';
        toggleBtn.setAttribute('aria-label', 'Masquer le mot de passe');
      } else {
        toggleBtn.textContent = 'Afficher';
        toggleBtn.setAttribute('aria-label', 'Afficher le mot de passe en clair');
      }
    });