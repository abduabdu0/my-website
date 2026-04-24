// МНОГОЯЗЫЧНЫЕ УРОКИ И ЗАДАНИЯ
const languages = {
  'ru': {
    name: 'Русский',
    icon: '🇷🇺',
    lessons: [
      {
        id: 1,
        title: '� Азбука: Гласные',
        icon: '📝',
        theory: `<div class="theory"><h4>Русские гласные буквы</h4><p><strong>А Е И О У Ы Э Ю Я</strong></p><p>Гласные - буквы, которые образуют голос.</p><ul class="rule-list"><li>А - начальный звук</li><li>Е - мягкий звук</li><li>И - узкий звук</li><li>О - круглый звук</li><li>У - округлённый звук</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'Это буква _',gaps:[{i:11,options:['А','Б','В'],correct:'А'}]},{difficulty:'easy', text:'Буква _ звучит мягко',gaps:[{i:8,options:['А','Е','О'],correct:'Е'}]}]
      },
      {
        id: 2,
        title: '🔤 Азбука: Согласные',
        icon: '📝',
        theory: `<div class="theory"><h4>Русские согласные буквы</h4><p><strong>Б В Г Д Ж З К Л М Н П Р С Т Ф Х Ц Ч Ш Щ Й</strong></p><p>Согласные - буквы, образующие преграду для звука.</p><ul class="rule-list"><li>Б - звонкая</li><li>П - глухая</li><li>Г - звонкая</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'Буква _ - согласная',gaps:[{i:7,options:['Б','А','Е'],correct:'Б'}]},{difficulty:'easy', text:'_ - первая буква алфавита',gaps:[{i:0,options:['А','Б','В'],correct:'А'}]}]
      },
      {
        id: 3,
        title: '📕 Гласные в корне слова',
        icon: '🔤',
        theory: `<div class="theory"><h4>Проверяемые безударные гласные</h4><p>Подбирайте проверочное слово, где гласная ударная.</p><ul class="rule-list"><li>Помните: о ≠ а, е ≠ и, е ≠ я</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'Тр_ва растёт',gaps:[{i:2,options:['а','о','е','и'],correct:'а'}]},{difficulty:'easy', text:'М_ст высокий',gaps:[{i:1,options:['о','а','е','и'],correct:'о'}]}]
      },
      {
        id: 4,
        title: '📗 Согласные в корне',
        icon: '🔤',
        theory: `<div class="theory"><h4>Звонкие и глухие согласные</h4><p><strong>Звонкие:</strong> б, в, г, д, ж, з</p><p><strong>Глухие:</strong> п, ф, к, т, ш, с</p></div>`,
        tasks: [{difficulty:'medium', text:'У_кий коридор',gaps:[{i:1,options:['з','с','х','к'],correct:'з'}]},{difficulty:'medium', text:'Мя_кий диван',gaps:[{i:2,options:['г','к','х','ф'],correct:'г'}]}]
      },
      {
        id: 5,
        title: '📙 Буквы Ы и И после Ц',
        icon: '📝',
        theory: `<div class="theory"><h4>Правило Ы и И после Ц</h4><p>В корне: Ц+И, В окончании: Ц+Ы</p><ul class="rule-list"><li>Ц + И → в корне</li><li>Ц + Ы → в окончаниях</li></ul></div>`,
        tasks: [{difficulty:'medium', text:'Ц_рк в городе',gaps:[{i:1,options:['и','ы','е','а'],correct:'и'}]},{difficulty:'medium', text:'Огурц_',gaps:[{i:5,options:['и','ы','а','о'],correct:'ы'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'Гл_з открыт',gaps:[{i:2,options:['а','о','е','и'],correct:'а'}]},
      {difficulty:'easy', text:'Сл_зы текут',gaps:[{i:2,options:['ё','а','е','и'],correct:'ё'}]},
      {difficulty:'medium', text:'Жи_нь чудесна',gaps:[{i:2,options:['з','с','х','ш'],correct:'з'}]},
      {difficulty:'hard', text:'Он учи_ся хорошо',gaps:[{i:5,options:['тся','ться'],correct:'тся'}]}
    ]
  },
  'en': {
    name: 'English',
    icon: '🇬🇧',
    lessons: [
      {
        id: 1,
        title: '� Alphabet: A-M',
        icon: '📝',
        theory: `<div class="theory"><h4>English Alphabet (First Half)</h4><p><strong>A B C D E F G H I J K L M</strong></p><p>Learning the 26 letters of the English alphabet.</p><ul class="rule-list"><li>A - /eɪ/ (long A sound)</li><li>B - /biː/ (bee)</li><li>C - /siː/ (see)</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'First letter is _',gaps:[{i:14,options:['A','B','C'],correct:'A'}]},{difficulty:'easy', text:'_ comes after A',gaps:[{i:0,options:['B','C','A'],correct:'B'}]}]
      },
      {
        id: 2,
        title: '🔤 Alphabet: N-Z',
        icon: '📝',
        theory: `<div class="theory"><h4>English Alphabet (Second Half)</h4><p><strong>N O P Q R S T U V W X Y Z</strong></p><p>Learning letters 14-26.</p><ul class="rule-list"><li>Letter 26 is Z</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'Last letter is _',gaps:[{i:14,options:['Y','Z','X'],correct:'Z'}]},{difficulty:'easy', text:'_ comes after M',gaps:[{i:0,options:['N','M','O'],correct:'N'}]}]
      },
      {
        id: 3,
        title: '🔤 Vowels: A, E, I, O, U',
        icon: '📝',
        theory: `<div class="theory"><h4>English Vowels</h4><p><strong>A E I O U</strong></p><p>These 5 letters are vowels - they produce vocal sounds.</p><ul class="rule-list"><li>Every word needs at least one vowel</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ is a vowel',gaps:[{i:0,options:['A','B','C'],correct:'A'}]},{difficulty:'easy', text:'E I O U and _',gaps:[{i:12,options:['A','B','C'],correct:'A'}]}]
      },
      {
        id: 4,
        title: '📕 Articles: A, An, The',
        icon: '🔤',
        theory: `<div class="theory"><h4>Using Articles</h4><p><strong>A/An:</strong> for singular countable nouns</p><p><strong>The:</strong> for specific nouns</p><ul class="rule-list"><li>Use "a" before consonants</li><li>Use "an" before vowels</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ apple is red',gaps:[{i:0,options:['A','An','The'],correct:'An'}]},{difficulty:'easy', text:'I have _ cat',gaps:[{i:8,options:['a','an','the'],correct:'a'}]}]
      },
      {
        id: 5,
        title: '📗 Plural Forms',
        icon: '🔤',
        theory: `<div class="theory"><h4>Making Plurals</h4><p>Most nouns add <strong>-s</strong> to form plural.</p><ul class="rule-list"><li>cat → cats, dog → dogs</li><li>Add -es for s, x, z, ch, sh</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'Two _',gaps:[{i:5,options:['cat','cats','cate'],correct:'cats'}]},{difficulty:'medium', text:'Three _',gaps:[{i:7,options:['child','childs','children'],correct:'children'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'_ dog is big',gaps:[{i:0,options:['A','An','The'],correct:'The'}]},
      {difficulty:'easy', text:'I have _ book',gaps:[{i:8,options:['a','an','the'],correct:'a'}]},
      {difficulty:'medium', text:'She _ to the park',gaps:[{i:5,options:['go','goes','gone'],correct:'goes'}]},
      {difficulty:'hard', text:'The _ are beautiful',gaps:[{i:4,options:['flower','flowers','floweres'],correct:'flowers'}]}
    ]
  },
  'zh': {
    name: '中文 (Mandarin)',
    icon: '🇨🇳',
    lessons: [
      {
        id: 1,
        title: '� 基础笔画 (Basic Strokes)',
        icon: '📝',
        theory: `<div class="theory"><h4>Chinese Writing Strokes</h4><p>8 basic strokes: 横(horizontal) 竖(vertical) 撇(left) 捺(right)</p><ul class="rule-list"><li>一 (yī) = one (horizontal line)</li><li>丨 (gǔn) = vertical</li><li>All characters are made from these strokes</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'一 means _',gaps:[{i:8,options:['one','two','three'],correct:'one'}]},{difficulty:'easy', text:'_ is a basic stroke',gaps:[{i:0,options:['一','很','好'],correct:'一'}]}]
      },
      {
        id: 2,
        title: '🔤 常用汉字 (Common Characters)',
        icon: '📝',
        theory: `<div class="theory"><h4>Top 10 Most Common Characters</h4><p>人(person) 火(fire) 水(water) 土(earth) 木(wood)</p><ul class="rule-list"><li>人 = person, human</li><li>水 = water</li><li>火 = fire</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'火 means _',gaps:[{i:7,options:['fire','water','earth'],correct:'fire'}]},{difficulty:'easy', text:'_ means water',gaps:[{i:0,options:['火','水','木'],correct:'水'}]}]
      },
      {
        id: 3,
        title: '📕 四声 (Four Tones)',
        icon: '🔤',
        theory: `<div class="theory"><h4>Tones in Mandarin</h4><p>妈(mā-mother) 麻(má-hemp) 马(mǎ-horse) 骂(mà-scold)</p><ul class="rule-list"><li>1st tone: high and flat →</li><li>2nd tone: rising ↗</li><li>3rd tone: dipping ↘↗</li><li>4th tone: falling ↘</li></ul></div>`,
        tasks: [{difficulty:'medium', text:'妈 has _ tone',gaps:[{i:7,options:['first','second','third'],correct:'first'}]},{difficulty:'medium', text:'马 is horse in _ tone',gaps:[{i:14,options:['first','second','third'],correct:'third'}]}]
      },
      {
        id: 4,
        title: '📙 日常词汇 (Daily Words)',
        icon: '📝',
        theory: `<div class="theory"><h4>Everyday Vocabulary</h4><p>天(sky/day) 好(good) 人(person)</p></div>`,
        tasks: [{difficulty:'easy', text:'_很美',gaps:[{i:0,options:['人','花','天'],correct:'花'}]},{difficulty:'easy', text:'这是_',gaps:[{i:2,options:['人','火','水'],correct:'水'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'这是_',gaps:[{i:2,options:['人','火','水'],correct:'水'}]},
      {difficulty:'easy', text:'_很美',gaps:[{i:0,options:['人','花','天'],correct:'花'}]},
      {difficulty:'medium', text:'我喜欢_',gaps:[{i:3,options:['猫','狗','书'],correct:'猫'}]}
    ]
  },
  'hi': {
    name: 'हिंदी (Hindi)',
    icon: '🇮🇳',
    lessons: [
      {
        id: 1,
        title: '� देवनागरी वर्ण (Devanagari Vowels)',
        icon: '📝',
        theory: `<div class="theory"><h4>Devanagari Vowels (स्वर)</h4><p><strong>अ आ इ ई उ ऊ</strong></p><p>Basic vowels in Devanagari script.</p><ul class="rule-list"><li>अ (a) = short A</li><li>आ (ā) = long A</li><li>इ (i) = short I</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ is first vowel',gaps:[{i:0,options:['अ','ब','क'],correct:'अ'}]},{difficulty:'easy', text:'आ is long _',gaps:[{i:13,options:['a','i','u'],correct:'a'}]}]
      },
      {
        id: 2,
        title: '🔤 व्यंजन (Consonants)',
        icon: '📝',
        theory: `<div class="theory"><h4>Devanagari Consonants</h4><p><strong>क ख ग घ च छ</strong></p><p>First consonants of Devanagari alphabet.</p><ul class="rule-list"><li>क (ka) = k sound</li><li>ग (ga) = g sound</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ is first consonant',gaps:[{i:0,options:['क','आ','इ'],correct:'क'}]},{difficulty:'easy', text:'ग sound is _',gaps:[{i:10,options:['g','k','ng'],correct:'g'}]}]
      },
      {
        id: 3,
        title: '📕 Devanagari Script Basics',
        icon: '🔤',
        theory: `<div class="theory"><h4>Writing Devanagari</h4><p>Letters are connected by a horizontal line.</p><ul class="rule-list"><li>Learn stroke order</li><li>Practice letterforms</li></ul></div>`,
        tasks: [{difficulty:'medium', text:'नमस्ते का अर्थ है _',gaps:[{i:18,options:['hello','goodbye','thanks'],correct:'hello'}]}]
      },
      {
        id: 4,
        title: '📙 Basic Words',
        icon: '📝',
        theory: `<div class="theory"><h4>Common Vocabulary</h4><p>नाम = name, घर = house, पानी = water</p></div>`,
        tasks: [{difficulty:'easy', text:'घर means _',gaps:[{i:9,options:['house','water','person'],correct:'house'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'घर _ है',gaps:[{i:5,options:['बड़ा','छोटा','सफेद'],correct:'बड़ा'}]},
      {difficulty:'easy', text:'यह _ है',gaps:[{i:5,options:['किताब','कलम','मेज'],correct:'किताब'}]},
      {difficulty:'medium', text:'हम _ में रहते हैं',gaps:[{i:6,options:['भारत','पाकिस्तान','नेपाल'],correct:'भारत'}]}
    ]
  },
  'es': {
    name: 'Español',
    icon: '🇪🇸',
    lessons: [
      {
        id: 1,
        title: '� Alphabet: A-M',
        icon: '📝',
        theory: `<div class="theory"><h4>Spanish Alphabet (First Half)</h4><p><strong>A B C D E F G H I J K L M</strong></p><p>Spanish alphabet has 27 letters.</p><ul class="rule-list"><li>A - ah</li><li>B - beh</li><li>C - ceh</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'First letter is _',gaps:[{i:14,options:['A','B','C'],correct:'A'}]},{difficulty:'easy', text:'_ comes after M',gaps:[{i:0,options:['N','M','L'],correct:'N'}]}]
      },
      {
        id: 2,
        title: '🔤 Vowels: A, E, I, O, U',
        icon: '📝',
        theory: `<div class="theory"><h4>Spanish Vowels</h4><p><strong>A E I O U</strong></p><p>Vowels are pronounced consistently in Spanish.</p><ul class="rule-list"><li>A = ah, E = eh, I = ee</li><li>O = oh, U = oo</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ is a vowel',gaps:[{i:0,options:['A','B','C'],correct:'A'}]},{difficulty:'easy', text:'Spanish has _ vowels',gaps:[{i:10,options:['5','6','4'],correct:'5'}]}]
      },
      {
        id: 3,
        title: '📕 Gender of Nouns',
        icon: '🔤',
        theory: `<div class="theory"><h4>Masculine and Feminine</h4><p>El gato (m), La gata (f)</p><ul class="rule-list"><li>-o endings → masculine</li><li>-a endings → feminine</li><li>Use el/la accordingly</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ gato es blanco',gaps:[{i:0,options:['El','La','Un'],correct:'El'}]},{difficulty:'easy', text:'_ casa es grande',gaps:[{i:0,options:['El','La','Un'],correct:'La'}]}]
      },
      {
        id: 4,
        title: '📗 Articles: El, La, Los, Las',
        icon: '🔤',
        theory: `<div class="theory"><h4>Spanish Definite Articles</h4><p>El (m.sing) La (f.sing) Los (m.pl) Las (f.pl)</p><ul class="rule-list"><li>Choose by gender and number</li></ul></div>`,
        tasks: [{difficulty:'medium', text:'_ libro es rojo',gaps:[{i:0,options:['El','La','Los'],correct:'El'}]},{difficulty:'medium', text:'_ niña está aquí',gaps:[{i:0,options:['El','La','Las'],correct:'La'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'_ mesa es grande',gaps:[{i:0,options:['El','La','Un'],correct:'La'}]},
      {difficulty:'easy', text:'_ perro es pequeño',gaps:[{i:0,options:['El','La','Un'],correct:'El'}]},
      {difficulty:'medium', text:'Nosotros _ en Madrid',gaps:[{i:11,options:['vivimos','vivimos','vives'],correct:'vivimos'}]}
    ]
  },
  'fr': {
    name: 'Français',
    icon: '🇫🇷',
    lessons: [
      {
        id: 1,
        title: '� Alphabet: A-M',
        icon: '📝',
        theory: `<div class="theory"><h4>French Alphabet (First Half)</h4><p><strong>A B C D E F G H I J K L M</strong></p><p>French alphabet pronunciation.</p><ul class="rule-list"><li>A - ah</li><li>B - beh</li><li>C - ceh</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'First letter is _',gaps:[{i:14,options:['A','B','C'],correct:'A'}]},{difficulty:'easy', text:'_ comes after A',gaps:[{i:0,options:['B','C','D'],correct:'B'}]}]
      },
      {
        id: 2,
        title: '🔤 Vowels: A, E, I, O, U, Y',
        icon: '📝',
        theory: `<div class="theory"><h4>French Vowels</h4><p><strong>A E I O U Y</strong></p><p>Y can act as vowel in French.</p><ul class="rule-list"><li>Learn accent marks: é è ê ë</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'French has _ vowels',gaps:[{i:9,options:['5','6','7'],correct:'6'}]},{difficulty:'easy', text:'_ is always a vowel',gaps:[{i:0,options:['Y','H','W'],correct:'Y'}]}]
      },
      {
        id: 3,
        title: '📕 Articles & Gender',
        icon: '🔤',
        theory: `<div class="theory"><h4>French Articles</h4><p>Definite: le, la, les</p><p>All nouns are masculine or feminine.</p><ul class="rule-list"><li>Le = masculine singular</li><li>La = feminine singular</li><li>Les = plural</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ chat est noir',gaps:[{i:0,options:['Le','La','Les'],correct:'Le'}]},{difficulty:'easy', text:'_ table est ronde',gaps:[{i:0,options:['Le','La','Les'],correct:'La'}]}]
      },
      {
        id: 4,
        title: '📗 Basic Verbs Present',
        icon: '🔤',
        theory: `<div class="theory"><h4>Conjugating -ER Verbs</h4><p>Parler (to speak): je parle, tu parles, il/elle parle</p><ul class="rule-list"><li>Regular -ER verb patterns</li></ul></div>`,
        tasks: [{difficulty:'medium', text:'Je _ français',gaps:[{i:5,options:['parle','parles','parlons'],correct:'parle'}]},{difficulty:'medium', text:'Tu _ un livre',gaps:[{i:4,options:['lis','lis','lisons'],correct:'lis'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'_ livre est bleu',gaps:[{i:0,options:['Le','La','Les'],correct:'Le'}]},
      {difficulty:'easy', text:'_ maison est blanche',gaps:[{i:0,options:['Le','La','Les'],correct:'La'}]},
      {difficulty:'medium', text:'Nous _ à Paris',gaps:[{i:7,options:['habitons','habite','habitent'],correct:'habitons'}]}
    ]
  },
  'ar': {
    name: 'العربية (Arabic)',
    icon: '🇸🇦',
    lessons: [
      {
        id: 1,
        title: '� الحروف: ا-س (Letters: A-S)',
        icon: '📝',
        theory: `<div class="theory"><h4>Arabic Alphabet (First Half)</h4><p><strong>ا ب ت ث ج ح خ د ذ ر ز س</strong></p><p>Arabic has 28 letters, written right to left.</p><ul class="rule-list"><li>ا (alif) = a</li><li>ب (ba) = b</li><li>ت (ta) = t</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'ا هو أول حرف _',gaps:[{i:12,options:['أبجدي','عربي','عالمي'],correct:'أبجدي'}]}]
      },
      {
        id: 2,
        title: '🔤 الحروف: ش-ي (Letters: Sh-Y)',
        icon: '📝',
        theory: `<div class="theory"><h4>Arabic Alphabet (Second Half)</h4><p><strong>ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي</strong></p><p>Final 16 letters of the Arabic alphabet.</p></div>`,
        tasks: [{difficulty:'easy', text:'ي هو آخر حرف _',gaps:[{i:11,options:['أبجدي','عربي','لاتيني'],correct:'أبجدي'}]}]
      },
      {
        id: 3,
        title: '📕 الحروف الشمسية والقمرية',
        icon: '🔤',
        theory: `<div class="theory"><h4>Sun and Moon Letters</h4><p>Some letters assimilate with ال (the)</p><ul class="rule-list"><li>الشمسية (sun letters) = 14 letters</li><li>القمرية (moon letters) = 14 letters</li></ul></div>`,
        tasks: [{difficulty:'medium', text:'الشمس هو _',gaps:[{i:9,options:['sun','moon','star'],correct:'sun'}]}]
      },
      {
        id: 4,
        title: '📙 الكلمات الأساسية (Basic Words)',
        icon: '📝',
        theory: `<div class="theory"><h4>Common Vocabulary</h4><p>كتاب=book, قلم=pen, مدرسة=school</p></div>`,
        tasks: [{difficulty:'easy', text:'كتاب means _',gaps:[{i:9,options:['book','pen','school'],correct:'book'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'السلام _ ورحمة الله',gaps:[{i:7,options:['عليكم','عليه','عليها'],correct:'عليكم'}]},
      {difficulty:'easy', text:'ما _ اسمك؟',gaps:[{i:5,options:['اسم','اسما','اسمي'],correct:'اسم'}]},
      {difficulty:'medium', text:'أنا _ في المدرسة',gaps:[{i:5,options:['أدرس','تدرس','يدرس'],correct:'أدرس'}]}
    ]
  },
  'tg': {
    name: 'Тоҷикӣ (Tajik)',
    icon: '🇹🇯',
    lessons: [
      {
        id: 1,
        title: '� Алфавити: А-П',
        icon: '📝',
        theory: `<div class="theory"><h4>Tajik Alphabet (First Half)</h4><p><strong>А Б В Г Ғ Д Е Ё Ж З И Й К Л М Н О П</strong></p><p>Tajik uses Cyrillic script with special letters.</p><ul class="rule-list"><li>А (a) = a</li><li>Б (b) = b</li><li>Ғ (gh) = special sound</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'А - _чун асосӣ',gaps:[{i:6,options:['унвони','шаклии','ҳарфи'],correct:'ҳарфи'}]}]
      },
      {
        id: 2,
        title: '🔤 Алфавити: Р-Я',
        icon: '📝',
        theory: `<div class="theory"><h4>Tajik Alphabet (Second Half)</h4><p><strong>Р С Т У Ӯ Ф Х Ҳ Ц Ч Ш Щ Ъ Ы Ь Э Ю Я</strong></p><p>Final 18 letters of Tajik alphabet.</p></div>`,
        tasks: [{difficulty:'easy', text:'Я - _ҳарфи',gaps:[{i:5,options:['охирин','аввалин','миёна'],correct:'охирин'}]}]
      },
      {
        id: 3,
        title: '📕 Унвониҳои (Pronouns)',
        icon: '🔤',
        theory: `<div class="theory"><h4>Tajik Personal Pronouns</h4><p>Ман (I), Ту (you), Вай (he/she)</p><p>Мо (we), Шумо (you-formal), Онҳо (they)</p><ul class="rule-list"><li>Ман = I (ме-)</li><li>Ту = you (ту-)</li></ul></div>`,
        tasks: [{difficulty:'easy', text:'_ ин мактаб аст',gaps:[{i:0,options:['Ман','Вай','Онҳо'],correct:'Ман'}]}]
      },
      {
        id: 4,
        title: '📙 Калимаҳои асосӣ (Basic Words)',
        icon: '📝',
        theory: `<div class="theory"><h4>Common Vocabulary</h4><p>Нома (letter), Китоб (book), Қалам (pen)</p></div>`,
        tasks: [{difficulty:'easy', text:'Китоб _ аст',gaps:[{i:8,options:['қалам','дафтар','нома'],correct:'қалам'}]}]
      }
    ],
    tasks: [
      {difficulty:'easy', text:'Дар Тоҷикистон _ шӯ',gaps:[{i:14,options:['рабан','рамон','раман'],correct:'рамон'}]},
      {difficulty:'easy', text:'Ман дар _ кушт',gaps:[{i:10,options:['Душанбе','Москва','Лондон'],correct:'Душанбе'}]},
      {difficulty:'medium', text:'Чӣ корат _ ?',gaps:[{i:11,options:['аст','асте','асти'],correct:'аст'}]}
    ]
  }
};

let currentLanguage = 'ru';
let current=0, answers=[], currentTasks=[], correctCount=0, totalAttempts=0;
let currentLesson=null, lessonMode=false;

function getLangData() {
  return languages[currentLanguage];
}

function loadStats(){
  let key = 'dictationStats_' + currentLanguage;
  let stats = JSON.parse(localStorage.getItem(key) || '{}');
  correctCount = stats.correct || 0;
  totalAttempts = stats.attempts || 0;
  updateStatsDisplay();
}

function saveStats(){
  let key = 'dictationStats_' + currentLanguage;
  localStorage.setItem(key, JSON.stringify({correct: correctCount, attempts: totalAttempts}));
  updateStatsDisplay();
}

function updateStatsDisplay(){
  let percentage = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
  document.getElementById('currentLang').innerText = `Язык: ${getLangData().name}`;
}

function showLanguageSelect(){
  document.getElementById('menu').style.display='none';
  document.getElementById('languageSelect').style.display='block';
  
  let list = document.getElementById('languageList');
  list.innerHTML = '';
  Object.keys(languages).forEach(code => {
    let lang = languages[code];
    let item = document.createElement('div');
    item.className = 'lesson-item' + (code === currentLanguage ? ' active' : '');
    item.innerHTML = `<div style="font-size:28px">${lang.icon}</div><h5>${lang.name}</h5>`;
    item.onclick = () => selectLanguage(code);
    list.appendChild(item);
  });
}


// АЛФАВИТЫ ДЛЯ КАЖДОГО ЯЗЫКА
const alphabets = {
  'ru': [
    {letter: 'А', sound: 'a', name: 'А (а)', image: '🍎', examples: [{word: 'Арбуз', meaning: 'watermelon'}, {word: 'Апельсин', meaning: 'orange'}]},
    {letter: 'Б', sound: 'b', name: 'БЭ (б)', image: '🐻', examples: [{word: 'Банан', meaning: 'banana'}, {word: 'Бабочка', meaning: 'butterfly'}]},
    {letter: 'В', sound: 'v', name: 'ВЭ (в)', image: '🐺', examples: [{word: 'Волк', meaning: 'wolf'}, {word: 'Вода', meaning: 'water'}]},
    {letter: 'Г', sound: 'g', name: 'ГЭ (г)', image: '⚡', examples: [{word: 'Гроза', meaning: 'thunderstorm'}, {word: 'Голос', meaning: 'voice'}]},
    {letter: 'Д', sound: 'd', name: 'ДЭ (д)', image: '🏠', examples: [{word: 'Дом', meaning: 'house'}, {word: 'Дерево', meaning: 'tree'}]},
    {letter: 'Е', sound: 'ye', name: 'Е (е)', image: '🦔', examples: [{word: 'Ежик', meaning: 'hedgehog'}, {word: 'Ель', meaning: 'spruce'}]},
    {letter: 'Ё', sound: 'yo', name: 'Ё (ё)', image: '🎄', examples: [{word: 'Ёж', meaning: 'hedgehog'}, {word: 'Ёлка', meaning: 'Christmas tree'}]},
    {letter: 'Ж', sound: 'zh', name: 'ЖЭ (ж)', image: '🪳', examples: [{word: 'Жук', meaning: 'beetle'}, {word: 'Жираф', meaning: 'giraffe'}]},
    {letter: 'З', sound: 'z', name: 'ЗЭ (з)', image: '🐰', examples: [{word: 'Заяц', meaning: 'hare'}, {word: 'Зима', meaning: 'winter'}]},
    {letter: 'И', sound: 'i', name: 'И (и)', image: '🧵', examples: [{word: 'Иголка', meaning: 'needle'}, {word: 'Ирис', meaning: 'iris'}]},
    {letter: 'Й', sound: 'y', name: 'И КРАТКОЕ (й)', image: '🥼', examples: [{word: 'Йод', meaning: 'iodine'}, {word: 'Май', meaning: 'May'}]},
    {letter: 'К', sound: 'k', name: 'КА (к)', image: '🐱', examples: [{word: 'Кот', meaning: 'cat'}, {word: 'Книга', meaning: 'book'}]},
    {letter: 'Л', sound: 'l', name: 'ЭЛЬ (л)', image: '🦁', examples: [{word: 'Лев', meaning: 'lion'}, {word: 'Луна', meaning: 'moon'}]},
    {letter: 'М', sound: 'm', name: 'ЭМ (м)', image: '👩', examples: [{word: 'Мама', meaning: 'mom'}, {word: 'Мяч', meaning: 'ball'}]},
    {letter: 'Н', sound: 'n', name: 'ЭН (н)', image: '👃', examples: [{word: 'Нос', meaning: 'nose'}, {word: 'Нога', meaning: 'leg'}]},
    {letter: 'О', sound: 'o', name: 'О (о)', image: '🥒', examples: [{word: 'Огурец', meaning: 'cucumber'}, {word: 'Океан', meaning: 'ocean'}]},
    {letter: 'П', sound: 'p', name: 'ПЭ (п)', image: '👨', examples: [{word: 'Папа', meaning: 'dad'}, {word: 'Птица', meaning: 'bird'}]},
    {letter: 'Р', sound: 'r', name: 'ЭР (р)', image: '🐟', examples: [{word: 'Рыба', meaning: 'fish'}, {word: 'Роза', meaning: 'rose'}]},
    {letter: 'С', sound: 's', name: 'ЭС (с)', image: '☀️', examples: [{word: 'Солнце', meaning: 'sun'}, {word: 'Снег', meaning: 'snow'}]},
    {letter: 'Т', sound: 't', name: 'ТЭ (т)', image: '🐯', examples: [{word: 'Тигр', meaning: 'tiger'}, {word: 'Трава', meaning: 'grass'}]},
    {letter: 'У', sound: 'u', name: 'У (у)', image: '🦆', examples: [{word: 'Утка', meaning: 'duck'}, {word: 'Ухо', meaning: 'ear'}]},
    {letter: 'Ф', sound: 'f', name: 'ЭФ (ф)', image: '🇫🇷', examples: [{word: 'Флаг', meaning: 'flag'}, {word: 'Фрукт', meaning: 'fruit'}]},
    {letter: 'Х', sound: 'kh', name: 'ХА (х)', image: '🍞', examples: [{word: 'Хлеб', meaning: 'bread'}, {word: 'Холод', meaning: 'cold'}]},
    {letter: 'Ц', sound: 'ts', name: 'ЦЭ (ц)', image: '🌸', examples: [{word: 'Цветок', meaning: 'flower'}, {word: 'Цирк', meaning: 'circus'}]},
    {letter: 'Ч', sound: 'ch', name: 'ЧЕ (ч)', image: '🍵', examples: [{word: 'Чай', meaning: 'tea'}, {word: 'Часы', meaning: 'watch'}]},
    {letter: 'Ш', sound: 'sh', name: 'ША (ш)', image: '⚽', examples: [{word: 'Шар', meaning: 'ball'}, {word: 'Шуба', meaning: 'fur coat'}]},
    {letter: 'Щ', sound: 'shch', name: 'ЩА (щ)', image: '🐶', examples: [{word: 'Щенок', meaning: 'puppy'}, {word: 'Щука', meaning: 'pike'}]},
    {letter: 'Ъ', sound: 'hard sign', name: 'ТВЁРДЫЙ ЗНАК (ъ)', image: '🚪', examples: [{word: 'Подъезд', meaning: 'entrance'}, {word: 'Съесть', meaning: 'to eat'}]},
    {letter: 'Ы', sound: 'y', name: 'Ы (ы)', image: '🧀', examples: [{word: 'Сыр', meaning: 'cheese'}, {word: 'Мыш', meaning: 'mouse'}]},
    {letter: 'Ь', sound: 'soft sign', name: 'МЯГКИЙ ЗНАК (ь)', image: '🌿', examples: [{word: 'День', meaning: 'day'}, {word: 'Пень', meaning: 'stump'}]},
    {letter: 'Э', sound: 'e', name: 'Э (э)', image: '📺', examples: [{word: 'Эхо', meaning: 'echo'}, {word: 'Экран', meaning: 'screen'}]},
    {letter: 'Ю', sound: 'yu', name: 'Ю (ю)', image: '🎪', examples: [{word: 'Юла', meaning: 'spinning top'}, {word: 'Юмор', meaning: 'humor'}]},
    {letter: 'Я', sound: 'ya', name: 'Я (я)', image: '🍏', examples: [{word: 'Яблоко', meaning: 'apple'}, {word: 'Язык', meaning: 'language'}]}
  ],
  'en': [
    {letter: 'A', sound: 'eɪ', name: 'A', image: '🍎', examples: [{word: 'Apple', meaning: 'яблоко'}, {word: 'Ant', meaning: 'муравей'}]},
    {letter: 'B', sound: 'biː', name: 'B', image: '⚽', examples: [{word: 'Ball', meaning: 'мяч'}, {word: 'Book', meaning: 'книга'}]},
    {letter: 'C', sound: 'siː', name: 'C', image: '🐱', examples: [{word: 'Cat', meaning: 'кот'}, {word: 'Car', meaning: 'машина'}]},
    {letter: 'D', sound: 'diː', name: 'D', image: '🐶', examples: [{word: 'Dog', meaning: 'собака'}, {word: 'Door', meaning: 'дверь'}]},
    {letter: 'E', sound: 'iː', name: 'E', image: '🐘', examples: [{word: 'Elephant', meaning: 'слон'}, {word: 'Egg', meaning: 'яйцо'}]},
    {letter: 'F', sound: 'ɛf', name: 'F', image: '🐟', examples: [{word: 'Fish', meaning: 'рыба'}, {word: 'Flower', meaning: 'цветок'}]},
    {letter: 'G', sound: 'dʒiː', name: 'G', image: '🐐', examples: [{word: 'Goat', meaning: 'козёл'}, {word: 'Grass', meaning: 'трава'}]},
    {letter: 'H', sound: 'eɪtʃ', name: 'H', image: '🐴', examples: [{word: 'Horse', meaning: 'лошадь'}, {word: 'House', meaning: 'дом'}]},
    {letter: 'I', sound: 'aɪ', name: 'I', image: '🧊', examples: [{word: 'Ice', meaning: 'лёд'}, {word: 'Ink', meaning: 'чернила'}]},
    {letter: 'J', sound: 'dʒeɪ', name: 'J', image: '🐆', examples: [{word: 'Jaguar', meaning: 'ягуар'}, {word: 'Juice', meaning: 'сок'}]},
    {letter: 'K', sound: 'keɪ', name: 'K', image: '🐨', examples: [{word: 'Kangaroo', meaning: 'кенгуру'}, {word: 'Key', meaning: 'ключ'}]},
    {letter: 'L', sound: 'ɛl', name: 'L', image: '🦁', examples: [{word: 'Lion', meaning: 'лев'}, {word: 'Leaf', meaning: 'лист'}]},
    {letter: 'M', sound: 'ɛm', name: 'M', image: '🐒', examples: [{word: 'Monkey', meaning: 'обезьяна'}, {word: 'Moon', meaning: 'луна'}]},
    {letter: 'N', sound: 'ɛn', name: 'N', image: '🦉', examples: [{word: 'Nest', meaning: 'гнездо'}, {word: 'Nose', meaning: 'нос'}]},
    {letter: 'O', sound: 'oʊ', name: 'O', image: '🧡', examples: [{word: 'Orange', meaning: 'апельсин'}, {word: 'Owl', meaning: 'сова'}]},
    {letter: 'P', sound: 'piː', name: 'P', image: '🐼', examples: [{word: 'Panda', meaning: 'панда'}, {word: 'Pen', meaning: 'ручка'}]},
    {letter: 'Q', sound: 'kjuː', name: 'Q', image: '👸', examples: [{word: 'Queen', meaning: 'королева'}, {word: 'Quilt', meaning: 'одеяло'}]},
    {letter: 'R', sound: 'ɑːr', name: 'R', image: '🐰', examples: [{word: 'Rabbit', meaning: 'кролик'}, {word: 'Rose', meaning: 'роза'}]},
    {letter: 'S', sound: 'ɛs', name: 'S', image: '🐍', examples: [{word: 'Snake', meaning: 'змея'}, {word: 'Sun', meaning: 'солнце'}]},
    {letter: 'T', sound: 'tiː', name: 'T', image: '🐯', examples: [{word: 'Tiger', meaning: 'тигр'}, {word: 'Tree', meaning: 'дерево'}]},
    {letter: 'U', sound: 'juː', name: 'U', image: '☂️', examples: [{word: 'Umbrella', meaning: 'зонт'}, {word: 'Unicorn', meaning: 'единорог'}]},
    {letter: 'V', sound: 'viː', name: 'V', image: '🎻', examples: [{word: 'Violin', meaning: 'скрипка'}, {word: 'Van', meaning: 'фургон'}]},
    {letter: 'W', sound: 'ˈdʌbəljuː', name: 'W', image: '🐋', examples: [{word: 'Whale', meaning: 'кит'}, {word: 'Window', meaning: 'окно'}]},
    {letter: 'X', sound: 'ɛks', name: 'X', image: '🎹', examples: [{word: 'Xylophone', meaning: 'ксилофон'}, {word: 'X-ray', meaning: 'рентген'}]},
    {letter: 'Y', sound: 'waɪ', name: 'Y', image: '🐪', examples: [{word: 'Yak', meaning: 'як'}, {word: 'Yellow', meaning: 'жёлтый'}]},
    {letter: 'Z', sound: 'ziː', name: 'Z', image: '🦓', examples: [{word: 'Zebra', meaning: 'зебра'}, {word: 'Zoo', meaning: 'зоопарк'}]}
  ],
  'zh': [
    {letter: '一', sound: 'yī', name: '一 (one)', image: '1️⃣', examples: [{word: '一 (number)', meaning: 'один'}, {word: '一天 (yī tiān)', meaning: 'один день'}]},
    {letter: '二', sound: 'èr', name: '二 (two)', image: '2️⃣', examples: [{word: '二 (èr)', meaning: 'два'}, {word: '二月 (èr yuè)', meaning: 'февраль'}]},
    {letter: '三', sound: 'sān', name: '三 (three)', image: '3️⃣', examples: [{word: '三 (sān)', meaning: 'три'}, {word: '三明治 (sān míng zhì)', meaning: 'бутерброд'}]},
    {letter: '四', sound: 'sì', name: '四 (four)', image: '4️⃣', examples: [{word: '四 (sì)', meaning: 'четыре'}, {word: '四季 (sì jì)', meaning: 'четыре сезона'}]},
    {letter: '五', sound: 'wǔ', name: '五 (five)', image: '5️⃣', examples: [{word: '五 (wǔ)', meaning: 'пять'}, {word: '五月 (wǔ yuè)', meaning: 'май'}]},
    {letter: '六', sound: 'liù', name: '六 (six)', image: '6️⃣', examples: [{word: '六 (liù)', meaning: 'шесть'}, {word: '六月 (liù yuè)', meaning: 'июнь'}]},
    {letter: '七', sound: 'qī', name: '七 (seven)', image: '7️⃣', examples: [{word: '七 (qī)', meaning: 'семь'}, {word: '七月 (qī yuè)', meaning: 'июль'}]},
    {letter: '八', sound: 'bā', name: '八 (eight)', image: '8️⃣', examples: [{word: '八 (bā)', meaning: 'восемь'}, {word: '八月 (bā yuè)', meaning: 'август'}]},
    {letter: '九', sound: 'jiǔ', name: '九 (nine)', image: '9️⃣', examples: [{word: '九 (jiǔ)', meaning: 'девять'}, {word: '九月 (jiǔ yuè)', meaning: 'сентябрь'}]},
    {letter: '十', sound: 'shí', name: '十 (ten)', image: '🔟', examples: [{word: '十 (shí)', meaning: 'десять'}, {word: '十月 (shí yuè)', meaning: 'октябрь'}]},
    {letter: '人', sound: 'rén', name: '人 (person)', image: '👤', examples: [{word: '人 (rén)', meaning: 'человек'}, {word: '人生 (rénsheng)', meaning: 'жизнь'}]},
    {letter: '大', sound: 'dà', name: '大 (big)', image: '📏', examples: [{word: '大 (dà)', meaning: 'большой'}, {word: '大学 (dà xué)', meaning: 'университет'}]},
    {letter: '小', sound: 'xiǎo', name: '小 (small)', image: '📐', examples: [{word: '小 (xiǎo)', meaning: 'маленький'}, {word: '小孩 (xiǎo hái)', meaning: 'ребёнок'}]},
    {letter: '中', sound: 'zhōng', name: '中 (middle)', image: '🎯', examples: [{word: '中 (zhōng)', meaning: 'середина'}, {word: '中国 (zhōng guó)', meaning: 'Китай'}]},
    {letter: '国', sound: 'guó', name: '国 (country)', image: '🌍', examples: [{word: '国 (guó)', meaning: 'страна'}, {word: '国家 (guó jiā)', meaning: 'государство'}]},
    {letter: '家', sound: 'jiā', name: '家 (home)', image: '🏠', examples: [{word: '家 (jiā)', meaning: 'дом'}, {word: '家庭 (jiā tíng)', meaning: 'семья'}]},
    {letter: '水', sound: 'shuǐ', name: '水 (water)', image: '💧', examples: [{word: '水 (shuǐ)', meaning: 'вода'}, {word: '水果 (shuǐ guǒ)', meaning: 'фрукт'}]},
    {letter: '火', sound: 'huǒ', name: '火 (fire)', image: '🔥', examples: [{word: '火 (huǒ)', meaning: 'огонь'}, {word: '火车 (huǒ chē)', meaning: 'поезд'}]},
    {letter: '山', sound: 'shān', name: '山 (mountain)', image: '⛰️', examples: [{word: '山 (shān)', meaning: 'гора'}, {word: '山水 (shān shuǐ)', meaning: 'пейзаж'}]},
    {letter: '天', sound: 'tiān', name: '天 (sky)', image: '☁️', examples: [{word: '天 (tiān)', meaning: 'небо'}, {word: '天气 (tiān qì)', meaning: 'погода'}]},
    {letter: '地', sound: 'dì', name: '地 (earth)', image: '🌍', examples: [{word: '地 (dì)', meaning: 'земля'}, {word: '地方 (dì fāng)', meaning: 'место'}]},
    {letter: '日', sound: 'rì', name: '日 (sun)', image: '☀️', examples: [{word: '日 (rì)', meaning: 'солнце'}, {word: '日本 (rì běn)', meaning: 'Япония'}]},
    {letter: '月', sound: 'yuè', name: '月 (moon)', image: '🌙', examples: [{word: '月 (yuè)', meaning: 'луна'}, {word: '月亮 (yuè liàng)', meaning: 'луна'}]},
    {letter: '木', sound: 'mù', name: '木 (wood)', image: '🌳', examples: [{word: '木 (mù)', meaning: 'дерево'}, {word: '木头 (mù tou)', meaning: 'дерево'}]},
    {letter: '林', sound: 'lín', name: '林 (forest)', image: '🌲', examples: [{word: '林 (lín)', meaning: 'лес'}, {word: '森林 (sēn lín)', meaning: 'лес'}]},
    {letter: '草', sound: 'cǎo', name: '草 (grass)', image: '🌱', examples: [{word: '草 (cǎo)', meaning: 'трава'}, {word: '草地 (cǎo dì)', meaning: 'лужайка'}]},
    {letter: '花', sound: 'huā', name: '花 (flower)', image: '🌸', examples: [{word: '花 (huā)', meaning: 'цветок'}, {word: '花园 (huā yuán)', meaning: 'сад'}]},
    {letter: '鸟', sound: 'niǎo', name: '鸟 (bird)', image: '🐦', examples: [{word: '鸟 (niǎo)', meaning: 'птица'}, {word: '小鸟 (xiǎo niǎo)', meaning: 'птичка'}]},
    {letter: '鱼', sound: 'yú', name: '鱼 (fish)', image: '🐟', examples: [{word: '鱼 (yú)', meaning: 'рыба'}, {word: '金鱼 (jīn yú)', meaning: 'золотая рыбка'}]},
    {letter: '狗', sound: 'gǒu', name: '狗 (dog)', image: '🐶', examples: [{word: '狗 (gǒu)', meaning: 'собака'}, {word: '小狗 (xiǎo gǒu)', meaning: 'щенок'}]},
    {letter: '猫', sound: 'māo', name: '猫 (cat)', image: '🐱', examples: [{word: '猫 (māo)', meaning: 'кошка'}, {word: '小猫 (xiǎo māo)', meaning: 'котёнок'}]}
  ],
  'hi': [
    {letter: 'अ', sound: 'a', name: 'अ (अ - a)', image: '🅰️', examples: [{word: 'अक्षर (akṣar)', meaning: 'буква'}, {word: 'अपना (apnā)', meaning: 'своя'}]},
    {letter: 'आ', sound: 'ā', name: 'आ (आ - ā)', image: '🅰️', examples: [{word: 'आम (ām)', meaning: 'манго'}, {word: 'आज (āj)', meaning: 'сегодня'}]},
    {letter: 'इ', sound: 'i', name: 'इ (इ - i)', image: '🅱️', examples: [{word: 'इतिहास (itihās)', meaning: 'история'}, {word: 'इस (is)', meaning: 'этот'}]},
    {letter: 'ई', sound: 'ī', name: 'ई (ई - ī)', image: '🅱️', examples: [{word: 'ईंट (īṇṭ)', meaning: 'кирпич'}, {word: 'ईमानदारी (īmāndārī)', meaning: 'честность'}]},
    {letter: 'उ', sound: 'u', name: 'उ (उ - u)', image: '🅾️', examples: [{word: 'उपहार (upahār)', meaning: 'подарок'}, {word: 'उस (us)', meaning: 'тот'}]},
    {letter: 'ऊ', sound: 'ū', name: 'ऊ (ऊ - ū)', image: '🅾️', examples: [{word: 'ऊँट (ūṅṭ)', meaning: 'верблюд'}, {word: 'ऊपर (ūpar)', meaning: 'наверху'}]},
    {letter: 'ए', sound: 'e', name: 'ए (ए - e)', image: '🅴️', examples: [{word: 'एक (ek)', meaning: 'один'}, {word: 'एहसान (ehsān)', meaning: 'благодарность'}]},
    {letter: 'ऐ', sound: 'ai', name: 'ऐ (ऐ - ai)', image: '🅴️', examples: [{word: 'ऐसा (aisā)', meaning: 'такой'}, {word: 'ऐतिहासिक (aitihāsik)', meaning: 'исторический'}]},
    {letter: 'ओ', sound: 'o', name: 'ओ (ओ - o)', image: '🅾️', examples: [{word: 'ओस (os)', meaning: 'роса'}, {word: 'ओर (or)', meaning: 'и'}]},
    {letter: 'औ', sound: 'au', name: 'औ (औ - au)', image: '🅾️', examples: [{word: 'और (aur)', meaning: 'и'}, {word: 'औषधि (auṣadhi)', meaning: 'лекарство'}]},
    {letter: 'क', sound: 'ka', name: 'क (क - ka)', image: '🅺️', examples: [{word: 'कमरा (kamrā)', meaning: 'комната'}, {word: 'किताब (kitāb)', meaning: 'книга'}]},
    {letter: 'ख', sound: 'kha', name: 'ख (ख - kha)', image: '🅺️', examples: [{word: 'खाना (khānā)', meaning: 'еда'}, {word: 'खुशी (khushī)', meaning: 'радость'}]},
    {letter: 'ग', sound: 'ga', name: 'ग (ग - ga)', image: '🅶️', examples: [{word: 'गाना (gānā)', meaning: 'песня'}, {word: 'गर्मी (garmī)', meaning: 'жара'}]},
    {letter: 'घ', sound: 'gha', name: 'घ (घ - gha)', image: '🅶️', examples: [{word: 'घर (ghar)', meaning: 'дом'}, {word: 'घड़ी (gharī)', meaning: 'часы'}]},
    {letter: 'च', sound: 'ca', name: 'च (च - ca)', image: '🅲️', examples: [{word: 'चाय (cāy)', meaning: 'чай'}, {word: 'चाँद (cāṅd)', meaning: 'луна'}]},
    {letter: 'छ', sound: 'cha', name: 'छ (छ - cha)', image: '🅲️', examples: [{word: 'छाता (chātā)', meaning: 'зонт'}, {word: 'छोटा (choṭā)', meaning: 'маленький'}]},
    {letter: 'ज', sound: 'ja', name: 'ज (ज - ja)', image: '🅹️', examples: [{word: 'जल (jal)', meaning: 'вода'}, {word: 'जंगल (jangal)', meaning: 'лес'}]},
    {letter: 'झ', sound: 'jha', name: 'झ (झ - jha)', image: '🅹️', examples: [{word: 'झंडा (jhaṅḍā)', meaning: 'флаг'}, {word: 'झील (jhīl)', meaning: 'озеро'}]},
    {letter: 'ट', sound: 'ṭa', name: 'ट (ट - ṭa)', image: '🅣️', examples: [{word: 'टमाटर (ṭamāṭar)', meaning: 'помидор'}, {word: 'टहलना (ṭahalṅā)', meaning: 'гулять'}]},
    {letter: 'ठ', sound: 'ṭha', name: 'ठ (ठ - ṭha)', image: '🅣️', examples: [{word: 'ठंड (ṭhaṅḍ)', meaning: 'холод'}, {word: 'ठीक (ṭhīk)', meaning: 'правильно'}]},
    {letter: 'ड', sound: 'ḍa', name: 'ड (ड - ḍa)', image: '🅳️', examples: [{word: 'डर (ḍar)', meaning: 'страх'}, {word: 'डाक (ḍāk)', meaning: 'почта'}]},
    {letter: 'ढ', sound: 'ḍha', name: 'ढ (ढ - ḍha)', image: '🅳️', examples: [{word: 'ढोल (ḍhol)', meaning: 'барабан'}, {word: 'ढूंढना (ḍhūṅḍhnā)', meaning: 'искать'}]},
    {letter: 'त', sound: 'ta', name: 'त (त - ta)', image: '🅣️', examples: [{word: 'तारा (tārā)', meaning: 'звезда'}, {word: 'तेज (tej)', meaning: 'быстрый'}]},
    {letter: 'थ', sound: 'tha', name: 'थ (थ - tha)', image: '🅣️', examples: [{word: 'थाली (thālī)', meaning: 'тарелка'}, {word: 'थोड़ा (thoṛā)', meaning: 'немного'}]},
    {letter: 'द', sound: 'da', name: 'द (द - da)', image: '🅳️', examples: [{word: 'दरवाजा (darvājā)', meaning: 'дверь'}, {word: 'दिल (dil)', meaning: 'сердце'}]},
    {letter: 'ध', sound: 'dha', name: 'ध (ध - dha)', image: '🅳️', examples: [{word: 'धन (dhan)', meaning: 'богатство'}, {word: 'धूप (dhūp)', meaning: 'солнце'}]},
    {letter: 'न', sound: 'na', name: 'न (न - na)', image: '🅽️', examples: [{word: 'नदी (nadī)', meaning: 'река'}, {word: 'नाम (nām)', meaning: 'имя'}]},
    {letter: 'प', sound: 'pa', name: 'प (प - pa)', image: '🅿️', examples: [{word: 'पानी (pānī)', meaning: 'вода'}, {word: 'पेड़ (peṛ)', meaning: 'дерево'}]},
    {letter: 'फ', sound: 'pha', name: 'फ (फ - pha)', image: '🅿️', examples: [{word: 'फल (phal)', meaning: 'фрукт'}, {word: 'फूल (phūl)', meaning: 'цветок'}]},
    {letter: 'ब', sound: 'ba', name: 'ब (ब - ba)', image: '🅱️', examples: [{word: 'बच्चा (baccā)', meaning: 'ребёнок'}, {word: 'बाग (bāg)', meaning: 'сад'}]},
    {letter: 'भ', sound: 'bha', name: 'भ (भ - bha)', image: '🅱️', examples: [{word: 'भाई (bhāī)', meaning: 'брат'}, {word: 'भोजन (bhojan)', meaning: 'еда'}]},
    {letter: 'म', sound: 'ma', name: 'म (म - ma)', image: '🅼️', examples: [{word: 'माता (mātā)', meaning: 'мать'}, {word: 'मकान (makān)', meaning: 'дом'}]},
    {letter: 'य', sound: 'ya', name: 'य (य - ya)', image: '🆈️', examples: [{word: 'यात्रा (yātrā)', meaning: 'путешествие'}, {word: 'यह (yah)', meaning: 'это'}]},
    {letter: 'र', sound: 'ra', name: 'र (र - ra)', image: '🆁️', examples: [{word: 'रात (rāt)', meaning: 'ночь'}, {word: 'राम (rām)', meaning: 'Рама'}]},
    {letter: 'ल', sound: 'la', name: 'ल (ल - la)', image: '🅻️', examples: [{word: 'लड़का (laṛkā)', meaning: 'мальчик'}, {word: 'लाल (lāl)', meaning: 'красный'}]},
    {letter: 'व', sound: 'va', name: 'व (व - va)', image: '🆅️', examples: [{word: 'वृक्ष (vṛkṣ)', meaning: 'дерево'}, {word: 'वह (vah)', meaning: 'он'}]},
    {letter: 'श', sound: 'śa', name: 'श (श - śa)', image: '🆂️', examples: [{word: 'शहर (śahar)', meaning: 'город'}, {word: 'शिक्षा (śikṣā)', meaning: 'образование'}]},
    {letter: 'ष', sound: 'ṣa', name: 'ष (ष - ṣa)', image: '🆂️', examples: [{word: 'षट्कोण (ṣaṭkoṇ)', meaning: 'шестиугольник'}, {word: 'षोडश (ṣoḍaś)', meaning: 'шестнадцать'}]},
    {letter: 'स', sound: 'sa', name: 'स (स - sa)', image: '🆂️', examples: [{word: 'सपना (sapnā)', meaning: 'сон'}, {word: 'सूरज (sūraj)', meaning: 'солнце'}]},
    {letter: 'ह', sound: 'ha', name: 'ह (ह - ha)', image: '🅷️', examples: [{word: 'हाथ (hāth)', meaning: 'рука'}, {word: 'हवा (havā)', meaning: 'ветер'}]}
  ],
  'es': [
    {letter: 'A', sound: 'a', name: 'A', image: '🍎', examples: [{word: 'Agua', meaning: 'вода'}, {word: 'Árbol', meaning: 'дерево'}]},
    {letter: 'B', sound: 'be', name: 'B', image: '⚽', examples: [{word: 'Bebé', meaning: 'младенец'}, {word: 'Bueno', meaning: 'хороший'}]},
    {letter: 'C', sound: 'se', name: 'C', image: '🐱', examples: [{word: 'Casa', meaning: 'дом'}, {word: 'Carro', meaning: 'машина'}]},
    {letter: 'D', sound: 'de', name: 'D', image: '🐶', examples: [{word: 'Día', meaning: 'день'}, {word: 'Dulce', meaning: 'сладкий'}]},
    {letter: 'E', sound: 'e', name: 'E', image: '🐘', examples: [{word: 'Elefante', meaning: 'слон'}, {word: 'Estrella', meaning: 'звезда'}]},
    {letter: 'F', sound: 'efe', name: 'F', image: '🐟', examples: [{word: 'Flor', meaning: 'цветок'}, {word: 'Fruta', meaning: 'фрукт'}]},
    {letter: 'G', sound: 'ge', name: 'G', image: '🐐', examples: [{word: 'Gato', meaning: 'кот'}, {word: 'Grande', meaning: 'большой'}]},
    {letter: 'H', sound: 'ache', name: 'H', image: '🐴', examples: [{word: 'Hombre', meaning: 'мужчина'}, {word: 'Hermano', meaning: 'брат'}]},
    {letter: 'I', sound: 'i', name: 'I', image: '🧊', examples: [{word: 'Isla', meaning: 'остров'}, {word: 'Igual', meaning: 'равный'}]},
    {letter: 'J', sound: 'jota', name: 'J', image: '🐆', examples: [{word: 'Jardín', meaning: 'сад'}, {word: 'Juguete', meaning: 'игрушка'}]},
    {letter: 'K', sound: 'ka', name: 'K', image: '🐨', examples: [{word: 'Kiwi', meaning: 'киви'}, {word: 'Kilo', meaning: 'килограмм'}]},
    {letter: 'L', sound: 'ele', name: 'L', image: '🦁', examples: [{word: 'Luna', meaning: 'луна'}, {word: 'Libro', meaning: 'книга'}]},
    {letter: 'M', sound: 'eme', name: 'M', image: '🐒', examples: [{word: 'Mamá', meaning: 'мама'}, {word: 'Mesa', meaning: 'стол'}]},
    {letter: 'N', sound: 'ene', name: 'N', image: '🦉', examples: [{word: 'Naranja', meaning: 'апельсин'}, {word: 'Niño', meaning: 'мальчик'}]},
    {letter: 'Ñ', sound: 'eñe', name: 'Ñ', image: '🦉', examples: [{word: 'Niño', meaning: 'ребёнок'}, {word: 'Español', meaning: 'испанский'}]},
    {letter: 'O', sound: 'o', name: 'O', image: '🧡', examples: [{word: 'Oso', meaning: 'медведь'}, {word: 'Ojo', meaning: 'глаз'}]},
    {letter: 'P', sound: 'pe', name: 'P', image: '🐼', examples: [{word: 'Perro', meaning: 'собака'}, {word: 'Pan', meaning: 'хлеб'}]},
    {letter: 'Q', sound: 'cu', name: 'Q', image: '👸', examples: [{word: 'Queso', meaning: 'сыр'}, {word: 'Quince', meaning: 'пятнадцать'}]},
    {letter: 'R', sound: 'ere', name: 'R', image: '🐰', examples: [{word: 'Rosa', meaning: 'роза'}, {word: 'Rojo', meaning: 'красный'}]},
    {letter: 'S', sound: 'ese', name: 'S', image: '🐍', examples: [{word: 'Sol', meaning: 'солнце'}, {word: 'Silla', meaning: 'стул'}]},
    {letter: 'T', sound: 'te', name: 'T', image: '🐯', examples: [{word: 'Tigre', meaning: 'тигр'}, {word: 'Taza', meaning: 'чашка'}]},
    {letter: 'U', sound: 'u', name: 'U', image: '☂️', examples: [{word: 'Uno', meaning: 'один'}, {word: 'Uva', meaning: 'виноград'}]},
    {letter: 'V', sound: 'uve', name: 'V', image: '🎻', examples: [{word: 'Vaca', meaning: 'корова'}, {word: 'Verde', meaning: 'зелёный'}]},
    {letter: 'W', sound: 'doble uve', name: 'W', image: '🐋', examples: [{word: 'Wáter', meaning: 'туалет'}, {word: 'Wifi', meaning: 'вайфай'}]},
    {letter: 'X', sound: 'equis', name: 'X', image: '🎹', examples: [{word: 'Xilófono', meaning: 'ксилофон'}, {word: 'Éxito', meaning: 'успех'}]},
    {letter: 'Y', sound: 'i griega', name: 'Y', image: '🐪', examples: [{word: 'Yogur', meaning: 'йогурт'}, {word: 'Yate', meaning: 'яхта'}]},
    {letter: 'Z', sound: 'zeta', name: 'Z', image: '🦓', examples: [{word: 'Zebra', meaning: 'зебра'}, {word: 'Zapato', meaning: 'ботинок'}]}
  ],
  'fr': [
    {letter: 'A', sound: 'a', name: 'A', image: '🍎', examples: [{word: 'Ami', meaning: 'друг'}, {word: 'Arbre', meaning: 'дерево'}]},
    {letter: 'B', sound: 'be', name: 'B', image: '⚽', examples: [{word: 'Bébé', meaning: 'младенец'}, {word: 'Bonjour', meaning: 'здравствуйте'}]},
    {letter: 'C', sound: 'se', name: 'C', image: '🐱', examples: [{word: 'Chat', meaning: 'кот'}, {word: 'Chien', meaning: 'собака'}]},
    {letter: 'D', sound: 'de', name: 'D', image: '🐶', examples: [{word: 'Dame', meaning: 'дама'}, {word: 'Droit', meaning: 'право'}]},
    {letter: 'E', sound: 'ə', name: 'E', image: '🐘', examples: [{word: 'École', meaning: 'школа'}, {word: 'Étoile', meaning: 'звезда'}]},
    {letter: 'F', sound: 'ɛf', name: 'F', image: '🐟', examples: [{word: 'Fleur', meaning: 'цветок'}, {word: 'Frère', meaning: 'брат'}]},
    {letter: 'G', sound: 'ʒe', name: 'G', image: '🐐', examples: [{word: 'Garçon', meaning: 'мальчик'}, {word: 'Grande', meaning: 'большой'}]},
    {letter: 'H', sound: 'aʃ', name: 'H', image: '🐴', examples: [{word: 'Homme', meaning: 'мужчина'}, {word: 'Hôpital', meaning: 'больница'}]},
    {letter: 'I', sound: 'i', name: 'I', image: '🧊', examples: [{word: 'Ile', meaning: 'остров'}, {word: 'Image', meaning: 'изображение'}]},
    {letter: 'J', sound: 'ʒi', name: 'J', image: '🐆', examples: [{word: 'Jour', meaning: 'день'}, {word: 'Jeu', meaning: 'игра'}]},
    {letter: 'K', sound: 'ka', name: 'K', image: '🐨', examples: [{word: 'Kangourou', meaning: 'кенгуру'}, {word: 'Kiwi', meaning: 'киви'}]},
    {letter: 'L', sound: 'ɛl', name: 'L', image: '🦁', examples: [{word: 'Lune', meaning: 'луна'}, {word: 'Livre', meaning: 'книга'}]},
    {letter: 'M', sound: 'ɛm', name: 'M', image: '🐒', examples: [{word: 'Maman', meaning: 'мама'}, {word: 'Maison', meaning: 'дом'}]},
    {letter: 'N', sound: 'ɛn', name: 'N', image: '🦉', examples: [{word: 'Neige', meaning: 'снег'}, {word: 'Noir', meaning: 'чёрный'}]},
    {letter: 'O', sound: 'o', name: 'O', image: '🧡', examples: [{word: 'Oiseau', meaning: 'птица'}, {word: 'Orange', meaning: 'апельсин'}]},
    {letter: 'P', sound: 'pe', name: 'P', image: '🐼', examples: [{word: 'Papa', meaning: 'папа'}, {word: 'Pain', meaning: 'хлеб'}]},
    {letter: 'Q', sound: 'ky', name: 'Q', image: '👸', examples: [{word: 'Quatre', meaning: 'четыре'}, {word: 'Question', meaning: 'вопрос'}]},
    {letter: 'R', sound: 'ɛʁ', name: 'R', image: '🐰', examples: [{word: 'Rouge', meaning: 'красный'}, {word: 'Rose', meaning: 'роза'}]},
    {letter: 'S', sound: 'ɛs', name: 'S', image: '🐍', examples: [{word: 'Soleil', meaning: 'солнце'}, {word: 'Souris', meaning: 'мышь'}]},
    {letter: 'T', sound: 'te', name: 'T', image: '🐯', examples: [{word: 'Table', meaning: 'стол'}, {word: 'Tigre', meaning: 'тигр'}]},
    {letter: 'U', sound: 'y', name: 'U', image: '☂️', examples: [{word: 'Univers', meaning: 'вселенная'}, {word: 'Unique', meaning: 'уникальный'}]},
    {letter: 'V', sound: 've', name: 'V', image: '🎻', examples: [{word: 'Vert', meaning: 'зелёный'}, {word: 'Voiture', meaning: 'машина'}]},
    {letter: 'W', sound: 'dubləve', name: 'W', image: '🐋', examples: [{word: 'Wagon', meaning: 'вагон'}, {word: 'Web', meaning: 'веб'}]},
    {letter: 'X', sound: 'iks', name: 'X', image: '🎹', examples: [{word: 'Xylophone', meaning: 'ксилофон'}, {word: 'Examen', meaning: 'экзамен'}]},
    {letter: 'Y', sound: 'iɡʁɛk', name: 'Y', image: '🐪', examples: [{word: 'Yaourt', meaning: 'йогурт'}, {word: 'Yoga', meaning: 'йога'}]},
    {letter: 'Z', sound: 'zɛd', name: 'Z', image: '🦓', examples: [{word: 'Zèbre', meaning: 'зебра'}, {word: 'Zoo', meaning: 'зоопарк'}]}
  ],
  'ar': [
    {letter: 'ا', sound: 'alif', name: 'ا (alif)', image: '👤', examples: [{word: 'أب (ab)', meaning: 'отец'}, {word: 'أم (um)', meaning: 'мать'}]},
    {letter: 'ب', sound: 'ba', name: 'ب (ba)', image: '🏠', examples: [{word: 'بيت (bayt)', meaning: 'дом'}, {word: 'بحر (bahr)', meaning: 'море'}]},
    {letter: 'ت', sound: 'ta', name: 'ت (ta)', image: '🍎', examples: [{word: 'تفاحة (tuffaha)', meaning: 'яблоко'}, {word: 'تمر (tamr)', meaning: 'финик'}]},
    {letter: 'ث', sound: 'tha', name: 'ث (tha)', image: '3️⃣', examples: [{word: 'ثلاثة (thalatha)', meaning: 'три'}, {word: 'ثعلب (tha\'lab)', meaning: 'лиса'}]},
    {letter: 'ج', sound: 'jim', name: 'ج (jim)', image: '🏫', examples: [{word: 'جامعة (jamia)', meaning: 'университет'}, {word: 'جمل (jamal)', meaning: 'верблюд'}]},
    {letter: 'ح', sound: 'ha', name: 'ح (ha)', image: '🐾', examples: [{word: 'حيوان (hayawan)', meaning: 'животное'}, {word: 'حب (hubb)', meaning: 'любовь'}]},
    {letter: 'خ', sound: 'kha', name: 'خ (kha)', image: '🍞', examples: [{word: 'خبز (khubz)', meaning: 'хлеб'}, {word: 'خيل (khayl)', meaning: 'лошадь'}]},
    {letter: 'د', sound: 'dal', name: 'د (dal)', image: '🏠', examples: [{word: 'دار (dar)', meaning: 'дом'}, {word: 'دجاجة (dajaja)', meaning: 'курица'}]},
    {letter: 'ذ', sound: 'dhal', name: 'ذ (dhal)', image: '🪙', examples: [{word: 'ذهب (dhahab)', meaning: 'золото'}, {word: 'ذئب (dhi\'b)', meaning: 'волк'}]},
    {letter: 'ر', sound: 'ra', name: 'ر (ra)', image: '💨', examples: [{word: 'ريح (rih)', meaning: 'ветер'}, {word: 'رجل (rajul)', meaning: 'мужчина'}]},
    {letter: 'ز', sound: 'zay', name: 'ز (zay)', image: '🧈', examples: [{word: 'زيت (zayt)', meaning: 'масло'}, {word: 'زرافة (zarafa)', meaning: 'жираф'}]},
    {letter: 'س', sound: 'sin', name: 'س (sin)', image: '🐟', examples: [{word: 'سمك (samak)', meaning: 'рыба'}, {word: 'شمس (shams)', meaning: 'солнце'}]},
    {letter: 'ش', sound: 'shin', name: 'ش (shin)', image: '🌳', examples: [{word: 'شجرة (shajara)', meaning: 'дерево'}, {word: 'شاي (shay)', meaning: 'чай'}]},
    {letter: 'ص', sound: 'sad', name: 'ص (sad)', image: '🏜️', examples: [{word: 'صحراء (sahra)', meaning: 'пустыня'}, {word: 'صباح (sabah)', meaning: 'утро'}]},
    {letter: 'ض', sound: 'dad', name: 'ض (dad)', image: '💡', examples: [{word: 'ضوء (daw)', meaning: 'свет'}, {word: 'ضيف (dayf)', meaning: 'гость'}]},
    {letter: 'ط', sound: 'ta', name: 'ط (ta)', image: '✈️', examples: [{word: 'طائرة (taira)', meaning: 'самолёт'}, {word: 'طفل (tifil)', meaning: 'ребёнок'}]},
    {letter: 'ظ', sound: 'dha', name: 'ظ (dha)', image: '🌑', examples: [{word: 'ظهر (dhahr)', meaning: 'спина'}, {word: 'ظلام (dhulma)', meaning: 'темнота'}]},
    {letter: 'ع', sound: 'ayn', name: 'ع (ayn)', image: '👁️', examples: [{word: 'عين (ayn)', meaning: 'глаз'}, {word: 'علم (ilm)', meaning: 'знание'}]},
    {letter: 'غ', sound: 'ghayn', name: 'غ (ghayn)', image: '🌲', examples: [{word: 'غابة (ghaba)', meaning: 'лес'}, {word: 'غداء (ghada)', meaning: 'обед'}]},
    {letter: 'ف', sound: 'fa', name: 'ف (fa)', image: '🍇', examples: [{word: 'فواكه (fawakih)', meaning: 'фрукты'}, {word: 'فنجان (finjan)', meaning: 'чашка'}]},
    {letter: 'ق', sound: 'qaf', name: 'ق (qaf)', image: '🌙', examples: [{word: 'قمر (qamar)', meaning: 'луна'}, {word: 'قلب (qalb)', meaning: 'сердце'}]},
    {letter: 'ك', sound: 'kaf', name: 'ك (kaf)', image: '📖', examples: [{word: 'كتاب (kitab)', meaning: 'книга'}, {word: 'كلب (kalb)', meaning: 'собака'}]},
    {letter: 'ل', sound: 'lam', name: 'ل (lam)', image: '🌙', examples: [{word: 'ليل (layl)', meaning: 'ночь'}, {word: 'ليمون (laymun)', meaning: 'лимон'}]},
    {letter: 'م', sound: 'mim', name: 'م (mim)', image: '💧', examples: [{word: 'ماء (ma)', meaning: 'вода'}, {word: 'موز (mawz)', meaning: 'банан'}]},
    {letter: 'ن', sound: 'nun', name: 'ن (nun)', image: '⭐', examples: [{word: 'نجمة (najma)', meaning: 'звезда'}, {word: 'نار (nar)', meaning: 'огонь'}]},
    {letter: 'ه', sound: 'ha', name: 'ه (ha)', image: '💨', examples: [{word: 'هواء (hawa)', meaning: 'воздух'}, {word: 'هدية (hadia)', meaning: 'подарок'}]},
    {letter: 'و', sound: 'waw', name: 'و (waw)', image: '🌹', examples: [{word: 'وردة (warda)', meaning: 'роза'}, {word: 'ولد (walad)', meaning: 'мальчик'}]},
    {letter: 'ي', sound: 'ya', name: 'ي (ya)', image: '☀️', examples: [{word: 'يوم (yawm)', meaning: 'день'}, {word: 'يد (yad)', meaning: 'рука'}]}
  ],
  'tg': [
    {letter: 'А', sound: 'a', name: 'А (a)', image: '🍎', examples: [{word: 'Абу (abu)', meaning: 'источник'}, {word: 'Аб (ab)', meaning: 'вода'}]},
    {letter: 'Б', sound: 'b', name: 'Б (b)', image: '⚽', examples: [{word: 'Бача (bacha)', meaning: 'мальчик'}, {word: 'Ба (ba)', meaning: 'ветер'}]},
    {letter: 'В', sound: 'v', name: 'В (v)', image: '🎻', examples: [{word: 'Ватан (vatan)', meaning: 'родина'}, {word: 'Ва (va)', meaning: 'и'}]},
    {letter: 'Г', sound: 'g', name: 'Г (g)', image: '🐐', examples: [{word: 'Гул (gul)', meaning: 'цветок'}, {word: 'Гап (gap)', meaning: 'разговор'}]},
    {letter: 'Д', sound: 'd', name: 'Д (d)', image: '🐶', examples: [{word: 'Дар (dar)', meaning: 'дверь'}, {word: 'Давлат (davlat)', meaning: 'государство'}]},
    {letter: 'Е', sound: 'e', name: 'Е (e)', image: '🐘', examples: [{word: 'Ер (yer)', meaning: 'земля'}, {word: 'Ед (yed)', meaning: 'один'}]},
    {letter: 'Ё', sound: 'yo', name: 'Ё (ё)', image: '🧡', examples: [{word: 'Ёз (yoz)', meaning: 'озеро'}, {word: 'Ёрдам (yordam)', meaning: 'помощь'}]},
    {letter: 'Ж', sound: 'zh', name: 'Ж (ж)', image: '🦓', examples: [{word: 'Жавон (zhavon)', meaning: 'молодой'}, {word: 'Жаҳон (jahon)', meaning: 'мир'}]},
    {letter: 'З', sound: 'z', name: 'З (з)', image: '🦓', examples: [{word: 'Зан (zan)', meaning: 'женщина'}, {word: 'Замин (zamin)', meaning: 'земля'}]},
    {letter: 'И', sound: 'i', name: 'И (и)', image: '🧊', examples: [{word: 'Им (im)', meaning: 'знак'}, {word: 'Ид (id)', meaning: 'праздник'}]},
    {letter: 'Й', sound: 'y', name: 'Й (й)', image: '🐪', examples: [{word: 'Йил (yil)', meaning: 'год'}, {word: 'Йулдуз (yulduz)', meaning: 'звезда'}]},
    {letter: 'К', sound: 'k', name: 'К (к)', image: '🐨', examples: [{word: 'Китоб (kitob)', meaning: 'книга'}, {word: 'Кам (kam)', meaning: 'мало'}]},
    {letter: 'Л', sound: 'l', name: 'Л (л)', image: '🦁', examples: [{word: 'Лаби (lab)', meaning: 'губа'}, {word: 'Лола (lola)', meaning: 'тюльпан'}]},
    {letter: 'М', sound: 'm', name: 'М (м)', image: '🐒', examples: [{word: 'Ман (man)', meaning: 'я'}, {word: 'Меҳр (mehr)', meaning: 'любовь'}]},
    {letter: 'Н', sound: 'n', name: 'Н (н)', image: '🦉', examples: [{word: 'Нон (non)', meaning: 'хлеб'}, {word: 'Нам (nam)', meaning: 'влажный'}]},
    {letter: 'О', sound: 'o', name: 'О (о)', image: '🧡', examples: [{word: 'Одам (odam)', meaning: 'человек'}, {word: 'Орзу (orzu)', meaning: 'мечта'}]},
    {letter: 'П', sound: 'p', name: 'П (п)', image: '🐼', examples: [{word: 'Падам (padam)', meaning: 'отец'}, {word: 'Пул (pul)', meaning: 'деньги'}]},
    {letter: 'Р', sound: 'r', name: 'Р (р)', image: '🐰', examples: [{word: 'Ранг (rang)', meaning: 'цвет'}, {word: 'Рост (rost)', meaning: 'правда'}]},
    {letter: 'С', sound: 's', name: 'С (с)', image: '🐍', examples: [{word: 'Сабз (sabz)', meaning: 'зелёный'}, {word: 'Салом (salom)', meaning: 'привет'}]},
    {letter: 'Т', sound: 't', name: 'Т (т)', image: '🐯', examples: [{word: 'Тан (tan)', meaning: 'тело'}, {word: 'Тош (tosh)', meaning: 'камень'}]},
    {letter: 'У', sound: 'u', name: 'У (у)', image: '☂️', examples: [{word: 'Уй (uy)', meaning: 'дом'}, {word: 'Умр (umr)', meaning: 'жизнь'}]},
    {letter: 'Ф', sound: 'f', name: 'Ф (ф)', image: '🐟', examples: [{word: 'Фал (fal)', meaning: 'знамение'}, {word: 'Фарзанд (farzand)', meaning: 'ребёнок'}]},
    {letter: 'Х', sound: 'kh', name: 'Х (х)', image: '🐴', examples: [{word: 'Хона (khona)', meaning: 'дом'}, {word: 'Халқ (khalq)', meaning: 'народ'}]},
    {letter: 'Ч', sound: 'ch', name: 'Ч (ч)', image: '🐱', examples: [{word: 'Чор (chor)', meaning: 'четыре'}, {word: 'Чой (choy)', meaning: 'чай'}]},
    {letter: 'Ш', sound: 'sh', name: 'Ш (ш)', image: '🐍', examples: [{word: 'Шаҳр (shahr)', meaning: 'город'}, {word: 'Шам (sham)', meaning: 'свеча'}]},
    {letter: 'Ъ', sound: 'hard sign', name: 'Ъ (ъ)', image: '🚪', examples: [{word: 'Подъезд (podyezd)', meaning: 'подъезд'}, {word: 'Съезд (syezd)', meaning: 'съезд'}]},
    {letter: 'Э', sound: 'e', name: 'Э (э)', image: '🐘', examples: [{word: 'Эр (er)', meaning: 'мужчина'}, {word: 'Эрта (erta)', meaning: 'утро'}]},
    {letter: 'Ю', sound: 'yu', name: 'Ю (ю)', image: '🐪', examples: [{word: 'Юлдуз (yulduz)', meaning: 'звезда'}, {word: 'Юрак (yurak)', meaning: 'сердце'}]},
    {letter: 'Я', sound: 'ya', name: 'Я (я)', image: '🍎', examples: [{word: 'Яхши (yakhshi)', meaning: 'хороший'}, {word: 'Ям (yam)', meaning: 'рана'}]}
  ]
};

let currentLetterIdx = 0;

function goAlphabet(){
  document.getElementById('menu').style.display='none';
  document.getElementById('alphabet').style.display='block';
  document.getElementById('letterCard').style.display='none';
  let grid = document.getElementById('alphabetGrid');
  grid.innerHTML = '';
  let alph = alphabets[currentLanguage] || [];
  alph.forEach((item, idx) => {
    let btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = item.letter;
    btn.dataset.letter = item.letter;
    
    // Добавляем визуальный индикатор статуса
    const status = progress.getLetterStatus(currentLanguage, item.letter);
    if (status === 'completed') {
      btn.style.background = '#d4edda';
      btn.style.color = '#155724';
      btn.innerHTML = `${item.letter} ✅`;
    } else if (status === 'unlocked') {
      btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      btn.style.color = '#fff';
    } else {
      btn.style.opacity = '0.5';
      btn.style.background = '#ddd';
      btn.style.color = '#999';
      btn.style.cursor = 'not-allowed';
    }
    
    btn.onclick = () => {
      if (status !== 'locked') showLetter(idx);
    };
    grid.appendChild(btn);
  });
}

function showLetter(idx){
  let item = alphabets[currentLanguage][idx];
  document.getElementById('alphabet').style.display='none';
  document.getElementById('letterCard').style.display='block';
  currentLetterIdx = idx;
  document.getElementById('letterDisplay').textContent = item.letter;
  document.getElementById('letterImage').innerText = item.image;
  document.getElementById('letterName').textContent = item.name;
  document.getElementById('letterSound').textContent = 'Произношение: ' + item.sound;
  let exDiv = document.getElementById('examplesDiv');
  exDiv.innerHTML = '';
  (item.examples || []).forEach(ex => {
    let div = document.createElement('div');
    div.className = 'example-word';
    div.innerHTML = '<div class=\"word\">' + ex.word + '</div><div class=\"meaning\">' + ex.meaning + '</div>';
    exDiv.appendChild(div);
  });
}

function playLetterSound(){
  let item = alphabets[currentLanguage][currentLetterIdx];
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    
    // Произносим букву 3 раза с паузой между ними
    const repeatTimes = 1;
    for(let i = 0; i < repeatTimes; i++){
      setTimeout(() => {
        let utterance = new SpeechSynthesisUtterance(item.letter);
        utterance.lang = currentLanguage === 'ru' ? 'ru-RU' : currentLanguage === 'en' ? 'en-US' : currentLanguage === 'zh' ? 'zh-CN' : currentLanguage === 'hi' ? 'hi-IN' : currentLanguage === 'es' ? 'es-ES' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'ar' ? 'ar-SA' : 'tg';
        utterance.rate = 1;  // Медленнее для лучшего произношения
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        speechSynthesis.speak(utterance);
      }, i * 1500); // 1.5 секунды между повторениями
    }
  }
}

// Переменные для записи
let mediaRecorder = null;
let audioChunks = [];

async function startRecording() {
  try {
    audioChunks = [];
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };
    
    mediaRecorder.onstart = () => {
      document.getElementById('recordBtn').style.display = 'none';
      document.getElementById('stopBtn').style.display = 'inline-block';
    };
    
    mediaRecorder.onstop = () => {
      document.getElementById('stopBtn').style.display = 'none';
      document.getElementById('recordBtn').style.display = 'inline-block';
      recognizeRecording();
    };
    
    mediaRecorder.start();
  } catch(error) {
    alert('Ошибка доступа к микрофону: ' + error.message);
  }
}

function stopRecording() {
  if(mediaRecorder) {
    mediaRecorder.stop();
  }
}

function recognizeRecording() {
  const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
  
  // Используем Web Speech API для распознавания речи
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SpeechRecognition) {
    alert('Ваш браузер не поддерживает распознавание речи');
    return;
  }
  
  const recognition = new SpeechRecognition();
  recognition.lang = currentLanguage === 'ru' ? 'ru-RU' : currentLanguage === 'en' ? 'en-US' : currentLanguage === 'zh' ? 'zh-CN' : currentLanguage === 'hi' ? 'hi-IN' : currentLanguage === 'es' ? 'es-ES' : currentLanguage === 'fr' ? 'fr-FR' : currentLanguage === 'ar' ? 'ar-SA' : 'tg';
  recognition.continuous = false;
  recognition.interimResults = false;
  
  recognition.onresult = (event) => {
    let transcript = '';
    for(let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    
    const item = alphabets[currentLanguage][currentLetterIdx];
    const resultDiv = document.getElementById('recordingResult');
    const resultText = document.getElementById('resultText');
    
    // Проверяем совпадение произнесённого звука с буквой
    const isCorrect = transcript.toLowerCase().includes(item.letter.toLowerCase()) || 
                     transcript.toLowerCase().includes(item.sound.toLowerCase());
    
    if(isCorrect) {
      resultDiv.style.background = '#d4edda';
      resultDiv.style.borderLeft = '4px solid #28a745';
      resultText.innerHTML = `✅ <strong>Отлично!</strong> Вы правильно произнесли букву "${item.letter}"! Ваше произношение: "${transcript}"`;
    } else {
      resultDiv.style.background = '#f8d7da';
      resultDiv.style.borderLeft = '4px solid #dc3545';
      resultText.innerHTML = `❌ <strong>Попробуйте ещё раз!</strong> Вы произнесли: "${transcript}". Нужно произнести: "${item.letter}" (${item.sound})`;
    }
    
    resultDiv.style.display = 'block';
  };
  
  recognition.onerror = (event) => {
    const resultDiv = document.getElementById('recordingResult');
    const resultText = document.getElementById('resultText');
    resultDiv.style.background = '#f8d7da';
    resultDiv.style.borderLeft = '4px solid #dc3545';
    resultText.innerHTML = `⚠️ Ошибка распознавания: ${event.error}. Пожалуйста, говорите чётче.`;
    resultDiv.style.display = 'block';
  };
  
  // Пытаемся распознать из потока микрофона в реальном времени
  const SpeechRecognitionForMic = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionMic = new SpeechRecognitionForMic();
  recognitionMic.lang = recognition.lang;
  recognitionMic.continuous = false;
  recognitionMic.start();
}
function selectLanguage(code){
  currentLanguage = code;
  loadStats();
  updateLevelDisplay();
  document.getElementById('languageSelect').style.display='none';
  document.getElementById('menu').style.display='block';
}

function goLessons(){
  document.getElementById('menu').style.display='none';
  document.getElementById('lessons').style.display='block';
  
  let list = document.getElementById('lessonsList');
  list.innerHTML = '';
  getLangData().lessons.forEach(lesson => {
    let btn = document.createElement('div');
    btn.className = 'lesson-item';
    btn.innerHTML = `<div style="font-size:24px">${lesson.icon}</div><h5>${lesson.title}</h5><p>${lesson.tasks.length} упр.</p>`;
    btn.onclick = () => showTheory(lesson.id);
    list.appendChild(btn);
  });
}

function showTheory(lessonId){
  currentLesson = getLangData().lessons.find(l => l.id === lessonId);
  document.getElementById('lessons').style.display='none';
  document.getElementById('theory-view').style.display='block';
  
  document.getElementById('theoryTitle').textContent = currentLesson.title;
  document.getElementById('theoryContent').innerHTML = currentLesson.theory;
}

function startLesson(){
  current = 0;
  answers = [];
  currentTasks = currentLesson?.tasks || [];
  lessonMode = true;
  
  document.getElementById('theory-view').style.display='none';
  document.getElementById('game').style.display='block';
  load();
}

function start(difficulty){
  current = 0;
  answers = [];
  lessonMode = false;
  
  let filteredTasks = getLangData().tasks;
  if(difficulty !== 'all'){
    filteredTasks = filteredTasks.filter(t => t.difficulty === difficulty);
  }
  
  currentTasks = shuffle(filteredTasks);
  document.getElementById('menu').style.display='none';
  document.getElementById('game').style.display='block';
  load();
}

function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

function load(){
  answers = [];
  const item = currentTasks[current];
  let s = item.text.split('');
  
  item.gaps.forEach((g, i) => {
    s[g.i] = `<span class="gap" data-gap="${i}">_</span>`;
  });
  
  document.getElementById('sentence').innerHTML = s.join('');
  document.getElementById('progress').textContent = `${current + 1}/${currentTasks.length}`;
  
  const choices = document.getElementById('choices');
  choices.innerHTML = '';
  
  item.gaps.forEach((g, i) => {
    let row = document.createElement('div');
    row.className = 'row';
    
    shuffle(g.options).forEach(opt => {
      let chip = document.createElement('div');
      chip.className = 'chip';
      chip.innerText = opt;
      chip.onclick = () => select(i, opt, chip);
      row.appendChild(chip);
    });
    
    choices.appendChild(row);
  });
  
  document.getElementById('result').innerHTML = '';
}

function select(i, val, el){
  let chips = el.parentElement.querySelectorAll('.chip');
  chips.forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  answers[i] = val;
  document.querySelector(`[data-gap='${i}']`).innerText = val;
}

function check(){
  const item = currentTasks[current];
  let errors = 0, res = '';
  
  item.gaps.forEach((g, i) => {
    let gap = document.querySelector(`[data-gap='${i}']`);
    
    if(answers[i] === g.correct){
      gap.style.color = 'green';
      res += '<div class="good">✔ Верно!</div>';
    }else{
      gap.style.color = 'red';
      res += `<div class="bad">✖ Ошибка! Ответ: <strong>${g.correct}</strong></div>`;
      errors++;
    }
  });
  
  totalAttempts++;
  if(errors === 0) {
    correctCount++;
    res = '<div class="good">🎉 Отлично!</div>' + res;
  }
  saveStats();
  
  document.getElementById('result').innerHTML = res;
}

function showAnswer(){
  const item = currentTasks[current];
  item.gaps.forEach((g, i) => {
    let gap = document.querySelector(`[data-gap='${i}']`);
    gap.innerText = g.correct;
    gap.style.color = 'green';
  });
}

function toggleAudio(){
  const item = currentTasks[current];
  const correctAnswers = item.gaps.map(g => g.correct).join(' ');
  const message = `Ответ: ${correctAnswers}`;

  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = currentLanguage === 'ru' ? 'ru-RU' : 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }
}

function next(){
  current++;
  if(current >= currentTasks.length){
    showResults();
    return;
  }
  
  document.getElementById('result').innerHTML = '';
  const gaps = document.querySelectorAll('.gap');
  gaps.forEach(gap => {
    gap.style.color = '';
    gap.innerText = '_';
  });
  
  load();
}

function showResults(){
  document.getElementById('game').style.display = 'none';
  document.getElementById('results').style.display = 'block';
  
  let percentage = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
  let resultText = percentage >= 80 ? '🎉 Отлично!' : percentage >= 60 ? '👍 Хорошо!' : '💪 Продолжай!';
  
  document.getElementById('resultStats').innerHTML = `
    ${resultText}<br>
    Правильно: ${correctCount}/${totalAttempts}<br>
    Процент: ${percentage}%
  `;
}

function goMenu(){
  document.getElementById('menu').style.display = 'block';
  document.getElementById('game').style.display = 'none';
  document.getElementById('lessons').style.display = 'none';
  document.getElementById('theory-view').style.display = 'none';
  document.getElementById('results').style.display = 'none';
  document.getElementById('languageSelect').style.display = 'none';
  document.getElementById('alphabet').style.display = 'none';
  document.getElementById('letterCard').style.display = 'none';
  
  // Скрываем игровые модули
  const gameViews = ['syllable-game', 'word-building-game', 'sentence-game'];
  gameViews.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  
  const gaps = document.querySelectorAll('.gap');
  gaps.forEach(gap => {
    gap.style.color = '';
    gap.innerText = '_';
  });
  
  currentLetterIdx = 0;
  loadStats();
  updateLevelDisplay();
}

// PWA установка
const installKey = 'pwaInstallPromptShown';
let deferredPrompt = null;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const closeInstallBtn = document.getElementById('closeInstallBtn');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  if (!localStorage.getItem(installKey)) {
    installBanner.style.display = 'flex';
  }
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('Приложение установлено');
    }
    deferredPrompt = null;
    installBanner.style.display = 'none';
    localStorage.setItem(installKey, '1');
  }
});

