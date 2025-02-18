import ExportImg from "../Resource/ExportImg";

type FoodStore =  {
    name: string,
    price: number,
    qt: number,
    ingredients: string[],
    img: string,
}

const ANTIPASTI : FoodStore[] = [
  { name: "BANDITOS", price: 6.00, qt: 1, ingredients: ["pollo marinato con panatura croccante di cereali accompagnato con salse dello chef"] , img:""},
  { name: "PATATE STICK CLASSICHE", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON PULLED PORK E CHEDDAR", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON CACIO E PEPE E POLPETTINE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON BACON E CHEDDAR", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON SALSICCIA DI FONDUTA DI PARMIGIANO", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON TOCCHETTI A SCELTA", price: 6.00, qt: 1, ingredients: ["WURSTEL", "SALSICCIA", "PORCHETTA", "BACON", "POLPETTINE DI MANZO"] , img:""},
  { name: "PATATE CHIPS CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON PEPE ROSA E LIME", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON FONDUTA DI PARMIGIANO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON CACIOCAVALLO, MORTADELLA E CREMA DI PISTACCHIO", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON CHEDDAR E BACON", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON POLPETTE E FONDUTA CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "FRITTATINA PISTACCHIO E BACON", price: 3.00, qt: 1, ingredients: [] , img:""},
  { name: "FRITTATINA AGLIO OLIO E PEPERONCINO", price: 4.00, qt: 1, ingredients: [] , img:""},
  { name: "CROCCHÈ CLASSICO", price: 2.00, qt: 1, ingredients: [] , img:""},
  { name: "CROCCHÈ CON MORTADELLA E PISTACCHIO", price: 3.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTE DI MELANZANE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE MORTADELLA E PISTACCHIO", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CON FONDUTA CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CON FONDUTA DI PARMIGIANO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE DI PULLED PORK CON CUORE DI CHEDDAR", price: 6.00, qt: 3, ingredients: [] , img:""},
  { name: "ANELLI DI POLLO AL BACON", price: 6.00, qt: 6, ingredients: [] , img:""},
  { name: "BOCCONCINI DI CACIO E PEPE",price: 5.00, qt:3, ingredients:[],img:""}
];

