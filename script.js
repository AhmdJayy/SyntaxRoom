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

// js dom
if (document.title.includes("Profil")) {
  const motivasiList = document.querySelector(".motivasi-list");
  const btnTambah = document.querySelector(".tambah-motivasi-btn");

  const daftarMotivasi = [
    "Terus berlatih, terus bertumbuh!",
    "Jangan menyerah sebelum mencoba!",
    "Belajar coding = membangun masa depan.",
    "Kesalahan adalah bukti kamu sedang mencoba.",
    "Konsisten adalah kunci kemajuan."
  ];

  btnTambah.addEventListener("click", function () {
    if (daftarMotivasi.length === 0) {
      btnTambah.disabled = true;
      btnTambah.style.backgroundColor = "#ccc";
      btnTambah.style.cursor = "not-allowed";
      return;
    }

    const index = Math.floor(Math.random() * daftarMotivasi.length);
    const teks = daftarMotivasi.splice(index, 1)[0];

    const paragraf = document.createElement("p");
    paragraf.className = "motivasi-baru";
    paragraf.textContent = "“" + teks + "”";
    motivasiList.appendChild(paragraf);
  });
}