closeInstallBtn.addEventListener('click', () => {
  installBanner.style.display = 'none';
  localStorage.setItem(installKey, '1');
});

// ============================================================
// СИСТЕМА ПРОГРЕССА БУКВ И УРОВНЕЙ
// ============================================================

// Инициализация системы прогресса
class ProgressSystem {
  constructor() {
    this.completed = this.loadCompleted();
    this.userScore = this.loadScore();
    this.leaderboard = this.loadLeaderboard();
  }

  loadCompleted() {
    return JSON.parse(localStorage.getItem('completedLetters') || '{}');
  }

  saveCompleted() {
    localStorage.setItem('completedLetters', JSON.stringify(this.completed));
  }

  loadScore() {
    return parseInt(localStorage.getItem('userScore') || '0');
  }

  saveScore() {
    localStorage.setItem('userScore', String(this.userScore));
  }

  loadLeaderboard() {
    return JSON.parse(localStorage.getItem('leaderboard') || '[]');
  }

  saveLeaderboard() {
    localStorage.setItem('leaderboard', JSON.stringify(this.leaderboard));
  }

  getLetterStatus(lang, letter) {
    const alphabet = alphabets[lang] || [];
    const letterIndex = alphabet.findIndex(item => item.letter === letter);

    if (letterIndex === -1) return 'locked';

    // Первая буква всегда доступна
    if (letterIndex === 0) return 'unlocked';

    if (!this.completed[lang]) return 'locked';

    const completedLetters = this.completed[lang];

    // Буква пройдена
    if (completedLetters.includes(letter)) return 'completed';

    // Буква доступна, если предыдущая буква пройдена
    const prevLetter = alphabet[letterIndex - 1].letter;
    return completedLetters.includes(prevLetter) ? 'unlocked' : 'locked';
  }

