/* Fantasy — салон красоты. Цены и контакты — по данным Яндекс Карт. */
const TG = 'salonFantasyMsk';
const WA = '79259257300';

const PRICES = {
  hair: {
    label: 'Волосы',
    groups: [
      { title: 'Стрижки', items: [
        ['Женская, короткие волосы', 1000],
        ['Женская, средние волосы', 1300],
        ['Женская, длинные волосы', 1500],
        ['Мужская модельная', 800],
        ['Мужская классическая', 900, 'только ножницами'],
        ['Мужская под машинку', 450],
        ['Детская до 7 лет включительно', 1000],
        ['Стрижка чёлки', 400],
      ]},
      { title: 'Окрашивание', items: [
        ['В 1 тон, короткие волосы', 4000],
        ['В 1 тон, средние волосы', 4500],
        ['В 1 тон, длинные волосы', 6000],
        ['Окрашивание корней', 5000],
        ['Шатуш, балаяж — короткие', 7000],
        ['Шатуш, балаяж — средние', 8000],
        ['Шатуш, балаяж — длинные', 9500],
        ['Тотал блонд, короткие', 5000],
        ['Тотал блонд, средние', 6000],
        ['Тонирование, средние', 4000],
        ['Мелирование, средние', 5500],
        ['Смывка цвета, средние', 4000],
      ]},
      { title: 'Уход и укладки', items: [
        ['Кератин, средние волосы', 5000],
        ['Ботокс для волос, средние', 4000],
        ['Маска по типу волос', 600],
        ['Укладка брашинг, средние', 1000],
        ['Укладка по форме, средние', 1500],
        ['Вечерние, свадебные причёски', 3000],
        ['Химия, средние волосы', 5500],
      ]},
    ],
  },
  nails: {
    label: 'Маникюр и педикюр',
    groups: [
      { title: 'Маникюр', items: [
        ['Комбинированный / аппаратный', 1200],
        ['Полный комплекс (топ-мастер)', 2600],
        ['Мужской маникюр', 1300],
        ['Детский маникюр (до 12 лет)', 900],
        ['Однотонное покрытие', 900],
        ['Дизайн «Френч»', 800],
        ['Наращивание на форму', 4000],
        ['Коррекция нарощенных + покрытие', 3800],
        ['Снятие гель-лака', 500],
        ['Парафинотерапия рук', 800],
      ]},
      { title: 'Педикюр', items: [
        ['Классический / комбинированный', 2600],
        ['С покрытием гель-лак', 3500],
        ['Полный комплекс (френч)', 4100],
        ['Экспресс — пальчики', 1500],
        ['Экспресс — пяточки', 1800],
        ['Мужской педикюр', 3200],
        ['Парафинотерапия для ног', 800],
        ['Удаление мозолей', 300],
      ]},
    ],
  },
  brows: {
    label: 'Брови и ресницы',
    groups: [
      { title: 'Ресницы', items: [
        ['Наращивание: классика', 2200],
        ['Наращивание 1,5D', 2400],
        ['Наращивание 2D', 3000],
        ['Наращивание 3D', 3400],
        ['Наращивание 4D', 3700],
        ['Ламинирование + ботокс ресниц', 2700],
        ['Снятие без наращивания', 500],
      ]},
      { title: 'Брови и перманент', items: [
        ['Архитектура бровей', 1700, 'моделирование, окрашивание, коррекция'],
        ['Ламинирование бровей', 2700],
        ['Долговременная укладка бровей', 2800],
        ['Перманент: межресничное пространство', 4000],
        ['Перманент: микроблейдинг', 6500],
        ['Перманент: пудровое напыление', 6500],
      ]},
    ],
  },
  body: {
    label: 'Массаж и тело',
    groups: [
      { title: 'Массаж', items: [
        ['SPA-массаж 30 мин, пробное', 1000],
        ['SPA-массаж 60 мин, пробное', 1650],
        ['Oil-массаж 60 мин', 3000],
        ['Классический, 30 мин', 2000],
        ['Классический, 60 мин', 3300],
        ['Антицеллюлитный, 60 мин', 3400],
        ['Лимфодренажный, 60 мин', 3300],
        ['Медовый, 30 мин', 1900],
        ['Шейно-воротниковая зона', 1400],
        ['Скульптурный массаж лица', 1700],
      ]},
      { title: 'Шугаринг и воск', items: [
        ['Глубокое бикини', 2000],
        ['Бикини классическое', 1800],
        ['Ноги полностью', 2000],
        ['Руки полностью', 1500],
        ['Голень', 1200],
        ['Подмышки', 700],
        ['Верхняя губа', 500],
      ]},
    ],
  },
  cosmo: {
    label: 'Косметология',
    groups: [
      { title: 'Уход за лицом', items: [
        ['Чистка лица + пилинг (акция)', 3000, 'вместо 5 900 ₽'],
        ['Комбинированная чистка', 2700],
        ['Ультразвуковая чистка', 2000],
        ['Уход по типу кожи', 1200],
        ['Пилинг гликолевый', 1500],
        ['Пилинг лактобионовый', 2800],
        ['Мультикомплекс 7 кислот', 2500, 'для омоложения'],
        ['Карбокситерапия', 3000],
        ['Лифтинг-макияж', 3200],
      ]},
    ],
  },
};

