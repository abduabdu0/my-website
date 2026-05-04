// ================================================================
// ЗАБОНОМӮЗӢ — Language Learning App
// Redesigned & Enhanced Version
// ================================================================

// ================================================================
// LANGUAGE DATA
// ================================================================
const languages = {
  'ru': {
    name: 'Русский', icon: '🇷🇺',
    lessons: [
      { id:1, title:'📝 Гласные буквы', icon:'🔤',
        theory:`<div class="theory"><h4>Русские гласные буквы</h4><p><strong>А Е И О У Ы Э Ю Я</strong></p><p>Гласные — буквы, которые образуют голос. Без них нельзя произнести слог.</p><ul class="rule-list"><li>А — открытый звук, как в слове «мама»</li><li>О — круглый, как в слове «окно»</li><li>У — вытянутый, как в слове «утка»</li><li>И — узкий, как в слове «иголка»</li><li>Е, Ё, Ю, Я — смягчают предыдущий согласный</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'Это буква _',gaps:[{i:11,options:['А','Б','В'],correct:'А'}]},{difficulty:'easy',text:'Буква _ звучит мягко',gaps:[{i:8,options:['А','Е','О'],correct:'Е'}]},{difficulty:'easy',text:'_ — гласная',gaps:[{i:0,options:['У','Б','Д'],correct:'У'}]}]
      },
      { id:2, title:'🔤 Согласные буквы', icon:'📝',
        theory:`<div class="theory"><h4>Русские согласные буквы</h4><p><strong>Б В Г Д Ж З К Л М Н П Р С Т Ф Х Ц Ч Ш Щ Й</strong></p><p>Согласные образуют преграду для звука.</p><ul class="rule-list"><li>Звонкие: Б, В, Г, Д, Ж, З</li><li>Глухие: П, Ф, К, Т, Ш, С</li><li>Всегда твёрдые: Ж, Ш, Ц</li><li>Всегда мягкие: Й, Ч, Щ</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'Буква _ — согласная',gaps:[{i:7,options:['Б','А','Е'],correct:'Б'}]},{difficulty:'easy',text:'_ — первая буква алфавита',gaps:[{i:0,options:['А','Б','В'],correct:'А'}]},{difficulty:'medium',text:'Буква _ — звонкая',gaps:[{i:7,options:['В','Ф','С'],correct:'В'}]}]
      },
      { id:3, title:'📕 Безударные гласные', icon:'🔤',
        theory:`<div class="theory"><h4>Проверяемые безударные гласные</h4><p>Подбирайте проверочное слово, где гласная ударная.</p><ul class="rule-list"><li>Тр<strong>а</strong>ва → тр<strong>а</strong>вы (а ударная)</li><li>М<strong>о</strong>ст → мост (одно ударение)</li><li>Гор<strong>а</strong> → г<strong>о</strong>ры (проверяем «о»)</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'Тр_ва растёт',gaps:[{i:2,options:['а','о','е','и'],correct:'а'}]},{difficulty:'easy',text:'М_ст высокий',gaps:[{i:1,options:['о','а','е','и'],correct:'о'}]},{difficulty:'medium',text:'Г_ра крутая',gaps:[{i:1,options:['о','а','у'],correct:'о'}]}]
      },
      { id:4, title:'📗 Звонкие и глухие', icon:'🔤',
        theory:`<div class="theory"><h4>Звонкие и глухие согласные</h4><p><strong>Звонкие:</strong> б, в, г, д, ж, з</p><p><strong>Глухие:</strong> п, ф, к, т, ш, с</p><ul class="rule-list"><li>В конце слова звонкие оглушаются: дуб → [дуп]</li><li>Проверяй: дуб — дубы</li></ul></div>`,
        tasks:[{difficulty:'medium',text:'У_кий коридор',gaps:[{i:1,options:['з','с','х'],correct:'з'}]},{difficulty:'medium',text:'Мя_кий диван',gaps:[{i:2,options:['г','к','х'],correct:'г'}]},{difficulty:'hard',text:'Он учи_ся хорошо',gaps:[{i:5,options:['тся','ться'],correct:'тся'}]}]
      },
      { id:5, title:'📙 Ы и И после Ц', icon:'📝',
        theory:`<div class="theory"><h4>Правило Ы и И после Ц</h4><p>В <strong>корне</strong>: Ц + И (цирк, цифра)</p><p>В <strong>окончании</strong>: Ц + Ы (птицы, огурцы)</p><ul class="rule-list"><li>Исключения: цыган, цыплёнок, цыкнуть, на цыпочках</li></ul></div>`,
        tasks:[{difficulty:'medium',text:'Ц_рк в городе',gaps:[{i:1,options:['и','ы','е'],correct:'и'}]},{difficulty:'medium',text:'Огурц_',gaps:[{i:5,options:['и','ы','а'],correct:'ы'}]},{difficulty:'hard',text:'Ц_плёнок жёлтый',gaps:[{i:1,options:['и','ы'],correct:'ы'}]}]
      }
    ],
    tasks:[
      {difficulty:'easy',text:'Гл_з открыт',gaps:[{i:2,options:['а','о','е','и'],correct:'а'}]},
      {difficulty:'easy',text:'Сл_зы текут',gaps:[{i:2,options:['ё','а','е','и'],correct:'ё'}]},
      {difficulty:'medium',text:'Жи_нь чудесна',gaps:[{i:2,options:['з','с','х','ш'],correct:'з'}]},
      {difficulty:'hard',text:'Он учи_ся хорошо',gaps:[{i:5,options:['тся','ться'],correct:'тся'}]}
    ]
  },
  'en': {
    name: 'English', icon: '🇬🇧',
    lessons: [
      { id:1, title:'📝 Alphabet A–M', icon:'📝',
        theory:`<div class="theory"><h4>English Alphabet (First Half)</h4><p><strong>A B C D E F G H I J K L M</strong></p><ul class="rule-list"><li>A — /eɪ/ (long A sound)</li><li>B — /biː/ (bee)</li><li>C — /siː/ (see, soft before e/i/y)</li><li>G — hard before a/o/u, soft before e/i</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'First letter is _',gaps:[{i:14,options:['A','B','C'],correct:'A'}]},{difficulty:'easy',text:'_ comes after A',gaps:[{i:0,options:['B','C','A'],correct:'B'}]},{difficulty:'easy',text:'_ comes after K',gaps:[{i:0,options:['L','M','N'],correct:'L'}]}]
      },
      { id:2, title:'🔤 Alphabet N–Z', icon:'📝',
        theory:`<div class="theory"><h4>English Alphabet (Second Half)</h4><p><strong>N O P Q R S T U V W X Y Z</strong></p><ul class="rule-list"><li>The last letter Z is /zɛd/ (British) or /ziː/ (American)</li><li>Q is almost always followed by U</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'Last letter is _',gaps:[{i:14,options:['Y','Z','X'],correct:'Z'}]},{difficulty:'easy',text:'_ comes after M',gaps:[{i:0,options:['N','M','O'],correct:'N'}]},{difficulty:'medium',text:'Q is always followed by _',gaps:[{i:24,options:['U','A','E'],correct:'U'}]}]
      },
      { id:3, title:'📕 Articles: A, An, The', icon:'🔤',
        theory:`<div class="theory"><h4>Using Articles</h4><p><strong>A/An:</strong> for singular countable nouns (first mention)</p><p><strong>The:</strong> for specific nouns (known to both)</p><ul class="rule-list"><li>Use "a" before consonant sounds: a cat, a dog</li><li>Use "an" before vowel sounds: an apple, an hour</li><li>Use "the" for specific things: the sun, the book on my desk</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'_ apple is red',gaps:[{i:0,options:['A','An','The'],correct:'An'}]},{difficulty:'easy',text:'I have _ cat',gaps:[{i:8,options:['a','an','the'],correct:'a'}]},{difficulty:'medium',text:'_ sun is bright',gaps:[{i:0,options:['A','An','The'],correct:'The'}]}]
      },
      { id:4, title:'📗 Present Simple', icon:'🔤',
        theory:`<div class="theory"><h4>Present Simple Tense</h4><p>For habits, facts, routines.</p><ul class="rule-list"><li>I/You/We/They + verb: I like coffee</li><li>He/She/It + verb+s: She likes coffee</li><li>Verbs ending in -ch, -sh, -x, -o add -es: he watches</li><li>Negative: do not / does not + verb</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'She _ to the park',gaps:[{i:5,options:['go','goes','gone'],correct:'goes'}]},{difficulty:'medium',text:'They _ football',gaps:[{i:5,options:['plays','play','playing'],correct:'play'}]},{difficulty:'hard',text:'He _ not like coffee',gaps:[{i:3,options:['do','does','did'],correct:'does'}]}]
      },
      { id:5, title:'📗 Plural Forms', icon:'🔤',
        theory:`<div class="theory"><h4>Making Plurals</h4><ul class="rule-list"><li>Most nouns: add -s (cat → cats)</li><li>Nouns in -s, -x, -ch, -sh: add -es (bus → buses)</li><li>Nouns in -y (after consonant): -ies (city → cities)</li><li>Irregular: child→children, man→men, woman→women</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'Two _',gaps:[{i:5,options:['cat','cats','cate'],correct:'cats'}]},{difficulty:'medium',text:'Three _',gaps:[{i:7,options:['child','childs','children'],correct:'children'}]},{difficulty:'hard',text:'Many _',gaps:[{i:5,options:['city','citys','cities'],correct:'cities'}]}]
      }
    ],
    tasks:[
      {difficulty:'easy',text:'_ dog is big',gaps:[{i:0,options:['A','An','The'],correct:'The'}]},
      {difficulty:'easy',text:'I have _ book',gaps:[{i:8,options:['a','an','the'],correct:'a'}]},
      {difficulty:'medium',text:'She _ to the park',gaps:[{i:5,options:['go','goes','gone'],correct:'goes'}]},
      {difficulty:'hard',text:'The _ are beautiful',gaps:[{i:4,options:['flower','flowers','floweres'],correct:'flowers'}]}
    ]
  },
  'tg': {
    name: 'Тоҷикӣ', icon: '🇹🇯',
    lessons: [
      { id:1, title:'📝 Алифбо: ҳарфҳои аввал', icon:'📝',
        theory:`<div class="theory"><h4>Алифбои тоҷикӣ</h4><p>Алифбои тоҷикӣ 39 ҳарф дорад.</p><ul class="rule-list"><li>А, Б, В, Г, Д, Е, Ё, Ж, З</li><li>Ҳарфҳои махсус: Ғ, Қ, Ҳ, Ҷ</li><li>Забони тоҷикӣ ба гурӯҳи забонҳои эронӣ мансуб аст</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'Ман _ мехонам',gaps:[{i:4,options:['китоб','қалам','дарс'],correct:'китоб'}]},{difficulty:'easy',text:'Ин _ аст',gaps:[{i:3,options:['хона','мактаб','боғ'],correct:'хона'}]}]
      },
      { id:2, title:'🔤 Калимаҳои асосӣ', icon:'📝',
        theory:`<div class="theory"><h4>Калимаҳои рӯзмарра</h4><p>Салом = Привет, Ташаккур = Спасибо, Хайр = До свидания</p><ul class="rule-list"><li>Ман = я, Ту = ты, Вай = он/она</li><li>Мо = мы, Шумо = вы, Онҳо = они</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'_ хуб аст',gaps:[{i:0,options:['Об','Нон','Гул'],correct:'Об'}]},{difficulty:'medium',text:'_ меравам',gaps:[{i:0,options:['Ман','Ту','Вай'],correct:'Ман'}]}]
      }
    ],
    tasks:[
      {difficulty:'easy',text:'Ман дар _ истода',gaps:[{i:7,options:['хона','мактаб','боғ'],correct:'хона'}]},
      {difficulty:'easy',text:'_ китоб мехонад',gaps:[{i:0,options:['Ту','Ман','Вай'],correct:'Вай'}]},
      {difficulty:'medium',text:'Ин _ хуб аст',gaps:[{i:3,options:['об','нон','гул'],correct:'об'}]}
    ]
  },
  'es': {
    name: 'Español', icon: '🇪🇸',
    lessons: [
      { id:1, title:'📝 El Alfabeto', icon:'📝',
        theory:`<div class="theory"><h4>Spanish Alphabet</h4><p>Spanish has 27 letters (includes Ñ).</p><ul class="rule-list"><li>Vowels A, E, I, O, U always the same sound</li><li>C before e/i = /θ/ (Spain) or /s/ (LatAm)</li><li>H is always silent</li><li>LL = /y/ or /ʒ/ sound</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'First letter is _',gaps:[{i:14,options:['A','B','C'],correct:'A'}]},{difficulty:'easy',text:'_ comes after M',gaps:[{i:0,options:['N','M','L'],correct:'N'}]}]
      },
      { id:2, title:'🔤 Artículos', icon:'📝',
        theory:`<div class="theory"><h4>Spanish Articles</h4><p>El (m.sg) La (f.sg) Los (m.pl) Las (f.pl)</p><ul class="rule-list"><li>-o endings → masculine: el gato</li><li>-a endings → feminine: la gata</li><li>Use el/la for definite, un/una for indefinite</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'_ gato es blanco',gaps:[{i:0,options:['El','La','Un'],correct:'El'}]},{difficulty:'easy',text:'_ casa es grande',gaps:[{i:0,options:['El','La','Un'],correct:'La'}]},{difficulty:'medium',text:'_ libros son buenos',gaps:[{i:0,options:['El','Los','Las'],correct:'Los'}]}]
      }
    ],
    tasks:[
      {difficulty:'easy',text:'_ mesa es grande',gaps:[{i:0,options:['El','La','Un'],correct:'La'}]},
      {difficulty:'easy',text:'_ perro es pequeño',gaps:[{i:0,options:['El','La','Un'],correct:'El'}]},
      {difficulty:'medium',text:'Nosotros _ en Madrid',gaps:[{i:11,options:['vivimos','vives','viven'],correct:'vivimos'}]}
    ]
  },
  'fr': {
    name: 'Français', icon: '🇫🇷',
    lessons: [
      { id:1, title:'📝 L\'Alphabet', icon:'📝',
        theory:`<div class="theory"><h4>French Alphabet</h4><p>26 letters, same as English but different pronunciation.</p><ul class="rule-list"><li>E at end of word often silent</li><li>Accents change pronunciation: é, è, ê, ë</li><li>H is usually silent in French</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'First letter is _',gaps:[{i:14,options:['A','B','C'],correct:'A'}]},{difficulty:'easy',text:'_ comes after A',gaps:[{i:0,options:['B','C','D'],correct:'B'}]}]
      },
      { id:2, title:'🔤 Articles', icon:'📝',
        theory:`<div class="theory"><h4>French Articles</h4><p>Le (m) La (f) Les (pl) Un (m) Une (f)</p><ul class="rule-list"><li>Before vowel: le/la → l\' (l\'ami, l\'amie)</li><li>Definite: le chat (the cat)</li><li>Indefinite: un chat (a cat)</li></ul></div>`,
        tasks:[{difficulty:'easy',text:'_ chat est blanc',gaps:[{i:0,options:['Le','La','Un'],correct:'Le'}]},{difficulty:'easy',text:'_ maison est grande',gaps:[{i:0,options:['Le','La','Un'],correct:'La'}]}]
      }
    ],
    tasks:[
      {difficulty:'easy',text:'_ chien est grand',gaps:[{i:0,options:['Le','La','Un'],correct:'Le'}]},
      {difficulty:'easy',text:'_ fille est belle',gaps:[{i:0,options:['Le','La','Un'],correct:'La'}]},
      {difficulty:'medium',text:'Je _ étudiant',gaps:[{i:3,options:['suis','es','est'],correct:'suis'}]}
    ]
  }
};

