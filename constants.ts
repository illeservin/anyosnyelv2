
import type { Article, Category } from './types';

export const CATEGORIES: Category[] = ['Belföld', 'Külföld', 'Gazdaság', 'Kultúra', 'Tech'];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    title: "Váratlan fordulat a jegybanki alapkamat körül: mit lép a kormány?",
    excerpt: "Elemzők sem számítottak rá, de a Monetáris Tanács a piacokat meglepő döntést hozott. A forint árfolyama azonnal reagált, a gazdasági kilátások pedig hirtelen bizonytalanná váltak.",
    imageUrl: "https://picsum.photos/seed/politics/1200/800",
    category: "Gazdaság",
    author: "Nagy Gábor",
    date: "2024. július 22."
  },
  {
    id: 2,
    title: "Új kulturális negyed épül a Duna-parton: zöld oázis vagy beton dzsungel?",
    excerpt: "Hatalmas beruházás keretében alakítják át a volt iparterületet. A tervek lenyűgözőek, de a helyi civilek aggódnak a beépítés mértéke és a zöldterületek sorsa miatt.",
    imageUrl: "https://picsum.photos/seed/culture/800/600",
    category: "Kultúra",
    author: "Kiss Eszter",
    date: "2024. július 21."
  },
  {
    id: 3,
    title: "Brüsszel ultimátumot adott: heteken belül dönteni kell a vitás kérdésekről",
    excerpt: "Az Európai Bizottság egyértelműsítette álláspontját a jogállamisági eljárásban. A magyar kormány válaszút előtt áll, a befagyasztott uniós pénzek sorsa a tét.",
    imageUrl: "https://picsum.photos/seed/foreign/800/600",
    category: "Külföld",
    author: "Kovács András",
    date: "2024. július 22."
  },
  {
    id: 4,
    title: "Áttörés a mesterséges intelligencia kutatásában: magyar siker a Szilícium-völgyben",
    excerpt: "Egy magyar startup olyan algoritmust fejlesztett, ami forradalmasíthatja az adatelemzést. A nagy tech cégek már most sorban állnak a technológiáért.",
    imageUrl: "https://picsum.photos/seed/tech/800/600",
    category: "Tech",
    author: "Szabó Dávid",
    date: "2024. július 20."
  },
  {
    id: 5,
    title: "Megszólalt a belügyminiszter: szigorítások jönnek a közoktatásban",
    excerpt: "A kormány új rendelettervezete alapjaiban változtatná meg az iskolák működését. A tanári szakszervezetek tiltakoznak, országos sztrájk is elképzelhető.",
    imageUrl: "https://picsum.photos/seed/domestic/800/600",
    category: "Belföld",
    author: "Varga Zsófia",
    date: "2024. július 19."
  },
   {
    id: 6,
    title: "Lezárult a cannes-i filmfesztivál, taroltak a független filmek",
    excerpt: "A nagy stúdiók hoppon maradtak, miközben a zsűri a bátor és formabontó alkotásokat díjazta. A legjobb rendező díját egy feltörekvő dán tehetség kapta.",
    imageUrl: "https://picsum.photos/seed/festival/400/300",
    category: "Kultúra",
    author: "Tóth Klára",
    date: "2024. július 18."
  },
  {
    id: 7,
    title: "Kiberháborús feszültség: ismeretlen hackerek támadtak kritikus infrastruktúrát",
    excerpt: "Egy európai ország energetikai hálózatát érte komoly támadás. A hatóságok nagy erőkkel nyomoznak, a szálak egy állami hátterű csoporthoz vezethetnek.",
    imageUrl: "https://picsum.photos/seed/cyber/400/300",
    category: "Tech",
    author: "Horváth Bence",
    date: "2024. július 17."
  },
  {
    id: 8,
    title: "Rekordokat dönt az infláció az Egyesült Államokban, a Fed lépéskényszerben",
    excerpt: "Az évtizedek óta nem látott pénzromlás komoly fejtörést okoz a gazdaságpolitikusoknak. Újabb kamatemelési ciklus várható, ami a globális piacokra is hatással lesz.",
    imageUrl: "https://picsum.photos/seed/usa/400/300",
    category: "Gazdaság",
    author: "Nagy Gábor",
    date: "2024. július 16."
  },
  {
    id: 9,
    title: "Szenzációs régészeti lelet a Dunakanyarban",
    excerpt: "Római kori villa maradványaira bukkantak egy építkezés során. A feltárás még csak most kezdődött, de a szakértők szerint a leletek átírhatják a régió történelmét.",
    imageUrl: "https://picsum.photos/seed/archaeology/400/300",
    category: "Belföld",
    author: "Varga Zsófia",
    date: "2024. július 15."
  },
  {
    id: 10,
    title: "Afrikai csúcstalálkozó: a klímaváltozás és az élelmezési válság a középpontban",
    excerpt: "A kontinens vezetői közös stratégiát próbálnak kidolgozni a fenyegető kihívásokra. A nemzetközi segélyszervezetek gyors cselekvésre szólítanak fel.",
    imageUrl: "https://picsum.photos/seed/africa/400/300",
    category: "Külföld",
    author: "Kovács András",
    date: "2024. július 14."
  },
  {
    id: 11,
    title: "Kutatás: A rendszeres testmozgás javítja a memóriát",
    excerpt: "Egy friss tanulmány szerint már heti 3x30 perc mozgás is kimutathatóan pozitív hatással van a kognitív funkciókra, kortól függetlenül.",
    imageUrl: "https://picsum.photos/seed/health/400/300",
    category: "Tech",
    author: "Dr. Egészséges Életmód",
    date: "2024. július 13."
  },
  {
    id: 12,
    title: "Önkormányzati választások: élesedik a küzdelem a fővárosban",
    excerpt: "A kampány hajrájába érve a jelöltek mindent bevetnek. A legújabb közvélemény-kutatások szoros eredményt jósolnak.",
    imageUrl: "https://picsum.photos/seed/election/400/300",
    category: "Belföld",
    author: "Választási Elemző",
    date: "2024. július 12."
  },
  {
    id: 13,
    title: "Az olajár esése megállt, de meddig tart a bizonytalanság?",
    excerpt: "A geopolitikai feszültségek továbbra is rányomják a bélyegüket az energiapiacra. Az OPEC+ következő ülése kulcsfontosságú lesz.",
    imageUrl: "https://picsum.photos/seed/oil/400/300",
    category: "Gazdaság",
    author: "Piaci Szakértő",
    date: "2024. július 11."
  }
];