const TEGAMINI : FoodStore[] = [
  { name: "ALETTE BBQ", price: 6.00, qt: 5, ingredients: [] , img:""},
  { name: "MAIS, FORMAGGIO E PROSCIUTTO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "TEGAMINO DELLO CHEF", price: 8.00, qt: 1, ingredients: ["spezzatino alla birra guinness (stout)","accompagnato con purè di patate"] , img:""},
  { name: "TEGAMINO DI POLPETTE AL RAGÙ", price: 7.00, qt: 1, ingredients: ["provola di Agerola","petali di formaggio parmigiano e foglie di basilico"] , img:""},
  { name: "TEGAMINO FUORI BINARIO", price: 8.00, qt: 1, ingredients: ["carne di maiale alla bolognese","purè di patate", "provola di Agerola"] , img:""},
  { name: "TEGAMINO DEL CONTROLLORE", price: 7.00, qt: 1, ingredients: ["fagioli alla messicana"] , img:""},
  { name: "TEGAMINO DEL MACCHINISTA", price: 7.00, qt: 1, ingredients: ["parmigiana di melanzane bianca"] , img:""},
  { name: "TEGAMINO DEL PASSEGGERO", price: 6.00, qt: 1, ingredients: ["parmigiana di patate"] , img:""},
];

const BUN : FoodStore[] = [
  { name: "SAN ANTONIO", price: 14, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","baconnaise", "doppio bacon crispy", "patate al forno", "salsa special"] , img:"Santantonio"},
  { name: "BOSTON", price: 12, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","english cheddar orange", "bacon croccante", "patatine fritte", "cipolla di tropea caramellata", "salsa bbq", "mayo"] , img:"Boston"},
  { name: "PHILADELPHIA", price: 14, qt: 1, ingredients: ["Hamburger di grana 300gr","parmigiana di patate", "doppio formaggio fuso", "parmacotto","uova", "mayo"] , img:"Philadelphia"},
  { name: "LOS ANGELES", price: 14, qt: 1, ingredients: ["Sovracosce di pollo crispy", "patate di Avezzano al forno", "caciocavallo silano DOP", "cipolla di tropea caramellata","bacon croccante", "mayo al peperoncino dello chef"] , img:"Losangeles"},
  { name: "SANTA BARBARA", price: 10, qt: 1, ingredients: ["Hamburger di maiale nero casertano 180gr", "provola di Agerola", "mortadella di bologna IGP", "patate al forno di Avezzano", "crema di pistacchio homemade"] , img:"Santabrarbara"},
  { name: "SAN FRANCISCO", price: 16, qt: 1, ingredients: ["Doppio hamburger marchigiana 200gr", "doppio english cheddar orange", "doppio bacon croccante", "doppia cipolla di tropea caramellata", "patate fritte"] , img:"Sanfrancisco"},
  { name: "LAS VEGAS", price: 13, qt: 1, ingredients: ["Hamburger di marchigiana 200gr", "parmigiana di melanzane bianca","patate al forno di Avezzano", "provola crispy","bacon croccante", "crema al pesto di basilico homemade"] , img:"Lasvegas"},
  { name: "MONTEREY", price: 13, qt: 1, ingredients: ["Hamburger di marchigiana 250gr", "provola crispy", "parmigiana di melanzane bianca", "funghi champignon trifolati"] , img:"Monterey"},
  { name: "NEW ORLEANS", price: 13, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr", "provola crispy","parmigiana di patate", "parmacotto", "tarallo sbriciolato", "mayo al pepe dello chef"] , img:"Neworleans"},
  { name: "COLORADO", price: 13, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr","provola crispy","funghi champignon trifolati","battuto di pomodoro secco", "petali di formaggio", "prosciutto crudo di Parma","crema di funghi"] , img:"Colorado"},
  { name: "MIAMI", price: 10, qt: 1, ingredients: ["Pulled pork cottura slow and low","caciocavallo Irpino","cavolo viola coleslaw","cipolla di tropea caramellata"] , img:"Miami"},
  { name: "PORTLAND", price: 13, qt: 1, ingredients: ["Hamburger di pollo crispy","english cheddar orange","bacon","pomodoro cuore di bue","insalata iceberg","cipolla croccante","salsa special dello chef"] , img:"Portland"},
  { name: "MANHATTAN", price: 12, qt: 1, ingredients: ["Hamburger di pollo di 180 gr crispy","provola di Agerola","bacon croccante","parmigiana di patate","mayo"] , img:"Manhattan"},
  { name: "ORLANDO", price: 12, qt: 1, ingredients: ["Pulled pork homemade cottura slow and low","bacon croccante","patate al forno di Avezzano","english cheddar orange","cipolla caramellata","salsa special dello chef"] , img:"Orlando"},
  { name: "PANINO DELLO CHEF", price: 11, qt: 1, ingredients: ["Polpette fritte di marchigiana","formaggio fuso","friarielli","tarallo sbriciolato","mayo al peperoncino homemade"] , img:"Chef"},
  { name: "PANINO DELLO CHEF 2.0", price: 11, qt: 1, ingredients: ["Hamburger marchigiana 200gr","caciocavallo Irpino","cavolo viola coleslaw","crema di zucchine","salsa tartufata homemade"] , img:"Chef2"},
  { name: "SMASH BUN", price: 10, qt: 1, ingredients: ["Doppio hamburger marchigiana 100gr smashed","doppio english cheddar orange","doppio bacon croccante"] , img:"Smash"},
  { name: "SMASH BUN 2.0", price: 12, qt: 1, ingredients: ["Doppio hamburger marchigiana 100gr smashed","doppio english cheddar orange","doppio bacon croccante","colata cheddar e bacon"] , img:"Newsmash"},
  { name: "SMASH BUN 3.0", price: 11, qt: 1, ingredients: ["Doppio hamburger marchigiana 100gr smashed","english cheddar orange","insalata iceberg","pomodoro cuore di bue"] , img:""},
  { name: "TEXAS", price: 14, qt: 1, ingredients: ["Hamburger di marchigiana 250gr","provola di Agerola crispy","patate al forno di Avezzano","friarielli","prosciutto crudo di Parma","mayo al basilico dello chef"] , img:"Texas"},
  { name: "LOUISIANA", price: 12, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr","melanzane grill","provola di Agerola","pomodori semidry","speck","nocciole del piemonte IGP","mayo"] , img:"Louisiana"},
  { name: "MASSACHUSSETS", price: 13, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","parmigiana di patate","parmacotto","fonduta di parmigiana","caciocavallo Irpino","mayo"] , img:"Massachusset"},
]

const ROSETTE : FoodStore[] = [
  { name: "DENVER", price: 13, qt: 1, ingredients: ["Polpette fritte","caciocavallo Irpino","parmigiana di melanzane bianca","prosciutto crudo di Parma","mayo al basilico dello chef"] , img:"Denver"},
  { name: "SAN DIEGO", price: 11, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","provola di Agerola","prosciutto crudo di Parma","pomodoro cuore di bue","insalata iceberg","mayo"] , img:"Sandiego"},
  { name: "MALIBÙ", price: 11, qt: 1, ingredients: ["Cotoletta di pollo crispy","provola di Agerola","funghi champignon trifolati","cipolla di tropea caramellata","mayo"] , img:""},
  { name: "SEATTLE", price: 12, qt: 1, ingredients: ["Banditos","parmacotto","provola di Agerola","patate al forno di Avezzano", "friarielli","mayo"] , img:"Seattle"},
  { name: "WASHINGTON", price: 12, qt: 1, ingredients: ["Porchetta di Ariccia","provola di Agerola crispy","prosciutto crudo di Parma","friarielli","mayo al peperoncino"] , img:"Washington"},
  { name: "CINCINNATI", price: 12, qt: 1, ingredients: ["Hamburger di marchigiana grana padano DOP 300gr","caciocavallo Irpino","friarielli","mayo al peperoncino"] , img:"Cincinnati"},
  { name: "KANSAS", price: 13, qt: 1, ingredients: ["Spezzatino alla birra Guinness", "patate al forno di Avezzano","fonduta di parmigiano reggiano Dop"] , img:""},
  { name: "UTAH", price: 13, qt: 1, ingredients: ["Polpette al ragù","caciocavallo irpino Dop", "friarielli"] , img:""}
]

const WRAP : FoodStore[] = [
  { name: "MISSOURI", price: 13, qt: 1, ingredients: ["Banditos","misticanza","pomodori secchi","cipolla di tropea caramellata","caciocavallo silano DOP","mayo"] , img:""},
  { name: "NASHVILLE", price: 14, qt: 1, ingredients: ["Pulled pork homemade cottura slow and low","bacon croccante","patate fritte","english cheddar orange","cipolla di tropea caramellata","salsa bbq","mayo"] , img:""},
  { name: "MEMPHIS", price: 14, qt: 1, ingredients: ["Straccetti di carne marchigiana","patatine fritte","cheddar","insalata","bacon croccante","cipolla croccante","bbq","mayo"] , img:""},
  { name: "INDIANAPOLIS", price: 13, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr","prosciutto crudo di Parma","friarielli","tarallo napoletano sbriciolato","provola","mayo al pepe homemade"] , img:""},
  { name: "DALLAS", price: 12, qt: 1, ingredients: ["Melanzane grigliate","pomodori secchi","patate al forno di Avezzano","misticanza","caciocavallo silano DOP","mayo al basilico homemade"] , img:""},
  { name: "SAN JOSE", price: 11, qt: 1, ingredients: ["polpettine fritte","provola di Agerola","funghi champignon trifolati","parmacotto","mayo"] , img:""},
]

// const CLASSICI : FoodStore[] = [
//   { name: "BUN CLASSICO 1", price: 6, qt: 1, ingredients: ["Cotoletta di pollo crispy", "provola d'agerola", "patate fritte stick"] , img:""},
//   { name: "BUN CLASSICO 2", price: 6, qt: 1, ingredients: ["Hamburger di marchigiana 200gr", "provola d'agerola", "patate fritte stick"] , img:""},
//   { name: "BUN CLASSICO 3", price: 7, qt: 1, ingredients: ["Cotoletta di pollo crispy", "provola d'agerola", "insalata iceberg","pomodoro Sorrento"] , img:""},
//   { name: "BUN CLASSICO 4", price: 6, qt: 1, ingredients: ["Hamburger di marchigiana 200gr", "sottiletta", "parmacotto"] , img:""},
//   { name: "BUN CLASSICO 5", price: 6, qt: 1, ingredients: ["Wurstel", "patate fritte stick", "provola d'agerola"] , img:""},
//   { name: "BUN CLASSICO 6", price: 7, qt: 1, ingredients: ["Porchetta di Ariccia","provola d'agerola","funghi champignon trifolati"] , img:""},
//   { name: "ROSETTA CLASSICA 1", price: 7, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr", "Provola d'agerola", "friarielli"] , img:""},
//   { name: "ROSETTA CLASSICA 2", price: 7, qt: 1, ingredients: ["Porchetta di Ariccia", "Provola d'agerola", "Melanzane grigliate"] , img:""}
// ]

const CARNE : FoodStore[] = [
  { name: "TAGLIATA DI MARCHIGIANA 300GR", price: 18, qt: 1, ingredients: ["rucola","scaglie di parmigiano","pomodori o pomodori semi-dry"] , img:"Tagliata"},
  { name: "FILETTO 250GR", price: 20, qt: 1, ingredients: ["patate al forno di Avezzano e/o verdure grill o misticanza", "cavolo viola"] , img:"Filetto"},
  { name: "ENTRECOTE 300GR", price: 20, qt: 1, ingredients: ["patate fritte e/o verdure grill o misticanza", "cavolo viola"] , img:"Entrecote"},
  { name: "HAMBURGER DI GRANA 300GR", price: 14, qt: 1, ingredients: ["misticanza e/o verdure grill o patate al forno/fritte", "cavolo viola"] , img:"HamburgerDiGrana"},
  { name: "HAMBURGER DI MARCHIGIANA 250GR", price: 14, qt: 1, ingredients: [" misticanza o zucchine arrostite" ,"o patate al forno/fritte e cavolo viola"] , img:"HamburgerMarchig"},
  { name: "PULLED PORK", price: 8, qt: 1, ingredients: ["insalata iceberg", "o patate al forno/fritte e cavolo viola"] , img:"Pulledpork"},
]

const VEGINSALATE : FoodStore[] = [
  { name: "CROCCHE CLASSICO", price: 2, qt: 1, ingredients: [] , img:""},
  { name: "OKLAHOMA WRAP", price: 12, qt: 1, ingredients: ["Zucchine grigliate, patate al forno di Avezzano, provola di Agerola, pomodori semi-dry, nocciole del Piemonte, mayo al pepe dello chef"] , img:""},
  { name: "DALLAS WRAP", price: 12, qt: 1, ingredients: ["Melanzane grigliate, pomodori secchi, patate al forno di Avezzano, misticanza insalata mista, caciocavallo silano DOP, mayo al basilico dello chef"] , img:""},
  { name: "VIRGINIA BUN", price: 14, qt: 1, ingredients: ["hamburger vegetariano,caciocavallo silano DOP, melanzane grill, nocciole del Piemonte IGP e mayo al peperoncino dello chef","patate al forno"] , img:""},
  { name: "NEVADA", price: 10, qt: 1, ingredients: ["Insalata,rucola, cipolla rossa, pomodorini, zucchine grill, crostini, tonno rio mare, olive nere, pomodori semi-dry"] , img:""},
  { name: "CALIFORNIA", price: 12, qt: 1, ingredients: ["Insalata, carote,pomodorini, melanzane grill, mozzarelline dei monti lattari, mais,crostini"] , img:""},
  { name: "TENNESSEE", price: 10, qt: 1, ingredients: ["Pollo alla piastra, insalata iceberg, crostini, uovo sodo, fonduta di formaggio e scaglie di parmigiano"] , img:""},
]

const CONTORNI : FoodStore[] = [
  { name: "PARMIGIANA DI MELANZANE BIANCA", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "PARMIGIANA DI PATATE", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "FUNGHI CHAMPIHNON TRIFOLATI", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "ZUCCHINE GRIGLIATE", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "MELANZANE GRIGLIATE", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "CIPOLLA CARAMELLATA", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "INSALATA ICEBERG ", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "MISTICANZA (insalata mista)", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "POMODORI SORRENTO", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "CAVOLO VIOLA", price: 5, qt: 1, ingredients: [] , img:""},
]

const BIBITE : FoodStore[] = [
  { name: "ACQUA NATURALE", price: 2, qt: 1, ingredients: [] , img:""},
  { name: "ACQUA MINERALE", price: 2, qt: 1, ingredients: [] , img:""},
  { name: "COCA COLA in vetro", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "COCA COLA ZERO in vetro", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "FANTA in vetro", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "RED BULL", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "SCHWEPPES LIMONE", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "SCHWEPPES ARANCIA", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "SCHWEPPES TONICA", price: 2.50, qt: 1, ingredients: [] , img:""},
]

const BIRREALLASPINA : FoodStore[] = [
  { name: "BROOKLYN PILSNER", price: 4, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "BROOKLYN PILSNER", price: 6.50, qt: 1, ingredients: ["40cl"] , img:""},
  { name: "BROOKLYN IPA", price: 4.50, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "BROOKLYN IPA", price: 8.50, qt: 1, ingredients: ["40cl"] , img:""},
  { name: "GRIMBERGEN (blonde)", price: 4.00, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "GRIMBERGEN (blonde)", price: 8.00, qt: 1, ingredients: ["50cl"] , img:""},
  { name: "GRIMBERGEN (Double ambrèe)", price: 4.00, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "GRIMBERGEN (Double ambrèe)", price: 8.00, qt: 1, ingredients: ["50cl"] , img:""},
  { name: "CARLSBERG (Special brew)", price: 4.00, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "CARLSBERG (Special brew)", price: 8.00, qt: 1, ingredients: ["40cl"] , img:""},
]

const DOLCI : FoodStore[] = [
  { name: "VOGLIA DI DOLCI?", price: 6, qt: 1, ingredients: ["Chiedere al personale"] , img:""},
]

export default FoodStore;
export {ANTIPASTI,
  BUN, 
  // CLASSICI,
  ROSETTE, 
  WRAP,
  CARNE,
  VEGINSALATE,
  CONTORNI,
  TEGAMINI,
  BIBITE,
  BIRREALLASPINA,
  DOLCI
};
  