// ================================================================
// ALPHABETS
// ================================================================
const alphabets = {
  'ru': [
    {letter:'А',sound:'a',name:'А (а)',image:'🍎',examples:[{word:'Арбуз',meaning:'арбуз'},{word:'Апельсин',meaning:'апельсин'}]},
    {letter:'Б',sound:'b',name:'БЭ (б)',image:'🐻',examples:[{word:'Банан',meaning:'банан'},{word:'Бабочка',meaning:'бабочка'}]},
    {letter:'В',sound:'v',name:'ВЭ (в)',image:'🐺',examples:[{word:'Волк',meaning:'волк'},{word:'Вода',meaning:'вода'}]},
    {letter:'Г',sound:'g',name:'ГЭ (г)',image:'⚡',examples:[{word:'Гроза',meaning:'гроза'},{word:'Голос',meaning:'голос'}]},
    {letter:'Д',sound:'d',name:'ДЭ (д)',image:'🏠',examples:[{word:'Дом',meaning:'дом'},{word:'Дерево',meaning:'дерево'}]},
    {letter:'Е',sound:'ye',name:'Е (е)',image:'🦔',examples:[{word:'Ежик',meaning:'ёж'},{word:'Ель',meaning:'ель'}]},
    {letter:'Ё',sound:'yo',name:'Ё (ё)',image:'🎄',examples:[{word:'Ёж',meaning:'ёж'},{word:'Ёлка',meaning:'ёлка'}]},
    {letter:'Ж',sound:'zh',name:'ЖЭ (ж)',image:'🪲',examples:[{word:'Жук',meaning:'жук'},{word:'Жираф',meaning:'жираф'}]},
    {letter:'З',sound:'z',name:'ЗЭ (з)',image:'🐰',examples:[{word:'Заяц',meaning:'заяц'},{word:'Зима',meaning:'зима'}]},
    {letter:'И',sound:'i',name:'И (и)',image:'🧵',examples:[{word:'Иголка',meaning:'иголка'},{word:'Ирис',meaning:'ирис'}]},
    {letter:'Й',sound:'y',name:'Й (й)',image:'🥼',examples:[{word:'Йод',meaning:'йод'},{word:'Май',meaning:'май'}]},
    {letter:'К',sound:'k',name:'КА (к)',image:'🐱',examples:[{word:'Кот',meaning:'кот'},{word:'Книга',meaning:'книга'}]},
    {letter:'Л',sound:'l',name:'ЭЛЬ (л)',image:'🦁',examples:[{word:'Лев',meaning:'лев'},{word:'Луна',meaning:'луна'}]},
    {letter:'М',sound:'m',name:'ЭМ (м)',image:'👩',examples:[{word:'Мама',meaning:'мама'},{word:'Мяч',meaning:'мяч'}]},
    {letter:'Н',sound:'n',name:'ЭН (н)',image:'👃',examples:[{word:'Нос',meaning:'нос'},{word:'Нога',meaning:'нога'}]},
    {letter:'О',sound:'o',name:'О (о)',image:'🥒',examples:[{word:'Огурец',meaning:'огурец'},{word:'Озеро',meaning:'озеро'}]},
    {letter:'П',sound:'p',name:'ПЭ (п)',image:'🐼',examples:[{word:'Папа',meaning:'папа'},{word:'Птица',meaning:'птица'}]},
    {letter:'Р',sound:'r',name:'ЭР (р)',image:'🐟',examples:[{word:'Рыба',meaning:'рыба'},{word:'Роза',meaning:'роза'}]},
    {letter:'С',sound:'s',name:'ЭС (с)',image:'🐍',examples:[{word:'Слон',meaning:'слон'},{word:'Солнце',meaning:'солнце'}]},
    {letter:'Т',sound:'t',name:'ТЭ (т)',image:'🐯',examples:[{word:'Тигр',meaning:'тигр'},{word:'Туча',meaning:'туча'}]},
    {letter:'У',sound:'u',name:'У (у)',image:'☂️',examples:[{word:'Утка',meaning:'утка'},{word:'Улица',meaning:'улица'}]},
    {letter:'Ф',sound:'f',name:'ЭФ (ф)',image:'🐟',examples:[{word:'Флаг',meaning:'флаг'},{word:'Фрукт',meaning:'фрукт'}]},
    {letter:'Х',sound:'kh',name:'ХА (х)',image:'🐴',examples:[{word:'Хлеб',meaning:'хлеб'},{word:'Хомяк',meaning:'хомяк'}]},
    {letter:'Ц',sound:'ts',name:'ЦЭ (ц)',image:'🌸',examples:[{word:'Цветок',meaning:'цветок'},{word:'Цапля',meaning:'цапля'}]},
    {letter:'Ч',sound:'ch',name:'ЧЕ (ч)',image:'🐱',examples:[{word:'Чайник',meaning:'чайник'},{word:'Часы',meaning:'часы'}]},
    {letter:'Ш',sound:'sh',name:'ША (ш)',image:'🐍',examples:[{word:'Шапка',meaning:'шапка'},{word:'Школа',meaning:'школа'}]},
    {letter:'Щ',sound:'shch',name:'ЩА (щ)',image:'🥣',examples:[{word:'Щи',meaning:'щи'},{word:'Щука',meaning:'щука'}]},
    {letter:'Ъ',sound:'hard sign',name:'Ъ твёрдый',image:'🚪',examples:[{word:'Съезд',meaning:'съезд'},{word:'Объект',meaning:'объект'}]},
    {letter:'Ы',sound:'y',name:'Ы (ы)',image:'🧀',examples:[{word:'Рыба',meaning:'рыба'},{word:'Сыр',meaning:'сыр'}]},
    {letter:'Ь',sound:'soft sign',name:'Ь мягкий',image:'🧸',examples:[{word:'Соль',meaning:'соль'},{word:'Боль',meaning:'боль'}]},
    {letter:'Э',sound:'e',name:'Э (э)',image:'🔊',examples:[{word:'Экран',meaning:'экран'},{word:'Эхо',meaning:'эхо'}]},
    {letter:'Ю',sound:'yu',name:'Ю (ю)',image:'🐪',examples:[{word:'Юла',meaning:'юла'},{word:'Юмор',meaning:'юмор'}]},
    {letter:'Я',sound:'ya',name:'Я (я)',image:'🍎',examples:[{word:'Яблоко',meaning:'яблоко'},{word:'Ягода',meaning:'ягода'}]}
  ],
  'en': [
    {letter:'A',sound:'eɪ',name:'A (ay)',image:'🍎',examples:[{word:'Apple',meaning:'яблоко'},{word:'Animal',meaning:'животное'}]},
    {letter:'B',sound:'biː',name:'B (bee)',image:'⚽',examples:[{word:'Ball',meaning:'мяч'},{word:'Bear',meaning:'медведь'}]},
    {letter:'C',sound:'siː',name:'C (see)',image:'🐱',examples:[{word:'Cat',meaning:'кот'},{word:'Car',meaning:'машина'}]},
    {letter:'D',sound:'diː',name:'D (dee)',image:'🐶',examples:[{word:'Dog',meaning:'собака'},{word:'Door',meaning:'дверь'}]},
    {letter:'E',sound:'iː',name:'E (ee)',image:'🐘',examples:[{word:'Elephant',meaning:'слон'},{word:'Earth',meaning:'земля'}]},
    {letter:'F',sound:'ɛf',name:'F (ef)',image:'🐟',examples:[{word:'Fish',meaning:'рыба'},{word:'Flower',meaning:'цветок'}]},
    {letter:'G',sound:'dʒiː',name:'G (gee)',image:'🐐',examples:[{word:'Goat',meaning:'коза'},{word:'Green',meaning:'зелёный'}]},
    {letter:'H',sound:'eɪtʃ',name:'H (aitch)',image:'🏠',examples:[{word:'House',meaning:'дом'},{word:'Heart',meaning:'сердце'}]},
    {letter:'I',sound:'aɪ',name:'I (eye)',image:'🧊',examples:[{word:'Ice',meaning:'лёд'},{word:'Island',meaning:'остров'}]},
    {letter:'J',sound:'dʒeɪ',name:'J (jay)',image:'🦘',examples:[{word:'Jump',meaning:'прыжок'},{word:'Jungle',meaning:'джунгли'}]},
    {letter:'K',sound:'keɪ',name:'K (kay)',image:'🐨',examples:[{word:'Kite',meaning:'змей'},{word:'King',meaning:'король'}]},
    {letter:'L',sound:'ɛl',name:'L (el)',image:'🦁',examples:[{word:'Lion',meaning:'лев'},{word:'Love',meaning:'любовь'}]},
    {letter:'M',sound:'ɛm',name:'M (em)',image:'🌙',examples:[{word:'Moon',meaning:'луна'},{word:'Mother',meaning:'мать'}]},
    {letter:'N',sound:'ɛn',name:'N (en)',image:'🌙',examples:[{word:'Night',meaning:'ночь'},{word:'Nature',meaning:'природа'}]},
    {letter:'O',sound:'oʊ',name:'O (oh)',image:'🧡',examples:[{word:'Orange',meaning:'апельсин'},{word:'Ocean',meaning:'океан'}]},
    {letter:'P',sound:'piː',name:'P (pee)',image:'🐼',examples:[{word:'Panda',meaning:'панда'},{word:'Park',meaning:'парк'}]},
    {letter:'Q',sound:'kjuː',name:'Q (cue)',image:'👸',examples:[{word:'Queen',meaning:'королева'},{word:'Quick',meaning:'быстрый'}]},
    {letter:'R',sound:'ɑːr',name:'R (ar)',image:'🐰',examples:[{word:'Rabbit',meaning:'кролик'},{word:'Rain',meaning:'дождь'}]},
    {letter:'S',sound:'ɛs',name:'S (es)',image:'⭐',examples:[{word:'Star',meaning:'звезда'},{word:'Sun',meaning:'солнце'}]},
    {letter:'T',sound:'tiː',name:'T (tee)',image:'🐯',examples:[{word:'Tiger',meaning:'тигр'},{word:'Tree',meaning:'дерево'}]},
    {letter:'U',sound:'juː',name:'U (you)',image:'☂️',examples:[{word:'Umbrella',meaning:'зонт'},{word:'Universe',meaning:'вселенная'}]},
    {letter:'V',sound:'viː',name:'V (vee)',image:'🎻',examples:[{word:'Violin',meaning:'скрипка'},{word:'Village',meaning:'деревня'}]},
    {letter:'W',sound:'dʌbljuː',name:'W (double-u)',image:'🌊',examples:[{word:'Water',meaning:'вода'},{word:'Wind',meaning:'ветер'}]},
    {letter:'X',sound:'ɛks',name:'X (ex)',image:'🎹',examples:[{word:'Xylophone',meaning:'ксилофон'},{word:'X-ray',meaning:'рентген'}]},
    {letter:'Y',sound:'waɪ',name:'Y (why)',image:'🌼',examples:[{word:'Yellow',meaning:'жёлтый'},{word:'Year',meaning:'год'}]},
    {letter:'Z',sound:'zɛd',name:'Z (zed)',image:'🦓',examples:[{word:'Zebra',meaning:'зебра'},{word:'Zero',meaning:'ноль'}]}
  ],
  'tg': [
    {letter:'А',sound:'a',name:'А (a)',image:'🍎',examples:[{word:'Аб (ab)',meaning:'вода'},{word:'Асп (asp)',meaning:'лошадь'}]},
    {letter:'Б',sound:'b',name:'Б (b)',image:'⚽',examples:[{word:'Бача (bacha)',meaning:'мальчик'},{word:'Боғ (bogh)',meaning:'сад'}]},
    {letter:'В',sound:'v',name:'В (v)',image:'🎻',examples:[{word:'Ватан (vatan)',meaning:'родина'},{word:'Ва (va)',meaning:'и'}]},
    {letter:'Г',sound:'g',name:'Г (g)',image:'🐐',examples:[{word:'Гул (gul)',meaning:'цветок'},{word:'Гап (gap)',meaning:'разговор'}]},
    {letter:'Д',sound:'d',name:'Д (d)',image:'🐶',examples:[{word:'Дар (dar)',meaning:'дверь'},{word:'Дӯст (dust)',meaning:'друг'}]},
    {letter:'Е',sound:'e',name:'Е (e)',image:'🐘',examples:[{word:'Ер (yer)',meaning:'земля'},{word:'Ед (yed)',meaning:'один'}]},
    {letter:'З',sound:'z',name:'З (z)',image:'🦓',examples:[{word:'Зан (zan)',meaning:'женщина'},{word:'Замин (zamin)',meaning:'земля'}]},
    {letter:'И',sound:'i',name:'И (i)',image:'🧊',examples:[{word:'Ид (id)',meaning:'праздник'},{word:'Илм (ilm)',meaning:'наука'}]},
    {letter:'К',sound:'k',name:'К (k)',image:'🐨',examples:[{word:'Китоб (kitob)',meaning:'книга'},{word:'Кам (kam)',meaning:'мало'}]},
    {letter:'Л',sound:'l',name:'Л (l)',image:'🦁',examples:[{word:'Лаб (lab)',meaning:'губа'},{word:'Лола (lola)',meaning:'тюльпан'}]},
    {letter:'М',sound:'m',name:'М (m)',image:'🐒',examples:[{word:'Ман (man)',meaning:'я'},{word:'Меҳр (mehr)',meaning:'любовь'}]},
    {letter:'Н',sound:'n',name:'Н (n)',image:'🦉',examples:[{word:'Нон (non)',meaning:'хлеб'},{word:'Нам (nam)',meaning:'влажный'}]},
    {letter:'О',sound:'o',name:'О (o)',image:'🧡',examples:[{word:'Одам (odam)',meaning:'человек'},{word:'Орзу (orzu)',meaning:'мечта'}]},
    {letter:'П',sound:'p',name:'П (p)',image:'🐼',examples:[{word:'Падар (padar)',meaning:'отец'},{word:'Пул (pul)',meaning:'деньги'}]},
    {letter:'Р',sound:'r',name:'Р (r)',image:'🐰',examples:[{word:'Ранг (rang)',meaning:'цвет'},{word:'Рӯз (ruz)',meaning:'день'}]},
    {letter:'С',sound:'s',name:'С (s)',image:'🐍',examples:[{word:'Сабз (sabz)',meaning:'зелёный'},{word:'Салом (salom)',meaning:'привет'}]},
    {letter:'Т',sound:'t',name:'Т (t)',image:'🐯',examples:[{word:'Тан (tan)',meaning:'тело'},{word:'Тош (tosh)',meaning:'камень'}]},
    {letter:'У',sound:'u',name:'У (u)',image:'☂️',examples:[{word:'Умр (umr)',meaning:'жизнь'},{word:'Уй (uy)',meaning:'дом'}]},
    {letter:'Х',sound:'kh',name:'Х (kh)',image:'🐴',examples:[{word:'Хона (khona)',meaning:'дом'},{word:'Халқ (khalq)',meaning:'народ'}]},
    {letter:'Ч',sound:'ch',name:'Ч (ch)',image:'🐱',examples:[{word:'Чор (chor)',meaning:'четыре'},{word:'Чой (choy)',meaning:'чай'}]},
    {letter:'Ш',sound:'sh',name:'Ш (sh)',image:'🌊',examples:[{word:'Шаҳр (shahr)',meaning:'город'},{word:'Шам (sham)',meaning:'свеча'}]}
  ],
  'es': [
    {letter:'A',sound:'a',name:'A (a)',image:'🍎',examples:[{word:'Árbol',meaning:'дерево'},{word:'Amigo',meaning:'друг'}]},
    {letter:'B',sound:'be',name:'B (be)',image:'⚽',examples:[{word:'Bola',meaning:'мяч'},{word:'Bueno',meaning:'хорошо'}]},
    {letter:'C',sound:'se/ke',name:'C (ce)',image:'🐱',examples:[{word:'Casa',meaning:'дом'},{word:'Cielo',meaning:'небо'}]},
    {letter:'D',sound:'de',name:'D (de)',image:'🐶',examples:[{word:'Día',meaning:'день'},{word:'Dios',meaning:'бог'}]},
    {letter:'E',sound:'e',name:'E (e)',image:'🐘',examples:[{word:'Elefante',meaning:'слон'},{word:'Escuela',meaning:'школа'}]},
    {letter:'F',sound:'efe',name:'F (efe)',image:'🐟',examples:[{word:'Flor',meaning:'цветок'},{word:'Fuego',meaning:'огонь'}]},
    {letter:'G',sound:'ge/je',name:'G (ge)',image:'🐐',examples:[{word:'Gato',meaning:'кот'},{word:'Grande',meaning:'большой'}]},
    {letter:'H',sound:'(silent)',name:'H (hache)',image:'🏠',examples:[{word:'Hombre',meaning:'мужчина'},{word:'Hora',meaning:'час'}]},
    {letter:'I',sound:'i',name:'I (i)',image:'🧊',examples:[{word:'Isla',meaning:'остров'},{word:'Igual',meaning:'равный'}]},
    {letter:'J',sound:'x',name:'J (jota)',image:'🐆',examples:[{word:'Jardín',meaning:'сад'},{word:'Jugar',meaning:'играть'}]},
    {letter:'L',sound:'ele',name:'L (ele)',image:'🦁',examples:[{word:'Luna',meaning:'луна'},{word:'Libro',meaning:'книга'}]},
    {letter:'M',sound:'eme',name:'M (eme)',image:'🐒',examples:[{word:'Mamá',meaning:'мама'},{word:'Mesa',meaning:'стол'}]},
    {letter:'N',sound:'ene',name:'N (ene)',image:'🦉',examples:[{word:'Naranja',meaning:'апельсин'},{word:'Niño',meaning:'мальчик'}]},
    {letter:'Ñ',sound:'enye',name:'Ñ (eñe)',image:'🦋',examples:[{word:'Niño',meaning:'ребёнок'},{word:'Español',meaning:'испанский'}]},
    {letter:'O',sound:'o',name:'O (o)',image:'🧡',examples:[{word:'Oso',meaning:'медведь'},{word:'Ojo',meaning:'глаз'}]},
    {letter:'P',sound:'pe',name:'P (pe)',image:'🐼',examples:[{word:'Perro',meaning:'собака'},{word:'Pan',meaning:'хлеб'}]},
    {letter:'R',sound:'ere/erre',name:'R (erre)',image:'🐰',examples:[{word:'Rosa',meaning:'роза'},{word:'Rojo',meaning:'красный'}]},
    {letter:'S',sound:'ese',name:'S (ese)',image:'🐍',examples:[{word:'Sol',meaning:'солнце'},{word:'Silla',meaning:'стул'}]},
    {letter:'T',sound:'te',name:'T (te)',image:'🐯',examples:[{word:'Tigre',meaning:'тигр'},{word:'Taza',meaning:'чашка'}]},
    {letter:'U',sound:'u',name:'U (u)',image:'☂️',examples:[{word:'Uno',meaning:'один'},{word:'Uva',meaning:'виноград'}]},
    {letter:'V',sound:'uve',name:'V (uve)',image:'🎻',examples:[{word:'Vaca',meaning:'корова'},{word:'Verde',meaning:'зелёный'}]},
    {letter:'Z',sound:'zeta/seta',name:'Z (zeta)',image:'🦓',examples:[{word:'Zapato',meaning:'ботинок'},{word:'Zorro',meaning:'лиса'}]}
  ],
  'fr': [
    {letter:'A',sound:'a',name:'A (a)',image:'🍎',examples:[{word:'Ami',meaning:'друг'},{word:'Arbre',meaning:'дерево'}]},
    {letter:'B',sound:'be',name:'B (bé)',image:'⚽',examples:[{word:'Bébé',meaning:'малыш'},{word:'Bonjour',meaning:'здравствуйте'}]},
    {letter:'C',sound:'se/ke',name:'C (cé)',image:'🐱',examples:[{word:'Chat',meaning:'кот'},{word:'Chien',meaning:'собака'}]},
    {letter:'D',sound:'de',name:'D (dé)',image:'🐶',examples:[{word:'Dame',meaning:'дама'},{word:'Droit',meaning:'право'}]},
    {letter:'E',sound:'ə',name:'E (e)',image:'🐘',examples:[{word:'École',meaning:'школа'},{word:'Étoile',meaning:'звезда'}]},
    {letter:'F',sound:'ɛf',name:'F (effe)',image:'🐟',examples:[{word:'Fleur',meaning:'цветок'},{word:'Frère',meaning:'брат'}]},
    {letter:'G',sound:'ʒe/ge',name:'G (gé)',image:'🐐',examples:[{word:'Garçon',meaning:'мальчик'},{word:'Grand',meaning:'большой'}]},
    {letter:'L',sound:'ɛl',name:'L (elle)',image:'🦁',examples:[{word:'Lune',meaning:'луна'},{word:'Livre',meaning:'книга'}]},
    {letter:'M',sound:'ɛm',name:'M (emme)',image:'🐒',examples:[{word:'Maman',meaning:'мама'},{word:'Maison',meaning:'дом'}]},
    {letter:'N',sound:'ɛn',name:'N (enne)',image:'🦉',examples:[{word:'Neige',meaning:'снег'},{word:'Nuit',meaning:'ночь'}]},
    {letter:'O',sound:'o',name:'O (o)',image:'🧡',examples:[{word:'Oiseau',meaning:'птица'},{word:'Orange',meaning:'апельсин'}]},
    {letter:'P',sound:'pe',name:'P (pé)',image:'🐼',examples:[{word:'Papa',meaning:'папа'},{word:'Pain',meaning:'хлеб'}]},
    {letter:'R',sound:'ɛʁ',name:'R (erre)',image:'🐰',examples:[{word:'Rouge',meaning:'красный'},{word:'Rose',meaning:'роза'}]},
    {letter:'S',sound:'ɛs',name:'S (esse)',image:'🐍',examples:[{word:'Soleil',meaning:'солнце'},{word:'Souris',meaning:'мышь'}]},
    {letter:'T',sound:'te',name:'T (té)',image:'🐯',examples:[{word:'Table',meaning:'стол'},{word:'Tigre',meaning:'тигр'}]},
    {letter:'V',sound:'ve',name:'V (vé)',image:'🎻',examples:[{word:'Vert',meaning:'зелёный'},{word:'Voiture',meaning:'машина'}]},
    {letter:'Z',sound:'zɛd',name:'Z (zède)',image:'🦓',examples:[{word:'Zèbre',meaning:'зебра'},{word:'Zoo',meaning:'зоопарк'}]}
  ]
};

