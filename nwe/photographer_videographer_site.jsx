import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, Video, ShoppingCart, ArrowLeft } from 'lucide-react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// Полнофункциональный одностраничный сайт с роутингом (многостраничная навигация), SEO и динамическим подсчётом цены
// Зависимости: react-router-dom, framer-motion, lucide-react, react-helmet-async, tailwindcss

// --- Данные (заменяйте на реальные) ---
const PACKAGES = [
  { id: 'bronze', title: 'Базовая съёмка', price: 150, bullets: ['1 час', '10 фото', 'Цветокоррекция'] },
  { id: 'silver', title: 'Расширенная', price: 350, bullets: ['3 часа', '30 фото', 'Видео 1–2 мин'] },
  { id: 'gold', title: 'Премиум', price: 800, bullets: ['Весь день', '150 фото', 'Видео 10+ мин', 'Дрон'] },
]

const ADDONS = [
  { id: 'extra_camera', title: 'Доп. камера', price: 120, description: 'Вторая камера + оператор' },
  { id: 'crane', title: 'Кран / Jib', price: 180, description: 'Кинематографические подъёмы' },
  { id: 'gimbal', title: 'Стабилизация (стедикам/гимбал)', price: 90, description: 'Плавная картинка' },
  { id: 'drone', title: 'Дрон', price: 250, description: 'Аэро-кадры (при разрешённых условиях)' },
  { id: 'cab', title: 'Кабриолет / машина', price: 200, description: 'Аренда кабриолета для съёмок' },
]

// --- Utility: currency format ---
function formatPrice(n) { return `$${n}` }

// --- Header ---
function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <Helmet>
        <meta name="theme-color" content="#0f172a" />
      </Helmet>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/10 rounded-lg shadow-md"><Camera size={20} /></div>
        <div>
          <div className="font-bold text-lg">ProFrame Studio</div>
          <div className="text-xs text-neutral-400">Фото & Видео — премиум</div>
        </div>
      </div>
      <nav className="flex items-center gap-4 text-sm">
        <Link to="/" className="hover:underline">Главная</Link>
        <Link to="/portfolio" className="hover:underline">Портфолио</Link>
        <Link to="/about" className="hover:underline">О нас</Link>
        <Link to="/checkout" className="ml-4 btn-primary inline-flex items-center gap-2"><ShoppingCart size={14}/>Заказать</Link>
      </nav>
    </header>
  )
}