const fmt = n => n.toLocaleString('ru-RU').replace(/\u00a0/g, ' ') + ' ₽';

/* --- Прайс --- */
const tabsEl = document.getElementById('tabs');
const listEl = document.getElementById('priceList');
const selectEl = document.getElementById('fService');

function renderTabs(active) {
  tabsEl.innerHTML = Object.entries(PRICES).map(([k, v]) =>
    `<button class="tab${k === active ? ' active' : ''}" role="tab" data-cat="${k}">${v.label}</button>`
  ).join('');
}

function renderList(cat) {
  const data = PRICES[cat];
  listEl.innerHTML = data.groups.map(g =>
    `<h3 class="price-group">${g.title}</h3>` +
    g.items.map(([name, price, note]) =>
      `<div class="price" data-service="${name.replace(/"/g, '&quot;')}">
         <div class="price__name">${name}${note ? `<small>${note}</small>` : ''}</div>
         <span class="price__dots"></span>
         <span class="price__val">${fmt(price)}</span>
       </div>`).join('')
  ).join('');
}

function setCategory(cat) {
  renderTabs(cat);
  renderList(cat);
}

/* select в форме */
selectEl.innerHTML = '<option value="">Не определился(-ась) — подскажите</option>' +
  Object.values(PRICES).map(c =>
    `<optgroup label="${c.label}">` +
    c.groups.flatMap(g => g.items).map(([n, p]) => `<option>${n} — ${fmt(p)}</option>`).join('') +
    '</optgroup>'
  ).join('');

function chooseService(name) {
  const found = [...selectEl.options].find(o => o.value.startsWith(name) || o.text.startsWith(name));
  if (found) selectEl.value = found.value || found.text;
  else {
    const o = new Option(name, name);
    selectEl.add(o, 1);
    selectEl.value = name;
  }
}

tabsEl.addEventListener('click', e => {
  const b = e.target.closest('.tab');
  if (b) setCategory(b.dataset.cat);
});

listEl.addEventListener('click', e => {
  const row = e.target.closest('.price');
  if (!row) return;
  chooseService(row.dataset.service);
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.card a[data-cat]').forEach(a =>
  a.addEventListener('click', () => setCategory(a.dataset.cat)));

document.querySelectorAll('[data-service]:not(.price)').forEach(a =>
  a.addEventListener('click', () => chooseService(a.dataset.service)));

setCategory('hair');

/* --- Форма --- */
const err = document.getElementById('formErr');
document.querySelectorAll('[data-send]').forEach(btn =>
  btn.addEventListener('click', () => {
    const name = document.getElementById('fName').value.trim();
    if (!name) {
      err.hidden = false;
      document.getElementById('fName').focus();
      return;
    }
    err.hidden = true;
    const service = selectEl.value || 'Нужна консультация';
    const when = document.getElementById('fWhen').value.trim();
    const text = `Здравствуйте! Меня зовут ${name}. Хочу записаться в Fantasy.\nУслуга: ${service}` +
      (when ? `\nЖелаемое время: ${when}` : '');
    const url = btn.dataset.send === 'tg'
      ? `https://t.me/${TG}?text=${encodeURIComponent(text)}`
      : `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  }));

/* --- Хедер, меню --- */
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { burger.classList.remove('open'); nav.classList.remove('open'); }
});

/* --- Появление при скролле --- */
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: .12 })
  : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

document.getElementById('year').textContent = new Date().getFullYear();