// ================================================================
// GAME VOCABULARY
// ================================================================
const gameVocabulary = {
  'ru': {
    syllables:[
      {word:'ма-ма',hint:'Мама'},{word:'па-па',hint:'Папа'},{word:'ба-нан',hint:'Банан'},
      {word:'до-мик',hint:'Домик'},{word:'ко-тик',hint:'Котик'},{word:'во-да',hint:'Вода'},
      {word:'лу-на',hint:'Луна'},{word:'де-ре-во',hint:'Дерево'},{word:'ма-ши-на',hint:'Машина'},
      {word:'ра-ке-та',hint:'Ракета'},{word:'рыб-ка',hint:'Рыбка'},{word:'птич-ка',hint:'Птичка'},
      {word:'цве-ток',hint:'Цветок'},{word:'ли-сич-ка',hint:'Лисичка'},{word:'со-лнце',hint:'Солнце'}
    ],
    words:['мама','папа','дом','кот','лев','вода','луна','рыба','птица','мяч','нос','рот','сон','лес','река'],
    sentences:[
      {sentence:'Мама дома',words:['Мама','дома']},
      {sentence:'Папа и мама',words:['Папа','и','мама']},
      {sentence:'Вода в чашке',words:['Вода','в','чашке']},
      {sentence:'Кот на диване',words:['Кот','на','диване']},
      {sentence:'Солнце светит ярко',words:['Солнце','светит','ярко']},
      {sentence:'Это моя книга',words:['Это','моя','книга']}
    ]
  },
  'en': {
    syllables:[
      {word:'ap-ple',hint:'Apple 🍎'},{word:'wa-ter',hint:'Water 💧'},{word:'but-ter',hint:'Butter'},
      {word:'win-dow',hint:'Window'},{word:'pur-ple',hint:'Purple'},{word:'tur-tle',hint:'Turtle 🐢'},
      {word:'mom',hint:'Mom'},{word:'dad',hint:'Dad'},{word:'cat',hint:'Cat 🐱'},
      {word:'sun',hint:'Sun ☀️'},{word:'star',hint:'Star ⭐'},{word:'fish',hint:'Fish 🐟'}
    ],
    words:['mom','dad','cat','dog','sun','moon','star','fish','bird','tree','house','ball','book','apple','water'],
    sentences:[
      {sentence:'Mom is home',words:['Mom','is','home']},
      {sentence:'The cat is here',words:['The','cat','is','here']},
      {sentence:'A dog is big',words:['A','dog','is','big']},
      {sentence:'The sun is bright',words:['The','sun','is','bright']},
      {sentence:'I love to read books',words:['I','love','to','read','books']}
    ]
  },
  'tg': {
    syllables:[
      {word:'ма-ма',hint:'мама'},{word:'па-па',hint:'папа'},{word:'ки-тоб',hint:'китоб'},
      {word:'қа-лам',hint:'қалам'},{word:'о-фтоб',hint:'офтоб'},{word:'хо-на',hint:'хона'}
    ],
    words:['ман','ту','мама','папа','китоб','қалам','хона','об','офтоб'],
    sentences:[
      {sentence:'Ман дар хона',words:['Ман','дар','хона']},
      {sentence:'Ту китоб хони',words:['Ту','китоб','хони']},
      {sentence:'Вай хуб аст',words:['Вай','хуб','аст']}
    ]
  },
  'es': {
    syllables:[
      {word:'ma-má',hint:'Mamá'},{word:'pa-pá',hint:'Papá'},{word:'pe-rro',hint:'Perro 🐶'},
      {word:'ga-to',hint:'Gato 🐱'},{word:'ca-sa',hint:'Casa 🏠'},{word:'li-bro',hint:'Libro 📚'}
    ],
    words:['gato','perro','casa','libro','agua','sol','luna','árbol','flor'],
    sentences:[
      {sentence:'El gato es blanco',words:['El','gato','es','blanco']},
      {sentence:'La casa es grande',words:['La','casa','es','grande']},
      {sentence:'Yo soy estudiante',words:['Yo','soy','estudiante']}
    ]
  },
  'fr': {
    syllables:[
      {word:'ma-man',hint:'Maman'},{word:'pa-pa',hint:'Papa'},{word:'ma-i-son',hint:'Maison 🏠'},
      {word:'oi-seau',hint:'Oiseau 🐦'},{word:'é-to-ile',hint:'Étoile ⭐'}
    ],
    words:['chat','chien','maison','soleil','lune','eau','arbre','fleur'],
    sentences:[
      {sentence:'Le chat est blanc',words:['Le','chat','est','blanc']},
      {sentence:'La maison est grande',words:['La','maison','est','grande']},
      {sentence:'Je suis étudiant',words:['Je','suis','étudiant']}
    ]
  }
};

