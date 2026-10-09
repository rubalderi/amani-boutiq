/**
 * AURA BEAUTY - Bridal Boutique
 * Interactive Logic: Mobile Nav, Collection Filter, Booking Form & WhatsApp Integration, FAQ Accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const drawerClose = document.getElementById('drawer-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // 2. Navbar Scroll Effect & Active Link Highlight
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Active Section highlight
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 3. Collection Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const dressCards = document.querySelectorAll('.dress-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      dressCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 5. Booking Form Submission -> Formats WhatsApp Message & Opens
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const brideName = document.getElementById('bride-name').value.trim();
      const bridePhone = document.getElementById('bride-phone').value.trim();
      const serviceType = document.getElementById('service-type').value;
      const weddingDate = document.getElementById('wedding-date').value;
      const visitDate = document.getElementById('visit-date').value;
      const visitTime = document.getElementById('visit-time').value;
      const selectedModel = document.getElementById('selected-model').value.trim();
      const notes = document.getElementById('notes').value.trim();

      if (!brideName || !bridePhone || !visitDate) {
        alert('يرجى تعبئة الحقول الأساسية (الاسم، رقم الجوال، وتاريخ الزيارة)');
        return;
      }

      // Format WhatsApp Message
      let message = `*السلام عليكم ورحمة الله وبركاته - بوتيك AURA BEAUTY* 🕊️✨\n`;
      message += `أود حجز موعد لزيارة البوتيك وتجربة فساتين الزفاف:\n\n`;
      message += `👰 *اسم العروس:* ${brideName}\n`;
      message += `📱 *رقم الجوال:* ${bridePhone}\n`;
      message += `💍 *نوع الطلب:* ${serviceType}\n`;
      if (weddingDate) {
        message += `🗓️ *موعد الزفاف التقريبي:* ${weddingDate}\n`;
      }
      message += `📅 *تاريخ الزيارة المفضل:* ${visitDate}\n`;
      message += `⏰ *الوقت المفضل:* ${visitTime}\n`;
      if (selectedModel) {
        message += `👗 *الفستان المرغوب:* ${selectedModel}\n`;
      }
      if (notes) {
        message += `📝 *ملاحظات:* ${notes}\n`;
      }
      message += `\n📍 *الفرع:* جدة - حي المروة - شارع عبدالرحمن الخزاعي (استلام فوري وشخصي)\n`;
      message += `بانتظار تأكيدكم للموعد، شكراً لكم! 🤍`;

      // Boutique WhatsApp Phone (Saudi Arabia: +966)
      // Replace with official boutique phone number when ready
      const boutiquePhone = '966500000000';
      const whatsappUrl = `https://wa.me/${boutiquePhone}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
    });
  }

  // Set min date for visit-date input to today
  const visitDateInput = document.getElementById('visit-date');
  if (visitDateInput) {
    const today = new Date().toISOString().split('T')[0];
    visitDateInput.setAttribute('min', today);
  }
});

/**
 * Global helper function to auto-select dress and scroll to booking form
 */
window.selectDress = function(dressName) {
  const modelInput = document.getElementById('selected-model');
  const bookingSection = document.getElementById('booking');

  if (modelInput) {
    modelInput.value = dressName;
    modelInput.style.borderColor = '#C5A059';
    modelInput.style.boxShadow = '0 0 0 3px rgba(197, 160, 89, 0.25)';
  }

  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const nameInput = document.getElementById('bride-name');
      if (nameInput) nameInput.focus();
    }, 600);
  }
};