  markLetterComplete(lang, letter) {
    if (!this.completed[lang]) this.completed[lang] = [];
    if (!this.completed[lang].includes(letter)) {
      this.completed[lang].push(letter);
      this.saveCompleted();
    }
  }

  getCompletedLetters(lang) {
    return this.completed[lang] || [];
  }

  addScore(points, message = '') {
    this.userScore += points;
    this.saveScore();
    if (message) showScoreNotification(points, message);
    updateLevelDisplay();
  }

  getUserLevel() {
    if (this.userScore >= 600) return { name: 'Мастер', level: 4, range: '600+' };
    if (this.userScore >= 301) return { name: 'Знаток', level: 3, range: '301-600' };
    if (this.userScore >= 101) return { name: 'Ученик', level: 2, range: '101-300' };
    return { name: 'Новичок', level: 1, range: '0-100' };
  }

  updateLeaderboard(playerName = 'Вы') {
    this.leaderboard.push({ name: playerName, score: this.userScore, date: new Date().toLocaleDateString() });
    this.leaderboard.sort((a, b) => b.score - a.score);
    this.leaderboard = this.leaderboard.slice(0, 5);
    this.saveLeaderboard();
  }
}

const progress = new ProgressSystem();

// ============================================================
// СЛОВАРЬ ДЛЯ ИГРОВЫХ МОДУЛЕЙ
// ============================================================