// ================================================================
// PROGRESS SYSTEM
// ================================================================
class ProgressSystem {
  constructor() {
    this.completed = this._load('completedLetters', {});
    this.userScore = this._load('userScore', 0);
    this.stats = this._load('appStats', {});
    this.streak = this._load('streak', {count:0,lastDate:null});
  }

  _load(key, def) {
    try { return JSON.parse(localStorage.getItem(key)) ?? def; }
    catch { return def; }
  }

  _save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  }

  getLetterStatus(lang, letter) {
    const alphabet = alphabets[lang] || [];
    const idx = alphabet.findIndex(a => a.letter === letter);
    if (idx === -1) return 'locked';
    if (idx === 0) return this.completed[lang]?.includes(letter) ? 'completed' : 'unlocked';
    if (this.completed[lang]?.includes(letter)) return 'completed';
    const prevLetter = alphabet[idx - 1].letter;
    return this.completed[lang]?.includes(prevLetter) ? 'unlocked' : 'locked';
  }

  markLetterComplete(lang, letter) {
    if (!this.completed[lang]) this.completed[lang] = [];
    if (!this.completed[lang].includes(letter)) {
      this.completed[lang].push(letter);
      this._save('completedLetters', this.completed);
      return true; // newly completed
    }
    return false;
  }

  getCompletedLetters(lang) { return this.completed[lang] || []; }

  addScore(points) {
    this.userScore += points;
    this._save('userScore', this.userScore);
  }

  updateStreak() {
    const today = new Date().toDateString();
    if (this.streak.lastDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (this.streak.lastDate === yesterday) {
      this.streak.count++;
    } else {
      this.streak.count = 1;
    }
    this.streak.lastDate = today;
    this._save('streak', this.streak);
  }

  getUserLevel() {
    const levels = [
      {min:0,   max:99,  name:'Новичок',    badge:'🌱', color:'#6c63ff'},
      {min:100, max:299, name:'Ученик',      badge:'📖', color:'#10b981'},
      {min:300, max:599, name:'Знаток',      badge:'🎓', color:'#f59e0b'},
      {min:600, max:999, name:'Мастер',      badge:'🏆', color:'#ef4444'},
      {min:1000,max:Infinity,name:'Эксперт',badge:'⭐', color:'#a78bfa'}
    ];
    return levels.find(l => this.userScore >= l.min && this.userScore <= l.max) || levels[0];
  }

  getStatForLang(lang) {
    return this.stats[lang] || {correct:0, attempts:0, lessonsCompleted:0};
  }

  saveStatForLang(lang, data) {
    this.stats[lang] = { ...this.getStatForLang(lang), ...data };
    this._save('appStats', this.stats);
  }
}