// --- Home page with services and dynamic quick-order form (добавлены дополнительные услуги) ---
function Home() {
  const navigate = useNavigate()

  function goToCheckout(preselect) {
    navigate('/checkout', { state: { preselect } })
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <Helmet>
        <title>ProFrame Studio — профессиональная фото и видеосъёмка</title>
        <meta name="description" content="Свадьбы, реклама, коммерческие съёмки. Быстро, красиво и с гарантией результата." />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <section className="grid md:grid-cols-2 gap-8 items-center py-12">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold">Фото и видео, которые продают и трогают</h1>
          <p className="mt-4 text-neutral-400">От идеи до полного пакета: съёмка, монтаж, цветокоррекция и доставка материалов.</p>

          <div className="mt-6 flex gap-3">
            <button onClick={() => goToCheckout(PACKAGES[2])} className="btn-primary inline-flex items-center gap-2">Быстрый заказ</button>
            <Link to="/portfolio" className="btn-ghost">Посмотреть портфолио</Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="p-3 bg-white/5 rounded-lg"><div className="font-bold">99%</div><div className="text-xs text-neutral-400">Удовлетворённость</div></div>
            <div className="p-3 bg-white/5 rounded-lg"><div className="font-bold">10k+</div><div className="text-xs text-neutral-400">Кадров</div></div>
            <div className="p-3 bg-white/5 rounded-lg"><div className="font-bold">24/7</div><div className="text-xs text-neutral-400">Поддержка</div></div>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop&s=1" alt="hero" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
        </motion.div>
      </section>

      <section id="services" className="py-8">
        <h2 className="text-2xl font-bold">Пакеты и дополнительные услуги</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {PACKAGES.map(p => (
            <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="p-6 bg-white/5 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-lg">{p.title}</div>
                  <div className="text-sm text-neutral-400">{p.bullets.join(' • ')}</div>
                </div>
                <div className="text-2xl font-bold">{formatPrice(p.price)}</div>
              </div>
              <div className="mt-4">
                <button onClick={() => goToCheckout(p)} className="btn-primary w-full">Заказать</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-white/3 rounded-xl">
          <h3 className="font-bold">Быстрый подбор добавок</h3>
          <p className="text-sm text-neutral-400">Выберите базовый пакет и отметьте дополнительные опции — цена пересчитается автоматически.</p>
          <QuickConfigurator onOrder={(config) => navigate('/checkout', { state: { preselect: config } })} />
        </div>
      </section>

    </main>
  )
}

// --- QuickConfigurator: форма выбора пакета + доп. услуги + динамическое изменение цены ---
function QuickConfigurator({ onOrder }) {
  const [pkgId, setPkgId] = useState(PACKAGES[0].id)
  const [selectedAddons, setSelectedAddons] = useState({})
  const [extraCameraCount, setExtraCameraCount] = useState(1)

  const base = useMemo(() => PACKAGES.find(p => p.id === pkgId).price, [pkgId])

  // compute price dynamically
  const addonsPrice = useMemo(() => {
    let sum = 0
    for (const aid of Object.keys(selectedAddons)) {
      if (!selectedAddons[aid]) continue
      const addon = ADDONS.find(a => a.id === aid)
      if (!addon) continue
      if (aid === 'extra_camera') {
        sum += addon.price * extraCameraCount
      } else {
        sum += addon.price
      }
    }
    return sum
  }, [selectedAddons, extraCameraCount])

  const total = base + addonsPrice

  function toggleAddon(id) {
    setSelectedAddons(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="mt-4 grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm">Базовый пакет</label>
        <select value={pkgId} onChange={e => setPkgId(e.target.value)} className="mt-2 w-full rounded-md p-3 bg-white/5">
          {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.title} — {formatPrice(p.price)}</option>)}
        </select>

        <div className="mt-4">
          <div className="text-sm font-semibold">Дополнительные услуги</div>
          <div className="mt-2 grid gap-2">
            {ADDONS.map(a => (
              <label key={a.id} className="flex items-center gap-3 bg-white/5 p-3 rounded-md">
                <input type="checkbox" checked={!!selectedAddons[a.id]} onChange={() => toggleAddon(a.id)} />
                <div className="flex-1">
                  <div className="font-medium">{a.title} <span className="text-xs text-neutral-400">{formatPrice(a.price)}</span></div>
                  <div className="text-xs text-neutral-400">{a.description}</div>
                </div>
                {a.id === 'extra_camera' && selectedAddons[a.id] && (
                  <input type="number" min={1} value={extraCameraCount} onChange={e => setExtraCameraCount(Math.max(1, Number(e.target.value || 1)))} className="w-20 rounded-md p-2 bg-white/6 text-sm" />
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-neutral-400">Итого</div>
          <div className="text-xl font-bold">{formatPrice(total)}</div>
        </div>

        <div className="mt-4">
          <button onClick={() => onOrder({ packageId: pkgId, addons: selectedAddons, extraCameraCount })} className="btn-primary w-full inline-flex items-center justify-center gap-2"><ShoppingCart size={14}/>Перейти к заказу — {formatPrice(total)}</button>
        </div>
      </div>

      <div className="p-4 bg-white/5 rounded-md">
        <h4 className="font-semibold">Почему это важно</h4>
        <ul className="mt-2 text-sm text-neutral-400 list-disc ml-5">
          <li>Дополнительная камера даёт альтернативные ракурсы и экономит монтаж.</li>
          <li>Кран делает кадр кинематографичным.</li>
          <li>Кабриолет даёт эффектный въезд/выезд в сцене — полезно для рекламных съёмок.</li>
        </ul>

        <div className="mt-4 text-xs text-neutral-400">* Цены показываются ориентировочно. Точная стоимость зависит от локации, времени съёмки и условий.</div>
      </div>
    </div>
  )
}

// --- Portfolio pages: list + dynamic project page (SEO per project) ---
const SAMPLE_PROJECTS = [
  { id: 'wedding-1', title: 'Свадьба — Алина и Руслан', description: 'Романтичный ролик и фотосъёмка, локация — парк', cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  { id: 'commercial-1', title: 'Рекламный ролик — Бренд X', description: 'Короткий рекламный клип для соцсетей', cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30' },
]

function PortfolioList() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <Helmet>
        <title>Портфолио — ProFrame Studio</title>
        <meta name="description" content="Подборка лучших работ: свадьбы, реклама, коммерческие проекты." />
      </Helmet>

      <div className="flex items-center gap-4">
        <Link to="/" className="text-sm text-neutral-400 flex items-center gap-2"><ArrowLeft size={14}/>Назад</Link>
      </div>

      <h2 className="text-2xl font-bold mt-4">Портфолио</h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {SAMPLE_PROJECTS.map(p => (
          <Link key={p.id} to={`/portfolio/${p.id}`} className="rounded-xl overflow-hidden shadow-lg block">
            <img src={`${p.cover}?w=800&q=60`} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white/5">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-neutral-400">{p.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

function ProjectPage() {
  const { id } = useParams()
  const project = SAMPLE_PROJECTS.find(p => p.id === id) || SAMPLE_PROJECTS[0]

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <Helmet>
        <title>{project.title} — ProFrame Studio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <Link to="/portfolio" className="text-sm text-neutral-400 flex items-center gap-2 mb-4"><ArrowLeft size={14}/>Назад в портфолио</Link>
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-neutral-400 mt-2">{project.description}</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <img src={`${project.cover}?w=1200&q=80`} alt={project.title} className="w-full h-96 object-cover rounded-xl" />
        </div>
        <div className="p-4 bg-white/5 rounded-xl">
          <h4 className="font-semibold">Описание проекта</h4>
          <p className="text-sm text-neutral-400 mt-2">Подробности: сценарий, локация, используемое оборудование, сроки и результат (ролик + фотографии).</p>

          <div className="mt-4">
            <Link to="/checkout" className="btn-primary inline-flex items-center gap-2"><ShoppingCart size={14}/>Заказать похожую съёмку</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

// --- About ---
function About() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <Helmet>
        <title>О нас — ProFrame Studio</title>
        <meta name="description" content="Команда профессионалов с опытом в рекламе и свадебной съёмке." />
      </Helmet>

      <h2 className="text-2xl font-bold">О студии</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-neutral-400">Мы — команда с 8+ лет опыта. Полный цикл: идея, съёмка, монтаж, аэро-съёмка, цветокоррекция.</p>
          <ul className="list-disc ml-5 mt-3 text-sm text-neutral-400">
            <li>Собственное оборудование кинопроката</li>
            <li>Гарантия сроков и качества</li>
            <li>Поддержка и консультации</li>
          </ul>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop" alt="team" className="w-full h-56 object-cover rounded-xl" />
        </div>
      </div>
    </main>
  )
}

// --- Checkout page: preselect from state or default, полный набор полей + динамический пересчёт цены ---
function Checkout({ locationState }) {
  // locationState comes from navigate state: { preselect }
  const pre = (locationState && (locationState.preselect || {})) || {}
  const [packageId, setPackageId] = useState(pre.packageId || PACKAGES[1].id)
  const [addons, setAddons] = useState(pre.addons || {})
  const [extraCameraCount, setExtraCameraCount] = useState(pre.extraCameraCount || 1)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [paymentDone, setPaymentDone] = useState(false)

  const base = useMemo(() => PACKAGES.find(p => p.id === packageId).price, [packageId])
  const addonsPrice = useMemo(() => {
    let sum = 0
    for (const aid of Object.keys(addons)) {
      if (!addons[aid]) continue
      const addon = ADDONS.find(a => a.id === aid)
      if (!addon) continue
      if (aid === 'extra_camera') sum += addon.price * extraCameraCount
      else sum += addon.price
    }
    return sum
  }, [addons, extraCameraCount])
  const total = base + addonsPrice

  function toggle(id) { setAddons(prev => ({ ...prev, [id]: !prev[id] })) }

  function pay() {
    // Здесь: заменить на вызов реальной платежной системы (Stripe/PayPal)
    setPaymentDone(true)
    setTimeout(() => alert('Заказ оформлен — мы свяжемся с вами!'), 300)
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-8">
      <Helmet>
        <title>Оформление заказа — ProFrame Studio</title>
      </Helmet>

      <Link to="/" className="text-sm text-neutral-400 flex items-center gap-2 mb-4"><ArrowLeft size={14}/>Вернуться</Link>

      <div className="bg-white/5 rounded-xl p-6">
        <h3 className="text-xl font-bold">Оформление заказа</h3>
        <div className="mt-4 grid gap-3">
          <label className="text-sm">Выберите пакет</label>
          <select value={packageId} onChange={e => setPackageId(e.target.value)} className="w-full rounded-md p-3 bg-white/5">
            {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.title} — {formatPrice(p.price)}</option>)}
          </select>

          <div>
            <div className="text-sm font-medium">Дополнительные услуги</div>
            <div className="mt-2 grid gap-2">
              {ADDONS.map(a => (
                <label key={a.id} className="flex items-center gap-3 bg-white/6 p-3 rounded-md">
                  <input type="checkbox" checked={!!addons[a.id]} onChange={() => toggle(a.id)} />
                  <div className="flex-1">
                    <div className="font-medium">{a.title} <span className="text-xs text-neutral-400">{formatPrice(a.price)}</span></div>
                    <div className="text-xs text-neutral-400">{a.description}</div>
                  </div>
                  {a.id === 'extra_camera' && addons[a.id] && (
                    <input type="number" min={1} value={extraCameraCount} onChange={e => setExtraCameraCount(Math.max(1, Number(e.target.value || 1)))} className="w-20 rounded-md p-2 bg-white/6 text-sm" />
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Ваше имя" className="p-3 rounded-md bg-white/5" />
            <input value={contact} onChange={e => setContact(e.target.value)} placeholder="Телефон или email" className="p-3 rounded-md bg-white/5" />
          </div>

          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="p-3 rounded-md bg-white/5" />

          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-neutral-400">Итого к оплате</div>
            <div className="text-2xl font-bold">{formatPrice(total)}</div>
          </div>

          {!paymentDone ? (
            <button onClick={pay} className="btn-primary w-full py-3 inline-flex items-center justify-center gap-2"><ShoppingCart size={16}/>Оплатить {formatPrice(total)}</button>
          ) : (
            <div className="p-4 bg-green-600/20 rounded-md text-green-200">Оплата принята. Спасибо — мы скоро свяжемся.</div>
          )}

          <div className="text-xs text-neutral-400 mt-2">Для реальных платежей подключите Stripe / PayPal. Я могу подготовить пример интеграции.</div>
        </div>
      </div>
    </main>
  )
}

// --- App: роуты и провайдер SEO ---
function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-neutral-100 antialiased">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route path="/portfolio/:id" element={<ProjectPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<CheckoutWrapper />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

// CheckoutWrapper to read navigate state for preselected config
import { useLocation } from 'react-router-dom'
function CheckoutWrapper() {
  const location = useLocation()
  return <Checkout locationState={location.state} />
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-400 flex items-center justify-between">
      <div>© {new Date().getFullYear()} ProFrame Studio</div>
      <div className="flex items-center gap-4">
        <Link to="/privacy" className="hover:underline">Политика конфиденциальности</Link>
        <Link to="/contacts" className="hover:underline">Контакты</Link>
      </div>
    </footer>
  )
}

// --- Render ---
const root = document.getElementById('root')
if (root) createRoot(root).render(<App />)

// --- Tailwind button styles (встроенные) ---
// .btn-primary{ background: linear-gradient(90deg,#ff7aa2,#ffd166); color:#0f172a; padding:0.6rem 1rem; border-radius:10px; font-weight:600 }
// .btn-ghost{ background:transparent; border:1px solid rgba(255,255,255,0.06); padding:0.5rem 0.9rem; border-radius:10px }

/*
Как использовать дальше:
1) Установите зависимости: react-router-dom, framer-motion, lucide-react, react-helmet-async
2) Настройте Tailwind как обычно.
3) Подменяйте PACKAGES, ADDONS, SAMPLE_PROJECTS реальными данными и фото.
4) Для SEO: серверный рендер (SSR) или prerendering для основных страниц/проектов.
5) Подключение Stripe — скажите, и я сгенерирую пример frontend + Node/Express backend для приема платежей.
*/
