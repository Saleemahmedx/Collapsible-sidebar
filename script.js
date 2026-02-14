const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const mobileToggle = document.getElementById("mobileToggle");

// Desktop collapse
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
});

// Mobile open/close
mobileToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});
