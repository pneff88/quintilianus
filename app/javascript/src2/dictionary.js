const dictionary1 = [
  ["PATER", "father"],
  ["BARBA", "beard"],
  ["MATER", "mother"],
  ["CANIS", "dog"],
  ["SEDET", "is sitting"],
  ["BIBIT", "is drinking"],
  ["CIBUS", "food"],
  ["SALIT", "jumps"],
  ["SALVE", "hello"],
  ["AUDIT", "hears, listens to"],
  ["CENAM", "dinner"],
  ["VIDET", "sees"],
  ["CENAT", "eats dinner, dines"],
  ["VOCAT", "calls"],
  ["DUCIT", "leads"],
  ["PETIT", "heads for, attacks"],
  ["TENET", "is holding"],
  ["SENEX", "old man"],
  ["POETA", "poet"],
  ["RIDET", "laughs, smiles"],
  ["NAVEM", "ship"],
  ["HABET", "has"],
  ["DOCTA", "skillful, good at her job"],
  ["SATIS", "enough"],
  ["TAMEN", "however"],
  ["CERAM", "wax tablet"],
  ["CAPIT", "takes"],
  ["IUDEX", "judge"],
  ["HODIE", "today"],
  ["DEBET", "owes"],
  ["CELAT", "is hiding"],
  ["DECEM", "ten"],
  ["PACEM", "peace"],
  ["SOLUS", "lonely"],
  ["CAUPO", "innkeeper"],
  ["DIVES", "rich"],
  ["MURUM", "wall"],
  ["MECUM", "with me"],
  ["SENSI", "felt"],
  ["NUBEM", "cloud"],
  ["SONOS", "noises"],
  ["PAVOR", "panic"],
  ["CINIS", "ash"],
  ["VALEO", "I feel well"],
  ["FINIS", "end"],
  ["FUMUM", "smoke"],
  ["IUBEO", "order"],
  ["TURBA", "crowd"],
  ["MANET", "remains, stays"],
  ["PUERI", "boys"],
  ["ABEST", "is out"],
  ["MULTI", "many"],
  ["PUGNA", "fight"],
  ["LAETE", "happily"],
  ["NIHIL", "nothing"],
  ["MISIT", "sent"],
  ["PLENA", "full"],
  ["SILVA", "woods, forest"],
  ["DIXIT", "said"],
  ["LUPUS", "wolf"],
  ["CAUTE", "cautiously"],
  ["ALIAM", "another"],
  ["VIVIT", "is alive"],
  ["UMBRA", "ghost"],
  ["FELES", "cat"],
  ["VENIT", "came"],
  ["CERVI", "deer"],
  ["LATET", "lies hidden"],
  ["FEROX", "ferocious"],
  ["CEPIT", "took"],
  ["COXIT", "cooked"],
  ["STILI", "pens (used for writing on wax tablets)"],
  ["CURAS", "take care of"],
  ["SAEPE", "often"],
  ["CIVES", "citizens"],
  ["CAVEA", "seating area"],
  ["DEDIT", "gave"],
  ["PEDEM", "foot, paw"],
  ["DOLET", "hurt"],
  ["IBANT", "used to go"],
  ["OLEUM", "oil"],
  ["TOGAS", "togas"],
  ["NOVAM", "new"],
  ["LONGE", "far"],
  ["DONUM", "present, gift"],
  ["INTUS", "inside"],
  ["ALIAS", "other"],
  ["CUPIO", "I want"],
  ["MENSA", "table"],
  ["DOCET", "teaches"],
  ["SALUS", "safety"],
  ["ADEST", "is here, is present"],
  ["FAVET", "favors, supports +DAT."],
  ["AURAE", "air"],
  ["IACET", "lies, rests"],
  ["VOBIS", "to you, pl."],
  ["FELIX", "lucky, happy"],
  ["PERIT", "dies, perishes"],
  ["PORTA", "gate"],
  ["NOBIS", "to us"],
  ["REDIT", "goes back"],
  ["RADIT", "scrapes"],
  ["PONIT", "puts, places"],
  ["ALIUS", "other"],
  ["MAIOR", "bigger"],
  ["NOVUS", "new"],
  ["VILLA", "house"],
  ["PAENE", "nearly"],
  ["TULIT", "brought"],
  ["NOTUS", "well known, famous"],
  ["TERRA", "ground, land"],
  ["FUGIT", "runs away, flees"], 
  ["PARCE", "mercy!"],
  ["BONUS", "good"],
  ["RUINA", "ruin, wreckage"],
  ["ARENA", "arena"],
  ["ALTER", "the other, the second"],
  ["FLUIT", "flows"],
  ["IUBET", "orders"],
  ["VALDE", "very much, very"],
  ["FECIT", "made, did"],
  ["LOCUS", "place"],
  ["TOTUS", "whole"],
  ["SONUS", "sound"],
  ["SECAT", "cuts"],
  ["ADDIT", "adds"],
  ["VALET", "feels well"],
  ["PUGIL", "boxer"],
  ["GERIT", "wears"],
  ["AEGER", "sick, ill"],
  ["LUCET", "shines"], 
  ["IANUA", "door"],
  ["CUPIT", "wants"], 
  ["VIXIT", "is alive"], 
  ["DICIT", "says"],
  ["VAGIT", "cries"],
  ["VIVUS", "alive"],
  ["FACIT", "makes, does"],
  ["NAVIS", "ship"],
  ["PANIS", "bread"], // updated based on 8th period Latin
  ["CURAT", "takes care of"],
  ["NECAT", "kills"],
  ["SPINA", "thorn"],
  ["PROPE", "near"],
  ["STOLA", "dress"],
  ["NAUTA", "sailor"],
  ["PARAT", "prepares"],
  ["BABAE", "hey!"],
  ["PALLA", "cloak"],
  ["VERNA", "slave born in the home"],
  ["NASUS", "nose"],
  ["OMNIS", "all, entire"],
  ["SOROR", "sister"],
  ["TIMET", "fears"],
  ["ILLAM", "that"],
  ["TACET", "is quiet, is silent"],
  ["LARES", "household gods"],
  ["ROGAT", "asks"],
  ["LEGIT", "reads"],
  ["FORUM", "forum, business center"],
  ["VINUM", "wine"],
  ["VEXAT", "annoys"],
  ["ARDET", "burns, is on fire"],
  ["LIBER", "book"],
  ["SONAT", "sounds"],
  ["RAPIT", "seizes"],
  ["FUMUS", "smoke"]
];


