const posts = {
  popular: [
    {
      type: "header",
      level: 1,
      text: "Tudta? Ezek az ételek természetes módon csökkentik a testsúlyát!",
      src: "https://www.health.com/thmb/d0_16dy1DSe50jcM-tKZe_qFB1s=/5472x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-654067392-d4111e7dc17b419487b9ad0b19a9f44b.jpg"
    },
    {
      type: "point",
      text: "Sokan nem is gondolnák, hogy a mindennapokban is elérhető ételek képesek támogatni a súlycsökkentést. Az alábbiakban bemutatjuk azokat az ételeket, amelyek segíthetnek az anyagcsere gyorsításában, az étvágy csökkentésében, és végső soron a zsírégetésben."
    },
    {
      type: "header",
      level: 2,
      text: "1. Zöld tea",
      src: "https://kapszulacenter.hu/StoreImages/L/330493_zold-tea.webp"
    },
    {
      type: "point",
      text: "A zöld tea egy ismert anyagcsere-serkentő ital, amely gazdag antioxidánsokban és katekinben, ami elősegíti a zsírégetést. Napi egy-két csésze zöld tea fogyasztása segíthet a fogyásban."
    },
    {
      type: "header",
      level: 2,
      text: "2. Grapefruit",
      src: "https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/food-and-nutrition/grapefruit-hero.png?h=500&iar=0&mh=500&mw=1300&w=1297&hash=3740C0DAA3ECC18E241680CAF4F28E30"
    },
    {
      type: "point",
      text: "A grapefruit csökkenti az inzulinszintet, amely közvetlenül befolyásolja a zsírraktározást. Étkezés előtt elfogyasztva javíthatja az anyagcserét és segíthet kevesebb kalóriát bevinni."
    },
    {
      type: "header",
      level: 2,
      text: "3. Chia mag",
      src: "https://chia-mag.com/uploads/domains/260/chia_5.jpg",
    },
    {
      type: "point",
      text: "A chia mag tele van rosttal, amely segít abban, hogy hosszabb ideig jóllakottnak érezze magát. Emellett ezek a magok nedvesség hatására megduzzadnak, ami még tovább növeli telítő hatásukat."
    },
    {
      type: "header",
      level: 2,
      text: "4. Almaecet",
      src: "https://egeszsegter.hu/images/blog_pic/14119434037559.jpg"
    },
    {
      type: "point",
      text: "Az almaecet csökkentheti a vércukorszintet és az étvágyat is. Egy evőkanálnyi almaecet vízben elkeverve étkezés előtt csökkentheti az elfogyasztott kalóriák mennyiségét."
    },
    {
      type: "header",
      level: 2,
      text: "5. Zabpehely",
      src: "https://www.eletmod-magazin.com/images/maximus/zabpehely-0425.png"
    },
    {
      type: "point",
      text: "A zabpehely egy kiváló lassan felszívódó szénhidrát, amely stabilizálja a vércukorszintet, így elkerülhetőek a falási rohamok. Emellett magas rosttartalmú, ami hosszan tartó jóllakottságot biztosít."
    },
    {
      type: "header",
      level: 2,
      text: "6. Avokádó",
      src: "https://www.mindmegette.hu/images/360/O/avokado-1.jpg"
    },
    {
      type: "point",
      text: "Az avokádó egészséges zsírokkal van tele, amelyek segítenek csökkenteni a rossz koleszterinszintet, és javítják az anyagcserét. Bár kalóriadús, mértékkel fogyasztva hozzájárulhat a fogyáshoz."
    },
    {
      type: "header",
      level: 2,
      text: "7. Tojás",
      src: "https://www.agraroldal.hu/kep/730x400/1022463.jpg"
    },
    {
      type: "point",
      text: "A tojás fehérjében gazdag, ami növeli a teltségérzetet és csökkenti a napi kalóriabevitelt. Reggelire fogyasztva hosszabb időn át fenntarthatja az energiaszintet."
    },
    {
      type: "break"
    },
    {
      type: "break"
    },
    {
      type: "break"
    },
    {
      type: "header",
      level: 2,
      text: "Hogyan építse be ezeket az ételeket az étrendjébe?"
    },
    {
      type: "point",
      text: "Egyszerűen adja hozzá ezeket az összetevőket a napi étkezéseihez, például kezdje a napot egy tojásos omlettel és egy csésze zöld teával, vagy cserélje le a desszertet egy friss grapefruitra. Ezek a kis változtatások nagy hatással lehetnek a testsúlyára."
    },
    {
      type: "point",
      text: "Az egészséges táplálkozás kulcsa a megfelelő ételek kiválasztása. Az itt felsorolt ételek segíthetnek a súlycsökkentésben, miközben támogatják a szervezet egészségét. Próbálja ki őket, és élvezze az eredményeket!"
    },
    {
      type: "end",
    }
  ],
  napietrend: [
    {
      type: "header",
      level: 1,
      text: "Tudta? Így állítsa össze az ideális napi étrendjét!",
      src: "https://eletmodcentrum.hu/wp-content/uploads/2022/02/Mire-jok-a-zoldseglevek.jpg"
    },
    {
      type: "point",
      text: "Az egészséges táplálkozás kulcsa a megfelelően összeállított napi étrend. Az alábbiakban bemutatjuk, hogyan alakíthatja ki a tökéletes napi étkezést a szervezete számára."
    },
    
    {
      type: "header",
      level: 2,
      text: "1. Reggeli: Zabpehely és gyümölcs",
      src: "https://gabykonyha.hu/wp-content/uploads/2018/07/Gy%C3%BCm%C3%B6lcs%C3%B6s-zabk%C3%A1sa.jpg"
    },
    {
      type: "bigger",
      text: "A zabpehely lassan felszívódó szénhidrát, amely stabilizálja a vércukorszintet. Adjunk hozzá friss gyümölcsöket, hogy extra vitamint és ízt nyerjünk."
    },
    {
      type: "header",
      level: 2,
      text: "2. Ebéd: Grillezett csirke és zöldségek",
      src: "https://kep.index.hu/1/0/3268/32685/326857/32685736_69663dceeeed8c57627d100d0139fc6d_wm.jpg"
    },
    {
      type: "bigger",
      text: "A fehérjedús csirkehús és a friss zöldségek kombinációja tökéletes egyensúlyt biztosít a napi energia szükséglethez."
    },
    {
      type: "header",
      level: 2,
      text: "3. Vacsora: Lencse leves és teljes kiőrlésű kenyér",
      src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizTS7VdbjGagw3mMSLPsPRgP4as2v5uyJayYYrigdVcHJJr6oeK0bZHNHmhTpyh59XeBqj596NYOsjqzp8WW5m2FKcYJI5qkatUUpHJRws7B4-UfLm4918kWbPtE1_jfUCxjRseBk4O6Y/s1600/IMG_20160423_073009.jpg"
    },
    {
      type: "bigger",
      text: "A lencse tele van növényi fehérjével és rosttal, ami segít a teltségérzet fenntartásában és az emésztés javításában."
    },
    {
      type: "break"
    },
    {
      type: "header",
      level: 2,
      text: "Tippek a napi étrend tervezéséhez"
    },
    {
      type: "point",
      text: "Ne felejtsük el a megfelelő hidratációt! Fogyasszunk naponta legalább 2 liter vizet, és kerüljük a cukros italokat."
    },
    {
      type: "point",
      text: "Az adagok kontrollálása fontos: Tartsuk szem előtt a kalória bevitelünket, és próbáljuk meg elkerülni a túlzott nassolást."
    },
    {
      type: "end",
    }
  ],
  kiegyensulyozottetrend: [
    {
      type: "header",
      level: 1,
      text: "Egyszerű tippek a kiegyensúlyozott étrend kialakításához",
      src: "https://www.mindmegette.hu/images/356/Social/lead_Social_shutterstock_1463448374-(1).jpg"
    },
    {
      type: "point",
      text: "A kiegyensúlyozott étrend alapja a megfelelő arányban fogyasztott fehérjék, szénhidrátok és zsírok. Az alábbi tippek segítenek abban, hogy minden étkezésnél megtaláljuk az egyensúlyt."
    },
    {
      type: "header",
      level: 2,
      text: "1. Fehérje: Tojás és hal",
      src: "https://www.mindmegette.hu/images/174/O/m01a9217.jpg"
    },
    {
      type: "bigger",
      text: "A tojás és a hal kiváló fehérjeforrás, amelyek hozzájárulnak az izomtömeg fenntartásához és a regenerálódáshoz."
    },
    {
      type: "header",
      level: 2,
      text: "2. Szénhidrát: Teljes kiőrlésű gabonák",
      src: "https://image-api.hazipatika.com/hazipatika/images/articles/GO/Ch/PqBgO6PzJS7Ph4GOVtvk2okVM33Aq6fHBjELDBjW.jpg?w=1200&h=630&s=8dad146f4e0709a9adbd156ae4142273"
    },
    {
      type: "bigger",
      text: "A teljes kiőrlésű gabonák lassan felszívódó szénhidrátok, amelyek biztosítják a hosszantartó energiát és stabil vércukorszintet."
    },
    {
      type: "header",
      level: 2,
      text: "3. Zsírok: Avokádó és olívaolaj",
      src: "https://gyogyszernelkul.com/wp-content/uploads/2019/05/a-vilag-egyik-legcsodalatosabb-olaja-avokado.jpg"
    },
    {
      type: "bigger",
      text: "Az avokádó és az olívaolaj egészséges zsírokat tartalmaznak, amelyek támogatják a szív egészségét és a sejtek működését."
    },
    {
      type: "header",
      level: 2,
      text: "Hogyan tartható fenn az egyensúly?"
    },
    {
      type: "point",
      text: "A kiegyensúlyozott étrend nem csak a megfelelő ételek kiválasztásáról szól, hanem az adagok és az étkezési idők betartásáról is."
    },
    {
      type: "point",
      text: "Tartsuk szem előtt a változatosságot! Próbáljunk ki új ételeket és recepteket, hogy minden szükséges tápanyaghoz hozzájuthassunk."
    },
    {
      type: "end",
    }
  ],
  kaloriacsokkentes: [
    {
      type: "header",
      level: 1,
      text: "Így csökkentheti a kalóriabevitelt anélkül, hogy éhezne",
      src: "https://prove.hu/wp-content/uploads/2020/04/Teljes-%C3%A9rt%C3%A9k%C5%B1-n%C3%B6v%C3%A9nyi-%C3%A9trend-komplett-%C3%BAtmutat%C3%B3.jpg"
    },
    {
      type: "point",
      text: "Az okos ételválasztás és az adagok kontrollálása segít a kalóriabevitel csökkentésében, miközben jóllakottnak érezheti magát. Az alábbiakban bemutatjuk, hogyan érheti el ezt."
    },
    {
      type: "header",
      level: 2,
      text: "1. Saláták friss zöldségekből",
    },
    {
      type: "point",
      text: "A zöldségek alacsony kalóriatartalmúak, de magas rosttartalmuk miatt segítenek a teltségérzet fenntartásában. Készítsen salátákat spenótból, uborkából és paradicsomból."
    },
    {
      type: "header",
      level: 2,
      text: "2. Cserélje le a szénhidrátokat zöldségekre",
    },
    {
      type: "point",
      text: "Próbálja ki a zöldség alapú alternatívákat, például cukkini tésztát vagy karfiol rizst, amelyek alacsonyabb kalóriatartalmúak, de táplálóak."
    },
    {
      type: "header",
      level: 2,
      text: "3. Egészséges zsírok mértékkel",
    },
    {
      type: "point",
      text: "Az avokádó, diófélék és olívaolaj egészséges zsírokat tartalmaznak, amelyek kis mennyiségben fogyasztva segítik a jóllakottság érzését."
    },
    {
      type: "break"
    },
    {
      type: "header",
      level: 2,
      text: "Kalóriaszegény étkezési tippek"
    },
    {
      type: "point",
      text: "Használjon kisebb tányérokat és adagokat, hogy vizuálisan is nagyobbnak tűnjenek az ételek, és így kevesebb kalóriát fogyasszon."
    },
    {
      type: "point",
      text: "Igyon vizet étkezések előtt, hogy csökkentse az étvágyát és elkerülje a túlevést."
    },
    {
      type: "end",
    }
  ],
  egeszsegesnass: [
    {
      type: "header",
      level: 1,
      text: "Egészséges nassolnivalók, amelyekkel elkerülheti a hízást",
      src: "https://s.24.hu/app/uploads/sites/11/2024/01/raisins-5593502_1280.jpg"
    },
     {
      type: "point",
      text: "Válogasson az egészséges snackek közül, amelyek táplálóak és nem okoznak súlygyarapodást. Az alábbiakban bemutatjuk a legjobb nassolnival"},
     {
      type: "header",
      level: 2,
      text: "1. Mandula",
      src: "https://magzsola.hu/img/90303/021000251/mandula_mandulabel.webp"
    },
    {
      type: "bigger",
      text: "A mandula gazdag egészséges zsírokban, fehérjében és rostban. Segít a teltségérzet fenntartásában, és ideális snack, ha mértékkel fogyasztjuk."
    },
    {
      type: "header",
      level: 2,
      text: "2. Sárgarépa és hummusz",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTQrujiGCEci_2y0KSPBHkI8dEdWciQdw4w&s"
    },
    {
      type: "bigger",
      text: "A sárgarépa alacsony kalóriatartalmú, míg a hummusz gazdag rostokban és fehérjében. Ez a kombináció segít a nassolás során is egészséges választást biztosítani."
    },
    {
      type: "header",
      level: 2,
      text: "3. Görög joghurt gyümölcsökkel",
      src: "https://i0.wp.com/vajling.hu/wp-content/uploads/2024/05/Gorog_joghurtos_granola_tal_friss_gyumolcsokkel-scaled.webp?fit=800%2C800&ssl=1"
    },
    {
      type: "bigger",
      text: "A görög joghurt magas fehérjetartalmú, és ha friss gyümölcsökkel fogyasztjuk, ízletes és tápláló snacket kapunk, amely segít az édesség utáni vágy csillapításában."
    },
    {
      type: "header",
      level: 2,
      text: "Hogyan válasszunk egészséges snackeket?"
    },
    {
      type: "point",
      text: "Válasszon olyan nassolnivalókat, amelyek alacsony cukortartalmúak és gazdagok rostban, fehérjében vagy egészséges zsírokban."
    },
    {
      type: "point",
      text: "Kerülje a feldolgozott ételeket, amelyek gyakran rejtett cukrokat és egészségtelen zsírokat tartalmaznak."
    },
    {
      type: "end",
    }
  ],
  tapanyagbangazdag: [
    {
      type: "header",
      level: 1,
      text: "Tápanyagban gazdag ételek, amelyek minden étrendbe beleillenek",
      src: "https://prove.hu/wp-content/uploads/2022/02/egeszseges-novenyi-etrend-meghosszabbithatja-az-eletunket-740x460.jpg"
    },
    {
      type: "point",
      text: "Ez a lista azokról az ételekről, amelyek tele vannak vitaminokkal és ásványi anyagokkal, és bármely étrend részei lehetnek. Fedezze fel, hogyan gazdagíthatja étrendjét."
    },
    {
      type: "header",
      level: 2,
      text: "1. Brokkoli",
      src: "https://img-global.cpcdn.com/recipes/edbfca45fd5b4d36/1200x630cq70/photo.jpg"
    },
    {
      type: "bigger",
      text: "A brokkoli gazdag vitaminokban (különösen C-vitaminban) és ásványi anyagokban, mint a kalcium és a vas. Remek választás minden étkezéshez."
    },
    {
      type: "header",
      level: 2,
      text: "2. Áfonya",
      src: "https://greendex.hu/wp-content/uploads/2024/04/afonya.nagy-.jpg"
    },
    {
      type: "bigger",
      text: "Az áfonya tele van antioxidánsokkal, amelyek segítenek megvédeni a sejteket a károsodástól, és javítják az agyműködést."
    },
    {
      type: "header",
      level: 2,
      text: "3. Quinoa",
    },
    {
      type: "point",
      text: "A quinoa teljes értékű fehérjeforrás, amely gazdag vitaminokban és ásványi anyagokban. Kiváló alternatíva a hagyományos gabonák helyett."
    },
    {
      type: "break"
    },
    {
      type: "header",
      level: 2,
      text: "Hogyan illessze be ezeket az ételeket az étrendjébe?"
    },
    {
      type: "point",
      text: "Készítsen salátákat friss brokkolival, adjon áfonyát reggeli zabkásájához, vagy használja a quinoát köretként a főétkezésekhez."
    },
    {
      type: "point",
      text: "Ez a változatosság nemcsak ízletes, hanem tápláló is, segít fenntartani az egészséges táplálkozást és energiaszintet."
    },
    {
      type: "end",
    }
  ],
  brokkoli:[
    {
    type: "header",
    level: 1,
    text: "Miért érdemes több brokkolit fogyasztani?",
    src: "https://kep.cdn.indexvas.hu/1/0/1577/15772/157720/15772093_1fdf128e88b67f0b97d6f74c12cd8d91_wm.jpg"
    },
    {
        type: "point",
        text: "A brokkoli egy rendkívül tápláló zöldség, amely gazdag vitaminokban, ásványi anyagokban és antioxidánsokban. Fogyasztása támogatja az egészséges emésztést, csökkenti a gyulladásokat, és hozzájárul a szív- és érrendszer egészségéhez. Emellett alacsony kalóriatartalmú, így segíthet a súlykontrollban is."
    },
    {
        type: "header",
        level: 2,
        text: "1. Tápanyagok és előnyök",
    },
    {
        type: "point",
        text: "A brokkoli gazdag C-vitaminban, K-vitaminban, folsavban és rostban. Ezek a tápanyagok segítenek a sejtek védelmében, a csontok erősítésében és a bélrendszer egészségének fenntartásában."
    },
    {
        type: "header",
        level: 2,
        text: "2. Hogyan fogyasszuk?",
    },
    {
        type: "point",
        text: "A brokkolit párolhatjuk, süthetjük, vagy akár nyersen is fogyaszthatjuk salátákban. Érdemes változatos módon beépíteni az étrendbe, hogy minden előnyét kihasználhassuk."
    },
    {
        type: "break"
    },
    {
        type: "header",
        level: 2,
        text: "Tippek az étrendhez",
    },
    {
        type: "point",
        text: "Készítsen brokkoli alapú zöldségkeverékeket, adjon hozzá párolt brokkolit a főételekhez, vagy készítsen belőle finom brokkoli krémlevest. Így biztosíthatja, hogy elegendő brokkolit fogyasszon."
    },
    {
        type: "point",
        text: "Ne feledje, hogy a brokkoli kiválóan kombinálható más zöldségekkel, mint például a sárgarépa vagy a paprika, így még gazdagabbá teheti az étkezéseit."
    },
    {
        type: "end",
    }

  ],
  zabpehely: [
    {
      type: "header",
      level: 1,
      text: "A zabpehely ereje: Miért érdemes a reggelijébe építeni?",
      src: "https://receptvadasz.hu/wp-content/uploads/2021/01/a-zabpehely-fogyasztasanak-elonyei-egeszsegre-gyakorolt-hatasai.jpg"
    },
    {
      type: "point",
      text: "A zabpehely egy kiváló lassan felszívódó szénhidrát, amely stabilizálja a vércukorszintet és hosszú ideig fenntartja a teltségérzetet."
    },
    {
      type: "header",
      level: 2,
      text: "1. Tápanyagok gazdagsága",
    },
    {
      type: "point",
      text: "A zabpehely gazdag rostban, vitaminokban és ásványi anyagokban, mint a vas és a magnézium. Ez segít az emésztésben és az általános egészség fenntartásában."
    },
    {
      type: "header",
      level: 2,
      text: "2. Reggeli ötletek",
    },
    {
      type: "point",
      text: "Próbálja ki a zabpelyhet joghurttal, friss gyümölcsökkel és egy kis mézzel, vagy készítsen belőle tápláló zabkását, amelyet ízlés szerint variálhat."
    },
    {
      type: "break"
    },
    {
      type: "header",
      level: 2,
      text: "Előnyök és hatások"
    },
    {
      type: "point",
      text: "A zabpehely fogyasztása segít a vércukorszint stabilizálásában, csökkenti a koleszterinszintet, és hozzájárul az energikus reggelekhez."
    },
    {
      type: "point",
      text: "Ha szeretné növelni a reggeli tápanyagtartalmát, adjon hozzá egy adag friss gyümölcsöt vagy egy marék dióféléket."
    },
    {
      type: "end",
    }
  ],
  avokado: [
    {
      type: "header",
      level: 1,
      text: "Az avokádó jótékony hatásai az étrendben",
      src: "https://www.mindmegette.hu/images/360/O/avokado-1.jpg"
    },
    {
      type: "point",
      text: "Az avokádó egészséges zsírokat tartalmaz, amelyek segítenek csökkenteni a rossz koleszterinszintet, és javítják az anyagcserét. Bár kalóriadús, mértékkel fogyasztva hozzájárulhat a fogyáshoz."
    },
    {
      type: "header",
      level: 2,
      text: "1. Egészséges zsírok forrása",
    },
    {
      type: "point",
      text: "Az avokádó monounsaturated zsírokat tartalmaz, amelyek segítenek a szív egészségének megőrzésében és a gyulladások csökkentésében."
    },
    {
      type: "header",
      level: 2,
      text: "2. Recept ötletek",
    },
    {
      type: "point",
      text: "Használja az avokádót salátákban, szendvicsekben vagy készítsen guacamole-t, ami egy ízletes és tápláló kiegészítő lehet az étkezésekhez."
    },
    {
      type: "break"
    },
    {
      type: "header",
      level: 2,
      text: "Tippek az avokádó mértékletes fogyasztásához"
    },
    {
      type: "point",
      text: "Mivel az avokádó kalóriadús, ügyeljen arra, hogy mértékkel fogyassza, és kombinálja alacsony kalóriatartalmú ételekkel a tápláló egyensúly fenntartása érdekében."
    },
    {
      type: "point",
      text: "Próbálja ki a fél avokádót reggelire, hogy megkapja a szükséges zsírokat anélkül, hogy túlzásba vinné a kalóriabevitelt."
    },
    {
      type: "end",
    }
  ],
  tojas: [
    {
    type: "header",
    level: 1,
    text: "Tojás: Az egyik legjobb fehérjeforrás a mindennapokban",
    src: "https://felegyhazikozlony.eu/imgs_news/1024/125066.jpg"
    },
    {
        type: "point",
        text: "A tojás kiváló fehérjeforrás, amely gazdag vitaminokban és ásványi anyagokban, például B12-vitaminban, D-vitaminban és szelénben. Segít az izmok építésében, a teltségérzet fenntartásában és az általános egészségi állapot javításában."
    },
    {
        type: "header",
        level: 2,
        text: "1. Fehérje és tápanyagok",
    },
    {
        type: "point",
        text: "Egy tojás körülbelül 6-7 gramm fehérjét tartalmaz, ami fontos az izomépítéshez és a regenerációhoz. Emellett tartalmaz az esszenciális aminosavakat, amelyeket a szervezet nem tud önállóan előállítani."
    },
    {
        type: "header",
        level: 2,
        text: "2. Recept ötletek",
    },
    {
        type: "point",
        text: "A tojás sokoldalú alapanyag, amelyet számos módon elkészíthet. Készíthet belőle omlettet, tojásrántottát, vagy adhatja salátákhoz és szendvicsekhez. Próbáljon ki különböző ízesítéseket, hogy változatosabbá tegye az étkezéseit."
    },
    {
        type: "break"
    },
    {
        type: "header",
        level: 2,
        text: "Tippek a tojás beépítéséhez az étrendbe"
    },
    {
        type: "point",
        text: "Fogyasszon tojást reggelire, hogy energikus napot kezdjen, vagy használja fel azokat az étkezések során, hogy növelje a fehérje bevitelt. A tojás ideális választás a gyors és tápláló étkezésekhez."
    },
    {
        type: "point",
        text: "Ügyeljen arra, hogy változatosan készítse el a tojást, például főzve, sütve, vagy tükörtojás formájában, hogy élvezze a különböző textúrákat és ízeket."
    },
    {
        type: "end",
    }

  ],
  lencse: [
    {
    type: "header",
    level: 1,
    text: "Lencse: A növényi fehérje ereje",
    src: "https://kep.index.hu/1/0/3136/31367/313678/31367807_2408531_21bae90d3e089afc57f751827eb5534c_wm.jpg"
    },
    {
        type: "point",
        text: "A lencse egy kiváló növényi fehérjeforrás, amely gazdag vitaminokban, ásványi anyagokban és rostokban. Fogyasztása hozzájárulhat a szív egészségéhez, az emésztés javításához és a tartós teltségérzet fenntartásához."
    },
    {
        type: "header",
        level: 2,
        text: "1. Tápláló értékek",
    },
    {
        type: "point",
        text: "A lencse magas fehérje- és rosttartalommal rendelkezik, ami segít az izomépítésben és a bélrendszer egészségének fenntartásában. Emellett gazdag folsavban, magnéziumban és vasban is."
    },
    {
        type: "header",
        level: 2,
        text: "2. Receptek és felhasználás",
    },
    {
        type: "point",
        text: "A lencse sokféleképpen felhasználható az étrendben. Készíthet belőle ízletes leveseket, salátákat, vagy akár főételt is. Próbálja ki például lencse pörköltet vagy lencse salátát."
    },
    {
        type: "break"
    },
    {
        type: "header",
        level: 2,
        text: "Tippek a lencse beépítéséhez az étrendbe"
    },
    {
        type: "point",
        text: "Adjon lencsét az étkezéseihez heti 2-3 alkalommal, hogy kihasználhassa a növényi fehérjék és rostok előnyeit. A lencse gyorsan elkészíthető és sokoldalú alapanyag, amely jól illeszkedik különféle ételekhez."
    },
    {
        type: "point",
        text: "Főzés előtt áztassa be a lencsét, hogy gyorsabban megpuhuljon és még ízletesebb legyen. A főtt lencse jól tárolható a hűtőben, így könnyedén beépíthető az heti menübe."
    },
    {
        type: "end",
    }

  ],
  afonya: [
    {
    type: "header",
    level: 1,
    text: "Ne hagyja ki: Az áfonya jótékony hatásai az egészségére",
    src: "https://afonyainfo.hu/wp-content/uploads/2021/08/afonya_fagyasztasa.jpg"
    },
    {
        type: "point",
        text: "Az áfonya egy rendkívül tápanyagban gazdag gyümölcs, amely számos egészségügyi előnnyel rendelkezik. Tele van antioxidánsokkal, vitaminokkal és ásványi anyagokkal, amelyek támogatják az immunrendszert és javítják az általános egészségi állapotot."
    },
    {
        type: "header",
        level: 2,
        text: "1. Antioxidánsok és egészségügyi előnyök",
    },
    {
        type: "point",
        text: "Az áfonya gazdag antioxidánsokban, különösen flavonoidokban, amelyek segítenek megvédeni a sejteket a károsodástól és támogathatják a szív egészségét. Emellett erősíti az immunrendszert és javítja a kognitív funkciókat."
    },
    {
        type: "header",
        level: 2,
        text: "2. Hogyan használjuk?",
    },
    {
        type: "point",
        text: "Az áfonyát fogyaszthatja frissen, fagyasztva, vagy szárítva. Adja hozzá a reggeli zabkásájához, smoothie-khoz, vagy salátákhoz. Az áfonya íze és tápanyagai könnyen beilleszthetők az étrendbe."
    },
    {
        type: "break"
    },
    {
        type: "header",
        level: 2,
        text: "Tippek az áfonya fogyasztásához"
    },
    {
        type: "point",
        text: "A fagyasztott áfonya könnyen hozzáférhető és hosszú ideig eltartható, így mindig kéznél lehet. Fogyassza önállóan, vagy használja ízesítésként különböző ételekhez és italokhoz."
    },
    {
        type: "point",
        text: "Ha friss áfonyát vásárol, ügyeljen arra, hogy érett, de ne túlérett gyümölcsöket válasszon. Az áfonyát hűtőszekrényben tárolja, és lehetőleg fogyasztás előtt alaposan mosson le."
    },
    {
        type: "end",
    }

  ]
};

export default posts;