const gameVocabulary = {
  'ru': {
    syllables: [
      // Очень простые слова для начинающих
      { word: 'ма-ма', phonetic: 'mama', hint: 'Мама' },
      { word: 'па-па', phonetic: 'papa', hint: 'Папа' },
      { word: 'ба-ба', phonetic: 'baba', hint: 'Баба' },
      { word: 'де-д', phonetic: 'ded', hint: 'Дед' },
      { word: 'ба-нан', phonetic: 'banan', hint: 'Банан' },
      { word: 'до-мик', phonetic: 'domik', hint: 'Домик' },
      { word: 'ко-тик', phonetic: 'kotik', hint: 'Котик' },
      { word: 'со-ник', phonetic: 'sonik', hint: 'Соник' },
      { word: 'ле-вуш-ка', phonetic: 'levushka', hint: 'Лев' },
      { word: 'ли-сич-ка', phonetic: 'lisichka', hint: 'Лиса' },
      { word: 'во-да', phonetic: 'voda', hint: 'Вода' },
      { word: 'со-лнце', phonetic: 'solnce', hint: 'Солнце' },
      { word: 'лу-на', phonetic: 'luna', hint: 'Луна' },
      { word: 'де-ре-во', phonetic: 'derevo', hint: 'Дерево' },
      { word: 'ма-ши-на', phonetic: 'mashina', hint: 'Машина' },
      { word: 'ра-ке-та', phonetic: 'raketa', hint: 'Ракета' },
      { word: 'рыб-ка', phonetic: 'rybka', hint: 'Рыбка' },
      { word: 'птич-ка', phonetic: 'ptichka', hint: 'Птичка' },
      { word: 'цве-ток', phonetic: 'cvetok', hint: 'Цветок' },
      { word: 'мяч', phonetic: 'myach', hint: 'Мяч' }
    ],
    words: [
      'мама', 'папа', 'баба', 'дед', 'дом', 'кот', 'сон', 'лев', 'лиса',
      'вода', 'солнце', 'луна', 'дерево', 'машина', 'ракета', 'рыба', 'птица', 'цветок', 'мяч'
    ],
    sentences: [
      { sentence: 'Мама дома', words: ['Мама', 'дома'] },
      { sentence: 'Папа дома', words: ['Папа', 'дома'] },
      { sentence: 'Папа и мама', words: ['Папа', 'и', 'мама'] },
      { sentence: 'Вода в чашке', words: ['Вода', 'в', 'чашке'] },
      { sentence: 'Кот на диване', words: ['Кот', 'на', 'диване'] },
      { sentence: 'Солнце светит', words: ['Солнце', 'светит'] },
      { sentence: 'Это мама', words: ['Это', 'мама'] },
      { sentence: 'Это папа', words: ['Это', 'папа'] }
    ]
  },
  'en': {
    syllables: [
      { word: 'mom', phonetic: 'mom', hint: 'mom' },
      { word: 'dad', phonetic: 'dad', hint: 'dad' },
      { word: 'cat', phonetic: 'cat', hint: 'cat' },
      { word: 'dog', phonetic: 'dog', hint: 'dog' },
      { word: 'sun', phonetic: 'sun', hint: 'sun' },
      { word: 'moon', phonetic: 'moon', hint: 'moon' },
      { word: 'star', phonetic: 'star', hint: 'star' },
      { word: 'fish', phonetic: 'fish', hint: 'fish' },
      { word: 'bird', phonetic: 'bird', hint: 'bird' },
      { word: 'tree', phonetic: 'tree', hint: 'tree' },
      { word: 'house', phonetic: 'house', hint: 'house' },
      { word: 'ball', phonetic: 'ball', hint: 'ball' },
      { word: 'book', phonetic: 'book', hint: 'book' },
      { word: 'ap-ple', phonetic: 'apple', hint: 'apple' },
      { word: 'wa-ter', phonetic: 'water', hint: 'water' },
      { word: 'mo-on', phonetic: 'moon', hint: 'moon' }
    ],
    words: [
      'mom', 'dad', 'cat', 'dog', 'sun', 'moon', 'star', 'fish', 'bird', 'tree',
      'house', 'ball', 'book', 'apple', 'water'
    ],
    sentences: [
      { sentence: 'Mom is home', words: ['Mom', 'is', 'home'] },
      { sentence: 'Dad is home', words: ['Dad', 'is', 'home'] },
      { sentence: 'The cat is here', words: ['The', 'cat', 'is', 'here'] },
      { sentence: 'A dog is big', words: ['A', 'dog', 'is', 'big'] },
      { sentence: 'The sun is bright', words: ['The', 'sun', 'is', 'bright'] }
    ]
  },
  'tg': {
    syllables: [
      { word: 'ма-ма', phonetic: 'mama', hint: 'мама' },
      { word: 'па-па', phonetic: 'papa', hint: 'папа' },
      { word: 'мо-да', phonetic: 'moda', hint: 'мода' },
      { word: 'ки-то-б', phonetic: 'kitob', hint: 'китоб' },
      { word: 'қа-лам', phonetic: 'qalam', hint: 'қалам' },
      { word: 'хона', phonetic: 'xona', hint: 'хона' },
      { word: 'об', phonetic: 'ob', hint: 'об' },
      { word: 'о-фтоб', phonetic: 'oftob', hint: 'офтоб' }
    ],
    words: [
      'ман', 'ту', 'вай', 'мо', 'шумо', 'онҳо',
      'мама', 'папа', 'китоб', 'қалам', 'хона', 'об', 'офтоб'
    ],
    sentences: [
      { sentence: 'Ман дар хона истода', words: ['Ман', 'дар', 'хона', 'истода'] },
      { sentence: 'Ту китоб хони', words: ['Ту', 'китоб', 'хони'] },
      { sentence: 'Вай дар хона аст', words: ['Вай', 'дар', 'хона', 'аст'] }
    ]
  }
};

