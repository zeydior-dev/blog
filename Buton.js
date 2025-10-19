// 💠 Neon Kordinat Kopyala Butonu — zeydior-dev
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('neon-copy-btn')) {
    const textToCopy = e.target.getAttribute('data-copy') || '';
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    
    let toast = document.querySelector('.copy-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'copy-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = 'Kordinat kopyalandı!';
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 1500);
  }
});
