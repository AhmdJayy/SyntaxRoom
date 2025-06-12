document.addEventListener("DOMContentLoaded", () => {
  // Navigasi aktif otomatis
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".nav li").forEach(li => {
    const link = li.querySelector("a");
    if (link && link.getAttribute("href") === currentPage) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });

  // Hover efek
  const cards = document.querySelectorAll(".kelas-card, .modul-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "transform 0.3s ease-in-out";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });

  // CTA button
  const ctaBtn = document.querySelector(".cta-button");
  // Fade-in 
  const fadeEls = document.querySelectorAll(".kelas-card, .why-colored-card, .modul-card, .activity-item, .progress-item");

  fadeEls.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
  });

  // Delay animasi berjalan setiap kali DOM dimuat
  requestAnimationFrame(() => {
    setTimeout(() => {
      fadeEls.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }, 100);
  });

});

if (document.title.includes("Profil")) {
  const motivasiCard = document.querySelector(".motivation-card");

  const btnTambah = document.createElement("button");
  btnTambah.textContent = "+ Tambah Motivasi";
  btnTambah.className = "tambah-motivasi-btn";
  motivasiCard.appendChild(btnTambah);

  const daftarMotivasi = [
    "Terus berlatih, terus bertumbuh!",
    "Jangan menyerah sebelum mencoba!",
    "Belajar coding = membangun masa depan.",
    "Kesalahan adalah bukti kamu sedang mencoba.",
    "Konsisten adalah kunci kemajuan."
  ];

  btnTambah.addEventListener("click", () => {
    if (daftarMotivasi.length === 0) {
      btnTambah.disabled = true; // disable tombol
      btnTambah.style.backgroundColor = "#ccc";
      btnTambah.style.cursor = "not-allowed";
      return;
    }

    const random = Math.floor(Math.random() * daftarMotivasi.length);
    const motivasiText = daftarMotivasi.splice(random, 1)[0];

    const newMotivasi = document.createElement("p");
    newMotivasi.textContent = "“" + motivasiText + "”";
    newMotivasi.className = "motivasi-baru";
    motivasiCard.appendChild(newMotivasi);
  });
}