// ============================================================
// МОДУЛЬ СЛОГОДЕЛЕНИЯ
// ============================================================

function startSyllableGame() {
  const lang = currentLanguage;
  const completedLetters = progress.getCompletedLetters(lang);
  const alphabet = alphabets[lang] || [];
  
  // Берем все доступные буквы (минимум 10) для начинающих
  let availableLetters = completedLetters.length > 0 ? completedLetters : alphabet.slice(0, 10).map(a => a.letter);
  
  const vocab = gameVocabulary[lang] || gameVocabulary['ru'];
  
  // Фильтруем слова - все части слова должны начинаться с доступных букв
  const syllableWords = (vocab.syllables || []).filter(item => 
    item.word.split('-').every(part => {
      const firstLetter = part[0].toUpperCase();
      return availableLetters.includes(firstLetter);
    })
  );

  if (syllableWords.length === 0) {
    alert('Нет слов для этого уровня. Сначала выучи буквы!');
    return;
  }

  // Выбираем случайное слово
  const currentWord = syllableWords[Math.floor(Math.random() * syllableWords.length)];
  
  // Показываем игру
  showView('syllable-game', 'block');
  runSyllableGame(currentWord);
}

function runSyllableGame(wordObj) {
  const parts = wordObj.word.split('-');
  let selected = [];
  let hintShown = false;
  
  const gameView = document.getElementById('syllable-game') || createSyllableGameView();
  const choicesDiv = gameView.querySelector('#syllable-choices');
  const instructionDiv = gameView.querySelector('#syllable-instruction');
  
  // Показываем слово большими буквами
  instructionDiv.innerHTML = `
    <div style="text-align:center">
      <h3 style="color:#667eea;margin:10px 0">📝 Раздели слово на слоги!</h3>
      <p style="font-size:32px;font-weight:bold;margin:15px 0;color:#333">${wordObj.word.replace(/-/g, '   ')}</p>
      <button id="hintBtn" onclick="this.style.display='none';document.getElementById('hintText').style.display='block'" 
        style="padding:8px 20px;background:#FF9800;color:white;border:none;border-radius:8px;cursor:pointer;font-size:16px">
        💡 Показать подсказку
      </button>
      <p id="hintText" style="font-size:20px;color:#4CAF50;margin:10px 0;display:none;font-weight:bold">
        Подсказка: ${wordObj.hint || ''}
      </p>
    </div>
  `;
  
  choicesDiv.innerHTML = '';
  parts.forEach((part, idx) => {
    const btn = document.createElement('button');
    btn.textContent = part;
    btn.style.cssText = 'padding:15px 30px;font-size:24px;margin:5px;background:#667eea;color:white;border:none;border-radius:10px;cursor:pointer;transition:transform 0.2s';
    btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
    btn.onmouseout = () => btn.style.transform = 'scale(1)';
    btn.onclick = () => {
      selected.push(idx);
      btn.style.background = '#4CAF50';
      btn.style.transform = 'scale(1.1)';
      if (selected.length === parts.length) {
        setTimeout(() => {
          progress.addScore(10, '✅ Молодец! +10 очков');
          // Показываем красивое поздравление
          choicesDiv.innerHTML = '<div style="text-align:center;padding:20px"><h2 style="color:#4CAF50">🎉 Отлично!</h2><p>Ты правильно разделил слово!</p></div>';
          setTimeout(() => startSyllableGame(), 1500);
        }, 500);
      }
    };
    choicesDiv.appendChild(btn);
  });
}