const progress = new ProgressSystem();

// ================================================================
// GLOBALS
// ================================================================
let currentLanguage = localStorage.getItem('currentLang') || 'ru';
let current = 0, answers = [], currentTasks = [], currentLesson = null;
let correctCount = 0, totalAttempts = 0, lessonMode = false;
let currentLetterIdx = 0;
let wordBuildingStreak = 0;
let currentQuizIdx = 0, quizScore = 0, quizQuestions = [];
let mediaRecorder = null, audioChunks = [];
let lastTaskSet = [];

function getLangData() { return languages[currentLanguage] || languages['ru']; }

function getLangCode() {
  const map = {ru:'ru-RU',en:'en-US',tg:'tg',es:'es-ES',fr:'fr-FR'};
  return map[currentLanguage] || 'ru-RU';
}

// ================================================================
// UI HELPERS
// ================================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });
  const el = document.getElementById(id);
  if (el) { el.style.display = 'block'; el.classList.add('active'); }
  window.scrollTo(0,0);
}

function showToast(msg, duration = 2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function showScoreBadge(msg) {
  const popup = document.getElementById('scorePopup');
  const badge = document.createElement('div');
  badge.className = 'score-badge';
  badge.textContent = msg;
  popup.appendChild(badge);
  setTimeout(() => badge.remove(), 2400);
}

// ================================================================
// MENU & LANGUAGE SELECT
// ================================================================
function goMenu() {
  showScreen('menu');
  refreshMenu();
}

function refreshMenu() {
  // Score pill
  document.getElementById('scorePill').textContent = `⭐ ${progress.userScore}`;

  // Top lang icon
  const lang = languages[currentLanguage];
  document.getElementById('topLangIcon').textContent = lang ? lang.icon : '🌍';

  // Level card
  const level = progress.getUserLevel();
  document.getElementById('levelBadge').textContent = level.badge;
  document.getElementById('levelName').textContent = level.name;
  
  const levels = [0, 100, 300, 600, 1000];
  const lvlIdx = [0,100,300,600,1000].findIndex(l => progress.userScore < l) - 1;
  const curLvlMin = levels[Math.max(0,lvlIdx)] || 1000;
  const nextLvlMin = levels[Math.min(4,lvlIdx+1)] || 1500;
  const pct = Math.min(100, Math.round((progress.userScore - curLvlMin) / (nextLvlMin - curLvlMin) * 100));
  document.getElementById('xpFill').style.width = pct + '%';
  document.getElementById('levelXP').textContent = `${progress.userScore} / ${nextLvlMin} XP`;

  // Streak
  const streakRow = document.getElementById('streakRow');
  streakRow.innerHTML = `
    <span class="streak-badge">🔥 ${progress.streak.count} дней подряд</span>
    <span class="streak-badge">🌍 ${lang?.name || 'Язык'}</span>
  `;

  // Stats
  const s = progress.getStatForLang(currentLanguage);
  const pctCorrect = s.attempts > 0 ? Math.round(s.correct/s.attempts*100) : 0;
  const completed = progress.getCompletedLetters(currentLanguage).length;
  const totalLetters = (alphabets[currentLanguage] || []).length;
  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card"><div class="stat-value">${completed}/${totalLetters}</div><div class="stat-label">Букв</div></div>
    <div class="stat-card"><div class="stat-value">${pctCorrect}%</div><div class="stat-label">Точность</div></div>
    <div class="stat-card"><div class="stat-value">${s.attempts}</div><div class="stat-label">Заданий</div></div>
  `;
}

function showLanguageSelect() {
  showScreen('languageSelect');
  const list = document.getElementById('languageList');
  list.innerHTML = '';
  Object.keys(languages).forEach(code => {
    const lang = languages[code];
    const card = document.createElement('div');
    card.className = 'lang-card' + (code === currentLanguage ? ' active' : '');
    card.innerHTML = `<div class="lang-flag">${lang.icon}</div><div class="lang-name">${lang.name}</div>`;
    card.onclick = () => selectLanguage(code);
    list.appendChild(card);
  });
}

function selectLanguage(code) {
  currentLanguage = code;
  localStorage.setItem('currentLang', code);
  goMenu();
  showToast(`Язык изменён: ${languages[code].name}`);
}

// ================================================================
// ALPHABET
// ================================================================
function goAlphabet() {
  showScreen('alphabet');
  renderAlphabet();
}

function renderAlphabet() {
  const alph = alphabets[currentLanguage] || [];
  const completed = progress.getCompletedLetters(currentLanguage);
  const grid = document.getElementById('alphabetGrid');
  grid.innerHTML = '';

  const doneCount = completed.length;
  const total = alph.length;
  document.getElementById('alphProgFill').style.width = (doneCount / total * 100) + '%';
  document.getElementById('alphStats').textContent = `Пройдено: ${doneCount} из ${total} букв`;

  alph.forEach((item, idx) => {
    const status = progress.getLetterStatus(currentLanguage, item.letter);
    const btn = document.createElement('button');
    btn.className = 'letter-btn ' + (status === 'completed' ? 'completed' : status === 'locked' ? 'locked' : '');
    btn.dataset.letter = item.letter;

    if (status === 'completed') {
      btn.innerHTML = `${item.letter}<span class="letter-check">✓</span>`;
    } else {
      btn.textContent = item.letter;
    }

    btn.onclick = () => { if (status !== 'locked') showLetter(idx); };
    grid.appendChild(btn);
  });
}

function showLetter(idx) {
  const item = alphabets[currentLanguage][idx];
  currentLetterIdx = idx;
  showScreen('letterCard');

  document.getElementById('letterDisplay').textContent = item.letter;
  document.getElementById('letterImage').textContent = item.image;
  document.getElementById('letterName').textContent = item.name;
  document.getElementById('letterSound').textContent = '/' + item.sound + '/';

  // Nav
  const alph = alphabets[currentLanguage];
  document.getElementById('letterNavPos').textContent = `${idx+1} / ${alph.length}`;
  document.getElementById('prevLetterBtn').disabled = idx === 0;
  document.getElementById('nextLetterBtn').disabled = idx === alph.length - 1;

  // Examples
  const exDiv = document.getElementById('examplesDiv');
  exDiv.innerHTML = (item.examples || []).map(ex =>
    `<div class="example-word"><span class="word">${ex.word}</span><span class="meaning">${ex.meaning}</span></div>`
  ).join('');

  // Reset recording UI
  document.getElementById('recordBtn').style.display = 'inline-block';
  document.getElementById('stopBtn').style.display = 'none';
  document.getElementById('recordingResult').style.display = 'none';
}

function navigateLetter(dir) {
  const alph = alphabets[currentLanguage];
  let newIdx = currentLetterIdx + dir;
  newIdx = Math.max(0, Math.min(alph.length - 1, newIdx));
  // Skip locked
  while (dir > 0 && newIdx < alph.length - 1 && progress.getLetterStatus(currentLanguage, alph[newIdx].letter) === 'locked') newIdx++;
  while (dir < 0 && newIdx > 0 && progress.getLetterStatus(currentLanguage, alph[newIdx].letter) === 'locked') newIdx--;
  showLetter(newIdx);
}

window.markLetterComplete = function(lang, letter) {
  const isNew = progress.markLetterComplete(lang, letter);
  if (isNew) {
    progress.addScore(10);
    showScoreBadge('✅ Буква пройдена! +10');
    refreshMenu();
    // Refresh alphabet if visible
    const alphScreen = document.getElementById('alphabet');
    if (alphScreen && alphScreen.style.display !== 'none') renderAlphabet();
  } else {
    showToast('Уже пройдено!');
  }
  // Unlock next letter indicator
  const alph = alphabets[lang] || [];
  const idx = alph.findIndex(a => a.letter === letter);
  const nextLetter = alph[idx + 1];
  if (nextLetter) showToast(`🔓 Открыта следующая буква: ${nextLetter.letter}`);
};

function playLetterSound() {
  const item = alphabets[currentLanguage][currentLetterIdx];
  if (!item || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(item.letter);
  u.lang = getLangCode();
  u.rate = 0.8;
  u.pitch = 1.0;
  speechSynthesis.speak(u);
}

async function startRecording() {
  try {
    audioChunks = [];
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
    mediaRecorder.onstop = () => {
      document.getElementById('stopBtn').style.display = 'none';
      document.getElementById('recordBtn').style.display = 'inline-block';
      recognizeRecording();
      stream.getTracks().forEach(t => t.stop());
    };
    mediaRecorder.start();
    document.getElementById('recordBtn').style.display = 'none';
    document.getElementById('stopBtn').style.display = 'inline-block';
  } catch(e) {
    showToast('⚠️ Нет доступа к микрофону');
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
}

function recognizeRecording() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) { showToast('Ваш браузер не поддерживает распознавание речи'); return; }

  const rec = new SpeechRec();
  rec.lang = getLangCode();
  rec.continuous = false;
  rec.interimResults = false;

  const item = alphabets[currentLanguage][currentLetterIdx];
  const resultDiv = document.getElementById('recordingResult');
  const resultText = document.getElementById('resultText');

  rec.onresult = e => {
    const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
    const isCorrect = transcript.toLowerCase().includes(item.letter.toLowerCase()) ||
                      transcript.toLowerCase().includes(item.sound.toLowerCase());
    resultDiv.style.display = 'block';
    resultDiv.className = 'recording-result ' + (isCorrect ? 'success' : 'error');
    if (isCorrect) {
      resultText.innerHTML = `✅ Отлично! Произнесено: «${transcript}»`;
      progress.addScore(5);
      showScoreBadge('🎤 Хорошее произношение! +5');
    } else {
      resultText.innerHTML = `❌ Услышано: «${transcript}». Ожидалось: «${item.letter}» [${item.sound}]`;
    }
  };

  rec.onerror = e => {
    resultDiv.style.display = 'block';
    resultDiv.className = 'recording-result error';
    resultText.textContent = `⚠️ Ошибка: ${e.error}. Говорите чётче.`;
  };

  rec.start();
}

// ================================================================
// LESSONS
// ================================================================
function goLessons() {
  showScreen('lessons');
  const list = document.getElementById('lessonsList');
  list.innerHTML = '';
  const lessons = getLangData().lessons || [];
  lessons.forEach(lesson => {
    const item = document.createElement('div');
    item.className = 'lesson-item';
    item.innerHTML = `
      <div class="lesson-icon">${lesson.icon}</div>
      <div class="lesson-info">
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-meta">${lesson.tasks.length} упражнений</div>
      </div>
      <div class="lesson-arrow">›</div>
    `;
    item.onclick = () => showTheory(lesson.id);
    list.appendChild(item);
  });
}

function showTheory(lessonId) {
  currentLesson = getLangData().lessons.find(l => l.id === lessonId);
  showScreen('theory-view');
  document.getElementById('theoryTitle').textContent = currentLesson.title;
  document.getElementById('theoryContent').innerHTML = currentLesson.theory;
}

function startLesson() {
  current = 0; answers = []; lessonMode = true;
  currentTasks = (currentLesson?.tasks || []).slice();
  lastTaskSet = currentTasks;
  loadStats();
  showScreen('game');
  loadTask();
}

// ================================================================
// TRAINING
// ================================================================
function start(difficulty) {
  current = 0; answers = []; lessonMode = false;
  let tasks = getLangData().tasks || [];
  if (difficulty !== 'all') tasks = tasks.filter(t => t.difficulty === difficulty);
  if (tasks.length === 0) { showToast('Нет заданий для этого уровня'); return; }
  currentTasks = shuffle([...tasks]);
  lastTaskSet = currentTasks;
  loadStats();
  showScreen('game');
  loadTask();
}

function loadStats() {
  const s = progress.getStatForLang(currentLanguage);
  correctCount = s.correct;
  totalAttempts = s.attempts;
}

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

// ================================================================
// GAME ENGINE
// ================================================================
function loadTask() {
  answers = [];
  if (current >= currentTasks.length) { showResults(); return; }
  const item = currentTasks[current];

  // Progress bar
  const pct = (current / currentTasks.length) * 100;
  document.getElementById('gameProgFill').style.width = pct + '%';
  document.getElementById('progress').textContent = `${current + 1} / ${currentTasks.length}`;

  // Build sentence with gaps
  const chars = item.text.split('');
  item.gaps.forEach((g, i) => {
    chars[g.i] = `<span class="gap" data-gap="${i}">___</span>`;
  });
  document.getElementById('sentence').innerHTML = chars.join('');

  // Build choices
  const choicesEl = document.getElementById('choices');
  choicesEl.innerHTML = '';
  item.gaps.forEach((g, i) => {
    const row = document.createElement('div');
    row.className = 'row';
    shuffle([...g.options]).forEach(opt => {
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.textContent = opt;
      chip.onclick = () => selectAnswer(i, opt, chip, row);
      row.appendChild(chip);
    });
    choicesEl.appendChild(row);
  });

  document.getElementById('result').innerHTML = '';
}

function selectAnswer(gapIdx, val, el, row) {
  row.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  answers[gapIdx] = val;
  const gap = document.querySelector(`[data-gap="${gapIdx}"]`);
  if (gap) gap.textContent = val;
}

function check() {
  const item = currentTasks[current];
  if (!item) return;

  let errors = 0;
  let html = '';
  item.gaps.forEach((g, i) => {
    const gap = document.querySelector(`[data-gap="${i}"]`);
    if (answers[i] === g.correct) {
      if (gap) gap.style.color = 'var(--good)';
      html += `<div class="good">✓ Верно!</div>`;
    } else {
      if (gap) gap.style.color = 'var(--bad)';
      html += `<div class="bad">✗ Ошибка. Правильно: <strong>${g.correct}</strong></div>`;
      errors++;
    }
  });

  totalAttempts++;
  if (errors === 0) {
    correctCount++;
    html = `<div class="good" style="font-size:18px">🎉 Отлично!</div>` + html;
    progress.addScore(15);
    showScoreBadge('✅ Правильно! +15');
  } else {
    progress.addScore(2);
  }

  progress.saveStatForLang(currentLanguage, {correct: correctCount, attempts: totalAttempts});
  progress.updateStreak();
  document.getElementById('result').innerHTML = html;
  refreshMenu();
}

function showAnswer() {
  const item = currentTasks[current];
  if (!item) return;
  item.gaps.forEach((g, i) => {
    const gap = document.querySelector(`[data-gap="${i}"]`);
    if (gap) { gap.textContent = g.correct; gap.style.color = 'var(--warn)'; }
  });
  showToast('💡 Показан правильный ответ');
}

function next() {
  current++;
  if (current >= currentTasks.length) { showResults(); return; }
  loadTask();
}

function showResults() {
  showScreen('results');
  const pct = totalAttempts > 0 ? Math.round(correctCount / totalAttempts * 100) : 0;
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
  const title = pct >= 80 ? 'Отлично!' : pct >= 60 ? 'Хорошо!' : 'Продолжай!';

  document.getElementById('resultsHero').innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-title">${title}</div>
    <div class="result-subtitle">Продолжай в том же духе!</div>
  `;
  document.getElementById('resultStats').innerHTML = `
    <div class="result-row"><span class="result-row-label">Правильных ответов</span><span class="result-row-value" style="color:var(--good)">${correctCount}</span></div>
    <div class="result-row"><span class="result-row-label">Всего заданий</span><span class="result-row-value">${totalAttempts}</span></div>
    <div class="result-row"><span class="result-row-label">Точность</span><span class="result-row-value">${pct}%</span></div>
    <div class="result-row"><span class="result-row-label">Очков заработано</span><span class="result-row-value" style="color:var(--accent2)">+${correctCount * 15}</span></div>
  `;
}

function retryCurrentSet() {
  current = 0; answers = [];
  correctCount = 0; totalAttempts = 0;
  currentTasks = shuffle([...lastTaskSet]);
  showScreen('game');
  loadTask();
}

function toggleAudio() {
  const item = currentTasks[current];
  if (!item || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const text = item.text.replace(/_/g, item.gaps.map(g => g.correct).join(' '));
  const u = new SpeechSynthesisUtterance(text);
  u.lang = getLangCode();
  u.rate = 0.85;
  speechSynthesis.speak(u);
}

// ================================================================
// SYLLABLE GAME
// ================================================================
function startSyllableGame() {
  const vocab = gameVocabulary[currentLanguage] || gameVocabulary['ru'];
  const words = vocab.syllables || [];
  if (!words.length) { showToast('Нет слов для этого языка'); return; }
  showScreen('syllable-game');
  runSyllableGame(words[Math.floor(Math.random() * words.length)]);
}

function runSyllableGame(wordObj) {
  const parts = wordObj.word.split('-');
  const instructionDiv = document.getElementById('syllable-instruction');
  const choicesDiv = document.getElementById('syllable-choices');

  instructionDiv.innerHTML = `
    <div style="text-align:center;padding:16px 0">
      <div style="font-size:13px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Раздели слово на слоги</div>
      <div class="syllable-word-display">${wordObj.word.replace(/-/g, ' · ')}</div>
      <div style="font-size:14px;color:var(--text2);margin-bottom:4px">Нажимай слоги по очереди 👇</div>
      <button onclick="this.parentElement.nextElementSibling.style.display='block';this.style.display='none'" 
        style="background:rgba(245,158,11,0.15);border:1px solid var(--warn);color:var(--warn);padding:8px 16px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;margin-top:8px">
        💡 Подсказка: ${wordObj.hint}
      </button>
    </div>
  `;

  choicesDiv.innerHTML = '';
  choicesDiv.style.display = 'none'; // show via button

  // Actually show it
  choicesDiv.style.display = 'flex';
  let clicked = 0;

  parts.forEach((part, idx) => {
    const btn = document.createElement('button');
    btn.className = 'syllable-btn';
    btn.textContent = part;
    btn.onclick = () => {
      if (btn.classList.contains('tapped')) return;
      btn.classList.add('tapped');
      clicked++;
      if (clicked === parts.length) {
        progress.addScore(10);
        showScoreBadge('📝 Слог! +10');
        showToast('🎉 Молодец!');
        setTimeout(() => startSyllableGame(), 1500);
      }
    };
    choicesDiv.appendChild(btn);
  });
}

// ================================================================
// WORD BUILDING GAME
// ================================================================
function startWordBuildingGame() {
  const vocab = gameVocabulary[currentLanguage] || gameVocabulary['ru'];
  if (!(vocab.words || []).length) { showToast('Нет слов для этого языка'); return; }
  showScreen('word-building-game');
  runWordBuildingGame();
}

function runWordBuildingGame() {
  const vocab = gameVocabulary[currentLanguage] || gameVocabulary['ru'];
  const words = vocab.words || [];
  const correctWord = words[Math.floor(Math.random() * words.length)];
  const letters = shuffle([...correctWord.split('')]);

  const instructionDiv = document.getElementById('word-instruction');
  const choicesDiv = document.getElementById('word-choices');
  const resultDiv = document.getElementById('word-result');

  instructionDiv.innerHTML = `
    <div style="text-align:center;margin-bottom:8px">
      <div style="font-size:13px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:1px">Составь слово из букв</div>
    </div>
  `;

  const display = document.createElement('div');
  display.className = 'word-display';
  display.textContent = '_ '.repeat(correctWord.length).trim();

  const lettersDiv = document.createElement('div');
  lettersDiv.className = 'word-letters';

  choicesDiv.innerHTML = '';
  choicesDiv.appendChild(display);
  choicesDiv.appendChild(lettersDiv);
  resultDiv.innerHTML = '';

  let selected = [];

  letters.forEach((letter, idx) => {
    const tile = document.createElement('div');
    tile.className = 'letter-tile';
    tile.textContent = letter.toUpperCase();
    tile.dataset.idx = idx;
    tile.onclick = () => {
      if (tile.classList.contains('used')) return;
      tile.classList.add('used');
      selected.push(letter);
      display.textContent = selected.join('');
      display.className = 'word-display has-content';

      if (selected.length === correctWord.length) {
        if (selected.join('').toLowerCase() === correctWord.toLowerCase()) {
          resultDiv.innerHTML = `<div class="good" style="text-align:center;font-size:18px;padding:12px">✅ Правильно! +20</div>`;
          wordBuildingStreak++;
          progress.addScore(20);
          showScoreBadge('🔡 Слово! +20');
          if (wordBuildingStreak % 3 === 0) {
            progress.addScore(30);
            showScoreBadge('🔥 Серия x3! +30 бонус');
          }
          setTimeout(() => runWordBuildingGame(), 1500);
        } else {
          resultDiv.innerHTML = `<div class="bad" style="text-align:center;font-size:16px;padding:12px">❌ Было: ${selected.join('')} → Правильно: ${correctWord}</div>`;
          wordBuildingStreak = 0;
          setTimeout(() => runWordBuildingGame(), 2000);
        }
      }
    };
    lettersDiv.appendChild(tile);
  });

  // Hint
  const hintBtn = document.createElement('button');
  hintBtn.className = 'btn btn-ghost btn-full';
  hintBtn.style.marginTop = '12px';
  hintBtn.textContent = '💡 Показать слово';
  hintBtn.onclick = () => {
    display.textContent = correctWord;
    display.style.color = 'var(--warn)';
    hintBtn.style.display = 'none';
  };
  choicesDiv.appendChild(hintBtn);

  // Backspace
  const backBtn = document.createElement('button');
  backBtn.className = 'btn btn-ghost btn-full';
  backBtn.style.marginTop = '6px';
  backBtn.textContent = '⌫ Стереть последнюю';
  backBtn.onclick = () => {
    if (!selected.length) return;
    selected.pop();
    display.textContent = selected.length ? selected.join('') : '_ '.repeat(correctWord.length).trim();
    // Restore last used tile
    const usedTiles = lettersDiv.querySelectorAll('.letter-tile.used');
    if (usedTiles.length) usedTiles[usedTiles.length - 1].classList.remove('used');
  };
  choicesDiv.appendChild(backBtn);
}

// ================================================================
// SENTENCE GAME
// ================================================================
function startSentenceGame() {
  const vocab = gameVocabulary[currentLanguage] || gameVocabulary['ru'];
  if (!(vocab.sentences || []).length) { showToast('Нет предложений для этого языка'); return; }
  showScreen('sentence-game');
  runSentenceGame();
}

function runSentenceGame() {
  const vocab = gameVocabulary[currentLanguage] || gameVocabulary['ru'];
  const sentences = vocab.sentences || [];
  const obj = sentences[Math.floor(Math.random() * sentences.length)];
  const shuffled = shuffle([...obj.words]);

  const instructionDiv = document.getElementById('sentence-instruction');
  const dropZone = document.getElementById('sentence-drop-zone');
  const choicesDiv = document.getElementById('sentence-choices');
  const resultDiv = document.getElementById('sentence-result');

  instructionDiv.innerHTML = `
    <div style="text-align:center;margin-bottom:8px">
      <div style="font-size:13px;font-weight:700;color:var(--text2);text-transform:uppercase;letter-spacing:1px">Составь предложение — нажимай слова по порядку</div>
    </div>
  `;

  dropZone.innerHTML = '<span style="color:var(--text3);font-size:14px">Нажимай слова снизу →</span>';
  choicesDiv.innerHTML = '';
  resultDiv.innerHTML = '';

  let placed = [];

  function updateDropZone() {
    if (placed.length === 0) {
      dropZone.innerHTML = '<span style="color:var(--text3);font-size:14px">Нажимай слова снизу →</span>';
    } else {
      dropZone.innerHTML = placed.map((w, i) =>
        `<span class="word-chip-placed" data-pidx="${i}">${w}</span>`
      ).join('');
      // Allow removing placed words
      dropZone.querySelectorAll('.word-chip-placed').forEach(el => {
        el.onclick = () => {
          const pidx = parseInt(el.dataset.pidx);
          const removedWord = placed.splice(pidx, 1)[0];
          // Re-enable chip
          const chips = choicesDiv.querySelectorAll('.word-chip');
          chips.forEach(c => {
            if (c.textContent === removedWord && c.classList.contains('placed')) {
              c.classList.remove('placed');
              return;
            }
          });
          updateDropZone();
        };
      });
    }
  }

  shuffled.forEach(word => {
    const chip = document.createElement('div');
    chip.className = 'word-chip';
    chip.textContent = word;
    chip.onclick = () => {
      if (chip.classList.contains('placed')) return;
      chip.classList.add('placed');
      placed.push(word);
      updateDropZone();

      if (placed.length === obj.words.length) {
        const isCorrect = placed.join(' ') === obj.words.join(' ');
        resultDiv.innerHTML = isCorrect
          ? `<div class="good" style="text-align:center;font-size:16px;padding:12px">✅ Правильно! «${obj.sentence}» +30</div>`
          : `<div class="bad" style="text-align:center;font-size:14px;padding:12px">❌ Правильно: «${obj.sentence}»</div>`;
        if (isCorrect) { progress.addScore(30); showScoreBadge('📖 Предложение! +30'); }
        setTimeout(() => runSentenceGame(), 2000);
      }
    };
    choicesDiv.appendChild(chip);
  });
}

// ================================================================
// FLASH CARDS (NEW FEATURE)
// ================================================================
let flashIdx = 0;
let flashCards = [];

function showFlashCards() {
  const alph = alphabets[currentLanguage] || [];
  if (!alph.length) { showToast('Нет алфавита для этого языка'); return; }
  flashCards = shuffle([...alph]);
  flashIdx = 0;
  showScreen('flash-cards');
  renderFlashCard();
}

function renderFlashCard() {
  const container = document.getElementById('flashcard-container');
  const actionsDiv = document.getElementById('flashcard-actions');

  if (flashIdx >= flashCards.length) {
    container.innerHTML = `<div style="text-align:center;padding:40px 20px">
      <div style="font-size:60px;margin-bottom:16px">🎉</div>
      <div style="font-size:20px;font-weight:800;color:var(--text)">Все карточки пройдены!</div>
      <div style="font-size:14px;color:var(--text2);margin-top:8px">${flashCards.length} букв</div>
    </div>`;
    actionsDiv.innerHTML = `<button class="btn btn-primary" onclick="showFlashCards()">🔄 Ещё раз</button>`;
    progress.addScore(20);
    showScoreBadge('🃏 Карточки! +20');
    return;
  }

  const item = flashCards[flashIdx];
  const ex = item.examples?.[0];
  container.innerHTML = '';

  const card = document.createElement('div');
  card.className = 'flashcard';
  card.innerHTML = `
    <div class="fc-front">
      <div class="fc-letter">${item.letter}</div>
      <div class="fc-hint">Нажми, чтобы перевернуть</div>
    </div>
    <div class="fc-back">
      <div class="fc-sound">[${item.sound}]</div>
      <div class="fc-letter" style="font-size:52px;color:var(--accent2)">${item.letter}</div>
      <div style="font-size:22px">${item.image}</div>
      ${ex ? `<div class="fc-example">${ex.word}</div>` : ''}
    </div>
  `;
  card.onclick = () => card.classList.toggle('flipped');
  container.appendChild(card);

  const counter = document.createElement('div');
  counter.className = 'fc-counter';
  counter.textContent = `${flashIdx + 1} / ${flashCards.length}`;
  container.appendChild(counter);

  actionsDiv.innerHTML = '';
  const prevBtn = document.createElement('button');
  prevBtn.className = 'btn btn-ghost';
  prevBtn.textContent = '‹ Назад';
  prevBtn.disabled = flashIdx === 0;
  prevBtn.onclick = () => { flashIdx--; renderFlashCard(); };

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn-primary';
  nextBtn.textContent = flashIdx < flashCards.length - 1 ? 'Дальше ›' : '✅ Готово';
  nextBtn.onclick = () => { flashIdx++; renderFlashCard(); };

  actionsDiv.appendChild(prevBtn);
  actionsDiv.appendChild(nextBtn);
}

// ================================================================
// DAILY CHALLENGE (NEW FEATURE)
// ================================================================
function showDailyChallenge() {
  showScreen('daily-challenge');
  const content = document.getElementById('daily-content');
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

  const alph = alphabets[currentLanguage] || [];
  const todayLetter = alph[dayOfYear % alph.length];
  const vocab = gameVocabulary[currentLanguage] || gameVocabulary['ru'];
  const todaySentence = vocab.sentences?.[dayOfYear % (vocab.sentences?.length || 1)];
  const s = progress.getStatForLang(currentLanguage);

  const letterDone = progress.getCompletedLetters(currentLanguage).includes(todayLetter?.letter);
  const sentenceDone = s.attempts > 0;

  content.innerHTML = `
    <div class="daily-card">
      <div class="daily-title">🎯 Задание дня — ${today.toLocaleDateString('ru', {day:'numeric',month:'long'})}</div>
      <div class="daily-sub">Выполни 3 задания сегодня и получи бонус!</div>
      <div class="daily-targets">
        <div class="target-row">
          <span class="target-label">🔤 Выучить букву «${todayLetter?.letter || '?'}»</span>
          <span class="target-status ${letterDone ? 'target-done' : 'target-todo'}">${letterDone ? '✅ Готово' : '⬜ Осталось'}</span>
        </div>
        <div class="target-row">
          <span class="target-label">📝 Выполнить любое упражнение</span>
          <span class="target-status ${sentenceDone ? 'target-done' : 'target-todo'}">${sentenceDone ? '✅ Готово' : '⬜ Осталось'}</span>
        </div>
        <div class="target-row">
          <span class="target-label">🃏 Пройти карточки</span>
          <span class="target-status target-todo">⬜ Осталось</span>
        </div>
      </div>
    </div>

    ${todayLetter ? `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:16px">
      <div style="font-size:12px;font-weight:800;color:var(--text3);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px">Буква дня</div>
      <div style="display:flex;align-items:center;gap:16px">
        <div style="font-size:56px;font-weight:900;font-family:var(--mono);background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent">${todayLetter.letter}</div>
        <div>
          <div style="font-size:16px;font-weight:700">${todayLetter.name}</div>
          <div style="font-size:13px;color:var(--text2)">[${todayLetter.sound}]</div>
          <div style="font-size:22px;margin-top:4px">${todayLetter.image}</div>
        </div>
      </div>
      <button class="btn btn-primary btn-full" onclick="showLetter(${alph.findIndex(a=>a.letter===todayLetter.letter)});showScreen('letterCard')">Изучить букву →</button>
    </div>` : ''}

    <button class="btn btn-secondary btn-full" onclick="showFlashCards()">🃏 Пройти карточки</button>
    <button class="btn btn-secondary btn-full" style="margin-top:8px" onclick="start('easy')">🎯 Быстрая тренировка</button>
  `;
}

// ================================================================
// QUIZ (NEW FEATURE)
// ================================================================
function startQuiz() {
  const alph = alphabets[currentLanguage] || [];
  if (alph.length < 4) { showToast('Недостаточно букв для квиза'); return; }

  showScreen('quiz-screen');
  quizScore = 0;
  quizQuestions = buildQuizQuestions(alph);
  currentQuizIdx = 0;
  renderQuizQuestion();
}

function buildQuizQuestions(alph) {
  const shuffled = shuffle([...alph]);
  return shuffled.slice(0, Math.min(10, shuffled.length)).map(item => {
    const wrongOptions = shuffle([...alph].filter(a => a.letter !== item.letter)).slice(0, 3);
    const options = shuffle([item, ...wrongOptions]);
    const type = Math.random() > 0.5 ? 'sound2letter' : 'letter2word';
    if (type === 'sound2letter') {
      return {
        question: '/' + item.sound + '/',
        prompt: 'Какая это буква?',
        options: options.map(o => ({label: o.letter, isCorrect: o.letter === item.letter}))
      };
    } else {
      const ex = item.examples?.[0];
      return {
        question: item.letter,
        prompt: ex ? `Что значит «${ex.word}»?` : 'Как произносится?',
        options: shuffle([...alph]).filter(a => a.examples?.[0]).slice(0,4).map((o,i) => ({
          label: o.examples[0].meaning,
          isCorrect: o.letter === item.letter
        })).map((o,i,arr) => {
          if (i === 0) return {label: ex?.meaning || item.sound, isCorrect: true};
          return {label: alph.filter(a=>a.letter!==item.letter)[i-1]?.examples?.[0]?.meaning || o.label, isCorrect: false};
        })
      };
    }
  });
}

function renderQuizQuestion() {
  const content = document.getElementById('quiz-content');
  if (currentQuizIdx >= quizQuestions.length) {
    const pct = Math.round(quizScore / quizQuestions.length * 100);
    content.innerHTML = `
      <div style="text-align:center;padding:40px 0">
        <div style="font-size:64px">${pct>=80?'🎉':pct>=60?'👍':'💪'}</div>
        <div style="font-size:24px;font-weight:900;color:var(--text);margin:12px 0">${pct>=80?'Отлично!':pct>=60?'Хорошо!':'Ещё поработай!'}</div>
        <div style="font-size:16px;color:var(--text2)">${quizScore} из ${quizQuestions.length} правильно (${pct}%)</div>
        <button class="btn btn-primary btn-full" onclick="startQuiz()" style="margin-top:24px">🔄 Ещё раз</button>
        <button class="btn btn-secondary btn-full" onclick="goMenu()" style="margin-top:8px">🏠 В меню</button>
      </div>
    `;
    progress.addScore(quizScore * 10);
    showScoreBadge(`❓ Квиз: +${quizScore * 10}`);
    return;
  }

  const q = quizQuestions[currentQuizIdx];
  const pct = (currentQuizIdx / quizQuestions.length * 100);

  content.innerHTML = `
    <div class="quiz-score-bar">
      <span class="quiz-score-label">${currentQuizIdx+1}/${quizQuestions.length}</span>
      <div style="flex:1;height:8px;background:var(--surface2);border-radius:100px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:100px;transition:width 0.3s"></div>
      </div>
      <span class="quiz-score-label">⭐ ${quizScore}</span>
    </div>
    <div class="quiz-card">
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-prompt">${q.prompt}</div>
      <div class="quiz-options">
        ${q.options.map((o, i) => `<button class="quiz-option" onclick="answerQuiz(${i})">${o.label}</button>`).join('')}
      </div>
    </div>
  `;
}

function answerQuiz(optIdx) {
  const q = quizQuestions[currentQuizIdx];
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach((btn, i) => btn.disabled = true);

  if (q.options[optIdx].isCorrect) {
    opts[optIdx].classList.add('correct');
    quizScore++;
    showScoreBadge('✓ +10');
  } else {
    opts[optIdx].classList.add('wrong');
    q.options.forEach((o, i) => { if (o.isCorrect) opts[i].classList.add('correct'); });
  }

  setTimeout(() => { currentQuizIdx++; renderQuizQuestion(); }, 1200);
}

// ================================================================
// PWA INSTALL
// ================================================================
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  if (!localStorage.getItem('pwaInstalled')) {
    document.getElementById('installBanner').style.display = 'flex';
  }
});

document.getElementById('installBtn').addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const res = await deferredPrompt.userChoice;
    if (res.outcome === 'accepted') localStorage.setItem('pwaInstalled', '1');
    deferredPrompt = null;
  }
  document.getElementById('installBanner').style.display = 'none';
});

document.getElementById('closeInstallBtn').addEventListener('click', () => {
  document.getElementById('installBanner').style.display = 'none';
  localStorage.setItem('pwaInstalled', '1');
});

// ================================================================
// SERVICE WORKER
// ================================================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// ================================================================
// INIT
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  progress.updateStreak();
  goMenu();
});
