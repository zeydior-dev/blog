// 🌐 Neon Kopyalama Butonu — zeydior-dev

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".neon-copy-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showCopyToast("✅ Kopyalandı");
      });
    });
  });
});

function showCopyToast(message) {
  let toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}