function createSyllableGameView() {
  const card = document.createElement('div');
  card.id = 'syllable-game';
  card.className = 'card';
  card.style.display = 'none';
  card.innerHTML = `
    <button onclick="goMenu()" class="text-button">← Вернуться</button>
    <div id="syllable-instruction"></div>
    <div id="syllable-choices" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:20px 0"></div>
  `;
  document.querySelector('.app').appendChild(card);
  return card;
}

// ============================================================
// МОДУЛЬ СОЗДАНИЯ СЛОВ (Word Building)
// ============================================================

function startWordBuildingGame() {
  const lang = currentLanguage;
  const completedLetters = progress.getCompletedLetters(lang);
  const alphabet = alphabets[lang] || [];
  
  // Если нет пройденных букв, берем первые 3 буквы
  const availableLetters = completedLetters.length > 0 ? completedLetters : alphabet.slice(0, 3).map(a => a.letter);
  
  if (availableLetters.length < 1) {
    alert('Нет доступных букв!');
    return;
  }

  showView('word-building-game', 'block');
  runWordBuildingGame();
}

let wordBuildingStreak = 0;

function runWordBuildingGame() {
  const lang = currentLanguage;
  const completedLetters = progress.getCompletedLetters(lang);
  const alphabet = alphabets[lang] || [];
  
  // Если нет пройденных букв, берем первые 3 буквы
  const availableLetters = completedLetters.length > 0 ? completedLetters : alphabet.slice(0, 3).map(a => a.letter);
  
  const vocab = gameVocabulary[lang] || gameVocabulary['ru'];
  
  // Фильтруем слова только из доступных букв
  const availableWords = (vocab.words || []).filter(word => 
    word.split('').every(letter => availableLetters.includes(letter.toUpperCase()))
  );

  if (availableWords.length === 0) {
    alert('Нет слов для вашего уровня');
    return;
  }

  const correctWord = availableWords[Math.floor(Math.random() * availableWords.length)];
  const letters = correctWord.split('').sort(() => Math.random() - 0.5);
  
  const gameView = document.getElementById('word-building-game') || createWordBuildingView();
  const choicesDiv = gameView.querySelector('#word-choices');
  const resultDiv = gameView.querySelector('#word-result');
  
  resultDiv.innerHTML = '';
  choicesDiv.innerHTML = '<div id="word-input" style="min-height:40px;padding:10px;background:#f0f0f0;border-radius:8px;margin-bottom:20px;font-size:20px;color:#333"></div>';
  
  const inputDiv = choicesDiv.querySelector('#word-input');
  let selectedLetters = [];

  letters.forEach((letter, idx) => {
    const btn = document.createElement('button');
    btn.textContent = letter.toUpperCase();
    btn.style.padding = '10px 15px';
    btn.style.margin = '5px';
    btn.onclick = () => {
      selectedLetters.push(letter);
      inputDiv.textContent = selectedLetters.join('');
      btn.style.opacity = '0.3';
      btn.disabled = true;

      // Проверка слова
      if (selectedLetters.join('').toLowerCase() === correctWord.toLowerCase()) {
        resultDiv.innerHTML = '<p style="color:#4CAF50;font-weight:bold">✅ Правильно! +20 очков</p>';
        wordBuildingStreak++;
        progress.addScore(20, '');
        
        if (wordBuildingStreak % 3 === 0) {
          progress.addScore(50, '🎉 Серия из 3 слов: +50 бонус');
          resultDiv.innerHTML += '<p style="color:#FFD700;font-weight:bold">🎉 Бонус серии +50 очков!</p>';
        }
        
        setTimeout(() => runWordBuildingGame(), 1500);
      } else if (selectedLetters.length === correctWord.length) {
        resultDiv.innerHTML = '<p style="color:#ef4444;font-weight:bold">❌ Неправильно. Правильное слово: ' + correctWord + '</p>';
        wordBuildingStreak = 0;
        setTimeout(() => runWordBuildingGame(), 1500);
      }
    };
    choicesDiv.appendChild(btn);
  });

  // Кнопка "Ещё подсказка"
  const hintBtn = document.createElement('button');
  hintBtn.textContent = '💡 Подсказка: ' + correctWord;
  hintBtn.style.marginTop = '20px';
  hintBtn.style.background = '#FF9800';
  choicesDiv.appendChild(hintBtn);
}

