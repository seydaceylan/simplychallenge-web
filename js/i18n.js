(function (global) {
  "use strict";

  var STORAGE_KEY = "simplychallenge-lang";
  var DEFAULT_LOCALE = "tr";

  var messages = {
    tr: {
      "meta.index.title": "Simply Challenge — iOS Alışkanlık Takibi",
      "meta.index.description": "Simply Challenge — Küçük adımlar, büyük değişimler. iOS için alışkanlık takip uygulaması.",
      "meta.index.ogTitle": "Simply Challenge — iOS Alışkanlık Takibi",
      "meta.index.ogDescription": "Daha iyi alışkanlıklar edinin. Basitçe. App Store'dan indirin.",
      "meta.privacy.title": "Gizlilik Politikası — Simply Challenge",
      "meta.privacy.description": "Simply Challenge iOS uygulaması gizlilik politikası.",
      "meta.terms.title": "Kullanım Koşulları — Simply Challenge",
      "meta.terms.description": "Simply Challenge iOS uygulaması kullanım koşulları.",
      "meta.support.title": "Destek — Simply Challenge",
      "meta.support.description": "Simply Challenge iOS uygulaması destek ve yardım sayfası.",
      "nav.homeAria": "Simply Challenge ana sayfa",
      "nav.mainAria": "Ana navigasyon",
      "nav.features": "Özellikler",
      "nav.howItWorks": "Nasıl Çalışır",
      "nav.download": "Hemen İndir",
      "nav.openMenu": "Menüyü aç",
      "nav.closeMenu": "Menüyü kapat",
      "lang.switchAria": "Dili İngilizce olarak değiştir",
      "lang.switchLabel": "EN",
      "hero.title": "Küçük Adımlar.<br><span class=\"hero__title-accent\">Büyük Değişimler.</span>",
      "hero.subtitle": "Günlük hedeflerinizi takip edin, serilerinizi koruyun ve disiplini yaşam tarzınıza dönüştürün. Simply Challenge ile her gün bir adım daha ileri.",
      "hero.ratingAria": "5 üzerinden 4,8 yıldız, 1000+ değerlendirme",
      "hero.ratingText": "4,8/5 (1000+ Değerlendirme)",
      "hero.tag1": "Alışkanlık Takibi",
      "hero.tag2": "Fitness",
      "hero.tag3": "Sağlık",
      "hero.download": "Hemen İndir",
      "hero.details": "Detayları Gör",
      "hero.phoneAlt": "Simply Challenge uygulama ekranı — bugün görünümü",
      "hero.screenImage": "assets/images/hero-screen-tr.png",
      "features.eyebrow": "Özellikler",
      "features.title": "Disiplini Yaşam Tarzına Dönüştürün",
      "features.card1.title": "Hazır Hedefler",
      "features.card1.text": "Hazır hedef şablonlarıyla hızlıca başlayın veya kendi alışkanlıklarınızı oluşturun.",
      "features.card2.title": "Widget'lar",
      "features.card2.text": "Ana ekran ve kilit ekranı widget'larıyla ilerlemenizi bir bakışta görün.",
      "features.card3.title": "Akıllı Hatırlatıcılar",
      "features.card3.text": "Akıllı hatırlatıcılar sayesinde günlük rutininizi asla kaçırmayın.",
      "features.card4.title": "İstatistikler",
      "features.card4.text": "Detaylı istatistiklerle performansınızı analiz edin ve gelişiminizi takip edin.",
      "features.card5.title": "Günlük Seriler",
      "features.card5.text": "Seri takibiyle motivasyonunuzu yüksek tutun ve rekorlar kırın.",
      "features.card6.title": "İlerleme Takibi",
      "features.card6.text": "Haftalık ve aylık ilerleme grafikleriyle hedeflerinize ne kadar yaklaştığınızı görün.",
      "how.title": "Nasıl Çalışır?",
      "how.step1.title": "Hedefini Oluştur",
      "how.step1.text": "Kişisel hedefinizi belirleyin veya hazır şablonlardan birini seçin.",
      "how.step2.title": "Hatırlatıcı Ayarla",
      "how.step2.text": "Günlük hatırlatıcılarınızı ayarlayın ve rutininize entegre edin.",
      "how.step3.title": "İlerlemeni Takip Et",
      "how.step3.text": "Serilerinizi, istatistiklerinizi ve başarılarınızı takip edin.",
      "screenshots.title": "Simply Challenge'ı Keşfedin",
      "discover.panel1": "Alışkanlıklarını oluştur, daha fazlasını başar",
      "discover.panel1Image": "assets/images/discover/panel-1.png",
      "discover.panel2": "Aktif hedefler, her gün bir adım daha ileri",
      "discover.panel2Image": "assets/images/discover/panel-2.png",
      "discover.panel3": "Hedefini belirle, odaklan ve başar",
      "discover.panel3Image": "assets/images/discover/panel-3.png",
      "discover.panel4": "Hazır hedeflerden birini seç, kendine göre özelleştir",
      "discover.panel4Image": "assets/images/discover/panel-4.png",
      "discover.panel5": "Hedeflerini gör, düzenle ve ilerle",
      "discover.panel5Image": "assets/images/discover/panel-5.png",
      "discover.panel6": "İlerlemeni gör, motive kal",
      "discover.panel6Image": "assets/images/discover/panel-6.png",
      "download.title": "Hemen bugün başlayın.",
      "footer.navAria": "Alt bilgi navigasyonu",
      "footer.privacy": "Gizlilik Politikası",
      "footer.terms": "Kullanım Koşulları",
      "footer.support": "Destek",
      "footer.contact": "İletişim",
      "footer.copyright": "© 2026 Simply Challenge. Tüm hakları saklıdır.",
      "appStore.alt": "App Store'dan indirin",
      "legal.eyebrow": "Yasal",
      "legal.updated": "Son güncelleme: 5 Temmuz 2026",
      "privacy.title": "Gizlilik Politikası",
      "privacy.s1.title": "Genel Bakış",
      "privacy.s1.text": "Simply Challenge, kullanıcı gizliliğine önem verir. Bu Gizlilik Politikası, uygulamayı kullanırken hangi bilgilerin toplandığını, nasıl saklandığını ve nasıl kullanıldığını açıklar.",
      "privacy.s2.title": "Toplanan Veriler",
      "privacy.s2.p1": "Simply Challenge, oluşturduğun hedefler, ilerleme kayıtların, istatistiklerin, notların, hatırlatıcı ayarların ve uygulama tercihlerin gibi bilgileri cihazında saklar.",
      "privacy.s2.p2": "Toplanabilecek veriler şunlardır:",
      "privacy.s2.li1": "Hedefler",
      "privacy.s2.li2": "Hedef ilerleme kayıtları",
      "privacy.s2.li3": "Başlangıç tarihleri",
      "privacy.s2.li4": "Süre bilgileri",
      "privacy.s2.li5": "Tekrar günleri",
      "privacy.s2.li6": "Hatırlatıcı ayarları",
      "privacy.s2.li7": "Notlar",
      "privacy.s2.li8": "Uygulama tercihleri",
      "privacy.s2.li9": "İstatistikler",
      "privacy.s3.title": "Kişisel Bilgiler",
      "privacy.s3.text": "Simply Challenge; ad, soyad, e-posta adresi, telefon numarası veya benzeri kişisel bilgileri istemez ve toplamaz.",
      "privacy.s4.title": "Verilerin Saklanması",
      "privacy.s4.text": "Uygulama içerisinde oluşturulan veriler mümkün olduğunca cihazında saklanır. Premium özellikler veya gelecekte sunulabilecek bulut senkronizasyonu gibi hizmetlerde yalnızca gerekli bilgiler işlenebilir.",
      "privacy.s5.title": "Premium Abonelikler",
      "privacy.s5.p1": "Premium üyelik satın alma işlemleri Apple App Store üzerinden gerçekleştirilir.",
      "privacy.s5.p2": "Ödeme işlemleri Apple tarafından yönetilir. Simply Challenge kredi kartı bilgilerini görmez, saklamaz veya işlemez.",
      "privacy.s6.title": "Üçüncü Taraf Hizmetleri",
      "privacy.s6.text": "Uygulama, hizmet kalitesini artırmak amacıyla gelecekte anonim kullanım analizleri veya hata raporlama servisleri kullanabilir. Bu servisler kişisel kimliğini ortaya çıkaracak bilgiler toplamaz.",
      "privacy.s7.title": "Veri Güvenliği",
      "privacy.s7.text": "Kullanıcı verilerinin güvenliği bizim için önemlidir. Verilerin korunması için makul teknik ve idari önlemler uygulanmaktadır.",
      "privacy.s8.title": "Gizlilik Politikasındaki Değişiklikler",
      "privacy.s8.text": "Bu Gizlilik Politikası gerektiğinde güncellenebilir. Güncel sürüm her zaman uygulama içerisinde veya resmi internet sitesinde yayınlanacaktır.",
      "privacy.s9.title": "İletişim",
      "privacy.s9.text": "Gizlilik Politikası ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.",
      "privacy.s9.email": "E-posta: <a href=\"mailto:serafettin@turkayazilim.com\">serafettin@turkayazilim.com</a>",
      "terms.title": "Kullanım Koşulları",
      "terms.updated": "Son güncelleme: 29 Haziran 2026",
      "terms.s1.title": "Genel Bakış",
      "terms.s1.text": "Simply Challenge uygulamasını kullanarak aşağıdaki kullanım koşullarını kabul etmiş olursunuz.",
      "terms.s2.title": "Uygulamanın Amacı",
      "terms.s2.p1": "Simply Challenge, kişisel hedef ve alışkanlık takibini kolaylaştırmak amacıyla geliştirilmiş bir uygulamadır.",
      "terms.s2.p2": "Uygulama; motivasyon sağlamayı, ilerlemeyi takip etmeyi ve kişisel hedeflerin düzenli şekilde sürdürülmesini desteklemeyi amaçlar.",
      "terms.s3.title": "Kullanıcı Sorumluluğu",
      "terms.s3.text": "Kullanıcı oluşturduğu hedeflerden, girilen bilgilerden ve uygulamanın kullanımından kendisi sorumludur.",
      "terms.s4.title": "Premium Üyelik",
      "terms.s4.p1": "Premium özelliklere erişim App Store üzerinden satın alınan abonelik ile sağlanır.",
      "terms.s4.p2": "Abonelikler Apple tarafından yönetilir ve seçilen plana göre otomatik yenilenebilir.",
      "terms.s4.p3": "Aboneliklerin iptali ve yönetimi Apple Kimliği abonelik ayarlarından yapılabilir.",
      "terms.s5.title": "Fikri Mülkiyet",
      "terms.s5.p1": "Simply Challenge uygulamasının tasarımı, yazılımı, logoları ve içerikleri geliştiricisine aittir.",
      "terms.s5.p2": "İzinsiz olarak kopyalanamaz, çoğaltılamaz veya dağıtılamaz.",
      "terms.s6.title": "Sorumluluğun Sınırlandırılması",
      "terms.s6.p1": "Simply Challenge yalnızca kişisel hedef ve alışkanlık takibi amacıyla sunulmaktadır.",
      "terms.s6.p2": "Uygulama herhangi bir tıbbi, psikolojik, finansal veya profesyonel tavsiye sunmaz.",
      "terms.s6.p3": "Kullanıcıların uygulama içerisindeki hedefleri uygulayıp uygulamama sorumluluğu tamamen kendilerine aittir.",
      "terms.s7.title": "Değişiklikler",
      "terms.s7.text": "Bu Kullanım Koşulları gerektiğinde güncellenebilir. Güncel sürüm uygulama içerisinde veya resmi internet sitesinde yayınlanacaktır.",
      "terms.s8.title": "İletişim",
      "terms.s8.text": "Kullanım Koşulları ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.",
      "terms.s8.email": "E-posta: <a href=\"mailto:serafettin@turkayazilim.com\">serafettin@turkayazilim.com</a>",
      "support.eyebrow": "Yardım",
      "support.title": "Destek",
      "support.intro": "Simply Challenge ile ilgili her türlü soru, öneri ve yardım talebiniz için buradayız.",
      "support.contact.title": "Bize Ulaşın",
      "support.contact.text": "Sorularınız için e-posta ile bize yazabilirsiniz. Genellikle 1-2 iş günü içinde yanıt veriyoruz.",
      "support.contact.email": "E-posta: <a href=\"mailto:serafettin@turkayazilim.com\">serafettin@turkayazilim.com</a>",
      "support.faq.title": "Sıkça Sorulan Sorular",
      "support.faq.q1": "Aboneliğimi nasıl yönetir veya iptal ederim?",
      "support.faq.a1": "Abonelikler Apple tarafından yönetilir. iPhone'unuzda Ayarlar > Apple Kimliği > Abonelikler yolunu izleyerek aboneliğinizi görüntüleyebilir, değiştirebilir veya iptal edebilirsiniz.",
      "support.faq.q2": "Satın alımlarımı nasıl geri yüklerim?",
      "support.faq.a2": "Ödeme ekranındaki \"Satın alımları geri yükle\" seçeneğini kullanarak daha önce yaptığınız satın alımları yeni cihazınıza taşıyabilirsiniz.",
      "support.faq.q3": "Verilerim nerede saklanıyor?",
      "support.faq.a3": "Hedefleriniz ve ilerleme kayıtlarınız cihazınızda saklanır. Ayrıntılar için Gizlilik Politikası sayfamızı inceleyebilirsiniz.",
      "support.faq.q4": "Uygulama hangi cihazlarda çalışır?",
      "support.faq.a4": "Simply Challenge iPhone için tasarlanmıştır ve App Store üzerinden indirilebilir.",
      "support.links.title": "Faydalı Bağlantılar",
    },
    en: {
      "meta.index.title": "Simply Challenge — iOS Habit Tracker",
      "meta.index.description": "Simply Challenge — Small steps, big changes. Habit tracker app for iOS.",
      "meta.index.ogTitle": "Simply Challenge — Habit Tracker for iOS",
      "meta.index.ogDescription": "Build better habits. Simply. Download on the App Store.",
      "meta.privacy.title": "Privacy Policy — Simply Challenge",
      "meta.privacy.description": "Privacy Policy for Simply Challenge iOS app.",
      "meta.terms.title": "Terms of Service — Simply Challenge",
      "meta.terms.description": "Terms of Service for Simply Challenge iOS app.",
      "meta.support.title": "Support — Simply Challenge",
      "meta.support.description": "Support and help page for Simply Challenge iOS app.",
      "nav.homeAria": "Simply Challenge home",
      "nav.mainAria": "Main navigation",
      "nav.features": "Features",
      "nav.howItWorks": "How it Works",
      "nav.download": "Download Now",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "lang.switchAria": "Switch language to Turkish",
      "lang.switchLabel": "TR",
      "hero.title": "Small Steps.<br><span class=\"hero__title-accent\">Big Changes.</span>",
      "hero.subtitle": "Track your daily goals, keep your streaks alive, and turn discipline into a lifestyle. With Simply Challenge, take one step forward every day.",
      "hero.ratingAria": "4.8 out of 5 stars, 1000+ reviews",
      "hero.ratingText": "4.8/5 (1000+ Reviews)",
      "hero.tag1": "Habit Tracker",
      "hero.tag2": "Fitness",
      "hero.tag3": "Wellness",
      "hero.download": "Download Now",
      "hero.details": "See Details",
      "hero.phoneAlt": "Simply Challenge app screen — today view",
      "hero.screenImage": "assets/images/hero-screen-en.png",
      "features.eyebrow": "Features",
      "features.title": "Turn Discipline Into a Lifestyle",
      "features.card1.title": "Ready-made Goals",
      "features.card1.text": "Get started quickly with ready-made goal templates or create your own habits.",
      "features.card2.title": "Widgets",
      "features.card2.text": "See your progress at a glance with home screen and lock screen widgets.",
      "features.card3.title": "Smart Reminders",
      "features.card3.text": "Never miss your daily routine with smart reminders.",
      "features.card4.title": "Statistics",
      "features.card4.text": "Analyze your performance with detailed statistics and track your growth.",
      "features.card5.title": "Daily Streaks",
      "features.card5.text": "Stay motivated with streak tracking and break your records.",
      "features.card6.title": "Progress Tracking",
      "features.card6.text": "See how close you are to your goals with weekly and monthly progress charts.",
      "how.title": "How it Works",
      "how.step1.title": "Create Your Goal",
      "how.step1.text": "Set a personal goal or choose one from ready-made templates.",
      "how.step2.title": "Set Reminders",
      "how.step2.text": "Configure daily reminders and integrate them into your routine.",
      "how.step3.title": "Track Your Progress",
      "how.step3.text": "Track your streaks, statistics, and achievements.",
      "screenshots.title": "Discover Simply Challenge",
      "discover.panel1": "Build habits, achieve more",
      "discover.panel1Image": "assets/images/discover/en/panel-1.png",
      "discover.panel2": "Active goals, better every day",
      "discover.panel2Image": "assets/images/discover/en/panel-2.png",
      "discover.panel3": "Create your goal, stay focused and succeed",
      "discover.panel3Image": "assets/images/discover/en/panel-3.png",
      "discover.panel4": "Choose from ready goals and customize",
      "discover.panel4Image": "assets/images/discover/en/panel-4.png",
      "discover.panel5": "View, edit and track your goals",
      "discover.panel5Image": "assets/images/discover/en/panel-5.png",
      "discover.panel6": "See your stats, stay motivated",
      "discover.panel6Image": "assets/images/discover/en/panel-6.png",
      "download.title": "Start today.",
      "footer.navAria": "Footer navigation",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.support": "Support",
      "footer.contact": "Contact",
      "footer.copyright": "© 2026 Simply Challenge. All rights reserved.",
      "appStore.alt": "Download on the App Store",
      "legal.eyebrow": "Legal",
      "legal.updated": "Last updated: July 5, 2026",
      "privacy.title": "Privacy Policy",
      "privacy.s1.title": "Overview",
      "privacy.s1.text": "Simply Challenge values user privacy. This Privacy Policy explains what information is collected when you use the app, how it is stored, and how it is used.",
      "privacy.s2.title": "Data Collected",
      "privacy.s2.p1": "Simply Challenge stores information such as the goals you create, progress records, statistics, notes, reminder settings, and app preferences on your device.",
      "privacy.s2.p2": "Data that may be collected includes:",
      "privacy.s2.li1": "Goals",
      "privacy.s2.li2": "Goal progress records",
      "privacy.s2.li3": "Start dates",
      "privacy.s2.li4": "Duration information",
      "privacy.s2.li5": "Repeat days",
      "privacy.s2.li6": "Reminder settings",
      "privacy.s2.li7": "Notes",
      "privacy.s2.li8": "App preferences",
      "privacy.s2.li9": "Statistics",
      "privacy.s3.title": "Personal Information",
      "privacy.s3.text": "Simply Challenge does not request or collect personal information such as your name, email address, phone number, or similar details.",
      "privacy.s4.title": "Data Storage",
      "privacy.s4.text": "Data created within the app is stored on your device whenever possible. For premium features or future cloud sync services, only necessary information may be processed.",
      "privacy.s5.title": "Premium Subscriptions",
      "privacy.s5.p1": "Premium membership purchases are processed through the Apple App Store.",
      "privacy.s5.p2": "Payment transactions are managed by Apple. Simply Challenge does not view, store, or process credit card information.",
      "privacy.s6.title": "Third-Party Services",
      "privacy.s6.text": "The app may use anonymous usage analytics or crash reporting services in the future to improve service quality. These services do not collect information that would reveal your personal identity.",
      "privacy.s7.title": "Data Security",
      "privacy.s7.text": "The security of user data is important to us. Reasonable technical and administrative measures are applied to protect your data.",
      "privacy.s8.title": "Changes to This Privacy Policy",
      "privacy.s8.text": "This Privacy Policy may be updated when necessary. The current version will always be published in the app or on the official website.",
      "privacy.s9.title": "Contact",
      "privacy.s9.text": "If you have questions about this Privacy Policy, you can contact us.",
      "privacy.s9.email": "Email: <a href=\"mailto:serafettin@turkayazilim.com\">serafettin@turkayazilim.com</a>",
      "terms.title": "Terms of Use",
      "terms.updated": "Last updated: June 29, 2026",
      "terms.s1.title": "Overview",
      "terms.s1.text": "By using the Simply Challenge app, you agree to the following terms of use.",
      "terms.s2.title": "Purpose of the App",
      "terms.s2.p1": "Simply Challenge is an app developed to make personal goal and habit tracking easier.",
      "terms.s2.p2": "The app aims to provide motivation, track progress, and support the consistent pursuit of personal goals.",
      "terms.s3.title": "User Responsibility",
      "terms.s3.text": "Users are responsible for the goals they create, the information they enter, and their use of the app.",
      "terms.s4.title": "Premium Membership",
      "terms.s4.p1": "Access to premium features is provided through a subscription purchased via the App Store.",
      "terms.s4.p2": "Subscriptions are managed by Apple and may renew automatically depending on the selected plan.",
      "terms.s4.p3": "Subscriptions can be canceled and managed from Apple ID subscription settings.",
      "terms.s5.title": "Intellectual Property",
      "terms.s5.p1": "The design, software, logos, and content of the Simply Challenge app belong to its developer.",
      "terms.s5.p2": "They may not be copied, reproduced, or distributed without permission.",
      "terms.s6.title": "Limitation of Liability",
      "terms.s6.p1": "Simply Challenge is provided solely for personal goal and habit tracking.",
      "terms.s6.p2": "The app does not provide medical, psychological, financial, or professional advice.",
      "terms.s6.p3": "Users are solely responsible for whether they follow through on the goals they set in the app.",
      "terms.s7.title": "Changes",
      "terms.s7.text": "These Terms of Use may be updated when necessary. The current version will be published in the app or on the official website.",
      "terms.s8.title": "Contact",
      "terms.s8.text": "If you have questions about these Terms of Use, you can contact us.",
      "terms.s8.email": "Email: <a href=\"mailto:serafettin@turkayazilim.com\">serafettin@turkayazilim.com</a>",
      "support.eyebrow": "Help",
      "support.title": "Support",
      "support.intro": "We're here for any questions, suggestions, or help requests about Simply Challenge.",
      "support.contact.title": "Contact Us",
      "support.contact.text": "You can email us with your questions. We usually reply within 1-2 business days.",
      "support.contact.email": "Email: <a href=\"mailto:serafettin@turkayazilim.com\">serafettin@turkayazilim.com</a>",
      "support.faq.title": "Frequently Asked Questions",
      "support.faq.q1": "How do I manage or cancel my subscription?",
      "support.faq.a1": "Subscriptions are managed by Apple. On your iPhone, go to Settings > Apple ID > Subscriptions to view, change, or cancel your subscription.",
      "support.faq.q2": "How do I restore my purchases?",
      "support.faq.a2": "Use the \"Restore purchases\" option on the paywall screen to transfer your previous purchases to a new device.",
      "support.faq.q3": "Where is my data stored?",
      "support.faq.a3": "Your goals and progress records are stored on your device. See our Privacy Policy page for details.",
      "support.faq.q4": "Which devices does the app support?",
      "support.faq.a4": "Simply Challenge is designed for iPhone and can be downloaded from the App Store.",
      "support.links.title": "Useful Links",
    }
  };

  var pageMetaKeys = {
    "/index.html": { title: "meta.index.title", description: "meta.index.description", ogTitle: "meta.index.ogTitle", ogDescription: "meta.index.ogDescription" },
    "/": { title: "meta.index.title", description: "meta.index.description", ogTitle: "meta.index.ogTitle", ogDescription: "meta.index.ogDescription" },
    "/privacy.html": { title: "meta.privacy.title", description: "meta.privacy.description" },
    "/terms.html": { title: "meta.terms.title", description: "meta.terms.description" },
    "/support.html": { title: "meta.support.title", description: "meta.support.description" }
  };

  var locale = DEFAULT_LOCALE;
  var listeners = [];

  function t(key) {
    var bundle = messages[locale] || messages[DEFAULT_LOCALE];
    return bundle[key] || messages[DEFAULT_LOCALE][key] || key;
  }

  function getStoredLocale() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "tr" || stored === "en") return stored;
    } catch (e) { /* ignore */ }
    return DEFAULT_LOCALE;
  }

  function getPagePath() {
    var page = window.location.pathname.split("/").pop() || "";
    if (page === "privacy.html") return "/privacy.html";
    if (page === "terms.html") return "/terms.html";
    if (page === "support.html") return "/support.html";
    if (page === "index.html") return "/index.html";
    return "/";
  }

  function applyMeta() {
    var meta = pageMetaKeys[getPagePath()] || pageMetaKeys["/index.html"];
    if (!meta) return;

    document.title = t(meta.title);

    var desc = document.querySelector('meta[name="description"]');
    if (desc && meta.description) desc.setAttribute("content", t(meta.description));

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && meta.ogTitle) ogTitle.setAttribute("content", t(meta.ogTitle));

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && meta.ogDescription) ogDesc.setAttribute("content", t(meta.ogDescription));
  }

  function applyTranslations() {
    document.documentElement.lang = locale;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-src]").forEach(function (el) {
      el.setAttribute("src", t(el.getAttribute("data-i18n-src")));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    applyMeta();
  }

  function notifyListeners() {
    listeners.forEach(function (fn) { fn(locale); });
  }

  function setLocale(next) {
    if (next !== "tr" && next !== "en") return;
    locale = next;
    try { localStorage.setItem(STORAGE_KEY, locale); } catch (e) { /* ignore */ }
    applyTranslations();
    notifyListeners();
  }

  function toggleLocale() {
    setLocale(locale === "tr" ? "en" : "tr");
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  function init() {
    locale = getStoredLocale();
    applyTranslations();

    var switchBtn = document.getElementById("lang-switch");
    if (switchBtn) {
      switchBtn.addEventListener("click", toggleLocale);
    }
  }

  global.I18n = {
    t: t,
    getLocale: function () { return locale; },
    setLocale: setLocale,
    toggleLocale: toggleLocale,
    onChange: onChange,
    init: init
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window);
