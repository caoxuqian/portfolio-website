import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowUpLeft,
  Brush,
  GalleryHorizontalEnd,
  Mail,
  Menu,
  Palette,
  PenTool,
  Phone,
  ShoppingBag,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react';
import cartoonAvatar from './assets/cartoon-avatar.webp';
import ecommerce01 from './assets/ecommerce-01.webp';
import ecommerce02 from './assets/ecommerce-02.webp';
import ecommerce03 from './assets/ecommerce-03.webp';
import ecommerce04 from './assets/ecommerce-04.webp';
import ecommerce05 from './assets/ecommerce-05.webp';
import ecommerce06 from './assets/ecommerce-06.webp';
import ecommerce07 from './assets/ecommerce-07.webp';
import ecommerce08 from './assets/ecommerce-08.webp';
import ecommerce09 from './assets/ecommerce-09.webp';
import ecommerceLook01 from './assets/ecommerce-look-01.webp';
import ecommerceLook02 from './assets/ecommerce-look-02.webp';
import ecommerceLook03 from './assets/ecommerce-look-03.webp';
import ecommerceLook04 from './assets/ecommerce-look-04.webp';
import ecommerceLook05 from './assets/ecommerce-look-05.webp';
import ecommerceLook06 from './assets/ecommerce-look-06.webp';
import ecommerceLook07 from './assets/ecommerce-look-07.webp';
import ecommerceLook08 from './assets/ecommerce-look-08.webp';
import ecommerceLook09 from './assets/ecommerce-look-09.webp';
import posterCup from './assets/poster-cup.webp';
import posterCupCarouselYellow from './assets/poster-cup-carousel-yellow.webp';
import posterDrinks from './assets/poster-drinks.webp';
import posterDrinksCarouselBrownSugar from './assets/poster-drinks-carousel-brown-sugar.webp';
import posterDrinksCarouselGrape from './assets/poster-drinks-carousel-grape.webp';
import posterDrinksCarouselMango from './assets/poster-drinks-carousel-mango.webp';
import posterDrinksCarouselPeach from './assets/poster-drinks-carousel-peach.webp';
import posterEggTart from './assets/poster-egg-tart.webp';
import posterEggTartCarouselBurger from './assets/poster-egg-tart-carousel-burger.webp';
import posterEggTartCarouselDoughnut from './assets/poster-egg-tart-carousel-doughnut.webp';
import posterEggTartCarouselMilkTea from './assets/poster-egg-tart-carousel-milk-tea.webp';
import posterFashionCarouselCasual from './assets/poster-fashion-carousel-casual.webp';
import posterFashionCarouselDenim from './assets/poster-fashion-carousel-denim.webp';
import posterFashionCarouselDress from './assets/poster-fashion-carousel-dress.webp';
import posterFashionCarouselShirt from './assets/poster-fashion-carousel-shirt.webp';
import posterKids from './assets/poster-kids.webp';
import posterKidsCarouselDetail from './assets/poster-kids-carousel-detail.webp';
import posterKidsCarouselLight from './assets/poster-kids-carousel-light.webp';
import posterKidsCarouselStyle from './assets/poster-kids-carousel-style.webp';
import posterCraneWetland from './assets/poster-crane-wetland.webp';
import posterMiluFlower from './assets/poster-milu-flower.webp';
import posterDragonBoat from './assets/poster-dragon-boat.webp';
import posterQingming from './assets/poster-qingming.webp';
import posterSaleMen from './assets/poster-sale-men.webp';
import posterSaleMenCarouselBack from './assets/poster-sale-men-carousel-back.webp';
import posterSaleMenCarouselDetail from './assets/poster-sale-men-carousel-detail.webp';
import posterSaleMenCarouselSale from './assets/poster-sale-men-carousel-sale.webp';
import posterSaleWomen from './assets/poster-sale-women.webp';
import posterSaleWomenCarouselBack from './assets/poster-sale-women-carousel-back.webp';
import posterSaleWomenCarouselDetail from './assets/poster-sale-women-carousel-detail.webp';
import posterSaleWomenCarouselFront from './assets/poster-sale-women-carousel-front.webp';
import posterTravel from './assets/poster-travel-june.webp';
import posterTravelCarouselCamp from './assets/poster-travel-carousel-camp.webp';
import posterTravelCarouselCity from './assets/poster-travel-carousel-city.webp';
import posterTravelCarouselHiking from './assets/poster-travel-carousel-hiking.webp';
import illustrationBurgerChicken from './assets/illustration-burger-chicken.webp';
import illustrationBurgerClassic from './assets/illustration-burger-classic.webp';
import illustrationBurgerCrewWide from './assets/illustration-burger-crew-wide.webp';
import illustrationBurgerBlueSquare from './assets/illustration-burger-blue-square.webp';
import illustrationBurgerFriesSquare from './assets/illustration-burger-fries-square.webp';
import contactPhoto from './assets/contact-photo.webp';
import wechatQr from './assets/wechat-qr.webp';
import './styles.css';

const navItems = [
  { id: 'home', label: '首页' },
  { id: '关于我', label: '关于我' },
  { id: '海报设计', label: '海报设计' },
  { id: '插画设计', label: '插画设计' },
  { id: '电商设计', label: '电商设计' },
];

