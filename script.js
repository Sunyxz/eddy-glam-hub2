// ---------- Booking Form ----------
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Your booking has been submitted! We’ll confirm shortly.");
    bookingForm.reset();
  });
}

// ---------- Contact Form ----------
const contactForm = document.getElementById("contactForm");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-btn");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    contactModal.style.display = "block";
    contactForm.reset();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
