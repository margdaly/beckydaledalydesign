
  function validateForm() {
      const email = document.getElementById('email').value;
      if (email.includes('@')) {
          return true;
      } else {
          alert('Please enter a valid email address.');
          return false;
      }
  }

  function fitImage(img) {
    const container = img.parentElement;
    const containerAspect = container.offsetWidth / container.offsetHeight;
    const imgAspect = img.naturalWidth / img.naturalHeight;
  
    if (imgAspect > containerAspect) {
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.top = '50%';
      img.style.left = '0';
      img.style.transform = 'translateY(-50%)';
    } else {
      img.style.width = 'auto';
      img.style.height = '100%';
      img.style.top = '0';
      img.style.left = '50%';
      img.style.transform = 'translateX(-50%)';
    }
  }
  
  // Apply to all images with class 'fitted-image'
  document.querySelectorAll('.fitted-image').forEach(fitImage);
  
  // Reapply on window resize
  window.addEventListener('resize', () => {
    document.querySelectorAll('.fitted-image').forEach(fitImage);
  });