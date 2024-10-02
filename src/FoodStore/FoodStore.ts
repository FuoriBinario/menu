import ExportImg from "../Resource/ExportImg";

type FoodStore =  {
    name: string,
    price: number,
    qt: number,
    ingredients: string[],
    img: string,
}


const ANTIPASTI : FoodStore[] = [
  { name: "ALETTE BBQ", price: 6.00, qt: 5, ingredients: [] , img:""},
  { name: "BANDITOS", price: 6.00, qt: 1, ingredients: ["pollo marinato con panatura croccante di cereali accompagnato con salse dello chef"] , img:""},
  { name: "CIOTTOLI DI PATATE", price: 5.00, qt: 3, ingredients: [] , img:""},
  { name: "PATATE STICK CLASSICHE", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON PULLED PORK E CHEDDAR", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON CACIO E PEPE E POLPETTINE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON BACON E CHEDDAR", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON SALSA DI FONDUTA DI PARMIGIANO", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK CON TOCCHETTI A SCELTA", price: 6.00, qt: 1, ingredients: ["WURSTEL", "SALSICCIA", "PORCHETTA", "BACON", "POLPETTINE DI MANZO"] , img:""},
  { name: "PATATE CHIPS CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON PEPE ROSA E LIME", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE CHIPS CON FONDUTA DI PARMIGIANO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON CACIOCAVALLO, MORTADELLA E CREMA DI PISTACCHIO", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON CHEDDAR E BACON", price: 8.00, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO CON POLPETTE E FONDUTA CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "FRITTATINA ZUCCHINE E SPECK", price: 3.00, qt: 1, ingredients: ["accompagnata da fonduta e chips di zucchine"] , img:""},
  { name: "FRITTATINA CARBONARA E TARTUFO", price: 3.00, qt: 1, ingredients: [] , img:""},
  { name: "CROCCHÈ CLASSICO", price: 2.00, qt: 1, ingredients: [] , img:""},
  { name: "CROCCHÈ CON MORTADELLA E PISTACCHIO", price: 3.00, qt: 1, ingredients: [] , img:""},
  { name: "MAIS, FORMAGGIO E PROSCIUTTO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CLASSICHE", price: 5.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE MORTADELLA E PISTACCHIO", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CON FONDUTA CACIO E PEPE", price: 7.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE CON FONDUTA DI PARMIGIANO", price: 6.00, qt: 1, ingredients: [] , img:""},
  { name: "POLPETTINE DI PULLED PORK CON CUORE DI CHEDDAR", price: 6.00, qt: 3, ingredients: [] , img:""},
  { name: "POLPETTE DI MELANZANE", price: 5.00, qt: 1, ingredients: [] , img:""},
];

const BUN : FoodStore[] = [
  { name: "Boston", price: 12, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","english cheddar orange", "bacon croccante", "patatine fritte", "cipolla di tropea caramellata", "salsa bbq", "mayo"] , img:"Boston"},
  { name: "PHILADELPHIA", price: 15, qt: 1, ingredients: ["Hamburger di grana 300gr","verdure infornate (peperoni, zucchine, patate)", "doppio formaggio fuso", "parmacotto","uova", "mayo"] , img:"Philadelphia"},
  { name: "LOS ANGELES", price: 12, qt: 1, ingredients: ["Sovracosce di pollo crispy", "patate di Avezzano al forno", "caciocavallo silano DOP", "bacon croccante", "mayo al peperoncino dello chef"] , img:"Losangeles"},
  { name: "SANTA BARBARA", price: 10, qt: 1, ingredients: ["Hamburger di maiale nero casertano 180gr", "provola di Agerola", "mortadella di bologna IGP", "patate al forno di Avezzano", "crema di pistacchio homemade"] , img:"Santabrarbara"},
  { name: "SAN FRANCISCO", price: 16, qt: 1, ingredients: ["Doppio hamburger marchigiana 200gr", "doppio english cheddar orange", "doppio bacon croccante", "doppia cipolla di tropea caramellata", "patate fritte"] , img:"Sanfrancisco"},
  { name: "LAS VEGAS", price: 12, qt: 1, ingredients: ["Hamburger di marchigiana 200gr", "patate al forno di Avezzano", "bocconcini di bufala campana", "bacon croccante", "melanzane a funghetto", "crema al pesto di basilico homemade"] , img:"Lasvegas"},
  { name: "MONTEREY", price: 13, qt: 1, ingredients: ["Hamburger di marchigiana 250gr", "parmigiana di melanzane al ragù", "bocconcini di bufala campana", "pesto di basilico homemade"] , img:"Monterey"},
  { name: "NEW ORLEANS", price: 12, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr", "patate al forno di Avezzano", "parmacotto", "bocconcini di bufala", "tarallo sbriciolato", "mayo al pepe dello chef"] , img:"Neworleans"},
  { name: "COLORADO", price: 15, qt: 1, ingredients: ["Hamburger di maialino nero 180gr","speck","caciocavallo silano DOP","zucchine alla scapece","crema di zucchine alla scapece","mayo alla menta dello chef","cialda di grana padano DOP"] , img:"Colorado"},
  { name: "MIAMI", price: 10, qt: 1, ingredients: ["Pulled pork cottura slow and low","caciocavallo","cavolo viola coleslaw","cipolla di tropea caramellata"] , img:"Miami"},
  { name: "PORTLAND", price: 13, qt: 1, ingredients: ["Hamburger di pollo crispy","english cheddar orange","bacon","pomodoro cuore di bue","insalata iceberg","cipolla croccante","salsa special dello chef"] , img:"Portland"},
  { name: "MANHATTAN", price: 12, qt: 1, ingredients: ["Hamburger di pollo di 180 gr crispy","provola di Agerola","bacon croccante","peperoncini verdi","mayo"] , img:"Manhattan"},
  { name: "ORLANDO", price: 11, qt: 1, ingredients: ["Pulled pork homemade cottura slow and low","bacon croccante","patate al forno di Avezzano","english cheddar orange","cipolla caramellata","salsa special dello chef"] , img:"Orlando"},
  { name: "PANINO DELLO CHEF", price: 11, qt: 1, ingredients: ["Polpette fritte di marchigiana","formaggio fuso","peperoncini verdi","tarallo sbriciolato","mayo al peperoncino homemade"] , img:"Chef"},
  { name: "SMASH BUN", price: 10, qt: 1, ingredients: ["Doppio hamburger marchigiana 100gr smashed","doppio english cheddar orange","doppio bacon croccante"] , img:"Smash"},
  { name: "NEW SMASH BUN", price: 12, qt: 1, ingredients: ["Doppio hamburger marchigiana 100gr smashed","doppio english cheddar orange","doppio bacon croccante","colata cheddar e bacon"] , img:"Newsmash"},
  { name: "TEXAS", price: 14, qt: 1, ingredients: ["Hamburger di marchigiana 250gr","provola di Agerola crispy","patate al forno di Avezzano","peperoncini verdi","prosciutto crudo di Parma","mayo al basilico dello chef"] , img:"Texas"},
  { name: "LOUISIANA", price: 12, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr","melanzane grill","provola di Agerola","pomodori semidry","speck","nocciole del piemonte IGP","mayo"] , img:"Louisiana"},
  { name: "MASSACHUSSETS", price: 12, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","provola di Agerola crispy","pomodor cuore di bue","prosciutto crudo di Parma","zucchine grill","mayo"] , img:"Massachusset"},
  { name: "PANINO DELLO CHEF 2.0", price: 11, qt: 1, ingredients: ["Hamburger marchigiana 200gr","caciocavallo silano DOP","cavolo viola coleslaw","crema di zucchine","salsa tartufata homemade"] , img:"Chef2"},
]

const ROSETTE : FoodStore[] = [
  { name: "DENVER", price: 11, qt: 1, ingredients: ["Polpette fritte","caciocavallo silano DOP","melanzane a funghetto","prosciutto crudo di Parma","mayo al basilico dello chef"] , img:"Denver"},
  { name: "SAN DIEGO", price: 11, qt: 1, ingredients: ["Hamburger di marchigiana 200gr","provola di Agerola","prosciutto crudo di Parma","pomodoro cuore di bue","insalata iceberg","mayo"] , img:"Sandiego"},
  { name: "SEATTLE", price: 11, qt: 1, ingredients: ["Banditos","provola di Agerola","verdure infornate (zucchine","peperoni","patate)","prosciutto cotto","mayo al rosmarino dello chef"] , img:"Seattle"},
  { name: "WASHINGTON", price: 14, qt: 1, ingredients: ["Porchetta di Ariccia","verdure infornate (zucchine","peperoni","patate)","provola di Agerola crispy","melanzane a funghetto","parmacotto","mayo al basilico dello chef"] , img:"Washington"},
  { name: "CINCINNATI", price: 10, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr","patate al forno di Avezzano","zucchine alla scapece","mayo alla menta dello chef"] , img:"Cincinnati"},
]

const WRAP : FoodStore[] = [
  { name: "MISSOURI", price: 11, qt: 1, ingredients: ["Banditos","misticanza","pomodori secchi","cipolla di tropea caramellata","caciocavallo silano DOP","mayo"] , img:""},
  { name: "NASHVILLE", price: 12, qt: 1, ingredients: ["Pulled pork homemade cottura slow and low","bacon croccante","patate fritte","english cheddar orange","cipolla di tropea caramellata","salsa bbq","mayo"] , img:""},
  { name: "MEMPHIS", price: 14, qt: 1, ingredients: ["Straccetti di carne marchigiana","patatine fritte","cheddar","insalata","bacon croccante","cipolla croccante","bbq","mayo"] , img:""},
  { name: "INDIANAPOLIS", price: 10, qt: 1, ingredients: ["Hamburger di maialino nero casertano 180gr","prosciutto crudo di Parma","peperoncini verdi","tarallo napoletano sbriciolato","mayo al pepe homemade"] , img:""},
  { name: "DALLAS", price: 9, qt: 1, ingredients: ["Melanzane grigliate","pomodori secchi","patate al forno di Avezzano","misticanza","caciocavallo silano DOP","mayo al basilico homemade"] , img:""},
]

const BUNCLASSICI : FoodStore[] = [
  { name: "CLASSICO 1", price: 6, qt: 1, ingredients: ["Wurstel", "patate fritte stick", "provola d'agerola"] , img:""},
  { name: "CLASSICO 2", price: 6, qt: 1, ingredients: ["Hamburger di marchigiana 200gr", "sottiletta", "parmacotto"] , img:""},
  { name: "CLASSICO 3", price: 6, qt: 1, ingredients: ["Cotoletta di pollo crispy", "provola d'agerola", "melanzane a funghetto"] , img:""},
  { name: "Classico 4", price: 7, qt: 1, ingredients: ["Porchetta", "Provola d'agerola", "Melanzane grigliate"] , img:""},
]

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
  { name: "VIRGINIA BUN", price: 14, qt: 1, ingredients: ["Verdure infornate (zucchine,peperoni,patate), hamburger vegetariano,caciocavallo silano DOP, melanzane grill, nocciole del Piemonte IGP e mayo al peperoncino dello chef"] , img:""},
  { name: "CALIFORNIA", price: 13, qt: 1, ingredients: ["Insalata, carote, pomodorini, melanzane grill, mozzarelline dei monti lattari, mais e crostini"] , img:""},
  { name: "NEVADA", price: 10, qt: 1, ingredients: ["Insalata,rucola, cipolla rossa, pomodorini, zucchine grill, crostini, tonno rio mare, olive nere, pomodori semi-dry"] , img:""},
  { name: "CALIFORNIA", price: 12, qt: 1, ingredients: ["Insalata, carote,pomodorini, melanzane grill, mozzarelline dei monti lattari, mais,crostini"] , img:""},
  { name: "TENNESSEE", price: 10, qt: 1, ingredients: ["Pollo alla piastra, insalata iceberg, crostini, uovo sodo, fonduta di formaggio e scaglie di parmigiano"] , img:""},
]

const CONTORNI : FoodStore[] = [
  { name: "PEPERONCINI VERDI", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "PARMIGIANA DI MELANZANE AL RAGÙ", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "VERDURE INFORNATE (PEPERONI,PATATE, ZUCCHINE)", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "ZUCCHINE ALLA SCAPECE", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "ZUCCHINE GRIGLIATE", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "MELANZANE GRIGLIATE", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "CIPOLLA CARAMELLATA", price: 4, qt: 1, ingredients: [] , img:""},
  { name: "PATATE AL FORNO", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "PATATE STICK", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "INSALATA ICEBERG ", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "MISTICANZA (insalata mista)", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "POMODORI SORRENTO", price: 3, qt: 1, ingredients: [] , img:""},
  { name: "CAVOLO VIOLA", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "MOZZARELLINE DI BUFALA", price: 5, qt: 1, ingredients: [] , img:""},
  { name: "MELANZANE A FUNGHETTO", price: 5, qt: 1, ingredients: [] , img:""},
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

const VINI : FoodStore[] = [
  { name: "FALANGHINA CAMPANO 75cl", price: 20, qt: 1, ingredients: [] , img:""},
  { name: "PIEDIROSSO CAMPANO 75cl", price: 20, qt: 1, ingredients: [] , img:""},
  { name: "BOLLICINE BIANCO 75cl", price: 20, qt: 1, ingredients: [] , img:""},
  { name: "BOLLICINE ROSSO 75cl", price: 20, qt: 1, ingredients: [] , img:""},
]

const BIRREALLASPINA : FoodStore[] = [
  { name: "WARSTEINER (Bionda chiara tedesca 4,8 gradi)", price: 3, qt: 1, ingredients: ["20cl"] , img:""},
  { name: "WARSTEINER (Bionda chiara tedesca 4,8 gradi)", price: 5, qt: 1, ingredients: ["40cl"] , img:""},
  { name: "CALEDONIA (Bionda doppio malto 8 gradi)", price: 3.50, qt: 1, ingredients: ["30cl"] , img:""},
  { name: "CALEDONIA (Bionda doppio malto 8 gradi)", price: 6.50, qt: 1, ingredients: ["50cl"] , img:""},
  { name: "SAINT BERNARDUS (Rossa doppio malto belga 8 gradi)", price: 6, qt: 1, ingredients: ["30cl"] , img:""},
]

const BIRREINBOTTIGLIA : FoodStore[] = [
  { name: "MöNCHSHOF NATUR RADLER (Birra al limone 2,5 gradi)", price: 6.50, qt: 1, ingredients: ["50cl"] , img:""},
  { name: "MöNCHSHOF ORIGINAL (Bionda chiara 4,9 gradi)", price: 6.50, qt: 1, ingredients: ["50cl"] , img:""},
  { name: "MöNCHSHOF BOCKBIER (rossa doppio malto 6,9 gradi)", price: 7, qt: 1, ingredients: ["50cl"] , img:""}
]

const DOLCI : FoodStore[] = [
  { name: "GIANDUIOTTO", price: 6, qt: 1, ingredients: ["Mousse al gianduia","cuore croccante di\"Tonda e Gentile delle Langhe\"","soffice bisquit","glassa al cioccolato al latte e granella di nocciola"] , img:""},
  { name: "AMBRA", price: 6, qt: 1, ingredients: ["Frolla alla vaniglia","cremoso al cioccolato al caramello gold","mousse al cioccolato bianco","glassa al caramello e mandorle caramellate"] , img:""},
  { name: "SNICKERS", price: 6, qt: 1, ingredients: ["Croccante alle arachidi","bisquit al cacao,cremoso al caramello salato","mousse al cioccolato al latte","ricoperto da un pralinato alle arachidi"] , img:""},
  { name: "NUVOLA", price: 6, qt: 1, ingredients: ["Mousse al cocco con cuore morbido di cioccolato fondente","cocco rapè","soffice biscotto al cioccolato"] , img:""},
  { name: "PROFITEROLES", price: 6, qt: 1, ingredients: ["Morbidi bignè di pasta choux ripieni di crema al gianduia","glassa al cioccolato fondente","adagiati su un morbido biscotto al cioccolato e nocciole","decorati con foglia d'oro"] , img:""},
  { name: "CHEESECAKE AI FRUTTI DI BOSCO", price: 6, qt: 1, ingredients: ["stresel alle mandorle","crema al formaggio","gelée ai frutti rossi","decorata con frutti di bosco freschi"] , img:""},
  { name: "ZUCCHERINO CHE BUONO", price: 6, qt: 1, ingredients: ["bueno su cremoso di cioccolato al caramello gold","Mousse alla vaniglia con nocciole caramellate su biscotto artigianale","cremoso di cioccolato al caramello gold"] , img:""},
  { name: "ZUCCHERINO NUVOLA DI STELLE", price: 6, qt: 1, ingredients: ["biscotto Pan di Stelle","Mousse alla vaniglia","Biscotto al cacao su crema di cioccolato alle nocciole"] , img:""},
]

export default FoodStore;
export {ANTIPASTI,
  BUN, 
  BUNCLASSICI,
  ROSETTE, 
  WRAP,
  CARNE,
  VEGINSALATE,
  CONTORNI,
  BIBITE,
  VINI,
  BIRREALLASPINA,
  BIRREINBOTTIGLIA,
  DOLCI
};
  