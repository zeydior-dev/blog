 ==== COPY BUTTON SCRIPT ====
document.addEventListener('DOMContentLoaded', () = {
   Tüm butonları bul
  document.querySelectorAll('.copy-btn').forEach(btn = {
    const msg = btn.nextElementSibling;

    btn.addEventListener('click', async () = {
      const text = btn.dataset.copy  ;
      try {
        await navigator.clipboard.writeText(text);
        msg.textContent = Kopyalandı!;
      } catch {
         Eski tarayıcı fallback
        const ta = document.createElement(textarea);
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand(copy);
        document.body.removeChild(ta);
        msg.textContent = Kopyalandı!;
      }
       1.5 saniye sonra mesajı temizle
      setTimeout(() = msg.textContent = , 1500);
    });
  });
});