function createWordBuildingView() {
  const card = document.createElement('div');
  card.id = 'word-building-game';
  card.className = 'card';
  card.style.display = 'none';
  card.innerHTML = `
    <button onclick="goMenu()" class="text-button">← Вернуться</button>
    <h3 style="text-align:center;color:#667eea">🔤 Создание слов</h3>
    <p style="text-align:center">Нажимайте буквы чтобы собрать слово:</p>
    <div id="word-choices" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:20px 0"></div>
    <div id="word-result" style="text-align:center;margin:20px 0;min-height:30px"></div>
  `;
  document.querySelector('.app').appendChild(card);
  return card;
}

// ============================================================
// МОДУЛЬ СОСТАВЛЕНИЯ ПРЕДЛОЖЕНИЙ (Sentence Ordering)
// ============================================================

function startSentenceGame() {
  const lang = currentLanguage;
  const completedLetters = progress.getCompletedLetters(lang);
  const alphabet = alphabets[lang] || [];
  
  // Если нет пройденных букв, берем первые 5 букв
  const availableLetters = completedLetters.length > 0 ? completedLetters : alphabet.slice(0, 5).map(a => a.letter);
  
  if (availableLetters.length < 1) {
    alert('Нет доступных букв!');
    return;
  }

  const vocab = gameVocabulary[lang] || gameVocabulary['ru'];
  
  if (!vocab.sentences || vocab.sentences.length === 0) {
    alert('Нет предложений для вашего языка');
    return;
  }

  showView('sentence-game', 'block');
  runSentenceGame();
}