const categories = [
  {
    title: '海报设计',
    text: '展示活动主视觉、品牌海报与社媒视觉。',
    icon: GalleryHorizontalEnd,
    accent: '#ff4d63',
    tag: 'Poster',
  },
  {
    title: '插画设计',
    text: '展示角色、场景与系列插画作品。',
    icon: Brush,
    accent: '#2f8cff',
    tag: 'Illustration',
  },
  {
    title: '电商设计',
    text: '展示商品详情页、电商视觉。',
    icon: ShoppingBag,
    accent: '#ffc527',
    tag: 'E-commerce',
  },
];

const marqueeItems = ['首页', '关于我', '海报设计', '插画设计', '电商设计'];

const detailPages = [
  {
    id: '关于我',
    eyebrow: 'About me',
    title: '地球online游戏进度',
    accent: '#ffc527',
    icon: UserRound,
    intro: '我是一个使用 AI 工具辅助创作的设计师，正在把海报、插画、电商视觉整理成系统化作品集。',
    points: ['AI 辅助视觉创意', '作品集整理与展示', '品牌、电商、社媒视觉'],
  },
  {
    id: '海报设计',
    eyebrow: 'Poster design',
    title: '海报设计',
    accent: '#ff5f72',
    icon: GalleryHorizontalEnd,
    intro: '这里后续会放活动海报、品牌主视觉、社媒传播海报和不同风格的排版案例。',
    points: ['活动专题海报', '品牌视觉海报', '社媒宣传图'],
  },
  {
    id: '插画设计',
    eyebrow: 'Illustration',
    title: '插画设计',
    accent: '#2f8cff',
    icon: Brush,
    intro: '这里后续会展示人物、场景、图标和系列插画，也可以放 AI 辅助生成后的二次设计过程。',
    points: ['人物插画', '场景插画', '图形资产'],
  },
  {
    id: '电商设计',
    eyebrow: 'E-commerce',
    title: '电商设计',
    accent: '#7ce33d',
    icon: ShoppingBag,
    intro: '这里后续会放商品详情页、促销会场、banner 和更偏转化目标的商业设计。',
    points: ['商品详情页', '促销活动页', '电商 banner'],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const hoverLiftEvents = {
  onPointerDown: (event) => event.currentTarget.classList.add('is-hovered'),
  onPointerUp: (event) => event.currentTarget.classList.remove('is-hovered'),
  onPointerCancel: (event) => event.currentTarget.classList.remove('is-hovered'),
  onPointerLeave: (event) => event.currentTarget.classList.remove('is-hovered'),
  onMouseEnter: (event) => event.currentTarget.classList.add('is-hovered'),
  onMouseLeave: (event) => event.currentTarget.classList.remove('is-hovered'),
};

function App() {
  const [activeId, setActiveId] = useState(() => getHashId());

  useEffect(() => {
    const syncHash = () => {
      const nextId = getHashId();
      setActiveId(nextId);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
    };
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeId]);

  const navigateTo = (id) => {
    window.history.pushState(null, '', `#${encodeURIComponent(id)}`);
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const activeDetailPage = detailPages.find((page) => page.id === activeId);

  return (
    <main className="site-shell">
      <Header activeId={activeId} onNavigate={navigateTo} />
      {activeDetailPage ? (
        <SubPage page={activeDetailPage} />
      ) : (
        <HomePage onNavigate={navigateTo} />
      )}
    </main>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero />
      <Marquee />
      <CategorySection onNavigate={onNavigate} />
      <PageFooter />
    </>
  );
}

function Header({ activeId, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [visibleNavCount, setVisibleNavCount] = useState(() => getVisibleNavCount());
  const visibleNavItems = navItems.slice(0, visibleNavCount);
  const collapsedNavItems = navItems.slice(visibleNavCount);

  useEffect(() => {
    const syncVisibleCount = () => setVisibleNavCount(getVisibleNavCount());
    syncVisibleCount();
    window.addEventListener('resize', syncVisibleCount);
    return () => window.removeEventListener('resize', syncVisibleCount);
  }, []);

  useEffect(() => {
    if (!isContactOpen) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsContactOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isContactOpen]);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsMenuOpen(false);
    setIsContactOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <motion.header
      className="floating-nav"
      initial={{ opacity: 0, x: '-50%', y: -24 }}
      animate={{ opacity: 1, x: '-50%', y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <a
        className="logo-mark"
        href="#home"
        aria-label="返回首页"
        onClick={(event) => handleNavClick(event, 'home')}
      >
        <span />
      </a>

      <nav className="desktop-nav" aria-label="主导航">
        {visibleNavItems.map((item) => (
          <a
            className={activeId === item.id ? 'active' : ''}
            href={`#${item.id}`}
            key={item.id}
            onClick={(event) => handleNavClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className={collapsedNavItems.length === 0 ? 'nav-contact show-compact' : 'nav-contact'}
        type="button"
        aria-label="打开联系卡片"
        aria-expanded={isContactOpen}
        onClick={() => {
          setIsMenuOpen(false);
          setIsContactOpen((open) => !open);
        }}
      >
        <Mail size={21} strokeWidth={2.6} />
      </button>

      <button
        className={collapsedNavItems.length > 0 ? 'mobile-menu' : 'mobile-menu is-hidden'}
        type="button"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
        onClick={() => {
          setIsContactOpen(false);
          setIsMenuOpen((open) => !open);
        }}
      >
        <Menu size={24} strokeWidth={2.8} />
      </button>

      <motion.nav
        className="mobile-nav-panel"
        aria-label="移动端导航"
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto' },
          closed: { opacity: 0, y: -8, scale: 0.98, pointerEvents: 'none' },
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {collapsedNavItems.map((item) => (
          <a
            className={activeId === item.id ? 'active' : ''}
            href={`#${item.id}`}
            key={item.id}
            onClick={(event) => handleNavClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
        <button
          className="mobile-contact-link"
          type="button"
          onClick={() => {
            setIsMenuOpen(false);
            setIsContactOpen(true);
          }}
        >
          <span>联系我</span>
          <Mail size={20} strokeWidth={2.8} />
        </button>
      </motion.nav>
      </motion.header>

      {isContactOpen && <ContactCard onClose={() => setIsContactOpen(false)} />}
    </>
  );
}

function ContactCard({ onClose }) {
  return (
    <div className="contact-card-layer" role="dialog" aria-modal="true" aria-label="联系方式">
      <button className="contact-card-backdrop" type="button" aria-label="关闭联系卡片" onClick={onClose} />
      <motion.article
        className="contact-card"
        initial={{ opacity: 0, y: -16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        <button className="contact-card-close" type="button" aria-label="关闭联系卡片" onClick={onClose}>
          <X size={20} strokeWidth={3} />
        </button>
        <div className="contact-photo-slot" aria-label="真人照片">
          <img src={contactPhoto} alt="曹旭钱真人照片" />
        </div>
        <div className="contact-card-content">
          <span className="contact-card-kicker">CONTACT ME</span>
          <h2>联系我</h2>
          <a className="contact-info-line email" href="mailto:caoxuqian@gmail.com">
            <Mail size={20} strokeWidth={2.8} />
            <span>caoxuqian@gmail.com</span>
          </a>
          <a className="contact-info-line phone" href="tel:13611521450">
            <Phone size={20} strokeWidth={2.8} />
            <span>13611521450</span>
          </a>
        </div>
      </motion.article>
    </div>
  );
}

function Hero() {
  const handleWorksClick = (event) => {
    event.preventDefault();
    const categorySection = document.getElementById('作品分类');
    window.history.pushState(null, '', `#${encodeURIComponent('作品分类')}`);
    categorySection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <Sparkles size={18} fill="currentColor" />
          Visual Portfolio
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.18 }}
        >
          我是
          <br />
          <span className="highlight pink tilt-left">AI设计师</span>
          <br />
          练习ai时长
          <span className="highlight blue tilt-right">两年半</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          这里会集中展示我的海报、插画和电商设计作品。
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.55, delay: 0.42 }}
        >
          <a className="button primary" href="#作品分类" onClick={handleWorksClick}>
            <Palette size={20} />
            查看作品
          </a>
          <a className="button secondary" href="#关于我">
            <UserRound size={20} />
            关于我
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
      >
        <motion.div
          className="portrait-card"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={cartoonAvatar} alt="我的卡通形象" />
        </motion.div>

        <motion.div
          className="floating-chip chip-red"
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <PenTool size={18} />
          Design
        </motion.div>
        <motion.div
          className="floating-chip chip-blue"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowUpLeft size={18} />
          我的卡通形象
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="marquee-wrap" aria-label="设计方向">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`}>
            <Sparkles size={28} fill="currentColor" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function CategorySection({ onNavigate }) {
  return (
    <section className="category-section" id="作品分类">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h2>
          <span className="highlight pink">作品目录</span>
        </h2>
        <p>这是一个基于 AI 的作品集，展示我的视觉设计。</p>
      </motion.div>

      <div className="category-grid">
        <AboutCard onNavigate={onNavigate} />
        {categories.map((category, index) => (
          <CategoryCard
            category={category}
            index={index}
            key={category.title}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
}

function AboutCard({ onNavigate }) {
  return (
    <motion.article
      className="about-card clickable-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -8 }}
      role="link"
      tabIndex={0}
      onClick={() => onNavigate('关于我')}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onNavigate('关于我');
        }
      }}
    >
      <div className="about-icon">
        <UserRound size={42} strokeWidth={2.7} />
      </div>
      <h3>关于我</h3>
      <p>
        记录个人经历、技能方向与创作背景。
      </p>
      <a
        href="mailto:caoxuqian@gmail.com"
        onClick={(event) => event.stopPropagation()}
      >
        联系我
        <ArrowUpRight size={18} />
      </a>
    </motion.article>
  );
}

function CategoryCard({ category, index, onNavigate }) {
  const Icon = category.icon;

  return (
    <motion.article
      className="category-card clickable-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      role="link"
      tabIndex={0}
      onClick={() => onNavigate(category.title)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onNavigate(category.title);
        }
      }}
    >
      <div className="card-visual" style={{ '--accent': category.accent }}>
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <Icon size={96} strokeWidth={2.1} />
        <span className="tag">{category.tag}</span>
      </div>
      <div className="card-copy">
        <h3>{category.title}</h3>
        <p>{category.text}</p>
      </div>
    </motion.article>
  );
}

function DetailPages() {
  return (
    <section className="detail-pages" aria-label="作品页面">
      {detailPages.map((page, index) => (
        <DetailPage page={page} index={index} key={page.id} />
      ))}
    </section>
  );
}

function DetailPage({ page, index }) {
  const Icon = page.icon;

  if (page.id === '关于我') {
    return <AboutTimelinePage page={page} index={index} />;
  }

  if (page.id === '海报设计') {
    return <PosterGalleryPage page={page} index={index} />;
  }

  if (page.id === '插画设计') {
    return <IllustrationGalleryPage page={page} index={index} />;
  }

  if (page.id === '电商设计') {
    return <EcommerceGalleryPage page={page} index={index} />;
  }

  return (
    <motion.section
      className="detail-page"
      id={page.id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      style={{ '--accent': page.accent }}
    >
      <div className="detail-copy">
        <p className="detail-eyebrow">{page.eyebrow}</p>
        <h2>
          {page.title}
          <span className="highlight pink">页面</span>
        </h2>
        <p>{page.intro}</p>
      </div>
      <div className="detail-board">
        <div className="detail-icon">
          <Icon size={72} strokeWidth={2.3} />
        </div>
        <ul>
          {page.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

const ecommerceSlots = [
  { label: '电商 01', tone: 'sky', shape: 'portrait', image: ecommerce01 },
  { label: '电商 02', tone: 'lemon', shape: 'portrait', image: ecommerce02 },
  { label: '电商 03', tone: 'graphite', shape: 'portrait', image: ecommerce03 },
  { label: '电商 04', tone: 'mint', shape: 'portrait', image: ecommerce04 },
  { label: '电商 05', tone: 'coral', shape: 'portrait', image: ecommerce05 },
  { label: '电商 06', tone: 'cream', shape: 'portrait', image: ecommerce06 },
  { label: '电商 07', tone: 'pink', shape: 'portrait', image: ecommerce07 },
  { label: '电商 08', tone: 'blue', shape: 'portrait', image: ecommerce08 },
  { label: '电商 09', tone: 'olive', shape: 'portrait', image: ecommerce09 },
];

const ecommerceColumns = [
  ecommerceSlots.slice(0, 3),
  ecommerceSlots.slice(3, 6),
  ecommerceSlots.slice(6, 9),
];

const ecommerceLookSlots = [
  { label: '电商详情 01', tone: 'sky', shape: 'portrait', image: ecommerceLook01 },
  { label: '电商详情 02', tone: 'lemon', shape: 'portrait', image: ecommerceLook02 },
  { label: '电商详情 03', tone: 'graphite', shape: 'portrait', image: ecommerceLook03 },
  { label: '电商详情 04', tone: 'mint', shape: 'portrait', image: ecommerceLook04 },
  { label: '电商详情 05', tone: 'coral', shape: 'portrait', image: ecommerceLook05 },
  { label: '电商详情 06', tone: 'cream', shape: 'portrait', image: ecommerceLook06 },
  { label: '电商详情 07', tone: 'pink', shape: 'portrait', image: ecommerceLook07 },
  { label: '电商详情 08', tone: 'blue', shape: 'portrait', image: ecommerceLook08 },
  { label: '电商详情 09', tone: 'olive', shape: 'portrait', image: ecommerceLook09 },
];

function EcommerceGalleryPage({ page, index }) {
  const [selectedEcommerce, setSelectedEcommerce] = useState(null);
  const openEcommerce = (slot) => setSelectedEcommerce(slot);
  const closeEcommerce = () => setSelectedEcommerce(null);
  const renderEcommerceSlot = (slot, className = '') => (
    <article
      className={`ecommerce-slot tone-${slot.tone} shape-${slot.shape}${className ? ` ${className}` : ''}`}
      key={slot.label}
      role="button"
      tabIndex={0}
      onClick={() => openEcommerce(slot)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openEcommerce(slot);
        }
      }}
    >
      {slot.image ? (
        <img src={slot.image} alt={slot.label} />
      ) : (
        <span>{slot.label}</span>
      )}
    </article>
  );

  return (
    <motion.section
      className="ecommerce-gallery-page"
      id={page.id}
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
    >
      <div className="ecommerce-gallery-heading">
        <p className="detail-eyebrow">{page.eyebrow}</p>
        <h2>
          电商设计
          <span className="highlight green tilt-right">作品墙</span>
        </h2>
      </div>

      <div className="ecommerce-poster-board" aria-label="电商设计作品占位墙">
        <div className="ecommerce-board-title" aria-hidden="true">
          <span>Commerce</span>
        </div>
        <div className="ecommerce-collage">
          {ecommerceColumns.map((column, columnIndex) => (
            <div className="ecommerce-column" key={columnIndex}>
              {column.map((slot) => renderEcommerceSlot(slot))}
            </div>
          ))}
        </div>

        <div className="ecommerce-look-layout" aria-label="电商详情页排版展示">
          {renderEcommerceSlot(ecommerceLookSlots[0], 'ecommerce-look-feature')}
          <div className="ecommerce-look-small-grid">
            {ecommerceLookSlots.slice(1).map((slot) => renderEcommerceSlot(slot, 'ecommerce-look-small'))}
          </div>
        </div>
        <div className="gallery-end-design ecommerce-end-design" aria-hidden="true">DESIGN</div>
      </div>

      {selectedEcommerce && (
        <div className="poster-lightbox" role="dialog" aria-modal="true" aria-label={`${selectedEcommerce.label} 完整预览`}>
          <button className="lightbox-backdrop" type="button" aria-label="关闭预览" onClick={closeEcommerce} />
          <div className="lightbox-panel">
            <LightboxCarousel
              images={[selectedEcommerce.image]}
              ratio="ratio-3-4"
              title={selectedEcommerce.label}
              onClose={closeEcommerce}
            />
          </div>
        </div>
      )}
    </motion.section>
  );
}

const illustrationSeries = {
  one: ['/illustrations/1/1.webp', '/illustrations/1/3.webp', '/illustrations/1/4.webp'],
  two: ['/illustrations/2/1.webp', '/illustrations/2/3.webp', '/illustrations/2/4.webp', '/illustrations/2/5.webp'],
  three: ['/illustrations/3/2.webp', '/illustrations/3/3.webp', '/illustrations/3/4.webp'],
  four: ['/illustrations/4/1.webp', '/illustrations/4/2.webp', '/illustrations/4/3.webp'],
  five: ['/illustrations/5/1.webp', '/illustrations/5/2.webp', '/illustrations/5/3.webp', '/illustrations/5/4.webp'],
  six: ['/illustrations/6/3.webp', '/illustrations/6/4.webp'],
};

const makeIllustrationSlot = ({ label, color, className, images = [], ratio = 'ratio-3-4' }) => ({
  label,
  color,
  className,
  ratio,
  image: images[0],
  carouselImages: images.slice(1),
});

const illustrationSlots = [
  makeIllustrationSlot({ label: '插画 01', color: 'green', className: 'slot-left-tall', images: illustrationSeries.one }),
  makeIllustrationSlot({ label: '插画 02', color: 'red', className: 'slot-top-red', images: illustrationSeries.two }),
  makeIllustrationSlot({ label: '插画 03', color: 'green', className: 'slot-top-green', images: illustrationSeries.three }),
  makeIllustrationSlot({ label: '插画 04', color: 'red', className: 'slot-left-red', images: illustrationSeries.four, ratio: 'ratio-4-3' }),
  makeIllustrationSlot({ label: '插画 05', color: 'blue', className: 'slot-center-text', images: illustrationSeries.five, ratio: 'ratio-1-1' }),
  makeIllustrationSlot({ label: '插画 06', color: 'gray', className: 'slot-right-gray', images: illustrationSeries.six }),
  makeIllustrationSlot({
    label: '插画 07',
    color: 'yellow',
    className: 'slot-bottom-yellow',
    images: ['/illustrations/1/2.webp'],
  }),
  makeIllustrationSlot({
    label: '插画 08',
    color: 'gray',
    className: 'slot-bottom-gray',
    images: ['/illustrations/3/1.webp'],
  }),
  makeIllustrationSlot({
    label: '插画 09',
    color: 'red',
    className: 'slot-right-red',
    images: ['/illustrations/2/2.webp'],
  }),
];

function IllustrationGalleryPage({ page, index }) {
  const [selectedIllustration, setSelectedIllustration] = useState(null);
  const renderIllustrationSlot = (slot, slotIndex) => (
    <article
      className={`illustration-slot ${slot.color} ${slot.className}${slot.image ? ' has-image' : ' is-empty'}`}
      key={slot.className}
      role="button"
      tabIndex={0}
      onClick={() => setSelectedIllustration(slot)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setSelectedIllustration(slot);
        }
      }}
    >
      <small>{String(slotIndex + 1).padStart(2, '0')}</small>
      {slot.image && <img src={slot.image} alt={slot.label} />}
    </article>
  );

  return (
    <motion.section
      className="illustration-gallery-page"
      id={page.id}
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
    >
      <div className="illustration-gallery-heading">
        <p className="detail-eyebrow">{page.eyebrow}</p>
        <h2>
          插画设计
          <span className="highlight blue tilt-right">作品墙</span>
        </h2>
      </div>

      <div className="illustration-layout">
        {illustrationSlots.map(renderIllustrationSlot)}
      </div>
      <div className="gallery-end-design illustration-end-design" aria-hidden="true">DESIGN</div>

      {selectedIllustration && (
        <div className="poster-lightbox" role="dialog" aria-modal="true" aria-label={`${selectedIllustration.label} 完整预览`}>
          <button className="lightbox-backdrop" type="button" aria-label="关闭预览" onClick={() => setSelectedIllustration(null)} />
          <div className="lightbox-panel">
            {selectedIllustration.image ? (
              <LightboxCarousel
                images={[selectedIllustration.image, ...(selectedIllustration.carouselImages || [])]}
                ratio={selectedIllustration.ratio}
                title={selectedIllustration.label}
                onClose={() => setSelectedIllustration(null)}
              />
            ) : (
              <div className={`illustration-preview ${selectedIllustration.color}`}>
                <button className="lightbox-close" type="button" aria-label="关闭预览" onClick={() => setSelectedIllustration(null)}>
                  ×
                </button>
                {selectedIllustration.label.split('\n').map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
}

const posterWorks = [
  {
    title: '男装外套促销海报',
    ratio: 'ratio-3-4',
    meta: '3:4 竖版图片',
    category: 'vertical',
    image: posterSaleMen,
    carouselImages: [posterSaleMenCarouselDetail, posterSaleMenCarouselSale, posterSaleMenCarouselBack],
  },
  {
    title: '女装外套促销海报',
    ratio: 'ratio-3-4',
    meta: '3:4 竖版图片',
    category: 'vertical',
    image: posterSaleWomen,
    carouselImages: [posterSaleWomenCarouselFront, posterSaleWomenCarouselBack, posterSaleWomenCarouselDetail],
  },
  {
    title: '童装专区海报',
    ratio: 'ratio-3-4',
    meta: '3:4 竖版图片',
    category: 'vertical',
    image: posterKids,
    carouselImages: [posterKidsCarouselStyle, posterKidsCarouselDetail, posterKidsCarouselLight],
  },
  {
    title: '可续潮流服饰节',
    ratio: 'ratio-3-4',
    meta: '3:4 竖版图片',
    category: 'vertical',
    image: posterFashionCarouselDress,
    carouselImages: [posterFashionCarouselDenim, posterFashionCarouselCasual, posterFashionCarouselShirt],
  },
  {
    title: '可续旅行生活节',
    ratio: 'ratio-3-4',
    meta: '3:4 竖版图片',
    category: 'vertical',
    image: posterTravel,
    carouselImages: [posterTravelCarouselCamp, posterTravelCarouselCity, posterTravelCarouselHiking],
  },
  {
    title: '饮品双拼海报',
    ratio: 'ratio-3-4',
    meta: '3:4 竖版图片',
    category: 'vertical',
    image: posterDrinks,
    carouselImages: [
      posterDrinksCarouselPeach,
      posterDrinksCarouselGrape,
      posterDrinksCarouselMango,
      posterDrinksCarouselBrownSugar,
    ],
  },
  {
    title: '香酥蛋挞促销海报',
    ratio: 'ratio-3-4',
    meta: '3:4 竖版图片',
    category: 'vertical',
    image: posterEggTart,
    carouselImages: [posterEggTartCarouselDoughnut, posterEggTartCarouselBurger, posterEggTartCarouselMilkTea],
  },
  {
    title: '保温杯产品海报',
    ratio: 'ratio-9-16',
    meta: '9:16 竖版图片',
    category: 'vertical',
    image: posterCup,
    carouselImages: [posterCupCarouselYellow],
  },
  { title: '麋鹿花海横版海报', ratio: 'ratio-16-9', meta: '16:9 横版图片', category: 'horizontal', image: posterMiluFlower },
  { title: '鹤舞湿地横版海报', ratio: 'ratio-16-9', meta: '16:9 横版图片', category: 'horizontal', image: posterCraneWetland },
  { title: '清明时节横版海报', ratio: 'ratio-16-9', meta: '16:9 横版图片', category: 'horizontal', image: posterQingming },
  { title: '端午安康横版海报', ratio: 'ratio-16-9', meta: '16:9 横版图片', category: 'horizontal', image: posterDragonBoat },
  { title: '美味集结快乐开吃', ratio: 'ratio-16-9', meta: '16:9 横版图片', category: 'horizontal', image: illustrationBurgerCrewWide },
  { title: '冰爽可乐快乐冒泡', ratio: 'ratio-1-1', meta: '1:1 方形图片', category: 'square', image: illustrationBurgerBlueSquare },
  { title: '香脆鸡腿越吃越香', ratio: 'ratio-1-1', meta: '1:1 方形图片', category: 'square', image: illustrationBurgerChicken },
  { title: '经典牛肉快乐开吃', ratio: 'ratio-1-1', meta: '1:1 方形图片', category: 'square', image: illustrationBurgerClassic },
  { title: '黄金薯条酥脆开吃', ratio: 'ratio-1-1', meta: '1:1 方形图片', category: 'square', image: illustrationBurgerFriesSquare },
];

function PosterGalleryPage({ page, index }) {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const openPoster = (work) => {
    setSelectedPoster(work);
  };

  const closePoster = () => {
    setSelectedPoster(null);
  };

  const renderPosterCard = (work, workIndex) => (
    <article
      className={`poster-frame poster-item-${workIndex + 1} ${work.ratio}${work.image ? ' has-image' : ''}`}
      key={`${work.title}-${workIndex}`}
      role="button"
      style={{ '--poster-order': workIndex + 1 }}
      tabIndex={0}
      onClick={() => openPoster(work)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openPoster(work);
        }
      }}
    >
      <div className="poster-image-card">
        <div className="poster-frame-inner poster-face poster-face-front">
          <span className="poster-frame-index">{String(workIndex + 1).padStart(2, '0')}</span>
          <h3>{work.title}</h3>
          <p>{work.image ? '悬停查看图片' : work.meta}</p>
        </div>
        {work.image && (
          <div className="poster-face poster-image-preview">
            <img src={work.image} alt={work.title} />
          </div>
        )}
      </div>
    </article>
  );

  return (
    <motion.section
      className="poster-gallery-page"
      id={page.id}
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
    >
      <div className="poster-gallery-heading">
        <p className="detail-eyebrow">{page.eyebrow}</p>
        <h2>
          海报设计
          <span className="highlight pink tilt-left">作品墙</span>
        </h2>
      </div>

      <div className="poster-masonry-grid">
        <div className="poster-flow-grid">
          <div className="poster-flow-column">
            {posterWorks.slice(0, 12).filter((_, workIndex) => workIndex % 2 === 0).map((work, workIndex) => renderPosterCard(work, workIndex * 2))}
          </div>
          <div className="poster-flow-column">
            {posterWorks.slice(0, 12).filter((_, workIndex) => workIndex % 2 === 1).map((work, workIndex) => renderPosterCard(work, workIndex * 2 + 1))}
          </div>
        </div>
        <div className="poster-feature-cluster">
          {posterWorks.slice(12, 17).map((work, workIndex) => renderPosterCard(work, workIndex + 12))}
        </div>
      </div>

      {selectedPoster && (
        <div className="poster-lightbox" role="dialog" aria-modal="true" aria-label={`${selectedPoster.title} 完整预览`}>
          <button className="lightbox-backdrop" type="button" aria-label="关闭预览" onClick={closePoster} />
          <div className="lightbox-panel">
            {selectedPoster.image ? (
              <LightboxCarousel
                images={[selectedPoster.image, ...(selectedPoster.carouselImages || [])]}
                ratio={selectedPoster.ratio}
                title={selectedPoster.title}
                onClose={closePoster}
              />
            ) : (
              <div className={`lightbox-image ${selectedPoster.ratio}`}>
                <button className="lightbox-close" type="button" aria-label="关闭预览" onClick={closePoster}>
                  ×
                </button>
                <span>{selectedPoster.meta}</span>
                <h3>{selectedPoster.title}</h3>
                <p>{selectedPoster.meta}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
}

function LightboxCarousel({ images, ratio, title, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragStart = useRef(null);
  const userInteracted = useRef(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
    setIsPaused(false);
    userInteracted.current = false;
  }, [images]);

  const showPreviousImage = () => {
    userInteracted.current = true;
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    userInteracted.current = true;
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const handlePointerUp = (event) => {
    if (!dragStart.current || !hasMultipleImages) {
      return;
    }

    const dragDistanceX = event.clientX - dragStart.current.x;
    const dragDistanceY = event.clientY - dragStart.current.y;
    const dominantDistance =
      Math.abs(dragDistanceY) > Math.abs(dragDistanceX) ? dragDistanceY : dragDistanceX;
    dragStart.current = null;

    if (Math.abs(dominantDistance) < 36) {
      return;
    }

    if (dominantDistance < 0) {
      showNextImage();
    } else {
      showPreviousImage();
    }
  };

  const getSlideClass = (imageIndex) => {
    let offset = imageIndex - activeIndex;

    if (offset > images.length / 2) {
      offset -= images.length;
    }

    if (offset < -images.length / 2) {
      offset += images.length;
    }

    if (offset === 0) {
      return 'is-active';
    }

    if (offset === -1) {
      return 'is-previous';
    }

    if (offset === 1) {
      return 'is-next';
    }

    return offset < 0 ? 'is-far-previous' : 'is-far-next';
  };

  return (
    <div
      className="lightbox-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseMove={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={(event) => {
        dragStart.current = { x: event.clientX, y: event.clientY };
        userInteracted.current = true;
        setIsPaused(true);
      }}
      onPointerMove={(event) => {
        if (!dragStart.current || !hasMultipleImages) {
          return;
        }

        const dragDistanceX = event.clientX - dragStart.current.x;
        const dragDistanceY = event.clientY - dragStart.current.y;
        if (Math.max(Math.abs(dragDistanceX), Math.abs(dragDistanceY)) > 8) {
          event.preventDefault();
        }
        setIsPaused(true);
      }}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        dragStart.current = null;
        setIsPaused(false);
      }}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className={`carousel-stage ${ratio}`} aria-label={`${title} 轮播`}>
        <button className="lightbox-close" type="button" aria-label="关闭预览" onClick={onClose}>
          ×
        </button>
        {images.map((image, imageIndex) => (
          <img
            className={`lightbox-real-image carousel-slide ${ratio} ${getSlideClass(imageIndex)}`}
            src={image}
            alt={`${title} ${imageIndex + 1}`}
            key={image}
            onClick={() => {
              userInteracted.current = true;
              setActiveIndex(imageIndex);
            }}
          />
        ))}
      </div>
    </div>
  );
}

const mainQuests = [
  {
    date: '2026.03 - 至今',
    title: '自媒体创作者（抖音）',
    text: [
      'AI漫画剧情账号起号与内容制作。',
      '流量数据：单周播放量达 410.7 万，7 天净增粉丝 3 万。',
    ],
  },
  {
    date: '2025.11 - 2026.03',
    title: 'AI 漫剧与视频制作',
    text: [
      '自学 AI 漫剧制作流程，从 ComfyUI 开源视频模型到即梦 Seedance 2.0 进行内容制作。',
    ],
  },
  {
    date: '2024.11 - 2025.12',
    title: '杭州米创品牌管理有限公司 | AI 设计师',
    text: [
      '核心职责：负责 AIGC 技术在服装电商视觉内容中的落地应用。',
      '关键产出：独立完成 AI 换装、买家秀图片制作及 AI 视频生成等工作。',
    ],
  },
  {
    date: '2023.10 - 2023.12',
    title: '武汉齐天动漫插画有限公司 | 视觉设计师（实习）',
    text: [
      '核心产出：使用 Stable Diffusion 结合 Animate Diff 将静态图制作为动态效果，并独立完成后期合成优化。',
    ],
  },
  {
    date: '2020 - 2024',
    title: '武昌首义学院 | 视觉传达设计（本科）',
    text: [
      '专业技能：Adobe 系列软件、剪辑、Stable Diffusion、ChatGPT。',
    ],
  },
];

const sideQuests = [
  ['短视频账号运营 / 漫画剧情策划 / 数据复盘'],
  ['ComfyUI / 即梦 / Seedance / AI 视频生成'],
  ['AI 换装 / 买家秀制作 / 电商详情页视觉'],
  ['Stable Diffusion / 剪映 / 后期优化'],
  ['Photoshop / Illustrator / 品牌视觉 / 视觉传达'],
];

const skillQuests = sideQuests.map((skills, index) => ({
  date: `技能 ${String(index + 1).padStart(2, '0')}`,
  title: ['内容运营', 'AI 漫剧制作', 'AIGC 电商视觉', '动态影像', '视觉设计'][index],
  text: skills,
}));

const recentUpdates = [
  { label: '最近在玩', value: '艾尔登法环', icon: '🎮', color: 'blue' },
  { label: '最近在看', value: '黑袍纠察队', icon: '🎬', color: 'pink' },
  { label: '最近感兴趣', value: 'AI 编程', icon: '⚡', color: 'green' },
];

function AboutTimelinePage({ page, index }) {
  const [questMode, setQuestMode] = useState('main');
  const timelineItems = questMode === 'main' ? mainQuests : skillQuests;

  return (
    <motion.section
      className={`about-timeline-page quest-mode-${questMode}`}
      id={page.id}
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
    >
      <AboutIntroCard />

      <section className="recent-updates" aria-label="近日生活">
        <div className="recent-title">
          <span>近日生活</span>
          <strong>RECENT UPDATES</strong>
        </div>
        <div className="recent-update-track">
          {recentUpdates.map((item) => (
            <article className={`recent-card ${item.color}`} key={item.label} {...hoverLiftEvents}>
              <span className="recent-icon">{item.icon}</span>
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <div className="timeline-heading">
        <p className="detail-eyebrow">{page.eyebrow}</p>
        <h2>
          <span>地球</span>
          <span className="highlight blue">online</span>
          <span className="timeline-title-word">游</span>
          <span className="timeline-title-word">戏</span>
          <span className="timeline-title-word">进</span>
          <span className="timeline-title-word">度</span>
        </h2>
      </div>

      <div className="timeline-legend">
        <button
          className={questMode === 'main' ? 'legend-main active' : 'legend-main'}
          type="button"
          onClick={() => setQuestMode('main')}
        >
          游戏进度
        </button>
        <button
          className={questMode === 'side' ? 'legend-side active' : 'legend-side'}
          type="button"
          onClick={() => setQuestMode('side')}
        >
          我的技能
        </button>
      </div>

      <div className="vertical-timeline">
        {timelineItems.map((quest, questIndex) => (
          <div className="timeline-row" key={`${quest.date}-${quest.title}`}>
            <span className="timeline-node" aria-hidden="true" />
            <article className="quest-card main-card" {...hoverLiftEvents}>
              <span className="quest-date">{quest.date}</span>
              <h4>{quest.title}</h4>
              {quest.text.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </article>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function AboutIntroCard() {
  return (
    <section className="about-intro-card" aria-label="个人名片">
      <div className="about-intro-copy">
        <h2>
          Welcome to
          <span className="highlight blue tilt-right">旭钱的世界！</span>
        </h2>
        <p>
          我是一名 AI 设计师，喜欢将视觉设计与 AI 工具结合，探索更高效、更有创意的设计表达方式。
          这里会记录我的成长路线、项目经历和作品进度。
        </p>
        <p>
          目前，我正在整理自己的作品集内容，将不同阶段的学习、实践与项目成果串联起来，
          形成一条清晰的创作成长路径。
        </p>
      </div>

      <article className="id-card">
        <div className="id-card-top">
          <div>
            <strong>ID CARD</strong>
            <span>EARTH ONLINE PLAYER</span>
          </div>
          <div className="id-badge" {...hoverLiftEvents}>AI</div>
        </div>

        <div className="id-card-body">
          <div className="id-avatar" {...hoverLiftEvents}>
            <img src={cartoonAvatar} alt="我的卡通形象" />
          </div>

          <div className="id-info">
            <div className="id-field yellow" {...hoverLiftEvents}>
              <span>Name</span>
              <strong>曹旭钱</strong>
            </div>
            <div className="id-field blue-field" {...hoverLiftEvents}>
              <span>Major</span>
              <strong>视觉设计 / AIGC</strong>
            </div>
            <div className="id-field purple" {...hoverLiftEvents}>
              <span>Job</span>
              <strong>AI Designer</strong>
            </div>
          </div>
        </div>

        <div className="id-meta">
          <span>2002.12.30</span>
          <span>China</span>
        </div>

        <div className="id-bottom">
          <div {...hoverLiftEvents}>
            <span>Phone</span>
            <strong>13611521450</strong>
          </div>
          <div className="qr-card" {...hoverLiftEvents}>
            <img src={wechatQr} alt="我的微信二维码" />
          </div>
        </div>
      </article>
    </section>
  );
}

function SubPage({ page }) {
  return (
    <>
      <section className="subpage-hero">
        <DetailPage page={page} index={0} />
      </section>
      <PageFooter />
    </>
  );
}

function PageFooter() {
  return (
    <footer className="page-footer">
      <span>AI Designer Portfolio</span>
      <span>海报 / 插画 / 电商设计</span>
    </footer>
  );
}

function getHashId() {
  if (typeof window === 'undefined') {
    return 'home';
  }

  const hashId = decodeURIComponent(window.location.hash.replace('#', '')) || 'home';
  return navItems.some((item) => item.id === hashId) ? hashId : 'home';
}

function getVisibleNavCount() {
  if (typeof window === 'undefined') {
    return navItems.length;
  }

  if (window.innerWidth >= 980) {
    return navItems.length;
  }

  if (window.innerWidth >= 720) {
    return navItems.length;
  }

  if (window.innerWidth >= 600) {
    return 4;
  }

  if (window.innerWidth >= 460) {
    return 3;
  }

  return 2;
}

createRoot(document.getElementById('root')).render(<App />);
