import { useEffect, useState } from "react";

const projects = {
  uz: [
    {
      title: "Zamonaviy Web App",
      text: "Toza dizayn, responsive ko‘rinish va qulay interfeysga ega zamonaviy web dastur.",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Creative Landing Page",
      text: "Animatsiyalar, responsive bo‘limlar va kuchli vizual uslubga ega landing page.",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ],

  ru: [
    {
      title: "Современное Web App",
      text: "Современное веб-приложение с чистым дизайном, адаптивностью и удобным интерфейсом.",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Creative Landing Page",
      text: "Адаптивная landing page с анимациями и современным визуальным стилем.",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ],

  en: [
    {
      title: "Modern Web App",
      text: "A modern web application with clean design, responsive layouts and a user-friendly interface.",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Creative Landing Page",
      text: "A responsive landing page with animations and a strong modern visual style.",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ]
};

const text = {
  uz: {
    home: "Bosh sahifa",
    about: "Men haqimda",
    skills: "Ko‘nikmalar",
    projects: "Loyihalar",
    contact: "Bog‘lanish",
    hello: "Salom, men",
    role: "Frontend Developer",
    lead: "Men zamonaviy, responsive va foydalanuvchiga qulay web saytlar yaratishga qiziqadigan frontend dasturchiman. Toza kod, chiroyli dizayn va yangi texnologiyalarni o‘rganishga e’tibor beraman.",
    talk: "Bog‘lanish",
    cv: "CV yuklab olish",
    aboutTitle: "Men haqimda",
    about1: "Men Shernazar O‘rolov, web dasturlashga qiziqaman. Men zamonaviy texnologiyalar yordamida foydali va chiroyli raqamli mahsulotlar yaratishni yoqtiraman.",
    about2: "Dasturlash, frontend va yangi texnologiyalarni o‘rganishga katta qiziqish bildiraman. Har kuni o‘z bilimlarimni oshirishga harakat qilaman.",
    name: "Ism",
    phone: "Telefon",
    birth: "Tug‘ilgan sana",
    from: "Mamlakat",
    skillsTitle: "Mening ko‘nikmalarim",
    selected: "Tanlangan loyihalar",
    contactTitle: "Keling, birga ajoyib loyiha yaratamiz.",
    contactText: "Loyihangiz bormi yoki men bilan bog‘lanmoqchimisiz? Xabar yuboring.",
    message: "Xabar",
    send: "Xabar yuborish",
    available: "Ishlash uchun ochiqman",
    email: "Email"
  },

  ru: {
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    contact: "Контакты",
    hello: "Привет, я",
    role: "Frontend Developer",
    lead: "Я frontend-разработчик, интересующийся современными, адаптивными и удобными веб-сайтами. Мне нравится чистый код, красивый дизайн и изучение новых технологий.",
    talk: "Связаться",
    cv: "Скачать CV",
    aboutTitle: "Обо мне",
    about1: "Меня зовут Шерназар Уролов. Я интересуюсь веб-разработкой и люблю создавать полезные и красивые цифровые продукты с помощью современных технологий.",
    about2: "Я увлекаюсь программированием, frontend-разработкой и изучением новых технологий. Каждый день стараюсь развивать свои знания.",
    name: "Имя",
    phone: "Телефон",
    birth: "Дата рождения",
    from: "Страна",
    skillsTitle: "Мои навыки",
    selected: "Избранные проекты",
    contactTitle: "Давайте создадим что-то отличное вместе.",
    contactText: "Есть проект или хотите связаться со мной? Отправьте сообщение.",
    message: "Сообщение",
    send: "Отправить сообщение",
    available: "Открыт для работы",
    email: "Email"
  },

  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    hello: "Hello, I'm",
    role: "Frontend Developer",
    lead: "I'm a frontend developer interested in modern, responsive and user-friendly websites. I enjoy clean code, beautiful design and learning new technologies.",
    talk: "Let's Talk",
    cv: "Download CV",
    aboutTitle: "About Me",
    about1: "I'm Shernazar Urolov, interested in web development. I enjoy creating useful and beautiful digital products with modern technologies.",
    about2: "I'm passionate about programming, frontend development and learning new technologies. I try to improve my skills every day.",
    name: "Name",
    phone: "Phone",
    birth: "Date of birth",
    from: "Country",
    skillsTitle: "My Skills",
    selected: "Selected Work",
    contactTitle: "Let's build something great together.",
    contactText: "Have a project in mind or want to work together? Send me a message.",
    message: "Message",
    send: "Send Message",
    available: "Available for work",
    email: "Email"
  }
};

const skills = [
  ["HTML & CSS", 92],
  ["JavaScript", 86],
  ["React", 82],
  ["Responsive Design", 90],
  ["UI / UX", 78],
  ["Git & GitHub", 72]
];

function App() {
  const [lang, setLang] = useState("uz");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const t = text[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = `Portfolio orqali yangi xabar - ${name}`;

    const body =
      `Ism: ${name}\n` +
      `Email: ${email}\n\n` +
      `Xabar:\n${message}`;

    const mailtoUrl =
      `mailto:oshernazar@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    form.reset();
  };

  return (
    <div className="app">

      <header className="header">
        <div className="container nav">

          <a
            className="logo"
            href="#home"
            onClick={closeMenu}
          >
            Shernazar<span>.</span>
          </a>

          <button
            className="menuBtn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={
              menuOpen
                ? "navLinks open"
                : "navLinks"
            }
          >

            <a href="#home" onClick={closeMenu}>
              {t.home}
            </a>

            <a href="#about" onClick={closeMenu}>
              {t.about}
            </a>

            <a href="#skills" onClick={closeMenu}>
              {t.skills}
            </a>

            <a href="#projects" onClick={closeMenu}>
              {t.projects}
            </a>

            <a href="#contact" onClick={closeMenu}>
              {t.contact}
            </a>

            <div className="langSwitch">

              <button
                className={lang === "uz" ? "active" : ""}
                onClick={() => setLang("uz")}
              >
                UZ
              </button>

              <button
                className={lang === "ru" ? "active" : ""}
                onClick={() => setLang("ru")}
              >
                RU
              </button>

              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
              >
                EN
              </button>

            </div>

            <button
              className="themeBtn"
              onClick={() => setDark(!dark)}
              aria-label="Theme"
            >
              {dark ? "☀" : "☾"}
            </button>

          </nav>
        </div>
      </header>

      <main>

        {/* HERO */}

        <section
          id="home"
          className="hero section"
        >

          <div className="container heroGrid">

            <div className="heroText">

              <p className="eyebrow">
                {t.hello}
              </p>

              <h1>
                Shernazar O‘rolov
              </h1>

              <h2>
                {t.role}
              </h2>

              <p className="lead">
                {t.lead}
              </p>

              <div className="heroActions">

                <a
                  className="btn primary"
                  href="#contact"
                >
                  {t.talk}
                  <span>↗</span>
                </a>

                <a
                  className="btn ghost"
                  href="/cv.pdf"
                  download="Orolov_Shernazar_CV.pdf"
                >
                  {t.cv} ↓
                </a>

              </div>

              <div className="socials">

                <a
                  href="https://github.com/shernazar01"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  GH
                </a>

                <a
                  href="https://www.linkedin.com/in/shernazar-%C3%B5ralov-2a9741440"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://wa.me/998500083810"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                  />
                </a>

              </div>

            </div>

            <div className="heroVisual">

              <div className="glow"></div>

              <div className="photoFrame">

                <img
                  className="profilePhoto"
                  src="/photo.png"
                  alt="Shernazar O‘rolov"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 24%"
                  }}
                />

              </div>

              <div className="floatingCard cardOne">

                <strong>
                  2
                </strong>

                <span>
                  {lang === "ru"
                    ? "года опыта"
                    : lang === "en"
                    ? "years experience"
                    : "yil tajriba"}
                </span>

              </div>

              <div className="floatingCard cardTwo">

                <span className="dot"></span>

                {t.available}

              </div>

            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section
          id="about"
          className="section about"
        >

          <div className="container">

            <div className="sectionHead">

              <p className="eyebrow">
                01 — About
              </p>

              <h2>
                {t.aboutTitle}
              </h2>

            </div>

            <div className="aboutGrid">

              <div className="aboutText">

                <p>
                  {t.about1}
                </p>

                <p>
                  {t.about2}
                </p>

              </div>

              <div className="infoCard">

                <div>
                  <span>
                    {t.name}
                  </span>

                  <strong>
                    Shernazar O‘rolov
                  </strong>
                </div>

                <div>
                  <span>
                    {t.phone}
                  </span>

                  <strong>
                    +998 50 008 38 10
                  </strong>
                </div>

                <div>
                  <span>
                    {t.birth}
                  </span>

                  <strong>
                    23.10.2010
                  </strong>
                </div>

                <div>
                  <span>
                    {t.from}
                  </span>

                  <strong>
                    Uzbekistan, Surxondaryo
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}

        <section
          id="skills"
          className="section skills"
        >

          <div className="container">

            <div className="sectionHead">

              <p className="eyebrow">
                02 — Skills
              </p>

              <h2>
                {t.skillsTitle}
              </h2>

            </div>

            <div className="skillsGrid">

              {skills.map(([name, value]) => (

                <div
                  className="skill"
                  key={name}
                >

                  <div className="skillTop">

                    <span>
                      {name}
                    </span>

                    <b>
                      {value}%
                    </b>

                  </div>

                  <div className="bar">

                    <span
                      style={{
                        width: `${value}%`
                      }}
                    ></span>

                  </div>

                </div>

              ))}

            </div>

            <div className="techRow">

              <span>React</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Git</span>
              <span>Figma</span>

            </div>

          </div>

        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="section projects"
        >

          <div className="container">

            <div className="sectionHead">

              <p className="eyebrow">
                03 — Projects
              </p>

              <h2>
                {t.selected}
              </h2>

            </div>

            <div className="projectGrid">

              {projects[lang].map((project, i) => (

                <article
                  className="projectCard"
                  key={project.title}
                >

                  <div className="projectNumber">
                    0{i + 1}
                  </div>

                  <div className="projectVisual">

                    <span>
                      {i === 0
                        ? "⌘"
                        : "✦"}
                    </span>

                  </div>

                  <div className="projectBody">

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.text}
                    </p>

                    <div className="tags">

                      {project.tags.map((tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      ))}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="section contact"
        >

          <div className="container contactBox">

            <div>

              <p className="eyebrow">
                04 — Contact
              </p>

              <h2>
                {t.contactTitle}
              </h2>

              <p className="contactText">
                {t.contactText}
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <label>

                {t.name}

                <input
                  name="name"
                  required
                  placeholder={t.name}
                />

              </label>

              <label>

                {t.email}

                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                />

              </label>

              <label>

                {t.message}

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder={t.message}
                ></textarea>

              </label>

              <button
                className="btn primary"
                type="submit"
              >

                {t.send}

                <span>
                  ↗
                </span>

              </button>

            </form>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer>

        <div className="container footerInner">

          <span>
            © 2026 Shernazar O‘rolov
          </span>

          <a href="#home">
            ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;