// fetch("/words").then(res => res.json()).then(resjson => console.log(resjson)) //returns words
// fetch("/words").then(res => res.json()).then(resjson => console.log(resjson.map(word => [word.title, word.meaning, word.pos, word.chapter_id])))

// let dict2 = fetch("/words").then(res => res.json()).then(resjson => (resjson.map(word => [word.title, word.meaning, word.pos, word.chapter_id]))) 
// console.log(dict2)
console.log("Cheese Vaira")
let cooksobj = {}
let cooks = document.cookie.split('; ').map(x => x.split('='))
for (let i = 0; i<cooks.length; i++){
  cooksobj[cooks[i][0]] = cooks[i][1]
}

let chapid = cooksobj['chapterid']
chapid = parseInt(chapid)

let dictionary2 = []
async function load_dictionary2() {
  let dict2 = await fetch("/words").then(res => res.json()).then(resjson => (resjson.map(word => [word.title, word.meaning, word.pos, word.chapter_id]))) 
  for (let i = 0; i<dict2.length; i++) {
    if (dict2[i][3] && dict2[i][3]==chapid) {
      dictionary2.push( [ dict2[i][0], dict2[i][1] ] )
    }
  }
}
load_dictionary2()
// for (let i = 0; i<dict2.length; i++) {
//   let entry = dict2[i];
//   console.log(entry)
// }
// OLD DEFAULT:
// const dictionaryMap = dictionary.reduce((dictMap, [word, defs])=>{
//   dictMap[word] = defs
//   return dictMap;
// }, {})

let active_dictionary = []
if (dictionary2.lenth > 0) {
  active_dictionary = dictionary2
} else {
  active_dictionary = dictionary1
}
console.log(dictionary2)
console.log(active_dictionary)

const dictionaryMap = dictionary2.reduce((dictMap, [word, defs]) => {
  dictMap[word] = defs
  return dictMap;
}, {})
export default dictionaryMap;