function runSentenceGame() {
  const lang = currentLanguage;
  const vocab = gameVocabulary[lang] || gameVocabulary['ru'];
  
  if (!vocab.sentences || vocab.sentences.length === 0) {
    alert('Нет предложений для вашего языка');
    return;
  }
  
  // Проверяем доступность предложения
  const completedLetters = progress.getCompletedLetters(lang);
  const alphabet = alphabets[lang] || [];
  const availableLetters = completedLetters.length > 0 ? completedLetters : alphabet.slice(0, 5).map(a => a.letter);

  const sentenceObj = vocab.sentences[Math.floor(Math.random() * vocab.sentences.length)];
  const shuffledWords = [...sentenceObj.words].sort(() => Math.random() - 0.5);
  
  const gameView = document.getElementById('sentence-game') || createSentenceGameView();
  const dropZone = gameView.querySelector('#sentence-drop-zone');
  const choicesDiv = gameView.querySelector('#sentence-choices');
  const resultDiv = gameView.querySelector('#sentence-result');
  
  dropZone.innerHTML = '';
  choicesDiv.innerHTML = '';
  resultDiv.innerHTML = '';
  
  let selectedOrder = [];
  
  // Drag and drop карточки
  shuffledWords.forEach((word, idx) => {
    const card = document.createElement('div');
    card.className = 'draggable-word';
    card.textContent = word;
    card.draggable = true;
    card.style.cssText = `padding:10px 15px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;border-radius:8px;margin:5px;cursor:grab;user-select:none`;
    
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('word', word);
    });
    
    choicesDiv.appendChild(card);
  });

  // Drop zone
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.background = '#e3f2fd';
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.style.background = '#f9f9f9';
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('word');
    selectedOrder.push(word);
    
    const wordCard = document.createElement('span');
    wordCard.textContent = word;
    wordCard.style.cssText = `padding:8px 12px;background:#4CAF50;color:white;border-radius:6px;margin:5px;display:inline-block`;
    dropZone.appendChild(wordCard);
    
    if (selectedOrder.length === sentenceObj.words.length) {
      checkSentence(selectedOrder, sentenceObj.words, resultDiv);
    }
  });
}

function checkSentence(selected, correct, resultDiv) {
  const correct_order = correct.join(' ');
  const selected_order = selected.join(' ');
  
  if (selected_order === correct_order) {
    resultDiv.innerHTML = '<p style="color:#4CAF50;font-weight:bold">✅ Правильно! +30 очков</p>';
    progress.addScore(30, 'Предложение: +30 очков');
    setTimeout(() => runSentenceGame(), 1500);
  } else {
    resultDiv.innerHTML = `<p style="color:#ef4444">❌ Неправильный порядок. Правильно: ${correct_order}</p>`;
    setTimeout(() => runSentenceGame(), 2000);
  }
}

function createSentenceGameView() {
  const card = document.createElement('div');
  card.id = 'sentence-game';
  card.className = 'card';
  card.style.display = 'none';
  card.innerHTML = `
    <button onclick="goMenu()" class="text-button">← Вернуться</button>
    <h3 style="text-align:center;color:#667eea">📝 Составление предложений</h3>
    <p style="text-align:center">Перетаскивайте слова в правильном порядке:</p>
    <div id="sentence-drop-zone" style="min-height:80px;padding:15px;background:#f9f9f9;border:2px dashed #667eea;border-radius:10px;margin:20px 0"></div>
    <div id="sentence-choices" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:20px 0"></div>
    <div id="sentence-result" style="text-align:center;margin:20px 0;min-height:30px"></div>
  `;
  document.querySelector('.app').appendChild(card);
  return card;
}

// ============================================================
// СИСТЕМА ОТОБРАЖЕНИЯ ОЧКОВ И УРОВНЕЙ
// ============================================================

function updateLevelDisplay() {
  const level = progress.getUserLevel();
  const statsDiv = document.getElementById('stats');
  const leaderboardHtml = progress.leaderboard.map((entry, idx) => 
    `<div style="padding:8px;background:${idx === 0 ? '#FFD700' : '#f0f0f0'};border-radius:5px;margin:5px 0">
      <strong>${idx + 1}. ${entry.name}</strong> - ${entry.score} очков
    </div>`
  ).join('');

  statsDiv.innerHTML = `
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:32px;font-weight:bold;color:#667eea">${progress.userScore} 🏆</div>
      <div style="font-size:16px;color:#666">Уровень: <span style="color:#764ba2;font-weight:bold">${level.name}</span> (${level.range})</div>
    </div>
    ${leaderboardHtml ? `<div style="background:#f5f5f5;padding:10px;border-radius:10px;margin:10px 0">
      <strong>Топ-5:</strong><br>${leaderboardHtml}
    </div>` : ''}
  `;
}

function showScoreNotification(points, message) {
  const notification = document.createElement('div');
  notification.innerHTML = `<div style="position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:15px 25px;border-radius:15px;box-shadow:0 8px 25px rgba(0,0,0,0.3);z-index:9999;animation:slideInUp 0.5s ease;text-align:center">
    <div style="font-size:20px;font-weight:bold">${message}</div>
    <div style="font-size:14px;margin-top:5px">+${points} очков</div>
  </div>`;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================

function showView(viewId, display = 'block') {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  const view = document.getElementById(viewId);
  if (view) view.style.display = display;
  else console.error('View not found:', viewId);
}

// Переопределяем функцию markLetterComplete
const originalMarkLetterComplete = window.markLetterComplete || (() => {});
window.markLetterComplete = function(lang, letter) {
  progress.markLetterComplete(lang, letter);
  
  // Обновляем UI
  const status = progress.getLetterStatus(lang, letter);
  const letterBtn = document.querySelector(`[data-letter="${letter}"]`);
  if (letterBtn) {
    letterBtn.classList.remove('locked', 'unlocked');
    letterBtn.classList.add('completed');
    letterBtn.style.background = '#d4edda';
    letterBtn.style.color = '#155724';
  }
  
  // Активируем кнопку слогоделения
  const syllableBtn = document.getElementById('syllableBtn');
  if (syllableBtn && status === 'completed') {
    syllableBtn.style.opacity = '1';
    syllableBtn.style.pointerEvents = 'auto';
  }
  
  progress.addScore(5, 'Буква пройдена: +5 очков');
};

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

loadStats();
updateLevelDisplay();
