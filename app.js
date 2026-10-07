const VERBS = [
 {inf:"abrir",ru:"открывать",type:"regular",pres:["abro","abres","abre","abrimos","abrís","abren"],pret:["abrí","abriste","abrió","abrimos","abristeis","abrieron"],fut:["abriré","abrirás","abrirá","abriremos","abriréis","abrirán"]},
 {inf:"beber",ru:"пить",type:"regular",pres:["bebo","bebes","bebe","bebemos","bebéis","beben"],pret:["bebí","bebiste","bebió","bebimos","bebisteis","bebieron"],fut:["beberé","beberás","beberá","beberemos","beberéis","beberán"]},
 {inf:"comer",ru:"есть",type:"regular",pres:["como","comes","come","comemos","coméis","comen"],pret:["comí","comiste","comió","comimos","comisteis","comieron"],fut:["comeré","comerás","comerá","comeremos","comeréis","comerán"]},
 {inf:"hablar",ru:"говорить",type:"regular",pres:["hablo","hablas","habla","hablamos","habláis","hablan"],pret:["hablé","hablaste","habló","hablamos","hablasteis","hablaron"],fut:["hablaré","hablarás","hablará","hablaremos","hablaréis","hablarán"]},
 {inf:"trabajar",ru:"работать",type:"regular",pres:["trabajo","trabajas","trabaja","trabajamos","trabajáis","trabajan"],pret:["trabajé","trabajaste","trabajó","trabajamos","trabajasteis","trabajaron"],fut:["trabajaré","trabajarás","trabajará","trabajaremos","trabajaréis","trabajarán"]},
 {inf:"vivir",ru:"жить",type:"regular",pres:["vivo","vives","vive","vivimos","vivís","viven"],pret:["viví","viviste","vivió","vivimos","vivisteis","vivieron"],fut:["viviré","vivirás","vivirá","viviremos","viviréis","vivirán"]},
 {inf:"dar",ru:"давать",type:"irregular",pres:["doy","das","da","damos","dais","dan"],pret:["di","diste","dio","dimos","disteis","dieron"],fut:["daré","darás","dará","daremos","daréis","darán"]},
 {inf:"decir",ru:"говорить, сказать",type:"irregular",pres:["digo","dices","dice","decimos","decís","dicen"],pret:["dije","dijiste","dijo","dijimos","dijisteis","dijeron"],fut:["diré","dirás","dirá","diremos","diréis","dirán"]},
 {inf:"estar",ru:"быть, находиться",type:"irregular",pres:["estoy","estás","está","estamos","estáis","están"],pret:["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"],fut:["estaré","estarás","estará","estaremos","estaréis","estarán"]},
 {inf:"hacer",ru:"делать",type:"irregular",pres:["hago","haces","hace","hacemos","hacéis","hacen"],pret:["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],fut:["haré","harás","hará","haremos","haréis","harán"]},
 {inf:"haber",ru:"иметь, происходить; вспомогательный глагол",type:"irregular",pres:["he","has","ha","hemos","habéis","han"],pret:["hube","hubiste","hubo","hubimos","hubisteis","hubieron"],fut:["habré","habrás","habrá","habremos","habréis","habrán"]},
 {inf:"ir",ru:"идти, ехать",type:"irregular",pres:["voy","vas","va","vamos","vais","van"],pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"],fut:["iré","irás","irá","iremos","iréis","irán"]},
 {inf:"ser",ru:"быть",type:"irregular",pres:["soy","eres","es","somos","sois","son"],pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"],fut:["seré","serás","será","seremos","seréis","serán"]},
 {inf:"saber",ru:"знать, уметь",type:"irregular",pres:["sé","sabes","sabe","sabemos","sabéis","saben"],pret:["supe","supiste","supo","supimos","supisteis","supieron"],fut:["sabré","sabrás","sabrá","sabremos","sabréis","sabrán"]},
 {inf:"venir",ru:"приходить, приезжать",type:"irregular",pres:["vengo","vienes","viene","venimos","venís","vienen"],pret:["vine","viniste","vino","vinimos","vinisteis","vinieron"],fut:["vendré","vendrás","vendrá","vendremos","vendréis","vendrán"]},
 {inf:"querer",ru:"хотеть, любить",type:"irregular",pres:["quiero","quieres","quiere","queremos","queréis","quieren"],pret:["quise","quisiste","quiso","quisimos","quisisteis","quisieron"],fut:["querré","querrás","querrá","querremos","querréis","querrán"]},
 {inf:"poder",ru:"мочь",type:"irregular",pres:["puedo","puedes","puede","podemos","podéis","pueden"],pret:["pude","pudiste","pudo","pudimos","pudisteis","pudieron"],fut:["podré","podrás","podrá","podremos","podréis","podrán"]},
 {inf:"poner",ru:"класть, ставить",type:"irregular",pres:["pongo","pones","pone","ponemos","ponéis","ponen"],pret:["puse","pusiste","puso","pusimos","pusisteis","pusieron"],fut:["pondré","pondrás","pondrá","pondremos","pondréis","pondrán"]},
 {inf:"traer",ru:"приносить, привозить",type:"irregular",pres:["traigo","traes","trae","traemos","traéis","traen"],pret:["traje","trajiste","trajo","trajimos","trajisteis","trajeron"],fut:["traeré","traerás","traerá","traeremos","traeréis","traerán"]},
 {inf:"conducir",ru:"водить",type:"irregular",pres:["conduzco","conduces","conduce","conducimos","conducís","conducen"],pret:["conduje","condujiste","condujo","condujimos","condujisteis","condujeron"],fut:["conduciré","conducirás","conducirá","conduciremos","conduciréis","conducirán"]},
 {inf:"sentir",ru:"чувствовать",type:"irregular",pres:["siento","sientes","siente","sentimos","sentís","sienten"],pret:["sentí","sentiste","sintió","sentimos","sentisteis","sintieron"],fut:["sentiré","sentirás","sentirá","sentiremos","sentiréis","sentirán"]},
 {inf:"dormir",ru:"спать",type:"irregular",pres:["duermo","duermes","duerme","dormimos","dormís","duermen"],pret:["dormí","dormiste","durmió","dormimos","dormisteis","durmieron"],fut:["dormiré","dormirás","dormirá","dormiremos","dormiréis","dormirán"]},
 {inf:"recoger",ru:"забирать, собирать",type:"regular",pres:["recojo","recoges","recoge","recogemos","recogéis","recogen"],pret:["recogí","recogiste","recogió","recogimos","recogisteis","recogieron"],fut:["recogeré","recogerás","recogerá","recogeremos","recogeréis","recogerán"]}
];
const EXTRA_VERBS = [
 {inf:"cerrar",ru:"закрывать",type:"irregular",pres:["cierro", "cierras", "cierra", "cerramos", "cerráis", "cierran"],pret:["cerré", "cerraste", "cerró", "cerramos", "cerrasteis", "cerraron"],fut:["cerraré", "cerrarás", "cerrará", "cerraremos", "cerraréis", "cerrarán"]},
 {inf:"oír",ru:"слышать",type:"irregular",pres:["oigo", "oyes", "oye", "oímos", "oís", "oyen"],pret:["oí", "oíste", "oyó", "oímos", "oísteis", "oyeron"],fut:["oiré", "oirás", "oirá", "oiremos", "oiréis", "oirán"]},
 {inf:"pedir",ru:"просить; заказывать",type:"irregular",pres:["pido", "pides", "pide", "pedimos", "pedís", "piden"],pret:["pedí", "pediste", "pidió", "pedimos", "pedisteis", "pidieron"],fut:["pediré", "pedirás", "pedirá", "pediremos", "pediréis", "pedirán"]},
 {inf:"salir",ru:"выходить; уходить",type:"irregular",pres:["salgo", "sales", "sale", "salimos", "salís", "salen"],pret:["salí", "saliste", "salió", "salimos", "salisteis", "salieron"],fut:["saldré", "saldrás", "saldrá", "saldremos", "saldréis", "saldrán"]},
 {inf:"seguir",ru:"следовать; продолжать",type:"irregular",pres:["sigo", "sigues", "sigue", "seguimos", "seguís", "siguen"],pret:["seguí", "seguiste", "siguió", "seguimos", "seguisteis", "siguieron"],fut:["seguiré", "seguirás", "seguirá", "seguiremos", "seguiréis", "seguirán"]},
 {inf:"tener",ru:"иметь",type:"irregular",pres:["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],pret:["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],fut:["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"]},
 {inf:"ver",ru:"видеть; смотреть",type:"irregular",pres:["veo", "ves", "ve", "vemos", "veis", "ven"],pret:["vi", "viste", "vio", "vimos", "visteis", "vieron"],fut:["veré", "verás", "verá", "veremos", "veréis", "verán"]},
 {inf:"volver",ru:"возвращаться",type:"irregular",pres:["vuelvo", "vuelves", "vuelve", "volvemos", "volvéis", "vuelven"],pret:["volví", "volviste", "volvió", "volvimos", "volvisteis", "volvieron"],fut:["volveré", "volverás", "volverá", "volveremos", "volveréis", "volverán"]},
 {inf:"acordarse",ru:"помнить; вспоминать",type:"irregular",pres:["me acuerdo de", "te acuerdas de", "se acuerda de", "nos acordamos de", "os acordáis de", "se acuerdan de"],pret:["me acordé de", "te acordaste de", "se acordó de", "nos acordamos de", "os acordasteis de", "se acordaron de"],fut:["me acordaré de", "te acordarás de", "se acordará de", "nos acordaremos de", "os acordaréis de", "se acordarán de"]},
 {inf:"acostarse",ru:"ложиться спать",type:"irregular",pres:["me acuesto", "te acuestas", "se acuesta", "nos acostamos", "os acostáis", "se acuestan"],pret:["me acosté", "te acostaste", "se acostó", "nos acostamos", "os acostasteis", "se acostaron"],fut:["me acostaré", "te acostarás", "se acostará", "nos acostaremos", "os acostaréis", "se acostarán"]},
 {inf:"andar",ru:"ходить",type:"irregular",pres:["ando", "andas", "anda", "andamos", "andáis", "andan"],pret:["anduve", "anduviste", "anduvo", "anduvimos", "anduvisteis", "anduvieron"],fut:["andaré", "andarás", "andará", "andaremos", "andaréis", "andarán"]},
 {inf:"aprobar",ru:"сдавать; одобрять",type:"irregular",pres:["apruebo", "apruebas", "aprueba", "aprobamos", "aprobáis", "aprueban"],pret:["aprobé", "aprobaste", "aprobó", "aprobamos", "aprobasteis", "aprobaron"],fut:["aprobaré", "aprobarás", "aprobará", "aprobaremos", "aprobaréis", "aprobarán"]},
 {inf:"conocer",ru:"знать; быть знакомым",type:"irregular",pres:["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"],pret:["conocí", "conociste", "conoció", "conocimos", "conocisteis", "conocieron"],fut:["conoceré", "conocerás", "conocerá", "conoceremos", "conoceréis", "conocerán"]},
 {inf:"despertarse",ru:"просыпаться",type:"irregular",pres:["me despierto", "te despiertas", "se despierta", "nos despertamos", "os despertáis", "se despiertan"],pret:["me desperté", "te despertaste", "se despertó", "nos despertamos", "os despertasteis", "se despertaron"],fut:["me despertaré", "te despertarás", "se despertará", "nos despertaremos", "os despertaréis", "se despertarán"]},
 {inf:"divertirse",ru:"развлекаться; веселиться",type:"irregular",pres:["me divierto", "te diviertes", "se divierte", "nos divertimos", "os divertís", "se divierten"],pret:["me divertí", "te divertiste", "se divirtió", "nos divertimos", "os divertisteis", "se divirtieron"],fut:["me divertiré", "te divertirás", "se divertirá", "nos divertiremos", "os divertiréis", "se divertirán"]},
 {inf:"empezar",ru:"начинать",type:"irregular",pres:["empiezo", "empiezas", "empieza", "empezamos", "empezáis", "empiezan"],pret:["empecé", "empezaste", "empezó", "empezamos", "empezasteis", "empezaron"],fut:["empezaré", "empezarás", "empezará", "empezaremos", "empezaréis", "empezarán"]},
 {inf:"encontrar",ru:"находить; встречать",type:"irregular",pres:["encuentro", "encuentras", "encuentra", "encontramos", "encontráis", "encuentran"],pret:["encontré", "encontraste", "encontró", "encontramos", "encontrasteis", "encontraron"],fut:["encontraré", "encontrarás", "encontrará", "encontraremos", "encontraréis", "encontrarán"]},
 {inf:"jugar",ru:"играть",type:"irregular",pres:["juego", "juegas", "juega", "jugamos", "jugáis", "juegan"],pret:["jugué", "jugaste", "jugó", "jugamos", "jugasteis", "jugaron"],fut:["jugaré", "jugarás", "jugará", "jugaremos", "jugaréis", "jugarán"]},
 {inf:"leer",ru:"читать",type:"irregular",pres:["leo", "lees", "lee", "leemos", "leéis", "leen"],pret:["leí", "leíste", "leyó", "leímos", "leísteis", "leyeron"],fut:["leeré", "leerás", "leerá", "leeremos", "leeréis", "leerán"]},
 {inf:"preferir",ru:"предпочитать",type:"irregular",pres:["prefiero", "prefieres", "prefiere", "preferimos", "preferís", "prefieren"],pret:["preferí", "preferiste", "prefirió", "preferimos", "preferisteis", "prefirieron"],fut:["preferiré", "preferirás", "preferirá", "preferiremos", "preferiréis", "preferirán"]},
 {inf:"recordar",ru:"помнить; вспоминать",type:"irregular",pres:["recuerdo", "recuerdas", "recuerda", "recordamos", "recordáis", "recuerdan"],pret:["recordé", "recordaste", "recordó", "recordamos", "recordasteis", "recordaron"],fut:["recordaré", "recordarás", "recordará", "recordaremos", "recordaréis", "recordarán"]},
 {inf:"servir",ru:"служить; подавать",type:"irregular",pres:["sirvo", "sirves", "sirve", "servimos", "servís", "sirven"],pret:["serví", "serviste", "sirvió", "servimos", "servisteis", "sirvieron"],fut:["serviré", "servirás", "servirá", "serviremos", "serviréis", "servirán"]},
 {inf:"traducir",ru:"переводить",type:"irregular",pres:["traduzco", "traduces", "traduce", "traducimos", "traducís", "traducen"],pret:["traduje", "tradujiste", "tradujo", "tradujimos", "tradujisteis", "tradujeron"],fut:["traduciré", "traducirás", "traducirá", "traduciremos", "traduciréis", "traducirán"]},
 {inf:"estudiar",ru:"учиться; изучать",type:"regular",pres:["estudio", "estudias", "estudia", "estudiamos", "estudiáis", "estudian"],pret:["estudié", "estudiaste", "estudió", "estudiamos", "estudiasteis", "estudiaron"],fut:["estudiararé", "estudiararás", "estudiarará", "estudiararemos", "estudiararéis", "estudiararán"]},
 {inf:"escuchar",ru:"слушать",type:"regular",pres:["escucho", "escuchas", "escucha", "escuchamos", "escucháis", "escuchan"],pret:["escuché", "escuchaste", "escuchó", "escuchamos", "escuchasteis", "escucharon"],fut:["escuchararé", "escuchararás", "escucharará", "escuchararemos", "escuchararéis", "escuchararán"]},
 {inf:"mirar",ru:"смотреть",type:"regular",pres:["miro", "miras", "mira", "miramos", "miráis", "miran"],pret:["miré", "miraste", "miró", "miramos", "mirasteis", "miraron"],fut:["mirararé", "mirararás", "mirarará", "mirararemos", "mirararéis", "mirararán"]},
 {inf:"llamar",ru:"звонить; называть",type:"regular",pres:["llamo", "llamas", "llama", "llamamos", "llamáis", "llaman"],pret:["llamé", "llamaste", "llamó", "llamamos", "llamasteis", "llamaron"],fut:["llamararé", "llamararás", "llamarará", "llamararemos", "llamararéis", "llamararán"]},
 {inf:"llamarse",ru:"называться",type:"regular",pres:["me llamo", "te llamas", "se llama", "nos llamamos", "os llamáis", "se llaman"],pret:["me llamé", "te llamaste", "se llamó", "nos llamamos", "os llamasteis", "se llamaron"],fut:["me llamararé", "te llamararás", "se llamarará", "nos llamararemos", "os llamararéis", "se llamararán"]},
 {inf:"necesitar",ru:"нуждаться",type:"regular",pres:["necesito", "necesitas", "necesita", "necesitamos", "necesitáis", "necesitan"],pret:["necesité", "necesitaste", "necesitó", "necesitamos", "necesitasteis", "necesitaron"],fut:["necesitararé", "necesitararás", "necesitarará", "necesitararemos", "necesitararéis", "necesitararán"]},
 {inf:"comprar",ru:"покупать",type:"regular",pres:["compro", "compras", "compra", "compramos", "compráis", "compran"],pret:["compré", "compraste", "compró", "compramos", "comprasteis", "compraron"],fut:["comprararé", "comprararás", "comprarará", "comprararemos", "comprararéis", "comprararán"]},
 {inf:"tomar",ru:"брать; пить",type:"regular",pres:["tomo", "tomas", "toma", "tomamos", "tomáis", "toman"],pret:["tomé", "tomaste", "tomó", "tomamos", "tomasteis", "tomaron"],fut:["tomararé", "tomararás", "tomarará", "tomararemos", "tomararéis", "tomararán"]},
 {inf:"llevar",ru:"носить; брать с собой; везти",type:"regular",pres:["llevo", "llevas", "lleva", "llevamos", "lleváis", "llevan"],pret:["llevé", "llevaste", "llevó", "llevamos", "llevasteis", "llevaron"],fut:["llevararé", "llevararás", "llevarará", "llevararemos", "llevararéis", "llevararán"]},
 {inf:"entrar",ru:"входить",type:"regular",pres:["entro", "entras", "entra", "entramos", "entráis", "entran"],pret:["entré", "entraste", "entró", "entramos", "entrasteis", "entraron"],fut:["entrararé", "entrararás", "entrarará", "entrararemos", "entrararéis", "entrararán"]},
 {inf:"llegar",ru:"приходить; прибывать",type:"regular",pres:["llego", "llegas", "llega", "llegamos", "llegáis", "llegan"],pret:["lleggué", "llegaste", "llegó", "llegamos", "llegasteis", "llegaron"],fut:["llegararé", "llegararás", "llegarará", "llegararemos", "llegararéis", "llegararán"]},
 {inf:"pasar",ru:"проходить; проводить (время)",type:"regular",pres:["paso", "pasas", "pasa", "pasamos", "pasáis", "pasan"],pret:["pasé", "pasaste", "pasó", "pasamos", "pasasteis", "pasaron"],fut:["pasararé", "pasararás", "pasarará", "pasararemos", "pasararéis", "pasararán"]},
 {inf:"viajar",ru:"путешествовать",type:"regular",pres:["viajo", "viajas", "viaja", "viajamos", "viajáis", "viajan"],pret:["viajé", "viajaste", "viajó", "viajamos", "viajasteis", "viajaron"],fut:["viajararé", "viajararás", "viajarará", "viajararemos", "viajararéis", "viajararán"]},
 {inf:"cocinar",ru:"готовить",type:"regular",pres:["cocino", "cocinas", "cocina", "cocinamos", "cocináis", "cocinan"],pret:["cociné", "cocinaste", "cocinó", "cocinamos", "cocinasteis", "cocinaron"],fut:["cocinararé", "cocinararás", "cocinarará", "cocinararemos", "cocinararéis", "cocinararán"]},
 {inf:"terminar",ru:"заканчивать",type:"regular",pres:["termino", "terminas", "termina", "terminamos", "termináis", "terminan"],pret:["terminé", "terminaste", "terminó", "terminamos", "terminasteis", "terminaron"],fut:["terminararé", "terminararás", "terminarará", "terminararemos", "terminararéis", "terminararán"]},
 {inf:"descansar",ru:"отдыхать",type:"regular",pres:["descanso", "descansas", "descansa", "descansamos", "descansáis", "descansan"],pret:["descansé", "descansaste", "descansó", "descansamos", "descansasteis", "descansaron"],fut:["descansararé", "descansararás", "descansarará", "descansararemos", "descansararéis", "descansararán"]},
 {inf:"cenar",ru:"ужинать",type:"regular",pres:["ceno", "cenas", "cena", "cenamos", "cenáis", "cenan"],pret:["cené", "cenaste", "cenó", "cenamos", "cenasteis", "cenaron"],fut:["cenararé", "cenararás", "cenarará", "cenararemos", "cenararéis", "cenararán"]},
 {inf:"desayunar",ru:"завтракать",type:"regular",pres:["desayuno", "desayunas", "desayuna", "desayunamos", "desayunáis", "desayunan"],pret:["desayuné", "desayunaste", "desayunó", "desayunamos", "desayunasteis", "desayunaron"],fut:["desayunararé", "desayunararás", "desayunarará", "desayunararemos", "desayunararéis", "desayunararán"]},
 {inf:"visitar",ru:"посещать",type:"regular",pres:["visito", "visitas", "visita", "visitamos", "visitáis", "visitan"],pret:["visité", "visitaste", "visitó", "visitamos", "visitasteis", "visitaron"],fut:["visitararé", "visitararás", "visitarará", "visitararemos", "visitararéis", "visitararán"]},
 {inf:"preparar",ru:"готовить; подготавливать",type:"regular",pres:["preparo", "preparas", "prepara", "preparamos", "preparáis", "preparan"],pret:["preparé", "preparaste", "preparó", "preparamos", "preparasteis", "prepararon"],fut:["preparararé", "preparararás", "prepararará", "preparararemos", "preparararéis", "preparararán"]},
 {inf:"preguntar",ru:"спрашивать",type:"regular",pres:["pregunto", "preguntas", "pregunta", "preguntamos", "preguntáis", "preguntan"],pret:["pregunté", "preguntaste", "preguntó", "preguntamos", "preguntasteis", "preguntaron"],fut:["preguntararé", "preguntararás", "preguntarará", "preguntararemos", "preguntararéis", "preguntararán"]},
 {inf:"contestar",ru:"отвечать",type:"regular",pres:["contesto", "contestas", "contesta", "contestamos", "contestáis", "contestan"],pret:["contesté", "contestaste", "contestó", "contestamos", "contestasteis", "contestaron"],fut:["contestararé", "contestararás", "contestarará", "contestararemos", "contestararéis", "contestararán"]},
 {inf:"practicar",ru:"практиковаться",type:"regular",pres:["practico", "practicas", "practica", "practicamos", "practicáis", "practican"],pret:["practicqué", "practicaste", "practicó", "practicamos", "practicasteis", "practicaron"],fut:["practicararé", "practicararás", "practicarará", "practicararemos", "practicararéis", "practicararán"]},
 {inf:"usar",ru:"использовать",type:"regular",pres:["uso", "usas", "usa", "usamos", "usáis", "usan"],pret:["usé", "usaste", "usó", "usamos", "usasteis", "usaron"],fut:["usararé", "usararás", "usarará", "usararemos", "usararéis", "usararán"]},
 {inf:"ayudar",ru:"помогать",type:"regular",pres:["ayudo", "ayudas", "ayuda", "ayudamos", "ayudáis", "ayudan"],pret:["ayudé", "ayudaste", "ayudó", "ayudamos", "ayudasteis", "ayudaron"],fut:["ayudararé", "ayudararás", "ayudarará", "ayudararemos", "ayudararéis", "ayudararán"]},
 {inf:"bailar",ru:"танцевать",type:"regular",pres:["bailo", "bailas", "baila", "bailamos", "bailáis", "bailan"],pret:["bailé", "bailaste", "bailó", "bailamos", "bailasteis", "bailaron"],fut:["bailararé", "bailararás", "bailarará", "bailararemos", "bailararéis", "bailararán"]},
 {inf:"cantar",ru:"петь",type:"regular",pres:["canto", "cantas", "canta", "cantamos", "cantáis", "cantan"],pret:["canté", "cantaste", "cantó", "cantamos", "cantasteis", "cantaron"],fut:["cantararé", "cantararás", "cantarará", "cantararemos", "cantararéis", "cantararán"]},
 {inf:"celebrar",ru:"праздновать",type:"regular",pres:["celebro", "celebras", "celebra", "celebramos", "celebráis", "celebran"],pret:["celebré", "celebraste", "celebró", "celebramos", "celebrasteis", "celebraron"],fut:["celebrararé", "celebrararás", "celebrarará", "celebrararemos", "celebrararéis", "celebrararán"]},
 {inf:"explicar",ru:"объяснять",type:"regular",pres:["explico", "explicas", "explica", "explicamos", "explicáis", "explican"],pret:["explicqué", "explicaste", "explicó", "explicamos", "explicasteis", "explicaron"],fut:["explicararé", "explicararás", "explicarará", "explicararemos", "explicararéis", "explicararán"]},
 {inf:"esperar",ru:"ждать; надеяться",type:"regular",pres:["espero", "esperas", "espera", "esperamos", "esperáis", "esperan"],pret:["esperé", "esperaste", "esperó", "esperamos", "esperasteis", "esperaron"],fut:["esperararé", "esperararás", "esperarará", "esperararemos", "esperararéis", "esperararán"]},
 {inf:"ganar",ru:"выигрывать; зарабатывать",type:"regular",pres:["gano", "ganas", "gana", "ganamos", "ganáis", "ganan"],pret:["gané", "ganaste", "ganó", "ganamos", "ganasteis", "ganaron"],fut:["ganararé", "ganararás", "ganarará", "ganararemos", "ganararéis", "ganararán"]},
 {inf:"pagar",ru:"платить",type:"regular",pres:["pago", "pagas", "paga", "pagamos", "pagáis", "pagan"],pret:["paggué", "pagaste", "pagó", "pagamos", "pagasteis", "pagaron"],fut:["pagararé", "pagararás", "pagarará", "pagararemos", "pagararéis", "pagararán"]},
 {inf:"cambiar",ru:"менять",type:"regular",pres:["cambio", "cambias", "cambia", "cambiamos", "cambiáis", "cambian"],pret:["cambié", "cambiaste", "cambió", "cambiamos", "cambiasteis", "cambiaron"],fut:["cambiararé", "cambiararás", "cambiarará", "cambiararemos", "cambiararéis", "cambiararán"]},
 {inf:"limpiar",ru:"чистить; убирать",type:"regular",pres:["limpio", "limpias", "limpia", "limpiamos", "limpiáis", "limpian"],pret:["limpié", "limpiaste", "limpió", "limpiamos", "limpiasteis", "limpiaron"],fut:["limpiararé", "limpiararás", "limpiarará", "limpiararemos", "limpiararéis", "limpiararán"]},
 {inf:"lavar",ru:"мыть; стирать",type:"regular",pres:["lavo", "lavas", "lava", "lavamos", "laváis", "lavan"],pret:["lavé", "lavaste", "lavó", "lavamos", "lavasteis", "lavaron"],fut:["lavararé", "lavararás", "lavarará", "lavararemos", "lavararéis", "lavararán"]},
 {inf:"reservar",ru:"бронировать",type:"regular",pres:["reservo", "reservas", "reserva", "reservamos", "reserváis", "reservan"],pret:["reservé", "reservaste", "reservó", "reservamos", "reservasteis", "reservaron"],fut:["reservararé", "reservararás", "reservarará", "reservararemos", "reservararéis", "reservararán"]},
 {inf:"alquilar",ru:"арендовать",type:"regular",pres:["alquilo", "alquilas", "alquila", "alquilamos", "alquiláis", "alquilan"],pret:["alquilé", "alquilaste", "alquiló", "alquilamos", "alquilasteis", "alquilaron"],fut:["alquilararé", "alquilararás", "alquilarará", "alquilararemos", "alquilararéis", "alquilararán"]},
 {inf:"buscar",ru:"искать",type:"regular",pres:["busco", "buscas", "busca", "buscamos", "buscáis", "buscan"],pret:["buscqué", "buscaste", "buscó", "buscamos", "buscasteis", "buscaron"],fut:["buscararé", "buscararás", "buscarará", "buscararemos", "buscararéis", "buscararán"]},
 {inf:"sacar",ru:"доставать; вынимать",type:"regular",pres:["saco", "sacas", "saca", "sacamos", "sacáis", "sacan"],pret:["sacqué", "sacaste", "sacó", "sacamos", "sacasteis", "sacaron"],fut:["sacararé", "sacararás", "sacarará", "sacararemos", "sacararéis", "sacararán"]},
 {inf:"dejar",ru:"оставлять; позволять",type:"regular",pres:["dejo", "dejas", "deja", "dejamos", "dejáis", "dejan"],pret:["dejé", "dejaste", "dejó", "dejamos", "dejasteis", "dejaron"],fut:["dejararé", "dejararás", "dejarará", "dejararemos", "dejararéis", "dejararán"]},
 {inf:"enviar",ru:"отправлять",type:"regular",pres:["envío", "envías", "envía", "enviamos", "enviáis", "envían"],pret:["envié", "enviaste", "envió", "enviamos", "enviasteis", "enviaron"],fut:["enviararé", "enviararás", "enviarará", "enviararemos", "enviararéis", "enviararán"]},
 {inf:"mandar",ru:"посылать; поручать",type:"regular",pres:["mando", "mandas", "manda", "mandamos", "mandáis", "mandan"],pret:["mandé", "mandaste", "mandó", "mandamos", "mandasteis", "mandaron"],fut:["mandararé", "mandararás", "mandarará", "mandararemos", "mandararéis", "mandararán"]},
 {inf:"organizar",ru:"организовывать",type:"regular",pres:["organizo", "organizas", "organiza", "organizamos", "organizáis", "organizan"],pret:["organizcé", "organizaste", "organizó", "organizamos", "organizasteis", "organizaron"],fut:["organizararé", "organizararás", "organizarará", "organizararemos", "organizararéis", "organizararán"]},
 {inf:"participar",ru:"участвовать",type:"regular",pres:["participo", "participas", "participa", "participamos", "participáis", "participan"],pret:["participé", "participaste", "participó", "participamos", "participasteis", "participaron"],fut:["participararé", "participararás", "participarará", "participararemos", "participararéis", "participararán"]},
 {inf:"presentar",ru:"представлять; знакомить",type:"regular",pres:["presento", "presentas", "presenta", "presentamos", "presentáis", "presentan"],pret:["presenté", "presentaste", "presentó", "presentamos", "presentasteis", "presentaron"],fut:["presentararé", "presentararás", "presentarará", "presentararemos", "presentararéis", "presentararán"]},
 {inf:"aceptar",ru:"принимать; соглашаться",type:"regular",pres:["acepto", "aceptas", "acepta", "aceptamos", "aceptáis", "aceptan"],pret:["acepté", "aceptaste", "aceptó", "aceptamos", "aceptasteis", "aceptaron"],fut:["aceptararé", "aceptararás", "aceptarará", "aceptararemos", "aceptararéis", "aceptararán"]},
 {inf:"intentar",ru:"пытаться",type:"regular",pres:["intento", "intentas", "intenta", "intentamos", "intentáis", "intentan"],pret:["intenté", "intentaste", "intentó", "intentamos", "intentasteis", "intentaron"],fut:["intentararé", "intentararás", "intentarará", "intentararemos", "intentararéis", "intentararán"]},
 {inf:"funcionar",ru:"работать; функционировать",type:"regular",pres:["funciono", "funcionas", "funciona", "funcionamos", "funcionáis", "funcionan"],pret:["funcioné", "funcionaste", "funcionó", "funcionamos", "funcionasteis", "funcionaron"],fut:["funcionararé", "funcionararás", "funcionarará", "funcionararemos", "funcionararéis", "funcionararán"]},
 {inf:"regresar",ru:"возвращаться",type:"regular",pres:["regreso", "regresas", "regresa", "regresamos", "regresáis", "regresan"],pret:["regresé", "regresaste", "regresó", "regresamos", "regresasteis", "regresaron"],fut:["regresararé", "regresararás", "regresarará", "regresararemos", "regresararéis", "regresararán"]},
 {inf:"regalar",ru:"дарить",type:"regular",pres:["regalo", "regalas", "regala", "regalamos", "regaláis", "regalan"],pret:["regalé", "regalaste", "regaló", "regalamos", "regalasteis", "regalaron"],fut:["regalararé", "regalararás", "regalarará", "regalararemos", "regalararéis", "regalararán"]},
 {inf:"invitar",ru:"приглашать",type:"regular",pres:["invito", "invitas", "invita", "invitamos", "invitáis", "invitan"],pret:["invité", "invitaste", "invitó", "invitamos", "invitasteis", "invitaron"],fut:["invitararé", "invitararás", "invitarará", "invitararemos", "invitararéis", "invitararán"]},
 {inf:"tocar",ru:"трогать; играть (на инструменте)",type:"regular",pres:["toco", "tocas", "toca", "tocamos", "tocáis", "tocan"],pret:["tocqué", "tocaste", "tocó", "tocamos", "tocasteis", "tocaron"],fut:["tocararé", "tocararás", "tocarará", "tocararemos", "tocararéis", "tocararán"]},
 {inf:"utilizar",ru:"использовать",type:"regular",pres:["utilizo", "utilizas", "utiliza", "utilizamos", "utilizáis", "utilizan"],pret:["utilizcé", "utilizaste", "utilizó", "utilizamos", "utilizasteis", "utilizaron"],fut:["utilizararé", "utilizararás", "utilizarará", "utilizararemos", "utilizararéis", "utilizararán"]},
 {inf:"comparar",ru:"сравнивать",type:"regular",pres:["comparo", "comparas", "compara", "comparamos", "comparáis", "comparan"],pret:["comparé", "comparaste", "comparó", "comparamos", "comparasteis", "compararon"],fut:["comparararé", "comparararás", "compararará", "comparararemos", "comparararéis", "comparararán"]},
 {inf:"decorar",ru:"украшать",type:"regular",pres:["decoro", "decoras", "decora", "decoramos", "decoráis", "decoran"],pret:["decoré", "decoraste", "decoró", "decoramos", "decorasteis", "decoraron"],fut:["decorararé", "decorararás", "decorarará", "decorararemos", "decorararéis", "decorararán"]},
 {inf:"entregar",ru:"передавать; вручать",type:"regular",pres:["entrego", "entregas", "entrega", "entregamos", "entregáis", "entregan"],pret:["entreggué", "entregaste", "entregó", "entregamos", "entregasteis", "entregaron"],fut:["entregararé", "entregararás", "entregarará", "entregararemos", "entregararéis", "entregararán"]},
 {inf:"formar",ru:"формировать; образовывать",type:"regular",pres:["formo", "formas", "forma", "formamos", "formáis", "forman"],pret:["formé", "formaste", "formó", "formamos", "formasteis", "formaron"],fut:["formararé", "formararás", "formarará", "formararemos", "formararéis", "formararán"]},
 {inf:"firmar",ru:"подписывать",type:"regular",pres:["firmo", "firmas", "firma", "firmamos", "firmáis", "firman"],pret:["firmé", "firmaste", "firmó", "firmamos", "firmasteis", "firmaron"],fut:["firmararé", "firmararás", "firmarará", "firmararemos", "firmararéis", "firmararán"]},
 {inf:"grabar",ru:"записывать; снимать",type:"regular",pres:["grabo", "grabas", "graba", "grabamos", "grabáis", "graban"],pret:["grabé", "grabaste", "grabó", "grabamos", "grabasteis", "grabaron"],fut:["grabararé", "grabararás", "grabarará", "grabararemos", "grabararéis", "grabararán"]},
 {inf:"gastar",ru:"тратить",type:"regular",pres:["gasto", "gastas", "gasta", "gastamos", "gastáis", "gastan"],pret:["gasté", "gastaste", "gastó", "gastamos", "gastasteis", "gastaron"],fut:["gastararé", "gastararás", "gastarará", "gastararemos", "gastararéis", "gastararán"]},
 {inf:"señalar",ru:"указывать; отмечать",type:"regular",pres:["señalo", "señalas", "señala", "señalamos", "señaláis", "señalan"],pret:["señalé", "señalaste", "señaló", "señalamos", "señalasteis", "señalaron"],fut:["señalararé", "señalararás", "señalarará", "señalararemos", "señalararéis", "señalararán"]},
 {inf:"tratar",ru:"обращаться; пытаться",type:"regular",pres:["trato", "tratas", "trata", "tratamos", "tratáis", "tratan"],pret:["traté", "trataste", "trató", "tratamos", "tratasteis", "trataron"],fut:["tratararé", "tratararás", "tratarará", "tratararemos", "tratararéis", "tratararán"]},
 {inf:"cuidar",ru:"заботиться",type:"regular",pres:["cuido", "cuidas", "cuida", "cuidamos", "cuidáis", "cuidan"],pret:["cuidé", "cuidaste", "cuidó", "cuidamos", "cuidasteis", "cuidaron"],fut:["cuidararé", "cuidararás", "cuidarará", "cuidararemos", "cuidararéis", "cuidararán"]},
 {inf:"arreglar",ru:"чинить; приводить в порядок",type:"regular",pres:["arreglo", "arreglas", "arregla", "arreglamos", "arregláis", "arreglan"],pret:["arreglé", "arreglaste", "arregló", "arreglamos", "arreglasteis", "arreglaron"],fut:["arreglararé", "arreglararás", "arreglarará", "arreglararemos", "arreglararéis", "arreglararán"]},
 {inf:"quedar",ru:"оставаться; договариваться о встрече",type:"regular",pres:["quedo", "quedas", "queda", "quedamos", "quedáis", "quedan"],pret:["quedé", "quedaste", "quedó", "quedamos", "quedasteis", "quedaron"],fut:["quedararé", "quedararás", "quedarará", "quedararemos", "quedararéis", "quedararán"]},
 {inf:"gustar",ru:"нравиться",type:"regular",pres:["gusto", "gustas", "gusta", "gustamos", "gustáis", "gustan"],pret:["gusté", "gustaste", "gustó", "gustamos", "gustasteis", "gustaron"],fut:["gustararé", "gustararás", "gustarará", "gustararemos", "gustararéis", "gustararán"]},
 {inf:"interesar",ru:"интересовать",type:"regular",pres:["intereso", "interesas", "interesa", "interesamos", "interesáis", "interesan"],pret:["interesé", "interesaste", "interesó", "interesamos", "interesasteis", "interesaron"],fut:["interesararé", "interesararás", "interesarará", "interesararemos", "interesararéis", "interesararán"]},
 {inf:"resultar",ru:"оказываться; получаться",type:"regular",pres:["resulto", "resultas", "resulta", "resultamos", "resultáis", "resultan"],pret:["resulté", "resultaste", "resultó", "resultamos", "resultasteis", "resultaron"],fut:["resultararé", "resultararás", "resultarará", "resultararemos", "resultararéis", "resultararán"]},
 {inf:"continuar",ru:"продолжать",type:"regular",pres:["continúo", "continúas", "continúa", "continuamos", "continuáis", "continúan"],pret:["continué", "continuaste", "continuó", "continuamos", "continuasteis", "continuaron"],fut:["continuararé", "continuararás", "continuarará", "continuararemos", "continuararéis", "continuararán"]},
 {inf:"crear",ru:"создавать",type:"regular",pres:["creo", "creas", "crea", "creamos", "creáis", "crean"],pret:["creé", "creaste", "creó", "creamos", "creasteis", "crearon"],fut:["creararé", "creararás", "crearará", "creararemos", "creararéis", "creararán"]},
 {inf:"cobrar",ru:"получать оплату; взимать",type:"regular",pres:["cobro", "cobras", "cobra", "cobramos", "cobráis", "cobran"],pret:["cobré", "cobraste", "cobró", "cobramos", "cobrasteis", "cobraron"],fut:["cobrararé", "cobrararás", "cobrarará", "cobrararemos", "cobrararéis", "cobrararán"]},
 {inf:"costear",ru:"оплачивать",type:"regular",pres:["costeo", "costeas", "costea", "costeamos", "costeáis", "costean"],pret:["costeé", "costeaste", "costeó", "costeamos", "costeasteis", "costearon"],fut:["costeararé", "costeararás", "costearará", "costeararemos", "costeararéis", "costeararán"]},
 {inf:"alojar",ru:"размещать; поселять",type:"regular",pres:["alojo", "alojas", "aloja", "alojamos", "alojáis", "alojan"],pret:["alojé", "alojaste", "alojó", "alojamos", "alojasteis", "alojaron"],fut:["alojararé", "alojararás", "alojarará", "alojararemos", "alojararéis", "alojararán"]},
 {inf:"disfrutar",ru:"наслаждаться",type:"regular",pres:["disfruto", "disfrutas", "disfruta", "disfrutamos", "disfrutáis", "disfrutan"],pret:["disfruté", "disfrutaste", "disfrutó", "disfrutamos", "disfrutasteis", "disfrutaron"],fut:["disfrutararé", "disfrutararás", "disfrutarará", "disfrutararemos", "disfrutararéis", "disfrutararán"]},
 {inf:"iniciar",ru:"начинать",type:"regular",pres:["inicio", "inicias", "inicia", "iniciamos", "iniciáis", "inician"],pret:["inicié", "iniciaste", "inició", "iniciamos", "iniciasteis", "iniciaron"],fut:["iniciararé", "iniciararás", "iniciarará", "iniciararemos", "iniciararéis", "iniciararán"]},
 {inf:"informar",ru:"информировать",type:"regular",pres:["informo", "informas", "informa", "informamos", "informáis", "informan"],pret:["informé", "informaste", "informó", "informamos", "informasteis", "informaron"],fut:["informararé", "informararás", "informarará", "informararemos", "informararéis", "informararán"]},
 {inf:"confirmar",ru:"подтверждать",type:"regular",pres:["confirmo", "confirmas", "confirma", "confirmamos", "confirmáis", "confirman"],pret:["confirmé", "confirmaste", "confirmó", "confirmamos", "confirmasteis", "confirmaron"],fut:["confirmararé", "confirmararás", "confirmarará", "confirmararemos", "confirmararéis", "confirmararán"]},
 {inf:"comentar",ru:"комментировать",type:"regular",pres:["comento", "comentas", "comenta", "comentamos", "comentáis", "comentan"],pret:["comenté", "comentaste", "comentó", "comentamos", "comentasteis", "comentaron"],fut:["comentararé", "comentararás", "comentarará", "comentararemos", "comentararéis", "comentararán"]},
 {inf:"prepararse",ru:"готовиться",type:"regular",pres:["me preparo", "te preparas", "se prepara", "nos preparamos", "os preparáis", "se preparan"],pret:["me preparé", "te preparaste", "se preparó", "nos preparamos", "os preparasteis", "se prepararon"],fut:["me preparararé", "te preparararás", "se prepararará", "nos preparararemos", "os preparararéis", "se preparararán"]},
 {inf:"levantarse",ru:"вставать",type:"regular",pres:["me levanto", "te levantas", "se levanta", "nos levantamos", "os levantáis", "se levantan"],pret:["me levanté", "te levantaste", "se levantó", "nos levantamos", "os levantasteis", "se levantaron"],fut:["me levantararé", "te levantararás", "se levantarará", "nos levantararemos", "os levantararéis", "se levantararán"]},
 {inf:"ducharse",ru:"принимать душ",type:"regular",pres:["me ducho", "te duchas", "se ducha", "nos duchamos", "os ducháis", "se duchan"],pret:["me duché", "te duchaste", "se duchó", "nos duchamos", "os duchasteis", "se ducharon"],fut:["me duchararé", "te duchararás", "se ducharará", "nos duchararemos", "os duchararéis", "se duchararán"]},
 {inf:"lavarse",ru:"мыться",type:"regular",pres:["me lavo", "te lavas", "se lava", "nos lavamos", "os laváis", "se lavan"],pret:["me lavé", "te lavaste", "se lavó", "nos lavamos", "os lavasteis", "se lavaron"],fut:["me lavararé", "te lavararás", "se lavarará", "nos lavararemos", "os lavararéis", "se lavararán"]},
 {inf:"quedarse",ru:"оставаться",type:"regular",pres:["me quedo", "te quedas", "se queda", "nos quedamos", "os quedáis", "se quedan"],pret:["me quedé", "te quedaste", "se quedó", "nos quedamos", "os quedasteis", "se quedaron"],fut:["me quedararé", "te quedararás", "se quedarará", "nos quedararemos", "os quedararéis", "se quedararán"]},
 {inf:"casarse",ru:"жениться; выходить замуж",type:"regular",pres:["me caso", "te casas", "se casa", "nos casamos", "os casáis", "se casan"],pret:["me casé", "te casaste", "se casó", "nos casamos", "os casasteis", "se casaron"],fut:["me casararé", "te casararás", "se casarará", "nos casararemos", "os casararéis", "se casararán"]},
 {inf:"separarse",ru:"расставаться; разделяться",type:"regular",pres:["me separo", "te separas", "se separa", "nos separamos", "os separáis", "se separan"],pret:["me separé", "te separaste", "se separó", "nos separamos", "os separasteis", "se separaron"],fut:["me separararé", "te separararás", "se separarará", "nos separararemos", "os separararéis", "se separararán"]},
 {inf:"aprender",ru:"учить; изучать",type:"regular",pres:["aprendo", "aprendes", "aprende", "aprendemos", "aprendéis", "aprenden"],pret:["aprendí", "aprendiste", "aprendió", "aprendimos", "aprendisteis", "aprendieron"],fut:["aprendereré", "aprendererás", "aprendererá", "aprendereremos", "aprendereréis", "aprendererán"]},
 {inf:"comprender",ru:"понимать",type:"regular",pres:["comprendo", "comprendes", "comprende", "comprendemos", "comprendéis", "comprenden"],pret:["comprendí", "comprendiste", "comprendió", "comprendimos", "comprendisteis", "comprendieron"],fut:["comprendereré", "comprendererás", "comprendererá", "comprendereremos", "comprendereréis", "comprendererán"]},
 {inf:"responder",ru:"отвечать",type:"regular",pres:["respondo", "respondes", "responde", "respondemos", "respondéis", "responden"],pret:["respondí", "respondiste", "respondió", "respondimos", "respondisteis", "respondieron"],fut:["respondereré", "respondererás", "respondererá", "respondereremos", "respondereréis", "respondererán"]},
 {inf:"correr",ru:"бегать",type:"regular",pres:["corro", "corres", "corre", "corremos", "corréis", "corren"],pret:["corrí", "corriste", "corrió", "corrimos", "corristeis", "corrieron"],fut:["correreré", "corrererás", "corrererá", "correreremos", "correreréis", "corrererán"]},
 {inf:"vender",ru:"продавать",type:"regular",pres:["vendo", "vendes", "vende", "vendemos", "vendéis", "venden"],pret:["vendí", "vendiste", "vendió", "vendimos", "vendisteis", "vendieron"],fut:["vendereré", "vendererás", "vendererá", "vendereremos", "vendereréis", "vendererán"]},
 {inf:"deber",ru:"быть должным; следует",type:"regular",pres:["debo", "debes", "debe", "debemos", "debéis", "deben"],pret:["debí", "debiste", "debió", "debimos", "debisteis", "debieron"],fut:["debereré", "debererás", "debererá", "debereremos", "debereréis", "debererán"]},
 {inf:"creer",ru:"верить; считать",type:"regular",pres:["creo", "crees", "cree", "creemos", "creéis", "creen"],pret:["creí", "creiste", "creió", "creimos", "creisteis", "creieron"],fut:["creereré", "creererás", "creererá", "creereremos", "creereréis", "creererán"]},
 {inf:"meter",ru:"класть; помещать",type:"regular",pres:["meto", "metes", "mete", "metemos", "metéis", "meten"],pret:["metí", "metiste", "metió", "metimos", "metisteis", "metieron"],fut:["metereré", "metererás", "metererá", "metereremos", "metereréis", "metererán"]},
 {inf:"prometer",ru:"обещать",type:"regular",pres:["prometo", "prometes", "promete", "prometemos", "prometéis", "prometen"],pret:["prometí", "prometiste", "prometió", "prometimos", "prometisteis", "prometieron"],fut:["prometereré", "prometererás", "prometererá", "prometereremos", "prometereréis", "prometererán"]},
 {inf:"depender",ru:"зависеть",type:"regular",pres:["dependo", "dependes", "depende", "dependemos", "dependéis", "dependen"],pret:["dependí", "dependiste", "dependió", "dependimos", "dependisteis", "dependieron"],fut:["dependereré", "dependererás", "dependererá", "dependereremos", "dependereréis", "dependererán"]},
 {inf:"romper",ru:"ломать; рвать",type:"regular",pres:["rompo", "rompes", "rompe", "rompemos", "rompéis", "rompen"],pret:["rompí", "rompiste", "rompió", "rompimos", "rompisteis", "rompieron"],fut:["rompereré", "rompererás", "rompererá", "rompereremos", "rompereréis", "rompererán"]},
 {inf:"temer",ru:"бояться",type:"regular",pres:["temo", "temes", "teme", "tememos", "teméis", "temen"],pret:["temí", "temiste", "temió", "temimos", "temisteis", "temieron"],fut:["temereré", "temererás", "temererá", "temereremos", "temereréis", "temererán"]},
 {inf:"existir",ru:"существовать",type:"regular",pres:["existo", "existes", "existe", "existimos", "existís", "existen"],pret:["existí", "exististe", "existió", "existimos", "exististeis", "existieron"],fut:["existiriré", "existirirás", "existirirá", "existiriremos", "existiriréis", "existirirán"]},
 {inf:"escribir",ru:"писать",type:"regular",pres:["escribo", "escribes", "escribe", "escribimos", "escribís", "escriben"],pret:["escribí", "escribiste", "escribió", "escribimos", "escribisteis", "escribieron"],fut:["escribiriré", "escribirirás", "escribirirá", "escribiriremos", "escribiriréis", "escribirirán"]},
 {inf:"recibir",ru:"получать",type:"regular",pres:["recibo", "recibes", "recibe", "recibimos", "recibís", "reciben"],pret:["recibí", "recibiste", "recibió", "recibimos", "recibisteis", "recibieron"],fut:["recibiriré", "recibirirás", "recibirirá", "recibiriremos", "recibiriréis", "recibirirán"]},
 {inf:"decidir",ru:"решать",type:"regular",pres:["decido", "decides", "decide", "decidimos", "decidís", "deciden"],pret:["decidí", "decidiste", "decidió", "decidimos", "decidisteis", "decidieron"],fut:["decidiriré", "decidirirás", "decidirirá", "decidiriremos", "decidiriréis", "decidirirán"]},
 {inf:"asistir",ru:"посещать; присутствовать",type:"regular",pres:["asisto", "asistes", "asiste", "asistimos", "asistís", "asisten"],pret:["asistí", "asististe", "asistió", "asistimos", "asististeis", "asistieron"],fut:["asistiriré", "asistirirás", "asistirirá", "asistiriremos", "asistiriréis", "asistirirán"]},
 {inf:"permitir",ru:"позволять",type:"regular",pres:["permito", "permites", "permite", "permitimos", "permitís", "permiten"],pret:["permití", "permitiste", "permitió", "permitimos", "permitisteis", "permitieron"],fut:["permitiriré", "permitirirás", "permitirirá", "permitiriremos", "permitiriréis", "permitirirán"]},
 {inf:"discutir",ru:"обсуждать; спорить",type:"regular",pres:["discuto", "discutes", "discute", "discutimos", "discutís", "discuten"],pret:["discutí", "discutiste", "discutió", "discutimos", "discutisteis", "discutieron"],fut:["discutiriré", "discutirirás", "discutirirá", "discutiriremos", "discutiriréis", "discutirirán"]},
 {inf:"compartir",ru:"делиться",type:"regular",pres:["comparto", "compartes", "comparte", "compartimos", "compartís", "comparten"],pret:["compartí", "compartiste", "compartió", "compartimos", "compartisteis", "compartieron"],fut:["compartiriré", "compartirirás", "compartirirá", "compartiriremos", "compartiriréis", "compartirirán"]},
 {inf:"subir",ru:"подниматься; загружать",type:"regular",pres:["subo", "subes", "sube", "subimos", "subís", "suben"],pret:["subí", "subiste", "subió", "subimos", "subisteis", "subieron"],fut:["subiriré", "subirirás", "subirirá", "subiriremos", "subiriréis", "subirirán"]},
 {inf:"partir",ru:"отправляться; делить",type:"regular",pres:["parto", "partes", "parte", "partimos", "partís", "parten"],pret:["partí", "partiste", "partió", "partimos", "partisteis", "partieron"],fut:["partiriré", "partirirás", "partirirá", "partiriremos", "partiriréis", "partirirán"]},
 {inf:"sufrir",ru:"страдать",type:"regular",pres:["sufro", "sufres", "sufre", "sufrimos", "sufrís", "sufren"],pret:["sufrí", "sufriste", "sufrió", "sufrimos", "sufristeis", "sufrieron"],fut:["sufririré", "sufririrás", "sufririrá", "sufririremos", "sufririréis", "sufririrán"]},
 {inf:"cumplir",ru:"исполнять; выполнять",type:"regular",pres:["cumplo", "cumples", "cumple", "cumplimos", "cumplís", "cumplen"],pret:["cumplí", "cumpliste", "cumplió", "cumplimos", "cumplisteis", "cumplieron"],fut:["cumpliriré", "cumplirirás", "cumplirirá", "cumpliriremos", "cumpliriréis", "cumplirirán"]},
 {inf:"consumir",ru:"потреблять",type:"regular",pres:["consumo", "consumes", "consume", "consumimos", "consumís", "consumen"],pret:["consumí", "consumiste", "consumió", "consumimos", "consumisteis", "consumieron"],fut:["consumiriré", "consumirirás", "consumirirá", "consumiriremos", "consumiriréis", "consumirirán"]},
 {inf:"añadir",ru:"добавлять",type:"regular",pres:["añado", "añades", "añade", "añadimos", "añadís", "añaden"],pret:["añadí", "añadiste", "añadió", "añadimos", "añadisteis", "añadieron"],fut:["añadiriré", "añadirirás", "añadirirá", "añadiriremos", "añadiriréis", "añadirirán"]},
 {inf:"admitir",ru:"признавать; допускать",type:"regular",pres:["admito", "admites", "admite", "admitimos", "admitís", "admiten"],pret:["admití", "admitiste", "admitió", "admitimos", "admitisteis", "admitieron"],fut:["admitiriré", "admitirirás", "admitirirá", "admitiriremos", "admitiriréis", "admitirirán"]},
 {inf:"describir",ru:"описывать",type:"regular",pres:["describo", "describes", "describe", "describimos", "describís", "describen"],pret:["describí", "describiste", "describió", "describimos", "describisteis", "describieron"],fut:["describiriré", "describirirás", "describirirá", "describiriremos", "describiriréis", "describirirán"]},
 {inf:"unir",ru:"соединять; объединять",type:"regular",pres:["uno", "unes", "une", "unimos", "unís", "unen"],pret:["uní", "uniste", "unió", "unimos", "unisteis", "unieron"],fut:["uniriré", "unirirás", "unirirá", "uniriremos", "uniriréis", "unirirán"]},
 {inf:"ocurrir",ru:"происходить",type:"regular",pres:["ocurro", "ocurres", "ocurre", "ocurrimos", "ocurrís", "ocurren"],pret:["ocurrí", "ocurriste", "ocurrió", "ocurrimos", "ocurristeis", "ocurrieron"],fut:["ocurririré", "ocurririrás", "ocurririrá", "ocurririremos", "ocurririréis", "ocurririrán"]},
 {inf:"vestirse",ru:"одеваться",type:"regular",pres:["me visto", "te vistes", "se viste", "nos vestimos", "os vestís", "se visten"],pret:["me vestí", "te vestiste", "se vistió", "nos vestimos", "os vestisteis", "se vistieron"],fut:["me vestiré", "te vestirás", "se vestirá", "nos vestiremos", "os vestiréis", "se vestirán"]}
];
VERBS.push(...EXTRA_VERBS);

// Additional irregular verbs from the classroom conjugation tables.
const CLASSROOM_IRREGULAR_VERBS = [
 {inf:"satisfacer",ru:"удовлетворять",type:"irregular",pres:["satisfago","satisfaces","satisface","satisfacemos","satisfacéis","satisfacen"],pret:["satisfice","satisficiste","satisfizo","satisficimos","satisficisteis","satisficieron"],fut:["satisfaré","satisfarás","satisfará","satisfaremos","satisfaréis","satisfarán"]},
 {inf:"detener",ru:"останавливать; задерживать",type:"irregular",pres:["detengo","detienes","detiene","detenemos","detenéis","detienen"],pret:["detuve","detuviste","detuvo","detuvimos","detuvisteis","detuvieron"],fut:["detendré","detendrás","detendrá","detendremos","detendréis","detendrán"]},
 {inf:"caber",ru:"помещаться; вмещаться",type:"irregular",pres:["quepo","cabes","cabe","cabemos","cabéis","caben"],pret:["cupe","cupiste","cupo","cupimos","cupisteis","cupieron"],fut:["cabré","cabrás","cabrá","cabremos","cabréis","cabrán"]}
];
VERBS.push(...CLASSROOM_IRREGULAR_VERBS);

// Keep all regular future forms grammatically correct, including reflexive verbs.
function regularFutureForms(inf){
  const endings = inf.endsWith("ar")
    ? ["é","ás","á","emos","éis","án"]
    : ["é","ás","á","emos","éis","án"];
  const reflexive = inf.endsWith("se");
  const base = reflexive ? inf.slice(0,-2) : inf;
  const pronouns = ["me ","te ","se ","nos ","os ","se "];
  return endings.map((ending,i) => (reflexive ? pronouns[i] : "") + base + ending);
}
for (const v of VERBS) {
  if (v.type === "regular") v.fut = regularFutureForms(v.inf);
}



const RU_FORMS = {
  abrir:{pres:["открываю","открываешь","открывает","открываем","открываете","открывают"],pret:["открыл/открыла","открыл/открыла","открыл/открыла","открыли","открыли","открыли"],fut:["открою","откроешь","откроет","откроем","откроете","откроют"]},
  beber:{pres:["пью","пьёшь","пьёт","пьём","пьёте","пьют"],pret:["пил/пила","пил/пила","пил/пила","пили","пили","пили"],fut:["буду пить","будешь пить","будет пить","будем пить","будете пить","будут пить"]},
  comer:{pres:["ем","ешь","ест","едим","едите","едят"],pret:["ел/ела","ел/ела","ел/ела","ели","ели","ели"],fut:["буду есть","будешь есть","будет есть","будем есть","будете есть","будут есть"]},
  hablar:{pres:["говорю","говоришь","говорит","говорим","говорите","говорят"],pret:["говорил/говорила","говорил/говорила","говорил/говорила","говорили","говорили","говорили"],fut:["буду говорить","будешь говорить","будет говорить","будем говорить","будете говорить","будут говорить"]},
  trabajar:{pres:["работаю","работаешь","работает","работаем","работаете","работают"],pret:["работал/работала","работал/работала","работал/работала","работали","работали","работали"],fut:["буду работать","будешь работать","будет работать","будем работать","будете работать","будут работать"]},
  vivir:{pres:["живу","живёшь","живёт","живём","живёте","живут"],pret:["жил/жила","жил/жила","жил/жила","жили","жили","жили"],fut:["буду жить","будешь жить","будет жить","будем жить","будете жить","будут жить"]},
  dar:{pres:["даю","даёшь","даёт","даём","даёте","дают"],pret:["дал/дала","дал/дала","дал/дала","дали","дали","дали"],fut:["дам","дашь","даст","дадим","дадите","дадут"]},
  decir:{pres:["говорю","говоришь","говорит","говорим","говорите","говорят"],pret:["сказал/сказала","сказал/сказала","сказал/сказала","сказали","сказали","сказали"],fut:["скажу","скажешь","скажет","скажем","скажете","скажут"]},
  estar:{pres:["нахожусь","находишься","находится","находимся","находитесь","находятся"],pret:["находился/находилась","находился/находилась","находился/находилась","находились","находились","находились"],fut:["буду находиться","будешь находиться","будет находиться","будем находиться","будете находиться","будут находиться"]},
  hacer:{pres:["делаю","делаешь","делает","делаем","делаете","делают"],pret:["делал/делала","делал/делала","делал/делала","делали","делали","делали"],fut:["буду делать","будешь делать","будет делать","будем делать","будете делать","будут делать"]},
  haber:{pres:["имею","имеешь","имеет","имеем","имеете","имеют"],pret:["имел/имела","имел/имела","имел/имела","имели","имели","имели"],fut:["буду иметь","будешь иметь","будет иметь","будем иметь","будете иметь","будут иметь"]},
  ir:{pres:["иду/еду","идёшь/едешь","идёт/едет","идём/едем","идёте/едете","идут/едут"],pret:["ходил/ездил","ходил/ездил","ходил/ездил","ходили/ездили","ходили/ездили","ходили/ездили"],fut:["пойду/поеду","пойдёшь/поедешь","пойдёт/поедет","пойдём/поедем","пойдёте/поедете","пойдут/поедут"]},
  ser:{pres:["есть/являюсь","есть/являешься","есть/является","есть/являемся","есть/являетесь","есть/являются"],pret:["был/была","был/была","был/была","были","были","были"],fut:["буду","будешь","будет","будем","будете","будут"]},
  saber:{pres:["знаю","знаешь","знает","знаем","знаете","знают"],pret:["знал/знала","знал/знала","знал/знала","знали","знали","знали"],fut:["буду знать","будешь знать","будет знать","будем знать","будете знать","будут знать"]},
  venir:{pres:["прихожу/приезжаю","приходишь/приезжаешь","приходит/приезжает","приходим/приезжаем","приходите/приезжаете","приходят/приезжают"],pret:["пришёл/приехал","пришёл/приехал","пришёл/приехал","пришли/приехали","пришли/приехали","пришли/приехали"],fut:["приду/приеду","придёшь/приедешь","придёт/приедет","придём/приедем","придёте/приедете","придут/приедут"]},
  querer:{pres:["хочу","хочешь","хочет","хотим","хотите","хотят"],pret:["хотел/хотела","хотел/хотела","хотел/хотела","хотели","хотели","хотели"],fut:["буду хотеть","будешь хотеть","будет хотеть","будем хотеть","будете хотеть","будут хотеть"]},
  poder:{pres:["могу","можешь","может","можем","можете","могут"],pret:["мог/могла","мог/могла","мог/могла","могли","могли","могли"],fut:["смогу","сможешь","сможет","сможем","сможете","смогут"]},
  poner:{pres:["кладу/ставлю","кладёшь/ставишь","кладёт/ставит","кладём/ставим","кладёте/ставите","кладут/ставят"],pret:["положил/поставил","положил/поставил","положил/поставил","положили/поставили","положили/поставили","положили/поставили"],fut:["положу/поставлю","положишь/поставишь","положит/поставит","положим/поставим","положите/поставите","положат/поставят"]},
  traer:{pres:["приношу/привожу","приносишь/привозишь","приносит/привозит","приносим/привозим","приносите/привозите","приносят/привозят"],pret:["принёс/привёз","принёс/привёз","принёс/привёз","принесли/привезли","принесли/привезли","принесли/привезли"],fut:["принесу/привезу","принесёшь/привезёшь","принесёт/привезёт","принесём/привезём","принесёте/привезёте","принесут/привезут"]},
  conducir:{pres:["вожу","водишь","водит","водим","водите","водят"],pret:["водил/водила","водил/водила","водил/водила","водили","водили","водили"],fut:["буду водить","будешь водить","будет водить","будем водить","будете водить","будут водить"]},
  sentir:{pres:["чувствую","чувствуешь","чувствует","чувствуем","чувствуете","чувствуют"],pret:["чувствовал/чувствовала","чувствовал/чувствовала","чувствовал/чувствовала","чувствовали","чувствовали","чувствовали"],fut:["буду чувствовать","будешь чувствовать","будет чувствовать","будем чувствовать","будете чувствовать","будут чувствовать"]},
  dormir:{pres:["сплю","спишь","спит","спим","спите","спят"],pret:["спал/спала","спал/спала","спал/спала","спали","спали","спали"],fut:["буду спать","будешь спать","будет спать","будем спать","будете спать","будут спать"]},
  recoger:{pres:["забираю/собираю","забираешь/собираешь","забирает/собирает","забираем/собираем","забираете/собираете","забирают/собирают"],pret:["забрал/забрала","забрал/забрала","забрал/забрала","забрали","забрали","забрали"],fut:["буду забирать/собирать","будешь забирать/собирать","будет забирать/собирать","будем забирать/собирать","будете забирать/собирать","будут забирать/собирать"]}
  ,satisfacer:{pres:["удовлетворяю","удовлетворяешь","удовлетворяет","удовлетворяем","удовлетворяете","удовлетворяют"],pret:["удовлетворил/удовлетворила","удовлетворил/удовлетворила","удовлетворил/удовлетворила","удовлетворили","удовлетворили","удовлетворили"],fut:["буду удовлетворять","будешь удовлетворять","будет удовлетворять","будем удовлетворять","будете удовлетворять","будут удовлетворять"]}
  ,detener:{pres:["останавливаю","останавливаешь","останавливает","останавливаем","останавливаете","останавливают"],pret:["остановил/остановила","остановил/остановила","остановил/остановила","остановили","остановили","остановили"],fut:["буду останавливать","будешь останавливать","будет останавливать","будем останавливать","будете останавливать","будут останавливать"]}
  ,caber:{pres:["помещаюсь","помещаешься","помещается","помещаемся","помещаетесь","помещаются"],pret:["поместился/поместилась","поместился/поместилась","поместился/поместилась","поместились","поместились","поместились"],fut:["помещусь","поместишься","поместится","поместимся","поместитесь","поместятся"]}
};
function ruForm(v,t,p){ return RU_FORMS[v.inf]?.[t]?.[p] || v.ru; }

const PEOPLE = ["yo","tú","él / ella / usted","nosotros","vosotros","ellos / ustedes"];
const TIMES = {pres:"Presente", pret:"Pretérito Indefinido", fut:"Futuro"};
const state = {
 settings: JSON.parse(localStorage.getItem("sv_settings") || '{"regular":true,"irregular":true,"pres":true,"pret":true,"fut":true,"ru":true}'),
 screen:"learn", learn:null, review:null, dictQuery:"", dictLetter:"", dictDetail:null
};
const $ = id => document.getElementById(id);
const enabledVerbs = () => VERBS.filter(v => state.settings[v.type]);
const enabledTimes = () => Object.keys(TIMES).filter(t => state.settings[t]);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
function save(){localStorage.setItem("sv_settings",JSON.stringify(state.settings));}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function sample(a,n){return [...a].sort(()=>Math.random()-.5).slice(0,n)}
function translation(v,t=null,p=null){
  if(!state.settings.ru) return `<div class="translation">&nbsp;</div>`;
  const value = (t!==null && p!==null) ? ruForm(v,t,p) : v.ru;
  return `<div class="translation">${esc(value)}</div>`;
}
function form(v,t,p){return v[t][p]}
function displayForm(v,t,p){ return form(v,t,p).replace(/\s+de$/i, ""); }
function displayInf(v){ return v.inf.replace(/\s*\([^)]*\)/g, "").trim(); }
const PERSON_PROMPT = ["yo","tú","él/ella/usted","nosotros/nosotras","vosotros/vosotras","ellos/ellas/ustedes"];
const TIME_PROMPT = {pres:"Presente", pret:"Pretérito Indefinido", fut:"Futuro"};
function questionText(q){ return `Как будет "${displayInf(q.v)}"?`; }
function questionHTML(q){ return `<span class="question-main">Как будет "${esc(displayInf(q.v))}"?</span><span class="question-meta">${esc(TIME_PROMPT[q.t])} · ${esc(PERSON_PROMPT[q.p])}</span>`; }
function normalizedAnswer(value){ return String(value).trim().toLowerCase().replace(/\s+de$/i, ""); }

function newLearn(){
 const vs=enabledVerbs(), ts=enabledTimes();
 if(!vs.length||!ts.length) return null;
 const v=pick(vs), t=pick(ts), p=Math.floor(Math.random()*6);
 const kind=Math.random()<.5 ? "identify" : "choose";
 const correct = kind==="identify" ? `${TIMES[t]} · ${PEOPLE[p]}` : form(v,t,p);
 let options;
 if(kind==="identify") {
   options=sample(ts.flatMap(tt=>PEOPLE.map((person,i)=>`${TIMES[tt]} · ${person}`)).filter(x=>x!==correct),3).map(text=>({text}));
   options.push({text:correct});
 } else {
   // Distractors must come from the SAME verb. Prefer other tenses first,
   // then other persons of the same verb/tenses. Never use forms of another verb.
   const candidates=[];
   const otherTimes=enabledTimes().filter(tt=>tt!==t);
   for(const tt of otherTimes){
     for(let i=0;i<6;i++){
       const f=displayForm(v,tt,i);
       if(f!==displayForm(v,t,p) && !candidates.some(x=>x.text===f)) candidates.push({text:f});
     }
   }
   for(const tt of enabledTimes()){
     for(let i=0;i<6;i++){
       const f=displayForm(v,tt,i);
       if(f!==displayForm(v,t,p) && !candidates.some(x=>x.text===f)) candidates.push({text:f});
     }
   }
   options=sample(candidates,3);
   options.push({text:displayForm(v,t,p)});
 }
 options=sample(options,4);
 return {v,t,p,kind,correct,options,answered:false,chosen:null,chosenIndex:null};
}

function renderLearn(){
 const el=$("learn");
 if(!state.learn) state.learn=newLearn();
 const q=state.learn;
 if(!q){el.innerHTML='<div class="card empty">В настройках включи хотя бы один тип глагола и одно время.</div>';return;}
 const main = q.kind==="identify" ? displayForm(q.v,q.t,q.p) : displayInf(q.v);
 const prompt = q.kind==="identify" ? `<span class="question-main">Что это за форма?</span>` : questionHTML(q);
 el.innerHTML=`<div class="card quiz-card">
   <div class="word">${esc(main)}</div>
   ${q.kind==="identify" ? translation(q.v,q.t,q.p) : translation(q.v)}
   <div class="instruction question">${prompt}</div>
   <div class="options">${q.options.map((o,i)=>{
     const isCorrect=o.text===q.correct;
     const isChosen=i===q.chosenIndex;
     const cls=q.answered?(isCorrect?"correct":(isChosen?"wrong":"")):(isChosen?"selected":"");
     return `<button class="option ${cls}" data-opt="${i}" ${q.answered?"disabled":""}>${esc(q.kind==="identify"?o.text:o.text.replace(/\s+de$/i,""))}</button>`;
   }).join("")}</div>
   <button class="next ${q.answered?"":"disabled"}" id="learnNext">Далее</button>
 </div>`;
 el.querySelectorAll("[data-opt]").forEach(b=>b.onclick=()=>{if(!q.answered){q.answered=true;q.chosenIndex=+b.dataset.opt;q.chosen=q.options[q.chosenIndex].text;renderLearn()}});
 const next=$("learnNext");
 next.onclick=()=>{if(!q.answered)return;state.learn=newLearn();renderLearn()};
}

function newReview(){
 const vs=enabledVerbs(), ts=enabledTimes();
 if(!vs.length||!ts.length)return null;
 const v=pick(vs),t=pick(ts),p=Math.floor(Math.random()*6);
 return {v,t,p,answered:false,value:""};
}
function renderReview(){
 const el=$("review");
 if(!state.review) state.review=newReview();
 const q=state.review;
 if(!q){el.innerHTML='<div class="card empty">В настройках включи хотя бы один тип глагола и одно время.</div>';return;}
 const target=form(q.v,q.t,q.p);
 const shownTarget=displayForm(q.v,q.t,q.p);
 const isCorrect=normalizedAnswer(q.value)===normalizedAnswer(target);
 el.innerHTML=`<div class="card quiz-card review-card">
   <div class="word">${esc(displayInf(q.v))}</div>
   ${translation(q.v)}
   <div class="instruction question">${questionHTML(q)}</div>
   <input id="answerInput" class="input answer-input ${q.answered?(isCorrect?"input-correct":"input-wrong"):""}" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Твоя форма" ${q.answered?"disabled":""} value="${esc(q.value)}">
   ${q.answered?`<div class="review-result ${isCorrect?"good":"bad"}"><strong>${isCorrect?"Правильно!":"Надо ещё подучить"}</strong>${isCorrect?`<div>${esc(shownTarget)}</div>`:`<div>Правильный ответ: <b>${esc(shownTarget)}</b></div>`}${state.settings.ru?`<div>${esc(ruForm(q.v,q.t,q.p))}</div>`:""}</div><button class="next" id="reviewNext">Далее</button>`:`<button class="next ${q.value.trim()?"":"disabled"}" id="checkBtn">Проверить</button>`}
 </div>`;
 const input=$("answerInput");
 if(input&&!q.answered){input.focus();input.oninput=e=>{q.value=e.target.value;const b=$("checkBtn");b.classList.toggle("disabled",!q.value.trim())};input.onkeydown=e=>{if(e.key==="Enter"&&q.value.trim())$("checkBtn").click()};$("checkBtn").onclick=()=>{if(!q.value.trim())return;q.answered=true;renderReview()}}
 const next=$("reviewNext");if(next)next.onclick=()=>{state.review=newReview();renderReview()};
}

function renderDictionary(){
 const el=$("dictionary");
 if(state.dictDetail){
   const v=state.dictDetail;
   el.innerHTML=`<button class="detail-back" id="backDict">← Назад к словарю</button><div class="card">
    <div class="word">${esc(v.inf)}</div>${translation(v)}
    <h3>Presente</h3>${table(v,"pres")}<h3>Pretérito Indefinido</h3>${table(v,"pret")}<h3>Futuro</h3>${table(v,"fut")}
   </div>`;
   $("backDict").onclick=()=>{state.dictDetail=null;renderDictionary()};return;
 }
 const letters=["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","V"];
 const q=state.dictQuery.toLowerCase();
 let list=enabledVerbs().filter(v=>(!q||v.inf.includes(q)||v.ru.toLowerCase().includes(q))&&(!state.dictLetter||v.inf[0].toUpperCase()===state.dictLetter));
 el.innerHTML=`<div class="card">
  <input class="input search" id="dictSearch" placeholder="Поиск глагола или перевода" value="${esc(state.dictQuery)}">
  <div class="alpha"><button data-letter="">Все</button>${letters.map(l=>`<button data-letter="${l}" class="${state.dictLetter===l?"active":""}">${l}</button>`).join("")}</div>
  <div class="verb-list">${list.length?list.map(v=>`<button class="verb-row" data-verb="${esc(v.inf)}"><b>${esc(v.inf)}</b><span>${state.settings.ru?esc(v.ru):""}</span></button>`).join(""):'<div class="empty">Ничего не найдено</div>'}</div>
 </div>`;
 $("dictSearch").oninput=e=>{state.dictQuery=e.target.value;renderDictionary();const x=$("dictSearch");x.focus();x.setSelectionRange(x.value.length,x.value.length)};
 el.querySelectorAll("[data-letter]").forEach(b=>b.onclick=()=>{state.dictLetter=b.dataset.letter;renderDictionary()});
 el.querySelectorAll("[data-verb]").forEach(b=>b.onclick=()=>{state.dictDetail=VERBS.find(v=>v.inf===b.dataset.verb);renderDictionary()});
}
function table(v,t){return `<table class="conj-table"><tbody>${v[t].map((f,i)=>`<tr><td>${PEOPLE[i]}</td><td><b>${f}</b></td></tr>`).join("")}</tbody></table>`}

function render(){
 document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===state.screen));
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.screen===state.screen));
 if(state.screen==="learn")renderLearn();
 if(state.screen==="review")renderReview();
 if(state.screen==="dictionary")renderDictionary();
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{state.screen=b.dataset.screen;render()});
$("settingsBtn").onclick=()=>{$("settingsModal").classList.remove("hidden");renderSettings()};
$("closeSettings").onclick=()=>{$("settingsModal").classList.add("hidden");render()};
function renderSettings(){
 const items=[
  ["regular","Регулярные глаголы","-ar, -er, -ir"],
  ["irregular","Нерегулярные глаголы","Неправильные формы"],
  ["pres","Presente","Настоящее время"],
  ["pret","Pretérito Indefinido","Прошедшее время"],
  ["fut","Futuro","Будущее время"],
  ["ru","Перевод на русский","Показывать перевод в заданиях"]
 ];
 $("settingsContent").innerHTML=items.map(([k,a,b])=>`<div class="setting"><div class="setting-text"><b>${a}</b><small>${b}</small></div><label class="switch"><input type="checkbox" data-setting="${k}" ${state.settings[k]?"checked":""}><span class="slider"></span></label></div>`).join("");
 $("settingsContent").querySelectorAll("[data-setting]").forEach(x=>x.onchange=()=>{state.settings[x.dataset.setting]=x.checked;save();state.learn=null;state.review=null;renderSettings();render()});
}
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
render();
