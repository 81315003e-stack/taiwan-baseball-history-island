/* ===========================================================================
   棒球群島 BASEBALL ARCHIPELAGO — 資料檔
   ---------------------------------------------------------------------------
   這份檔案是本體（ontology）實例化後的結果，前端只負責渲染它。
   兩層結構：
     Franchise（球團，可跨年、可轉手、可休眠）
     Team     （某一時期的隊名，掛在 Franchise 底下）
   關係（object properties）定義見 index.html 的「本體」頁。
   =========================================================================== */

window.ARCHIPELAGO = {
  meta: {
    title: "棒球群島",
    subtitle: "BASEBALL ARCHIPELAGO",
    retrieved: "2026-10-29",
    yearMin: 1990,
    yearMax: 2026
  },

  /* -------------------------------------------------------------------------
     島嶼 = Franchise
     status : active 浮島 ｜ sunk 沉島 ｜ tml 前聯盟幽靈島
     spans  : 在中職一軍存在的區間（用於時間軸的浮出／沉沒）
     titles : 年度總冠軍次數；null = 本資料集尚未查證，不臆測
     x / y  : 群島地圖上的位置（0-100 的相對座標）
     ------------------------------------------------------------------------- */
  islands: [
    {
      id: "F01",
      label: "統一獅",
      en: "Lions",
      status: "active",
      color: "#E8761E",
      x: 30, y: 30, size: 1.0,
      spans: [[1990, 2026]],
      titles: null,
      home: "臺南",
      names: [
        { name: "統一獅", from: 1990, to: 2007 },
        { name: "統一 7-ELEVEn 獅", from: 2008, to: null }
      ],
      story: "中職四支元老球團之一，也是唯一一支從 1990 年開幕至今未曾易主、未曾中斷的球團。在本體裡它是最單純的個案：Franchise 與 Team 幾乎一對一，只有一次冠名調整。",
      events: [
        { year: 1990, text: "以創始球團身分加盟中華職棒" },
        { year: 2008, text: "冠名調整為「統一 7-ELEVEn 獅」" },
        { year: 2026, text: "新主場臺南亞太棒球村主球場啟用" }
      ]
    },
    {
      id: "F02",
      label: "中信兄弟",
      en: "Brothers",
      status: "active",
      color: "#F0C419",
      x: 52, y: 22, size: 1.0,
      spans: [[1990, 2026]],
      titles: 10,
      home: "臺中",
      names: [
        { name: "兄弟飯店棒球隊", from: 1984, to: 1989, pre: true },
        { name: "兄弟象", from: 1990, to: 2013 },
        { name: "中信兄弟", from: 2014, to: null }
      ],
      story: "2013 年底洪家結束 29 年的經營，球團由華翼育樂接手、中國信託冠名，2014 年 1 月 5 日起改名中信兄弟，沿用象與黃色。隊史紀錄照舊累計——這就是為什麼它在本體裡是 renamedTo 而不是一座新島。",
      events: [
        { year: 1984, text: "前身兄弟飯店棒球隊成立" },
        { year: 1990, text: "以創始球團身分加盟中華職棒" },
        { year: 2013, text: "洪家宣布轉賣，經營權易主" },
        { year: 2014, text: "正式更名為中信兄弟" }
      ]
    },
    {
      id: "F03",
      label: "味全龍",
      en: "Dragons",
      status: "active",
      color: "#C8102E",
      x: 72, y: 34, size: 0.95,
      spans: [[1990, 1999], [2019, 2026]],
      titles: 5,
      home: "臺北",
      names: [
        { name: "味全棒球隊", from: 1978, to: 1989, pre: true },
        { name: "味全龍", from: 1990, to: 1999 },
        { name: "味全龍", from: 2019, to: null }
      ],
      story: "全資料集最棘手的一座島。1999 年 12 月宣布解散，沉了 20 年；2019 年 6 月由頂新集團以「味全龍」之名重新加盟獲准，2021 年重返一軍。隊名相同、法人不同、球員全換——這是同一座島浮回來，還是一座長得很像的新島？本站選擇以 revivedAs 連接而非視為同一條連續存在，理由見「本體」頁。",
      events: [
        { year: 1990, text: "以創始球團身分加盟中華職棒" },
        { year: 1999, text: "球季後宣布解散，走入歷史" },
        { year: 2019, text: "聯盟通過味全加盟案，相隔 20 年重返" },
        { year: 2021, text: "重返一軍賽場" }
      ]
    },
    {
      id: "F04",
      label: "富邦悍將",
      en: "Guardians",
      status: "active",
      color: "#1D4E9B",
      x: 16, y: 58, size: 1.0,
      spans: [[1993, 2026]],
      titles: null,
      home: "新北",
      names: [
        { name: "俊國建設棒球隊", from: 1989, to: 1992, pre: true },
        { name: "俊國熊", from: 1993, to: 1995 },
        { name: "興農熊", from: 1996, to: 1996 },
        { name: "興農牛", from: 1996, to: 2012 },
        { name: "義大犀牛", from: 2013, to: 2016 },
        { name: "富邦悍將", from: 2017, to: null }
      ],
      story: "一座島換過五個名字、四個主人、從臺中漂到高雄再漂到新北。1995 年興農買下俊國熊是台灣職棒史上第一宗球團買賣；2012 年底義聯接手改稱義大犀牛；2016 年富邦育樂以 3 億元買下，隔年改名富邦悍將。在本體裡這一整串都是同一個 Franchise 的 renamedTo 鏈——但「球隊文化是否也延續」是資料回答不了的問題。",
      events: [
        { year: 1993, text: "俊國熊加盟，中職擴編為 6 隊" },
        { year: 1995, text: "興農集團買下股權，隔年更名興農熊" },
        { year: 1996, text: "季中由熊改牛，成為興農牛" },
        { year: 2013, text: "義聯集團接手，更名義大犀牛" },
        { year: 2016, text: "富邦育樂買下球團" },
        { year: 2017, text: "以富邦悍將之名出賽" }
      ]
    },
    {
      id: "F05",
      label: "樂天桃猿",
      en: "Monkeys",
      status: "active",
      color: "#8B1A33",
      x: 50, y: 62, size: 1.0,
      spans: [[2003, 2026]],
      titles: 8,
      home: "桃園",
      names: [
        { name: "第一金剛", from: 2003, to: 2003 },
        { name: "La New 熊", from: 2004, to: 2010 },
        { name: "Lamigo 桃猿", from: 2011, to: 2019 },
        { name: "樂天桃猿", from: 2020, to: null }
      ],
      story: "唯一一座血緣來自台灣大聯盟的島。2003 年兩聯盟合併時，臺北太陽與高屏雷公併成一隊、臺中金剛與嘉南勇士併成另一隊，然後兩隊「交換隊名」——所以叫金剛的那一隊，身體其實是太陽與雷公。這一刀把「名字」和「實體」徹底分開，是整個本體裡最值得講的一條邊。",
      events: [
        { year: 2003, text: "兩聯盟合併，以第一金剛之名進入中職" },
        { year: 2004, text: "La New 接手經營，更名 La New 熊" },
        { year: 2011, text: "主場北遷桃園，更名 Lamigo 桃猿" },
        { year: 2019, text: "股權轉讓日本樂天集團" },
        { year: 2020, text: "更名樂天桃猿" }
      ]
    },
    {
      id: "F06",
      label: "台鋼雄鷹",
      en: "Hawks",
      status: "active",
      color: "#0E7C4A",
      x: 82, y: 66, size: 0.8,
      spans: [[2024, 2026]],
      titles: null,
      home: "高雄",
      names: [{ name: "台鋼雄鷹", from: 2023, to: null }],
      story: "群島上最年輕、也是唯一一座沒有祖先的島。2022 年確定成為中職第六隊，2023 年先在二軍出賽，2024 年登上一軍。在本體裡它是 expansion——新生，不繼承任何隊史。",
      events: [
        { year: 2022, text: "確定成為中華職棒第六支球團" },
        { year: 2023, text: "自二軍起步" },
        { year: 2024, text: "一軍初登板" }
      ]
    },

    /* ---------------- 沉島 ---------------- */
    {
      id: "F07",
      label: "三商虎",
      en: "Tigers",
      status: "sunk",
      color: "#3E6FB0",
      x: 24, y: 86, size: 0.85,
      spans: [[1990, 1999]],
      titles: 0,
      home: "臺北／高雄",
      names: [
        { name: "三商行棒球隊", from: 1989, to: 1989, pre: true },
        { name: "三商虎", from: 1990, to: 1999 }
      ],
      story: "四支元老球團裡唯一從未奪得年度總冠軍的一支。1990 年拿下中職史上第一個半季冠軍，卻在總冠軍戰輸給味全龍；1999 年 11 月 8 日無預警宣布解散。",
      events: [
        { year: 1990, text: "拿下中職史上第一個半季冠軍" },
        { year: 1999, text: "11 月 8 日宣布解散" }
      ]
    },
    {
      id: "F08",
      label: "時報鷹",
      en: "Eagles",
      status: "sunk",
      color: "#6B4E9B",
      x: 44, y: 90, size: 0.7,
      spans: [[1993, 1998]],
      titles: 0,
      home: "屏東",
      names: [
        { name: "黑鷹棒球隊", from: 1990, to: 1991, pre: true },
        { name: "時報鷹", from: 1993, to: 1998 }
      ],
      story: "前身是 1990 年成立的黑鷹棒球隊，1991 年由中國時報收購後改名。與俊國熊同年加盟，1997 年受職棒簽賭案重創後提出停權一年，1998 年 9 月正式解散。",
      events: [
        { year: 1993, text: "與俊國熊同年加盟，中職擴編為 6 隊" },
        { year: 1997, text: "提出停權一年" },
        { year: 1998, text: "9 月宣布解散" }
      ]
    },
    {
      id: "F09",
      label: "中信鯨",
      en: "Whales",
      status: "sunk",
      color: "#1C7C8C",
      x: 66, y: 88, size: 0.8,
      spans: [[1997, 2008]],
      titles: null,
      home: "嘉義／新竹",
      names: [
        { name: "和信鯨", from: 1997, to: 2001 },
        { name: "中信鯨", from: 2002, to: 2008 }
      ],
      story: "1997 年以和信鯨之名加盟，2002 年隨集團分家改稱中信鯨。2008 年受簽賭案重創，尋求與兄弟象合併未成，11 月宣布解散。六年後中國信託買下兄弟象，但聯盟與球團都認定中信兄弟與中信鯨沒有隊史關係——同一個母企業，兩座不相連的島。",
      events: [
        { year: 1997, text: "以和信鯨之名加盟" },
        { year: 2002, text: "更名中信鯨" },
        { year: 2008, text: "11 月宣布解散" }
      ]
    },
    {
      id: "F10",
      label: "米迪亞暴龍",
      en: "T-Rex",
      status: "sunk",
      color: "#B33636",
      x: 86, y: 86, size: 0.7,
      spans: [[2003, 2008]],
      titles: 0,
      home: "臺北",
      names: [
        { name: "誠泰太陽", from: 2003, to: 2003 },
        { name: "誠泰 COBRAS", from: 2004, to: 2007 },
        { name: "米迪亞暴龍", from: 2008, to: 2008 }
      ],
      story: "2003 年合併案的另一半：身體是臺中金剛與嘉南勇士，名字卻拿到了太陽。2008 年轉手米迪亞後爆發簽賭案，同年 10 月 23 日遭聯盟除名——群島上唯一一座不是「解散」而是「被除名」的島。",
      events: [
        { year: 2003, text: "兩聯盟合併，以誠泰太陽之名進入中職" },
        { year: 2004, text: "更名誠泰 COBRAS" },
        { year: 2008, text: "轉手米迪亞，同年 10 月遭聯盟除名" }
      ]
    },

    /* ---------------- 台灣大聯盟幽靈島（1997-2002，不屬中職） ---------------- */
    {
      id: "T01", label: "臺北太陽", en: "Suns", status: "tml", color: "#8A8FA8",
      x: 34, y: 48, size: 0.45, spans: [[1997, 2002]], titles: null, home: "臺北",
      names: [{ name: "臺北太陽", from: 1997, to: 2002 }],
      story: "台灣大聯盟（TML）1997 年開打的四支球隊之一。2003 年兩聯盟合併時與高屏雷公併為一隊。",
      events: [{ year: 1997, text: "台灣大聯盟開打" }, { year: 2002, text: "兩聯盟合併前最後一季" }]
    },
    {
      id: "T02", label: "高屏雷公", en: "Gida", status: "tml", color: "#8A8FA8",
      x: 44, y: 52, size: 0.45, spans: [[1997, 2002]], titles: null, home: "高雄／屏東",
      names: [{ name: "高屏雷公", from: 1997, to: 2002 }],
      story: "TML 四隊之一，2003 年與臺北太陽併為一隊，該隊最終使用「金剛」之名。",
      events: [{ year: 1997, text: "台灣大聯盟開打" }, { year: 2002, text: "兩聯盟合併前最後一季" }]
    },
    {
      id: "T03", label: "臺中金剛", en: "Agan", status: "tml", color: "#8A8FA8",
      x: 76, y: 50, size: 0.45, spans: [[1997, 2002]], titles: null, home: "臺中",
      names: [{ name: "臺中金剛", from: 1997, to: 2002 }],
      story: "TML 四隊之一，2003 年與嘉南勇士併為一隊，該隊最終使用「太陽」之名。",
      events: [{ year: 1997, text: "台灣大聯盟開打" }, { year: 2002, text: "兩聯盟合併前最後一季" }]
    },
    {
      id: "T04", label: "嘉南勇士", en: "Luka", status: "tml", color: "#8A8FA8",
      x: 88, y: 54, size: 0.45, spans: [[1997, 2002]], titles: null, home: "嘉義／臺南",
      names: [{ name: "嘉南勇士", from: 1997, to: 2002 }],
      story: "TML 四隊之一，2003 年與臺中金剛併為一隊。",
      events: [{ year: 1997, text: "台灣大聯盟開打" }, { year: 2002, text: "兩聯盟合併前最後一季" }]
    }
  ],

  /* -------------------------------------------------------------------------
     海流 = 島與島之間的關係
     每一條線都標明關係類型，爭議處以 contested: true 標記
     ------------------------------------------------------------------------- */
  currents: [
    { from: "T01", to: "F05", type: "mergedInto", year: 2003, label: "併入" },
    { from: "T02", to: "F05", type: "mergedInto", year: 2003, label: "併入" },
    { from: "T03", to: "F10", type: "mergedInto", year: 2003, label: "併入" },
    { from: "T04", to: "F10", type: "mergedInto", year: 2003, label: "併入" },
    {
      from: "F05", to: "F10", type: "nameSwap", year: 2003, label: "隊名交換",
      contested: true,
      note: "合併後兩隊互換隊名：由太陽＋雷公組成的球隊叫「金剛」，由金剛＋勇士組成的球隊叫「太陽」。名稱與實體在此分家。"
    },
    {
      from: "F09", to: "F02", type: "noRelation", year: 2014, label: "無隊史關係",
      contested: true,
      note: "中國信託 2014 年買下兄弟象。母企業相同，但聯盟與球團皆認定中信兄弟不繼承中信鯨隊史。本站以 noRelation 明確標記這條「看起來該連、但不該連」的邊。"
    }
  ],

  /* -------------------------------------------------------------------------
     本體定義（在「本體」頁直接渲染）
     ------------------------------------------------------------------------- */
  ontology: {
    classes: [
      { name: "Franchise", zh: "球團", desc: "經營實體。可跨年、可轉手、可休眠、可被除名。隊史紀錄累計的單位。", count: 14 },
      { name: "Team", zh: "隊名時期", desc: "某一段期間對外使用的隊名。掛在 Franchise 底下，有起訖年。", count: 36 },
      { name: "Event", zh: "沿革事件", desc: "加盟、轉賣、改名、解散、除名、重新加盟。有年份、有類型。", count: 37 },
      { name: "League", zh: "聯盟", desc: "中華職棒（1990–）與台灣大聯盟（1997–2002）。", count: 2 },
      { name: "Statement", zh: "陳述", desc: "「誰說某球團從哪一年到哪一年」。預留給來源歧異的情況，目前以頁尾來源清單代行。", count: null }
    ],
    properties: [
      { name: "renamedTo", domain: "Team → Team", desc: "同一 Franchise 內的改名。隊史延續，不產生新島。", example: "兄弟象 → 中信兄弟" },
      { name: "succeededBy", domain: "Franchise → Franchise", desc: "經營權移轉且本站認定為延續關係。", example: "俊國熊 → 興農熊" },
      { name: "mergedInto", domain: "Franchise → Franchise", desc: "兩個以上實體合併為一。", example: "臺北太陽＋高屏雷公 → 金剛" },
      { name: "nameSwap", domain: "Franchise ↔ Franchise", desc: "兩個實體互換名稱。名稱的連續性與實體的連續性在此分離。", example: "2003 年合併案" },
      { name: "revivedAs", domain: "Franchise → Franchise", desc: "解散後以相同名稱重新成立，中間存在空窗。", example: "味全龍 1999 → 2019" },
      { name: "dissolvedIn", domain: "Franchise → Year", desc: "主動解散。", example: "三商虎 1999" },
      { name: "expelledIn", domain: "Franchise → Year", desc: "遭聯盟除名，與主動解散區分。", example: "米迪亞暴龍 2008" },
      { name: "noRelation", domain: "Franchise ↮ Franchise", desc: "顯式否定。用於外界容易誤連、但本站判定不相連的一對。", example: "中信鯨 ↮ 中信兄弟" }
    ],
    decisions: [
      {
        q: "味全龍 1999 與 2019 是同一座島嗎？",
        a: "本站判定為 revivedAs，而不是 sameAs。理由：法人不同、球員與教練團全部重組、中間有 20 年空窗，聯盟程序上也是走「加盟案」而非復權。但名稱、隊徽、球迷社群與自我認同確實延續，所以也不處理成兩座毫無關係的島。這條線在地圖上畫成虛線。"
      },
      {
        q: "兄弟象 → 中信兄弟是改名還是換島？",
        a: "改名（renamedTo）。經營權與法人都變了，但球隊未曾停賽、隊史紀錄連續累計、聯盟視為同一球團。這說明「法人變更」本身不足以切斷同一性——真正的判準是賽事參與的連續性。"
      },
      {
        q: "中信鯨和中信兄弟為什麼不連？",
        a: "因為同一個母企業不等於同一個球團。這是本資料集裡唯一一條 noRelation：與其讓這條邊不存在，不如把「不存在」明確寫出來，否則讀者無從分辨是沒資料還是判定為無關。"
      },
      {
        q: "為什麼要把 Franchise 和 Team 分成兩層？",
        a: "因為「某人在某隊」「某隊拿下某年冠軍」這類陳述需要掛在不同層級。冠軍屬於 Franchise 的累計紀錄，但出賽紀錄屬於某個 Team 時期。單層模型會逼你在「興農牛的紀錄算不算富邦悍將的」這種問題上二選一。"
      },
      {
        q: "缺了什麼？",
        a: "Person（球員、教練）、Venue（球場）、Season、Game 都還沒建。總冠軍次數只填了有把握的幾隊，其餘留空而不臆測——本體的誠實比完整重要。"
      }
    ]
  },

  sources: [
    { name: "台灣棒球維基館（淡江大學資訊與圖書館學系）", url: "https://twbsball.dils.tku.edu.tw/" },
    { name: "中華職棒大聯盟全球資訊網", url: "https://www.cpbl.com.tw/" },
    { name: "維基百科 各球團條目", url: "https://zh.wikipedia.org/wiki/中華職業棒球大聯盟" }
  ]
};
