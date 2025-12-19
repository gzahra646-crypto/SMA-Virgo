// ==================== DATA ====================
const teachers = [
    { 
        id: 1, 
        name: "Dr. Antonius Wijaya, M.Pd.", 
        subject: "Matematika", 
        photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
        id: 2, 
        name: "Drs. Bambang Sutrisno", 
        subject: "Bahasa Indonesia", 
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
        id: 3, 
        name: "Maria Saraswati, S.Pd., M.Pd.", 
        subject: "Bahasa Inggris", 
        photo: "maria.jpg" 
    },
    { 
        id: 4, 
        name: "Drs. Joko Prasetyo, M.Si.", 
        subject: "Fisika", 
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
        id: 5, 
        name: "Siti Fatimah, S.Pd.", 
        subject: "Kimia", 
        photo: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
        id: 6, 
        name: "Agus Setiawan, S.Pd., M.Pd.", 
        subject: "Biologi", 
        photo: "agus.jpg" 
    },
    { 
        id: 7, 
        name: "Drs. I Made Suarta", 
        subject: "Sejarah", 
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
        id: 8, 
        name: "Ratna Dewi, S.Pd.", 
        subject: "Seni Budaya", 
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
        id: 9, 
        name: "Drs. Ahmad Hidayat", 
        subject: "Pendidikan Agama", 
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    },
    { 
        id: 10, 
        name: "Diana Puspitasari, S.Pd.", 
        subject: "Olahraga", 
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
    }
];

let news = [
    { 
        id: 1, 
        title: "Virgo Cantamus Pesparawi 2017", 
        category: "event", 
        content: "SMA Virgo Fidelis berhasil meraih juara 2 dalam kompetisi pesparawi tingkat provinsi Jawa Tengah tahun 2017.",
        date: "15 Oktober 2017",
        image: "juara2.jpg"
    },
    { 
        id: 2, 
        title: "Penerapan Tata Tertib Siswa Baru", 
        category: "student", 
        content: "Mulai tahun ajaran 2023/2024, SMA Virgo Fidelis menerapkan tata tertib siswa yang diperbarui.",
        date: "1 Juli 2023",
        image: "penertibansiswabaru.jpg"
    },
    { 
        id: 3, 
        title: "Workshop Persiapan UNBK 2023", 
        category: "academic", 
        content: "SMA Virgo Fidelis mengadakan workshop persiapan UNBK bagi siswa kelas XII.",
        date: "10 Maret 2023",
        image: "utbk.jpg"
    },
    { 
        id: 4, 
        title: "Perayaan Hari Sumpah Pemuda ke-93", 
        category: "event", 
        content: "SMA Virgo Fidelis memperingati Hari Sumpah Pemuda ke-93 dengan berbagai kegiatan.",
        date: "28 Oktober 2023",
        image: "sumpahpemuda.jpg"
    },
    { 
        id: 5, 
        title: "Penandatanganan MoU dengan Universitas", 
        category: "academic", 
        content: "SMA Virgo Fidelis menandatangani nota kesepahaman dengan tiga universitas ternama.",
        date: "5 September 2023",
        image: "kkn.jpg"
    },
    { 
        id: 6, 
        title: "Program Pembinaan Karakter Siswa", 
        category: "student", 
        content: "Sekolah meluncurkan program pembinaan karakter siswa yang terintegrasi dalam pembelajaran.",
        date: "15 Agustus 2023",
        image: "karaktersiswa.jpg"
    }
];

// ==================== ELEMENTS ====================
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');
const teachersTable = document.getElementById('teachersTable');
const newsGrid = document.getElementById('newsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const addNewsBtn = document.getElementById('addNewsBtn');
const newsModal = document.getElementById('newsModal');
const cancelBtn = document.getElementById('cancelBtn');
const newsForm = document.getElementById('newsForm');

// ==================== FUNCTIONS ====================
function loadTeachers() {
    teachersTable.innerHTML = '';
    
    teachers.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.id}</td>
            <td>${teacher.name}</td>
            <td>${teacher.subject}</td>
            <td>
                <div class="teacher-photo">
                    <img src="${teacher.photo}" alt="${teacher.name}" class="teacher-img">
                </div>
            </td>
        `;
        teachersTable.appendChild(row);
    });
}

function loadNews(filter = 'all') {
    newsGrid.innerHTML = '';
    
    let filteredNews = news;
    
    if (filter !== 'all') {
        filteredNews = news.filter(item => item.category === filter);
    }
    
    if (filteredNews.length === 0) {
        newsGrid.innerHTML = '<p class="no-data">Tidak ada berita untuk kategori ini.</p>';
        return;
    }
    
    filteredNews.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        
        // Tentukan label kategori
        let categoryLabel = '';
        switch(item.category) {
            case 'event': categoryLabel = 'Event'; break;
            case 'student': categoryLabel = 'Tata Tertib'; break;
            case 'academic': categoryLabel = 'Akademik'; break;
            default: categoryLabel = 'Lainnya';
        }
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="news-img">
            <div class="news-content">
                <span class="news-category">${categoryLabel}</span>
                <h4>${item.title}</h4>
                <p class="news-date">${item.date}</p>
                <p>${item.content.substring(0, 100)}...</p>
            </div>
        `;
        newsGrid.appendChild(card);
    });
}

function openModal() {
    newsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    newsModal.classList.remove('active');
    document.body.style.overflow = '';
    newsForm.reset();
}

// ==================== EVENT LISTENERS ====================
// Menu toggle
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
        
        // Update active nav
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});

// Filter berita
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        loadNews(filter);
    });
});

// Modal
addNewsBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
newsModal.addEventListener('click', (e) => {
    if (e.target === newsModal) {
        closeModal();
    }
});

// Add new news
newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('newsTitle').value;
    const category = document.getElementById('newsCategory').value;
    const content = document.getElementById('newsContent').value;
    const image = document.getElementById('newsImage').value || 
                  'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
    
    const newNews = {
        id: news.length + 1,
        title: title,
        category: category,
        content: content,
        date: new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        image: image
    };
    
    news.unshift(newNews); // Tambah di awal
    loadNews('all');
    closeModal();
    alert('Berita berhasil ditambahkan!');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    loadTeachers();
    loadNews();
    
    // Set tahun di footer
    const year = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = 
        `&copy; ${year} SMA Virgo Fidelis. All rights reserved.`;
});