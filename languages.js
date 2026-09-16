/*
  Sprachbibliothek für die Kartenwerkstatt-Startseite.
  Neue Sprache hinzufügen = einfach einen neuen Eintrag ergänzen,
  die index.html muss dafür nicht verändert werden.
*/
const LANGUAGES = {
  "de": {
    "nativeName": "Deutsch",
    "dir": "ltr",
    "pageTitle": "Kartenwerkstatt",
    "heading": "D&D Helper",
    "subtitle": "Deine Reise beginnt mit einer Karte",
    "description": "Erschaffe deine eigene Fantasiewelt — mit Bergen, Wäldern, Flüssen und Siedlungen. Jede Karte ist einzigartig, reproduzierbar und bereit für dein nächstes Abenteuer.",
    "buttonText": "Zur Karte",
    "footer": "Kartenwerkstatt"
  },
  "en": {
    "nativeName": "English",
    "dir": "ltr",
    "pageTitle": "Map Workshop",
    "heading": "D&D Helper",
    "subtitle": "Your journey begins with a map",
    "description": "Create your own fantasy world — with mountains, forests, rivers, and settlements. Every map is unique, reproducible, and ready for your next adventure.",
    "buttonText": "To the Map",
    "footer": "Map Workshop"
  },
  "es": {
    "nativeName": "Español",
    "dir": "ltr",
    "pageTitle": "Taller de Mapas",
    "heading": "D&D Helper",
    "subtitle": "Tu viaje comienza con un mapa",
    "description": "Crea tu propio mundo de fantasía, con montañas, bosques, ríos y asentamientos. Cada mapa es único, reproducible y listo para tu próxima aventura.",
    "buttonText": "Ir al Mapa",
    "footer": "Taller de Mapas"
  },
  "fr": {
    "nativeName": "Français",
    "dir": "ltr",
    "pageTitle": "Atelier de Cartes",
    "heading": "D&D Helper",
    "subtitle": "Ton voyage commence avec une carte",
    "description": "Crée ton propre monde fantastique — avec des montagnes, des forêts, des rivières et des colonies. Chaque carte est unique, reproductible et prête pour ta prochaine aventure.",
    "buttonText": "Voir la Carte",
    "footer": "Atelier de Cartes"
  },
  "it": {
    "nativeName": "Italiano",
    "dir": "ltr",
    "pageTitle": "Bottega delle Mappe",
    "heading": "D&D Helper",
    "subtitle": "Il tuo viaggio inizia con una mappa",
    "description": "Crea il tuo mondo fantastico — con montagne, foreste, fiumi e insediamenti. Ogni mappa è unica, riproducibile e pronta per la tua prossima avventura.",
    "buttonText": "Vai alla Mappa",
    "footer": "Bottega delle Mappe"
  },
  "pt": {
    "nativeName": "Português",
    "dir": "ltr",
    "pageTitle": "Oficina de Mapas",
    "heading": "D&D Helper",
    "subtitle": "Sua jornada começa com um mapa",
    "description": "Crie o seu próprio mundo de fantasia — com montanhas, florestas, rios e assentamentos. Cada mapa é único, reproduzível e pronto para a sua próxima aventura.",
    "buttonText": "Ir para o Mapa",
    "footer": "Oficina de Mapas"
  },
  "ru": {
    "nativeName": "Русский",
    "dir": "ltr",
    "pageTitle": "Мастерская Карт",
    "heading": "D&D Helper",
    "subtitle": "Твоё путешествие начинается с карты",
    "description": "Создай свой собственный фэнтезийный мир — с горами, лесами, реками и поселениями. Каждая карта уникальна, воспроизводима и готова для твоего следующего приключения.",
    "buttonText": "К Карте",
    "footer": "Мастерская Карт"
  },
  "zh": {
    "nativeName": "中文",
    "dir": "ltr",
    "pageTitle": "地图工坊",
    "heading": "D&D Helper",
    "subtitle": "你的旅程从一张地图开始",
    "description": "创造属于你自己的奇幻世界——包含山脉、森林、河流与聚落。每张地图都是独一无二、可复现的，随时准备好迎接你的下一场冒险。",
    "buttonText": "查看地图",
    "footer": "地图工坊"
  },
  "ja": {
    "nativeName": "日本語",
    "dir": "ltr",
    "pageTitle": "地図工房",
    "heading": "D&D Helper",
    "subtitle": "あなたの旅は一枚の地図から始まる",
    "description": "山、森、川、集落を備えた、あなただけのファンタジー世界を創り出そう。すべての地図は唯一無二でありながら再現可能。次の冒険への準備は整っている。",
    "buttonText": "地図を見る",
    "footer": "地図工房"
  },
  "ko": {
    "nativeName": "한국어",
    "dir": "ltr",
    "pageTitle": "지도 공방",
    "heading": "D&D Helper",
    "subtitle": "당신의 여정은 지도 한 장에서 시작됩니다",
    "description": "산, 숲, 강, 정착지가 있는 나만의 판타지 세계를 만들어보세요. 모든 지도는 고유하며 재현 가능하고, 다음 모험을 위한 준비가 되어 있습니다.",
    "buttonText": "지도로 이동",
    "footer": "지도 공방"
  },
  "ar": {
    "nativeName": "العربية",
    "dir": "rtl",
    "pageTitle": "ورشة الخرائط",
    "heading": "D&D Helper",
    "subtitle": "رحلتك تبدأ بخريطة",
    "description": "اصنع عالمك الخيالي الخاص — بجبال وغابات وأنهار ومستوطنات. كل خريطة فريدة وقابلة لإعادة الإنتاج وجاهزة لمغامرتك القادمة.",
    "buttonText": "إلى الخريطة",
    "footer": "ورشة الخرائط"
  },
  "hi": {
    "nativeName": "हिन्दी",
    "dir": "ltr",
    "pageTitle": "मानचित्र कार्यशाला",
    "heading": "D&D Helper",
    "subtitle": "आपकी यात्रा एक मानचित्र से शुरू होती है",
    "description": "पहाड़ों, जंगलों, नदियों और बस्तियों के साथ अपनी खुद की काल्पनिक दुनिया बनाएं। हर मानचित्र अनोखा, पुनरुत्पादनीय और आपके अगले रोमांच के लिए तैयार है।",
    "buttonText": "मानचित्र पर जाएं",
    "footer": "मानचित्र कार्यशाला"
  },
  "bn": {
    "nativeName": "বাংলা",
    "dir": "ltr",
    "pageTitle": "মানচিত্র কর্মশালা",
    "heading": "D&D Helper",
    "subtitle": "তোমার যাত্রা শুরু হয় একটি মানচিত্র দিয়ে",
    "description": "পাহাড়, বন, নদী এবং জনবসতি নিয়ে তৈরি করো তোমার নিজস্ব কল্পনার জগৎ। প্রতিটি মানচিত্র অনন্য, পুনরুৎপাদনযোগ্য এবং তোমার পরবর্তী অভিযানের জন্য প্রস্তুত।",
    "buttonText": "মানচিত্রে যান",
    "footer": "মানচিত্র কর্মশালা"
  },
  "ur": {
    "nativeName": "اردو",
    "dir": "rtl",
    "pageTitle": "نقشہ ورکشاپ",
    "heading": "D&D Helper",
    "subtitle": "آپ کا سفر ایک نقشے سے شروع ہوتا ہے",
    "description": "پہاڑوں، جنگلات، دریاؤں اور بستیوں کے ساتھ اپنی خیالی دنیا بنائیں۔ ہر نقشہ منفرد، دوبارہ قابلِ تخلیق اور آپ کی اگلی مہم جوئی کے لیے تیار ہے۔",
    "buttonText": "نقشے پر جائیں",
    "footer": "نقشہ ورکشاپ"
  },
  "id": {
    "nativeName": "Bahasa Indonesia",
    "dir": "ltr",
    "pageTitle": "Bengkel Peta",
    "heading": "D&D Helper",
    "subtitle": "Perjalananmu dimulai dengan sebuah peta",
    "description": "Ciptakan duniamu sendiri yang penuh fantasi — dengan gunung, hutan, sungai, dan pemukiman. Setiap peta unik, dapat direproduksi, dan siap untuk petualangan berikutnya.",
    "buttonText": "Ke Peta",
    "footer": "Bengkel Peta"
  },
  "tr": {
    "nativeName": "Türkçe",
    "dir": "ltr",
    "pageTitle": "Harita Atölyesi",
    "heading": "D&D Helper",
    "subtitle": "Yolculuğun bir haritayla başlıyor",
    "description": "Dağlar, ormanlar, nehirler ve yerleşimlerle kendi fantezi dünyanı yarat. Her harita benzersiz, tekrar üretilebilir ve bir sonraki maceran için hazır.",
    "buttonText": "Haritaya Git",
    "footer": "Harita Atölyesi"
  },
  "vi": {
    "nativeName": "Tiếng Việt",
    "dir": "ltr",
    "pageTitle": "Xưởng Bản Đồ",
    "heading": "D&D Helper",
    "subtitle": "Hành trình của bạn bắt đầu với một tấm bản đồ",
    "description": "Tạo nên thế giới giả tưởng của riêng bạn — với núi non, rừng rậm, sông ngòi và khu định cư. Mỗi bản đồ đều độc nhất, có thể tái tạo và sẵn sàng cho cuộc phiêu lưu tiếp theo.",
    "buttonText": "Đến Bản Đồ",
    "footer": "Xưởng Bản Đồ"
  },
  "th": {
    "nativeName": "ไทย",
    "dir": "ltr",
    "pageTitle": "โรงงานแผนที่",
    "heading": "D&D Helper",
    "subtitle": "การเดินทางของคุณเริ่มต้นด้วยแผนที่",
    "description": "สร้างโลกแฟนตาซีของคุณเอง — พร้อมภูเขา ป่าไม้ แม่น้ำ และถิ่นฐาน แผนที่ทุกแผ่นมีเอกลักษณ์เฉพาะตัว ทำซ้ำได้ และพร้อมสำหรับการผจญภัยครั้งต่อไปของคุณ",
    "buttonText": "ไปที่แผนที่",
    "footer": "โรงงานแผนที่"
  },
  "nl": {
    "nativeName": "Nederlands",
    "dir": "ltr",
    "pageTitle": "Kaartenwerkplaats",
    "heading": "D&D Helper",
    "subtitle": "Jouw reis begint met een kaart",
    "description": "Creëer je eigen fantasiewereld — met bergen, bossen, rivieren en nederzettingen. Elke kaart is uniek, reproduceerbaar en klaar voor je volgende avontuur.",
    "buttonText": "Naar de Kaart",
    "footer": "Kaartenwerkplaats"
  },
  "pl": {
    "nativeName": "Polski",
    "dir": "ltr",
    "pageTitle": "Pracownia Map",
    "heading": "D&D Helper",
    "subtitle": "Twoja podróż zaczyna się od mapy",
    "description": "Stwórz własny fantastyczny świat — z górami, lasami, rzekami i osadami. Każda mapa jest unikalna, odtwarzalna i gotowa na twoją kolejną przygodę.",
    "buttonText": "Przejdź do Mapy",
    "footer": "Pracownia Map"
  },
  "sv": {
    "nativeName": "Svenska",
    "dir": "ltr",
    "pageTitle": "Kartverkstad",
    "heading": "D&D Helper",
    "subtitle": "Din resa börjar med en karta",
    "description": "Skapa din egen fantasyvärld — med berg, skogar, floder och bosättningar. Varje karta är unik, reproducerbar och redo för ditt nästa äventyr.",
    "buttonText": "Till Kartan",
    "footer": "Kartverkstad"
  },
  "no": {
    "nativeName": "Norsk",
    "dir": "ltr",
    "pageTitle": "Kartverksted",
    "heading": "D&D Helper",
    "subtitle": "Reisen din begynner med et kart",
    "description": "Skap din egen fantasiverden — med fjell, skoger, elver og bosetninger. Hvert kart er unikt, reproduserbart og klart for ditt neste eventyr.",
    "buttonText": "Til Kartet",
    "footer": "Kartverksted"
  },
  "da": {
    "nativeName": "Dansk",
    "dir": "ltr",
    "pageTitle": "Kortværksted",
    "heading": "D&D Helper",
    "subtitle": "Din rejse begynder med et kort",
    "description": "Skab din egen fantasiverden — med bjerge, skove, floder og bosættelser. Hvert kort er unikt, reproducerbart og klar til dit næste eventyr.",
    "buttonText": "Til Kortet",
    "footer": "Kortværksted"
  },
  "fi": {
    "nativeName": "Suomi",
    "dir": "ltr",
    "pageTitle": "Karttapaja",
    "heading": "D&D Helper",
    "subtitle": "Matkasi alkaa kartasta",
    "description": "Luo oma fantasiamaailmasi — vuorineen, metsineen, jokineen ja asutuksineen. Jokainen kartta on ainutlaatuinen, toistettavissa ja valmis seuraavaan seikkailuusi.",
    "buttonText": "Kartalle",
    "footer": "Karttapaja"
  },
  "el": {
    "nativeName": "Ελληνικά",
    "dir": "ltr",
    "pageTitle": "Εργαστήρι Χαρτών",
    "heading": "D&D Helper",
    "subtitle": "Το ταξίδι σου ξεκινά με έναν χάρτη",
    "description": "Δημιούργησε τον δικό σου φανταστικό κόσμο — με βουνά, δάση, ποτάμια και οικισμούς. Κάθε χάρτης είναι μοναδικός, αναπαραγώγιμος και έτοιμος για την επόμενή σου περιπέτεια.",
    "buttonText": "Στον Χάρτη",
    "footer": "Εργαστήρι Χαρτών"
  },
  "cs": {
    "nativeName": "Čeština",
    "dir": "ltr",
    "pageTitle": "Dílna Map",
    "heading": "D&D Helper",
    "subtitle": "Tvá cesta začíná mapou",
    "description": "Vytvoř si vlastní fantasy svět — s horami, lesy, řekami a osadami. Každá mapa je jedinečná, reprodukovatelná a připravená na tvé další dobrodružství.",
    "buttonText": "K Mapě",
    "footer": "Dílna Map"
  },
  "sk": {
    "nativeName": "Slovenčina",
    "dir": "ltr",
    "pageTitle": "Dielňa Máp",
    "heading": "D&D Helper",
    "subtitle": "Tvoja cesta začína mapou",
    "description": "Vytvor si vlastný fantasy svet — s horami, lesmi, riekami a osadami. Každá mapa je jedinečná, reprodukovateľná a pripravená na tvoje ďalšie dobrodružstvo.",
    "buttonText": "K Mape",
    "footer": "Dielňa Máp"
  },
  "hu": {
    "nativeName": "Magyar",
    "dir": "ltr",
    "pageTitle": "Térképműhely",
    "heading": "D&D Helper",
    "subtitle": "Utazásod egy térképpel kezdődik",
    "description": "Alkosd meg saját fantasyvilágodat — hegyekkel, erdőkkel, folyókkal és településekkel. Minden térkép egyedi, reprodukálható és készen áll a következő kalandodra.",
    "buttonText": "A Térképhez",
    "footer": "Térképműhely"
  },
  "ro": {
    "nativeName": "Română",
    "dir": "ltr",
    "pageTitle": "Atelierul de Hărți",
    "heading": "D&D Helper",
    "subtitle": "Călătoria ta începe cu o hartă",
    "description": "Creează-ți propria lume fantastică — cu munți, păduri, râuri și așezări. Fiecare hartă este unică, reproductibilă și pregătită pentru următoarea ta aventură.",
    "buttonText": "Spre Hartă",
    "footer": "Atelierul de Hărți"
  },
  "bg": {
    "nativeName": "Български",
    "dir": "ltr",
    "pageTitle": "Работилница за Карти",
    "heading": "D&D Helper",
    "subtitle": "Пътуването ти започва с карта",
    "description": "Създай своя собствен фентъзи свят — с планини, гори, реки и селища. Всяка карта е уникална, възпроизводима и готова за следващото ти приключение.",
    "buttonText": "Към Картата",
    "footer": "Работилница за Карти"
  },
  "uk": {
    "nativeName": "Українська",
    "dir": "ltr",
    "pageTitle": "Майстерня Карт",
    "heading": "D&D Helper",
    "subtitle": "Твоя подорож починається з карти",
    "description": "Створи власний фентезійний світ — з горами, лісами, річками та поселеннями. Кожна карта унікальна, відтворювана й готова до твоєї наступної пригоди.",
    "buttonText": "До Карти",
    "footer": "Майстерня Карт"
  },
  "hr": {
    "nativeName": "Hrvatski",
    "dir": "ltr",
    "pageTitle": "Radionica Karata",
    "heading": "D&D Helper",
    "subtitle": "Tvoje putovanje počinje kartom",
    "description": "Stvori svoj vlastiti fantastični svijet — s planinama, šumama, rijekama i naseljima. Svaka karta je jedinstvena, reproducibilna i spremna za tvoju sljedeću pustolovinu.",
    "buttonText": "Na Kartu",
    "footer": "Radionica Karata"
  },
  "sr": {
    "nativeName": "Српски",
    "dir": "ltr",
    "pageTitle": "Radionica Mapa",
    "heading": "D&D Helper",
    "subtitle": "Твоје путовање почиње мапом",
    "description": "Направи свој сопствени фантастични свет — са планинама, шумама, рекама и насељима. Свака мапа је јединствена, репродукована и спремна за твоју следећу авантуру.",
    "buttonText": "На Мапу",
    "footer": "Radionica Mapa"
  },
  "sl": {
    "nativeName": "Slovenščina",
    "dir": "ltr",
    "pageTitle": "Delavnica Zemljevidov",
    "heading": "D&D Helper",
    "subtitle": "Tvoje potovanje se začne z zemljevidom",
    "description": "Ustvari svoj lastni fantazijski svet — z gorami, gozdovi, rekami in naselji. Vsak zemljevid je edinstven, ponovljiv in pripravljen za tvojo naslednjo pustolovščino.",
    "buttonText": "Na Zemljevid",
    "footer": "Delavnica Zemljevidov"
  },
  "lt": {
    "nativeName": "Lietuvių",
    "dir": "ltr",
    "pageTitle": "Žemėlapių Dirbtuvė",
    "heading": "D&D Helper",
    "subtitle": "Tavo kelionė prasideda nuo žemėlapio",
    "description": "Sukurk savo fantastinį pasaulį — su kalnais, miškais, upėmis ir gyvenvietėmis. Kiekvienas žemėlapis yra unikalus, atkuriamas ir paruoštas tavo kitam nuotykiui.",
    "buttonText": "Į Žemėlapį",
    "footer": "Žemėlapių Dirbtuvė"
  },
  "lv": {
    "nativeName": "Latviešu",
    "dir": "ltr",
    "pageTitle": "Karšu Darbnīca",
    "heading": "D&D Helper",
    "subtitle": "Tavs ceļojums sākas ar karti",
    "description": "Radi savu paša fantāzijas pasauli — ar kalniem, mežiem, upēm un apmetnēm. Katra karte ir unikāla, atkārtojama un gatava tavam nākamajam piedzīvojumam.",
    "buttonText": "Uz Karti",
    "footer": "Karšu Darbnīca"
  },
  "et": {
    "nativeName": "Eesti",
    "dir": "ltr",
    "pageTitle": "Kaartide Töökoda",
    "heading": "D&D Helper",
    "subtitle": "Sinu teekond algab kaardiga",
    "description": "Loo oma fantaasiamaailm — mägede, metsade, jõgede ja asulatega. Iga kaart on unikaalne, korratav ja valmis sinu järgmiseks seikluseks.",
    "buttonText": "Kaardile",
    "footer": "Kaartide Töökoda"
  },
  "is": {
    "nativeName": "Íslenska",
    "dir": "ltr",
    "pageTitle": "Kortasmiðja",
    "heading": "D&D Helper",
    "subtitle": "Ferðalag þitt hefst með korti",
    "description": "Skapaðu þinn eigin ævintýraheim — með fjöllum, skógum, ám og byggðum. Hvert kort er einstakt, endurskapanlegt og tilbúið fyrir næsta ævintýri þitt.",
    "buttonText": "Á Kortið",
    "footer": "Kortasmiðja"
  },
  "ga": {
    "nativeName": "Gaeilge",
    "dir": "ltr",
    "pageTitle": "Ceardlann Léarscáileanna",
    "heading": "D&D Helper",
    "subtitle": "Tosaíonn do thuras le léarscáil",
    "description": "Cruthaigh do shaol fantaisíochta féin — le sléibhte, foraoisí, aibhneacha agus lonnaíochtaí. Tá gach léarscáil uathúil, in-atáirgthe agus réidh do d'eachtra eile.",
    "buttonText": "Chuig an Léarscáil",
    "footer": "Ceardlann Léarscáileanna"
  },
  "mt": {
    "nativeName": "Malti",
    "dir": "ltr",
    "pageTitle": "Ħanut tal-Mapep",
    "heading": "D&D Helper",
    "subtitle": "Il-vjaġġ tiegħek jibda b'mappa",
    "description": "Ħoloq id-dinja fantastika tiegħek stess — b'muntanji, foresti, xmajjar u insedjamenti. Kull mappa hija unika, riproduċibbli u lesta għall-avventura li jmiss tiegħek.",
    "buttonText": "Mur għall-Mappa",
    "footer": "Ħanut tal-Mapep"
  },
  "ca": {
    "nativeName": "Català",
    "dir": "ltr",
    "pageTitle": "Taller de Mapes",
    "heading": "D&D Helper",
    "subtitle": "El teu viatge comença amb un mapa",
    "description": "Crea el teu propi món de fantasia — amb muntanyes, boscos, rius i assentaments. Cada mapa és únic, reproduïble i preparat per a la teva propera aventura.",
    "buttonText": "Anar al Mapa",
    "footer": "Taller de Mapes"
  },
  "eu": {
    "nativeName": "Euskara",
    "dir": "ltr",
    "pageTitle": "Mapa-tailerra",
    "heading": "D&D Helper",
    "subtitle": "Zure bidaia mapa batekin hasten da",
    "description": "Sortu zeure fantasiazko mundua — mendiak, basoak, ibaiak eta herriguneak dituena. Mapa bakoitza bakarra, erreproduzigarria eta zure hurrengo abenturarako prest dago.",
    "buttonText": "Mapara Joan",
    "footer": "Mapa-tailerra"
  },
  "sw": {
    "nativeName": "Kiswahili",
    "dir": "ltr",
    "pageTitle": "Karakana ya Ramani",
    "heading": "D&D Helper",
    "subtitle": "Safari yako inaanza na ramani",
    "description": "Unda ulimwengu wako wa kubuni — wenye milima, misitu, mito na makazi. Kila ramani ni ya kipekee, inayoweza kutolewa tena, na tayari kwa ajili ya safari yako ijayo.",
    "buttonText": "Nenda kwenye Ramani",
    "footer": "Karakana ya Ramani"
  },
  "fa": {
    "nativeName": "فارسی",
    "dir": "rtl",
    "pageTitle": "کارگاه نقشه",
    "heading": "D&D Helper",
    "subtitle": "سفر تو با یک نقشه آغاز می‌شود",
    "description": "دنیای خیالی خودت را بساز — با کوه‌ها، جنگل‌ها، رودخانه‌ها و سکونتگاه‌ها. هر نقشه منحصربه‌فرد، قابل بازتولید و آماده ماجراجویی بعدی توست.",
    "buttonText": "برو به نقشه",
    "footer": "کارگاه نقشه"
  }
};
