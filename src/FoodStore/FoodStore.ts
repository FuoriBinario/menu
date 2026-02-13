type FoodStore =  {
    name: string,
    price: number,
    qt: number,
    ingredients: string[],
    img: string,
}

const ANTIPASTI : FoodStore[] = [
  { name: "PATATE STICK CLASSICHE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON PULLED PORK E CHEDDAR", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON CACIO E PEPE E POLPETTINE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON BACON E CHEDDAR", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON SALSICCIA DI FONDUTA DI PARMIGIANO", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON TOCCHETTI A SCELTA", price: 6.00, qt: 1, ingredients: ["WURSTEL", "SALSICCIA", "BACON", "POLPETTINE DI MANZO","STRACCETTI DI POLLO CROCCANTI"] , img:""},
  { name: "PATATE CHIPS CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON PEPE ROSA E LIME", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON FONDUTA DI PARMIGIANO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON CACIOCAVALLO, MORTADELLA E CREMA DI PISTACCHIO", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON CHEDDAR E BACON", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON POLPETTE E FONDUTA CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CON STRACCETTI DI POLLO CLASSICA", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CON STRACCETTI DI POLLO CON AGGIUNTA DI UN FORMAGGIO TRA:", price: 8.00, qt: 1, ingredients: ["FONDUTA DI PARMIGGIANO", "CHEDDAR", "CACIO E PEPE", "SCAGLIE DI FORMAGGIO"] , img:""},
  { name: "PORZIONE DI PROVOLA CRISPY", price: 6.00, qt: 3, ingredients: [] , img:""},
  { name: "MAIS, FRITTO", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "MAIS, FORMAGGIO E PROSCIUTTO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "MAIS CON CHEDDAR E BACON", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "MAIS CON MORTADELLA E CREMA DI PISTACCHIO", price: 6.00, qt: 1, ingredients: [] , img:""},
];

const POLPETTERIAEPOLLO : FoodStore[] = [
  { name: "POLPETTE DI MELANZANE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CON FONDUTA CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CHEDDAR E BACON", price: 7.00, qt: 3, ingredients: [] , img:""},
  { name: "POLPETTINE CON FONDUTA DI PARMIGIANO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE DI PULLED PORK CON CUORE DI CHEDDAR", price: 6.00, qt: 3, ingredients: [] , img:""},
  { name: "POLPETTINE IMPANATE COTTE AL FORNO", price: 8.00, qt: 3, ingredients: [] , img:""},
  { name: "POLPETTINE RIVISITATE FUORIBINARIO CON PANATURA SECRET DELLO CHEF E CUOR DI PROVOLA", price: 8.00, qt: 3, ingredients: [] , img:""},
  { name: "POLPETTINE RIVISITATE FUORIBINARIO CON PANATURA SECRET DELLO CHEF E CUOR DI PROVOLA CON AGGIUNTO DI UN FORMAGGIO TRA:", price: 9.00, qt: 3, ingredients: ["FONDUTA DI PARMIGIANO","CHEDDAR","FONDUTA CACIO E PEPE"] , img:""},
  { name: "ALETTE BBQ", price: 6.00, qt: 5, ingredients: [] , img:""},
  { name: "CRICK CROCK, STRACCETTI DI POLLO CON PANATURA CRISPY ACCOMPAGNATE CON SALSE DELLO CHEF", price: 6.00, qt: 3, ingredients: [] , img:""},
  { name: "ANELLI DI POLLO FRESCHI AVVOLTI DA BACON E PANATURA CRISPY ACCOMPAGNATI CON SALSA DELLO CHEF", price: 6.00, qt: 3, ingredients: [] , img:""},
  { name: "BANDITOS", price: 7.00, qt: 1, ingredients: ["pollo marinato con panatura croccante di cereali accompagnato con salsa dello chef"] , img:""},
];

const BUN : FoodStore[] = [
  { name: "BOSTON", price: 12, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","english cheddar orange", "bacon croccante", "patatine fritte", "cipolla di tropea caramellata", "salsa bbq", "mayo"] , img:""},
  { name: "PHILADELPHIA", price: 14, qt: 1, ingredients: ["Hamburger di grana 300gr","insalata iceberg", "doppio formaggio fuso", "parmacotto","uova", "mayo"] , img:""},
  { name: "LOS ANGELES", price: 14, qt: 1, ingredients: ["Sovracosce di pollo crispy", "zucchine grigliate", "caciocavallo silano DOP", "cipolla di tropea caramellata","bacon croccante", "mayo al peperoncino dello chef"] , img:""},
  { name: "SANTA BARBARA", price: 10, qt: 1, ingredients: ["Hamburger di maiale nero casertano 180gr", "provola di Agerola", "mortadella di bologna IGP", "patate al forno di Avezzano", "crema di pistacchio homemade"] , img:""},
  { name: "SAN FRANCISCO", price: 16, qt: 1, ingredients: ["Doppio hamburger marchigiana 200gr", "doppio english cheddar orange", "doppio bacon croccante", "doppia cipolla di tropea caramellata", "patate fritte"] , img:""},
  { name: "LAS VEGAS", price: 15, qt: 1, ingredients: ["Hamburger di marchigiana 200gr", "parmigiana di melanzane rossa","patate al forno di Avezzano", "provola crispy","bacon croccante", "mayo al basilico homemade"] , img:""},
  { name: "NEW ORLEANS", price: 13, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr", "provola crispy","patate al forno di Avezzano", "parmacotto", "tarallo sbriciolato", "mayo al pepe dello chef"] , img:""},
  { name: "PORTLAND", price: 13, qt: 1, ingredients: ["Hamburger di pollo crispy","english cheddar orange","bacon","pomodoro cuore di bue","insalata iceberg","cipolla croccante","salsa special dello chef"] , img:""},
  { name: "MANHATTAN", price: 13, qt: 1, ingredients: ["Hamburger di pollo crispy","cheddar","bacon croccante","cipolla caramellata","patate al forno di Avezzano","salsa special dello chef"] , img:""},
  { name: "ORLANDO", price: 12, qt: 1, ingredients: ["Pulled pork homemade cottura slow and low","bacon croccante","patate al forno di Avezzano","english cheddar orange","cipolla caramellata","salsa special dello chef"] , img:""},
  { name: "PANINO DELLO CHEF", price: 11, qt: 1, ingredients: ["Polpette fritte di marchigiana","formaggio fuso","friarielli","tarallo sbriciolato","mayo al peperoncino homemade"] , img:""},
  { name: "SMASH BUN", price: 10, qt: 1, ingredients: ["Doppio hamburger marchigiana 100gr smashed","doppio english cheddar orange","doppio bacon croccante"] , img:""},
  { name: "SMASH BUN 2.0", price: 12, qt: 1, ingredients: ["Doppio hamburger marchigiana 100gr smashed","doppio english cheddar orange","doppio bacon croccante","colata cheddar e bacon"] , img:""},
  { name: "TEXAS", price: 14, qt: 1, ingredients: ["Hamburger di marchigiana 250gr","provola di Agerola crispy","friarielli","prosciutto crudo di Parma","mayo al peperoncino dello chef"] , img:""},
  { name: "SANT ANTONIO", price: 14, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","baconnaise","doppio bacon crispy","patate al forno di Avezzano","salsa speciale dello chef"] , img:""},
]

const ROSETTE : FoodStore[] = [
  { name: "DENVER", price: 13, qt: 1, ingredients: ["Polpette fritte","caciocavallo Irpino","Melanzane grigliate","prosciutto crudo di Parma","mayo al basilico dello chef"] , img:""},
  { name: "SAN DIEGO", price: 11, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","provola di Agerola","prosciutto crudo di Parma","pomodoro cuore di bue","insalata iceberg","mayo"] , img:""},
  { name: "MALIBÙ", price: 11, qt: 1, ingredients: ["Cotoletta di pollo crispy","provola di Agerola","funghi champignon trifolati","cipolla di tropea caramellata","mayo"] , img:""},
  { name: "SEATTLE", price: 12, qt: 1, ingredients: ["Banditos","parmacotto","provola di Agerola","patate al forno di Avezzano", "friarielli","mayo"] , img:""},
  { name: "CINCINNATI", price: 12, qt: 1, ingredients: ["Hamburger di marchigiana grana padano DOP 300gr","caciocavallo Irpino","friarielli","mayo al peperoncino"] , img:""},
]

const WRAP : FoodStore[] = [
  { name: "NASHVILLE", price: 14, qt: 1, ingredients: ["Pulled pork homemade cottura slow and low","bacon croccante","patate fritte","english cheddar orange","cipolla di tropea caramellata","salsa bbq","mayo"] , img:""},
  { name: "MEMPHIS", price: 14, qt: 1, ingredients: ["Straccetti di carne marchigiana","patatine fritte","cheddar","insalata","bacon croccante","cipolla croccante","bbq","mayo"] , img:""},
  { name: "INDIANAPOLIS", price: 13, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr","prosciutto crudo di Parma","friarielli","tarallo napoletano sbriciolato","provola","mayo al pepe homemade"] , img:""},
  { name: "DALLAS", price: 12, qt: 1, ingredients: ["Melanzane grigliate","pomodori secchi","patate al forno di Avezzano","misticanza","caciocavallo silano DOP","mayo al basilico homemade"] , img:""},
  { name: "SAN JOSE", price: 11, qt: 1, ingredients: ["polpettine fritte","provola di Agerola","funghi champignon trifolati","parmacotto","mayo"] , img:""},
  { name: "OKLAHOMA WRAP", price: 12, qt: 1, ingredients: ["Zucchine grigliate, patate al forno di Avezzano, provola di Agerola, pomodori semi-dry, nocciole del Piemonte, mayo al pepe dello chef"] , img:""},
]

const BABYBINARIO : FoodStore[] = [
  { name: "HAMBURGER", price: 7, qt: 1, ingredients: ["Hamburger","patatine fritte"] , img:""},
  { name: "COTOLETTA", price: 7, qt: 1, ingredients: ["Cotoletta","patatine fritte"] , img:""},
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
  { name: "TAGLIATA DI MARCHIGIANA 300GR", price: 23, qt: 1, ingredients: ["contorni a scelta non compresi nel prezzo"] , img:"Tagliata"},
  { name: "FILETTO 250GR", price: 25, qt: 1, ingredients: ["contorni a scelta non compresi nel prezzo"] , img:"Filetto"},
  { name: "ENTRECOTE 300GR", price: 25, qt: 1, ingredients: ["contorni a scelta non compresi nel prezzo"] , img:"Entrecote"},
  { name: "HAMBURGER DI GRANA 300GR", price: 14, qt: 1, ingredients: ["contorni a scelta non compresi nel prezzo"] , img:"HamburgerDiGrana"},
  { name: "HAMBURGER DI MARCHIGIANA 250GR", price: 14, qt: 1, ingredients: ["contorni a scelta non compresi nel prezzo"] , img:"HamburgerMarchig"},
  { name: "PULLED PORK", price: 8, qt: 1, ingredients: ["contorni a scelta non compresi nel prezzo"] , img:"Pulledpork"},
  { name: "BISTECCHA DI MANZETTA", price: 7, qt: 1, ingredients: ["il prezzo è da considerarsi all'etto"] , img:""},
  { name: "TAGLIERE DELLO CHEF X2", price:40, qt:1, ingredients: ["brisket cotto a bassa temperatura", "coscette e alette di pollo alla bbq", "pulled pork, Candy pig, pork ribes","pannocchia, banditos, crik crok", "salsa dello chef, cheddar" ,"accompagnato da pane tostato"], img:""}
]

const VEGINSALATE : FoodStore[] = [
  { name: "OKLAHOMA WRAP", price: 12, qt: 1, ingredients: ["Zucchine grigliate, patate al forno di Avezzano, provola di Agerola, pomodori semi-dry, nocciole del Piemonte, mayo al pepe dello chef"] , img:""},
  { name: "DALLAS WRAP", price: 12, qt: 1, ingredients: ["Melanzane grigliate, pomodori secchi, patate al forno di Avezzano, misticanza insalata mista, caciocavallo silano DOP, mayo al basilico dello chef"] , img:""},
  { name: "VIRGINIA BUN", price: 14, qt: 1, ingredients: ["hamburger vegetariano,caciocavallo silano DOP, melanzane grill, nocciole del Piemonte IGP e mayo al peperoncino dello chef","patate al forno"] , img:""},
  { name: "TENNESSEE", price: 10, qt: 1, ingredients: ["Pollo alla piastra, insalata iceberg, crostini, fonduta di formaggio e scaglie di parmigiano"] , img:""},
]

const CONTORNI : FoodStore[] = [
  { name: "FUNGHI CHAMPIGNON TRIFOLATI", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "ZUCCHINE GRIGLIATE", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "MELANZANE GRIGLIATE", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "CIPOLLA CARAMELLATA", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "INSALATA ICEBERG ", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "MISTICANZA (insalata mista)", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "POMODORI SORRENTO", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "PARMIGIANA DI MELANZANE AL RAGÙ", price: 7, qt: 1, ingredients: [] , img:""}
]

const BIBITE : FoodStore[] = [
  { name: "ACQUA NATURALE", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "ACQUA MINERALE", price: 2.50, qt: 1, ingredients: [] , img:""},
  { name: "COCA COLA in vetro", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "COCA COLA ZERO in vetro", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "FANTA in vetro", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "RED BULL", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "SCHWEPPES LIMONE", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "SCHWEPPES ARANCIA", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "SCHWEPPES TONICA", price: 3, qt: 1, ingredients: [] , img:""},
]

const BIRREALLASPINA : FoodStore[] = [
  { name: "BROOKLYN PILSNER", price: 4, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "BROOKLYN PILSNER", price: 6.50, qt: 1, ingredients: ["40cl"] , img:""},
  { name: "TUCHER WEIZEN", price: 4.50, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "TUCHER WEIZEN", price: 8.50, qt: 1, ingredients: ["40cl"] , img:""},
  { name: "GRIMBERGEN (blonde)", price: 4.00, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "GRIMBERGEN (blonde)", price: 8.00, qt: 1, ingredients: ["50cl"] , img:""},
  { name: "GRIMBERGEN (Double ambrèe)", price: 4.00, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "GRIMBERGEN (Double ambrèe)", price: 8.00, qt: 1, ingredients: ["50cl"] , img:""},
  { name: "CARLSBERG (Special brew)", price: 4.00, qt: 1, ingredients: ["25cl"] , img:""},
  { name: "CARLSBERG (Special brew)", price: 8.00, qt: 1, ingredients: ["40cl"] , img:""},
]

const COCKTAIL : FoodStore[] = [
  { name: "APEROL SPRITZ", price: 7, qt: 1, ingredients: [] , img:""},
  { name: "APEROL TAS", price: 7, qt: 1, ingredients: [] , img:""},
  { name: "GIN TONIC", price: 7, qt: 1, ingredients: [] , img:""},
  { name: "GIN LEMON", price: 7, qt: 1, ingredients: [] , img:""}
]

const DOLCI : FoodStore[] = [
  { name: "VOGLIA DI DOLCI?", price: 6, qt: 1, ingredients: ["Chiedere al personale"] , img:""},
]

export default FoodStore;
export {ANTIPASTI,
  BUN,
  BABYBINARIO,
  // CLASSICI,
  ROSETTE, 
  WRAP,
  CARNE,
  VEGINSALATE,
  CONTORNI,
  POLPETTERIAEPOLLO,
  BIBITE,
  BIRREALLASPINA,
  COCKTAIL,
  DOLCI
};
  