// --- BAZA RECEPTOV Z DETALJNIMI NAVODILI ---

const predjedi = [
    { 
        ime: "Jušna kocka, raztopljena v vroči vodi", 
        kolicine: "<ul><li>Jušna kocka: 1 kos</li><li>Voda: 250 ml</li></ul>", 
        priprava: "<ul><li>V grelcu zavrite vodo.</li><li>V skodelico dajte jušno kocko.</li><li>Prelijte z vrelo vodo in dobro premešajte, da se kocka popolnoma raztopi.</li></ul>" 
    },
    { 
        ime: "Jušna kocka z na pari kuhanim korenjem", 
        kolicine: "<ul><li>Zamrznjeno korenje: 150 g</li><li>Jušna kocka: 1 kos</li><li>Voda: 250 ml + 2 žlici</li><li>Sol: po okusu</li></ul>", 
        priprava: "<ul><li>V posodo za mikrovalovko stresite zamrznjeno korenje, dodajte 2 žlici vode in sol.</li><li>Pokrijte in kuhajte 2-3 minute.</li><li>Odlijte odvečno vodo, dodajte jušno kocko in prelijte z vrelo vodo.</li></ul>" 
    },
    { 
        ime: "Jušna kocka z na pari kuhanim brokolijem", 
        kolicine: "<ul><li>Zamrznjen brokoli: 150 g</li><li>Jušna kocka: 1 kos</li><li>Voda: 250 ml + 2 žlici</li></ul>", 
        priprava: "<ul><li>Postopek je enak kot pri korenju, le da namesto korenja uporabite brokoli.</li></ul>" 
    },
    { 
        ime: "Jušna kocka z mešano zelenjavo", 
        kolicine: "<ul><li>Zamrznjena mešana zelenjava: 150 g</li><li>Jušna kocka: 1 kos</li><li>Voda: 250 ml + 2 žlici</li></ul>", 
        priprava: "<ul><li>Postopek je enak kot pri korenju, le da namesto korenja uporabite mešano zelenjavo.</li></ul>" 
    },
    { 
        ime: "Navadni jogurt", 
        kolicine: "<ul><li>Navadni jogurt: 150g</li></ul>", 
        priprava: "<ul><li>Postrezite v skodelici.</li></ul>" 
    },
    { 
        ime: "Navadni jogurt s pestjo orehov", 
        kolicine: "<ul><li>Navadni jogurt: 150g</li><li>Orehi: 50g</li></ul>", 
        priprava: "<ul><li>Orehe lahko grobo nasekljate ali pustite cele in jih vmešajte v jogurt.</li></ul>" 
    },
    { 
        ime: "Navadni jogurt s pestjo mandljev", 
        kolicine: "<ul><li>Navadni jogurt: 150g</li><li>Mandlji: 50g</li></ul>", 
        priprava: "<ul><li>Mandlje lahko grobo nasekljate ali pustite cele in jih vmešajte v jogurt.</li></ul>" 
    },
    { 
        ime: "Navadni jogurt z žlico sončničnih semen", 
        kolicine: "<ul><li>Navadni jogurt: 150g</li><li>Sončnična semena: 1 žlica</li></ul>", 
        priprava: "<ul><li>Semena vmešajte v jogurt.</li></ul>" 
    },
    { 
        ime: "Navadni jogurt z narezanim jabolkom", 
        kolicine: "<ul><li>Navadni jogurt: 150g</li><li>Jabolko: 1 kos</li></ul>", 
        priprava: "<ul><li>Jabolko operite, po želji olupite, odstranite peščišče in narežite na kocke.</li><li>Kocke vmešajte v jogurt.</li></ul>" 
    },
    { 
        ime: "Navadni jogurt z narezano banano", 
        kolicine: "<ul><li>Navadni jogurt: 150g</li><li>Banana: 1 kos</li></ul>", 
        priprava: "<ul><li>Banano olupite, narežite na koleščke in jih vmešajte v jogurt.</li></ul>" 
    },
    { 
        ime: "Pusta skuta", 
        kolicine: "<ul><li>Pusta skuta: 150-200g</li></ul>", 
        priprava: "<ul><li>Postrezite v skodelici.</li></ul>" 
    },
    { 
        ime: "Skuta z narezanim paradižnikom in soljo", 
        kolicine: "<ul><li>Skuta: 200g</li><li>Paradižnik: 1 kos</li><li>Sol: po okusu</li></ul>", 
        priprava: "<ul><li>Paradižnik operite in narežite na majhne kocke.</li><li>Vmešajte ga v skuto in posolite.</li></ul>" 
    },
    { 
        ime: "Skuta s pestjo orehov", 
        kolicine: "<ul><li>Skuta: 200g</li><li>Orehi: 50g</li></ul>", 
        priprava: "<ul><li>Orehe grobo nasekljajte in jih vmešajte v skuto.</li></ul>" 
    },
    { 
        ime: "Skuta z narezano breskvijo ali nektarino", 
        kolicine: "<ul><li>Skuta: 200g</li><li>Breskev ali nektarina: 1 kos</li></ul>", 
        priprava: "<ul><li>Sadje operite, odstranite koščico in narežite na kocke.</li><li>Kocke vmešajte v skuto.</li></ul>" 
    },
    { 
        ime: "Skuta z žlico bučnih semen", 
        kolicine: "<ul><li>Skuta: 200g</li><li>Bučna semena: 1 žlica</li></ul>", 
        priprava: "<ul><li>Semena vmešajte v skuto.</li></ul>" 
    },
    { 
        ime: "Pest mandljev ali orehov", 
        kolicine: "<ul><li>Mandlji ali orehi: 50g</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Eno jabolko ali hruška", 
        kolicine: "<ul><li>Jabolko ali hruška: 1 kos</li></ul>", 
        priprava: "<ul><li>Sadje dobro operite.</li></ul>" 
    },
    { 
        ime: "Ena banana", 
        kolicine: "<ul><li>Banana: 1 kos</li></ul>", 
        priprava: "<ul><li>Olupite in pojejte.</li></ul>" 
    },
    { 
        ime: "Dve pečeni jajci (brez maščobe)", 
        kolicine: "<ul><li>Jajci: 2 kosa</li><li>Sol: po okusu</li></ul>", 
        priprava: "<ul><li>V skodelico, primerno za mikrovalovno pečico, ubijte dve jajci.</li><li>Z vilicami prebodite oba rumenjaka, da ne eksplodirata.</li><li>Posolite in kuhajte 1-2 minuti v mikrovalovki.</li></ul>" 
    },
    { 
        ime: "Skodelica kefirja", 
        kolicine: "<ul><li>Kefir: 250ml</li></ul>", 
        priprava: "<ul><li>Nalijte v skodelico.</li></ul>" 
    },
    { 
        ime: "Hrenovka v vodi", 
        kolicine: "<ul><li>Hrenovka: 1 do 2 kosa</li><li>Voda: toliko, da so hrenovke prekrite</li></ul>", 
        priprava: "<ul><li>Hrenovke položite v skodelico z vodo.</li><li>Kuhajte v mikrovalovni pečici pri najvišji moči približno 2 minuti.</li></ul>" 
    },
    { 
        ime: "Pašteta na prepečencu", 
        kolicine: "<ul><li>Pašteta po izbiri: 50 g</li><li>Prepečenec: 2 do 3 rezine</li></ul>", 
        priprava: "<ul><li>Prepečenec namažite s pašteto.</li></ul>" 
    },
    { 
        ime: "Rezina sira, ovita okoli rezine šunke", 
        kolicine: "<ul><li>Rezine sira: 2 kosa</li><li>Rezine šunke: 2 kosa</li></ul>", 
        priprava: "<ul><li>Vsako rezino šunke ovijte z rezino sira.</li></ul>" 
    },
    { 
        ime: "Tuna iz konzerve z limono", 
        kolicine: "<ul><li>Tuna v lastnem soku: 1 manjša konzerva (80 g)</li><li>Limona: 1/4</li></ul>", 
        priprava: "<ul><li>Odprite konzervo in odlijte vodo.</li><li>Tuno stresite v skodelico in pokapajte s sveže stisnjenim limoninim sokom.</li></ul>" 
    },
    { 
        ime: "Kisla smetana z naribano kumaro in soljo", 
        kolicine: "<ul><li>Kisla smetana: 100 g</li><li>Sveža kumara: 1/4 manjše kumare</li></ul>", 
        priprava: "<ul><li>Kumaro operite in jo naribajte.</li><li>Naribano kumaro vmešajte v kislo smetano in posolite po okusu.</li></ul>" 
    },
    { 
        ime: "Goveji golaž iz konzerve (manjša porcija)", 
        kolicine: "<ul><li>Goveji golaž iz konzerve: 150 g</li></ul>", 
        priprava: "<ul><li>Želeno količino golaža dajte v posodo in pogrejte 1 do 2 minuti v mikrovalovki.</li></ul>" 
    },
    { 
        ime: "Sardine v olju (iz konzerve)", 
        kolicine: "<ul><li>Sardine v olju: 1 konzerva</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje. Postrezite s kruhom ali prepečencem.</li></ul>" 
    },
    { 
        ime: "Rezina kruha z medom", 
        kolicine: "<ul><li>Kruh: 1 rezina</li><li>Med: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>Rezino kruha namažite z medom.</li></ul>" 
    },
    { 
        ime: "Paradižnikova solata s čebulo, soljo in kisom", 
        kolicine: "<ul><li>Paradižnik: 1 velik</li><li>Čebula: 1/4 manjše čebule</li></ul>", 
        priprava: "<ul><li>Paradižnik in čebulo operite in narežite.</li><li>Premešajte v skledi, posolite in dodajte kis.</li></ul>" 
    },
    { 
        ime: "Mlečni riž (iz lončka)", 
        kolicine: "<ul><li>Mlečni riž: 1 lonček (150-200 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Puding (iz lončka)", 
        kolicine: "<ul><li>Puding: 1 lonček (150-200 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Kozarec paradižnikovega soka", 
        kolicine: "<ul><li>Paradižnikov sok: 250 ml</li></ul>", 
        priprava: "<ul><li>Nalijte v kozarec.</li></ul>" 
    },
    { 
        ime: "Rezina sira, ovita okoli kisle kumarice", 
        kolicine: "<ul><li>Rezine sira: 2 kosa</li><li>Manjše kisle kumarice: 2 kosa</li></ul>", 
        priprava: "<ul><li>Vsako kumarico ovijte z rezino sira.</li></ul>" 
    },
    { 
        ime: "Tuna pašteta na rezini kruha", 
        kolicine: "<ul><li>Tuna pašteta: 50 g</li><li>Kruh: 1 do 2 rezini</li></ul>", 
        priprava: "<ul><li>Rezine kruha namažite s pašteto.</li></ul>" 
    },
    { 
        ime: "Skodelica instant ovsenih kosmičev", 
        kolicine: "<ul><li>Instant ovseni kosmiči: 50 g</li><li>Voda: 150 ml</li></ul>", 
        priprava: "<ul><li>V grelcu zavrite vodo.</li><li>Kosmiče stresite v skodelico in jih prelijte z vrelo vodo.</li><li>Dobro premešajte in pustite stati 1 minuto.</li></ul>" 
    },
    { 
        ime: "Goveja juha iz vrečke", 
        kolicine: "<ul><li>Goveja juha v vrečki: 1 zavojček</li><li>Voda: 200-250 ml</li></ul>", 
        priprava: "<ul><li>Vsebino vrečke stresite v skodelico in prelijte z vročo vodo. Dobro premešajte.</li></ul>" 
    },
    { 
        ime: "Naribano jabolko s cimetom", 
        kolicine: "<ul><li>Jabolko: 1 srednje veliko</li><li>Cimet: po okusu</li></ul>", 
        priprava: "<ul><li>Jabolko operite in naribajte.</li><li>Posujte s cimetom in premešajte.</li></ul>" 
    },
    { 
        ime: "Kuhan grah (iz konzerve ali zamrznjen)", 
        kolicine: "<ul><li>Grah: 150 g</li></ul>", 
        priprava: "<ul><li>Iz konzerve: Odcedite in pogrejte 1 minuto.</li><li>Zamrznjen: Kuhajte z 2 žlicama vode in soljo 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Rezina kruha s topljenim sirom", 
        kolicine: "<ul><li>Kruh: 1 rezina</li><li>Topljeni sir v lističih: 1 do 2 lističa</li></ul>", 
        priprava: "<ul><li>Na rezino kruha položite sir.</li><li>Segrevajte v mikrovalovni pečici približno 30 sekund, da se sir stopi.</li></ul>" 
    },
    { 
        ime: "Kuhana cvetača s kislo smetano", 
        kolicine: "<ul><li>Zamrznjena cvetača: 150 g</li><li>Kisla smetana: 2 žlici</li></ul>", 
        priprava: "<ul><li>Cvetačo skuhajte v slani vodi v mikrovalovki (3-4 min).</li><li>Odcedite odvečno vodo in prelijte s kislo smetano.</li></ul>" 
    },
    { 
        ime: "Rezina poli salame", 
        kolicine: "<ul><li>Poli salama: 2-3 rezine (približno 50 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Kefir z žlico lanenih semen", 
        kolicine: "<ul><li>Kefir: 250 ml</li><li>Lanena semena: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>V kefir vmešajte lanena semena. Za boljšo teksturo lahko pustite stati nekaj minut.</li></ul>" 
    },
    { 
        ime: "Kuhano korenje (iz zamrzovalnika) z maslom", 
        kolicine: "<ul><li>Zamrznjeno korenje: 150 g</li><li>Maslo: 1 čajna žlička</li><li>Sol: po okusu</li></ul>", 
        priprava: "<ul><li>V posodo za mikrovalovko stresite korenje, dodajte 2 žlici vode in sol.</li><li>Pokrito kuhajte 3-4 minute.</li><li>Odcedite vodo in dodajte košček masla.</li></ul>" 
    },
    { 
        ime: "Skuta z narezano redkvico in drobnjakom", 
        kolicine: "<ul><li>Pusta skuta: 200 g</li><li>Redkvice: 3-4 kosi</li><li>Drobnjak</li></ul>", 
        priprava: "<ul><li>Redkvice operite in narežite.</li><li>Vmešajte jih v skuto z drobnjakom in posolite.</li></ul>" 
    },
    { 
        ime: "Rezina kruha z jetrno pašteto", 
        kolicine: "<ul><li>Kruh: 1-2 rezini</li><li>Jetrna pašteta: 50 g</li></ul>", 
        priprava: "<ul><li>Rezine kruha namažite s pašteto.</li></ul>" 
    },
    { 
        ime: "Sadni jogurt", 
        kolicine: "<ul><li>Sadni jogurt: 1 lonček (150 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Kozarec zelenjavnega soka", 
        kolicine: "<ul><li>Zelenjavni sok: 250 ml</li></ul>", 
        priprava: "<ul><li>Nalijte v kozarec.</li></ul>" 
    },
    { 
        ime: "Kislo zelje (iz kozarca)", 
        kolicine: "<ul><li>Kislo zelje: 150 g</li></ul>", 
        priprava: "<ul><li>Vzemite iz kozarca in po želji odcedite.</li></ul>" 
    },
    { 
        ime: "Solata iz rdeče pese (iz kozarca)", 
        kolicine: "<ul><li>Vložena rdeča pesa: 150 g</li></ul>", 
        priprava: "<ul><li>Vzemite iz kozarca in postrezite.</li></ul>" 
    },
    { 
        ime: "Rezina pršuta (če je na voljo)", 
        kolicine: "<ul><li>Pršut: 2-3 rezine (približno 50 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Skuša iz konzerve (v olju ali paradižnikovi omaki)", 
        kolicine: "<ul><li>Skuša v konzervi: 1 konzerva</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Pečeno jajce s šunko", 
        kolicine: "<ul><li>Jajce: 1 kos</li><li>Šunka v rezinah: 2 rezini</li></ul>", 
        priprava: "<ul><li>Šunko narežite in jo položite na dno skodelice.</li><li>Čez ubijte jajce, prebodite rumenjak in posolite.</li><li>Kuhajte v mikrovalovni pečici 1 do 2 minuti.</li></ul>" 
    },
    { 
        ime: "Instant pire krompir (manjša porcija)", 
        kolicine: "<ul><li>Krompirjevi kosmiči: 30 g</li><li>Voda ali mleko: 150 ml</li></ul>", 
        priprava: "<ul><li>V skodelico stresite kosmiče in sol.</li><li>Prelijte z vrelo vodo ali mlekom in dobro premešajte.</li></ul>" 
    },
    { 
        ime: "Rezina sira, potresena z rdečo papriko", 
        kolicine: "<ul><li>Sir: 1-2 rezini</li><li>Sladka rdeča paprika v prahu</li></ul>", 
        priprava: "<ul><li>Rezino sira položite na krožnik in jo potresite z rdečo papriko.</li></ul>" 
    },
    { 
        ime: "Kisla smetana z žlico ajvarja", 
        kolicine: "<ul><li>Kisla smetana: 100 g</li><li>Ajvar: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>V skodelici zmešajte kislo smetano in ajvar.</li></ul>" 
    },
    { 
        ime: "Polovica grenivke", 
        kolicine: "<ul><li>Grenivka: 1/2 kosa</li></ul>", 
        priprava: "<ul><li>Grenivko prerežite na pol in jo pojejte z žlico.</li></ul>" 
    },
    { 
        ime: "Pest bučnih semen", 
        kolicine: "<ul><li>Bučna semena: 50 g</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Kozarec sirotke", 
        kolicine: "<ul><li>Sirotka: 250 ml</li></ul>", 
        priprava: "<ul><li>Nalijte v kozarec.</li></ul>" 
    },
    { 
        ime: "Grahova kremna juha iz vrečke", 
        kolicine: "<ul><li>Juha iz vrečke: 1 zavojček</li><li>Voda: 200-250 ml</li></ul>", 
        priprava: "<ul><li>Vsebino vrečke stresite v skodelico, prelijte z vrelo vodo in dobro premešajte.</li></ul>" 
    },
    { 
        ime: "Rezina kruha z maslom in marmelado", 
        kolicine: "<ul><li>Kruh: 1 rezina</li><li>Maslo: 10 g</li><li>Marmelada: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>Rezino kruha namažite najprej z maslom in nato še z marmelado.</li></ul>" 
    },
    { 
        ime: "Pečena paprika (iz kozarca)", 
        kolicine: "<ul><li>Pečena paprika: 1-2 kosa (približno 100 g)</li></ul>", 
        priprava: "<ul><li>Vzemite iz kozarca, odcedite odvečno tekočino in postrezite.</li></ul>" 
    },
    { 
        ime: "Koruza iz konzerve", 
        kolicine: "<ul><li>Koruza v zrnju: 1/2 manjše konzerve (približno 150 g)</li></ul>", 
        priprava: "<ul><li>Odprite konzervo, odcedite tekočino in koruzo stresite v skodelico.</li><li>Po želji jo lahko pogrejete v mikrovalovni pečici za 1 minuto.</li></ul>" 
    },
    { 
        ime: "Skuta z medom", 
        kolicine: "<ul><li>Pusta skuta: 200 g</li><li>Med: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>V skuto vmešajte med in dobro premešajte.</li></ul>" 
    },
    { 
        ime: "Rezina slanine, pečena v mikrovalovki", 
        kolicine: "<ul><li>Slanina, tanke rezine: 2 kosa</li></ul>", 
        priprava: "<ul><li>Na krožnik položite list papirnate brisače. Nanj položite rezini slanine.</li><li>Prekrijte z drugim listom papirnate brisače.</li><li>Pecite v mikrovalovni pečici 1-2 minuti, dokler ne postane hrustljava.</li></ul>" 
    },
    { 
        ime: "Gobova juha iz vrečke", 
        kolicine: "<ul><li>Gobova juha v vrečki: 1 zavojček</li><li>Voda: 200-250 ml</li></ul>", 
        priprava: "<ul><li>Vsebino vrečke stresite v skodelico, prelijte z vrelo vodo in dobro premešajte.</li></ul>" 
    },
    { 
        ime: "Kozarec mleka", 
        kolicine: "<ul><li>Mleko: 250 ml</li></ul>", 
        priprava: "<ul><li>Nalijte v kozarec. Če želite toplo mleko, ga segrevajte v mikrovalovni pečici 1-2 minuti.</li></ul>" 
    },
    { 
        ime: "Rezina kruha z zeliščnim namazom", 
        kolicine: "<ul><li>Kruh: 1-2 rezini</li><li>Zeliščni namaz: 2 čajni žlički</li></ul>", 
        priprava: "<ul><li>Rezine kruha namažite z zeliščnim namazom.</li></ul>" 
    },
    { 
        ime: "Kisla repa (iz kozarca)", 
        kolicine: "<ul><li>Kisla repa: 150 g</li></ul>", 
        priprava: "<ul><li>Vzemite iz kozarca, po potrebi odcedite in postrezite.</li></ul>" 
    },
    { 
        ime: "Čajna klobasa, narezana na koleščke", 
        kolicine: "<ul><li>Čajna klobasa: 50 g</li></ul>", 
        priprava: "<ul><li>Klobaso narežite na tanke koleščke.</li></ul>" 
    },
    { 
        ime: "Jogurt z malo gorčice", 
        kolicine: "<ul><li>Navadni jogurt: 150 g</li><li>Gorčica: 1/2 čajne žličke</li></ul>", 
        priprava: "<ul><li>V jogurt vmešajte gorčico, da se sestavini popolnoma povežeta.</li></ul>" 
    },
    { 
        ime: "Suhe slive", 
        kolicine: "<ul><li>Suhe slive: 5-6 kosov (približno 50 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Suhe marelice", 
        kolicine: "<ul><li>Suhe marelice: 6-7 kosov (približno 50 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Pest lešnikov", 
        kolicine: "<ul><li>Lešniki: 50 g</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Kremna špinača (zamrznjena, manjša porcija)", 
        kolicine: "<ul><li>Zamrznjena kremna špinača: 150 g</li></ul>", 
        priprava: "<ul><li>Špinačo stresite v posodo in jo pokrito segrevajte 2-3 minute. Vmes premešajte.</li></ul>" 
    },
    { 
        ime: "Topel kakav", 
        kolicine: "<ul><li>Mleko: 250 ml</li><li>Kakav v prahu: 1-2 čajni žlički</li><li>Sladkor: po okusu</li></ul>", 
        priprava: "<ul><li>V skodelico dajte kakav in sladkor ter ju zmešajte z malo mleka v pasto.</li><li>Počasi prilijte preostanek mleka in segrevajte v mikrovalovni pečici 1-2 minuti.</li></ul>" 
    },
    { 
        ime: "Rezina kruha z zaseko", 
        kolicine: "<ul><li>Kruh: 1 rezina</li><li>Zaseka: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>Rezino kruha namažite z zaseko.</li></ul>" 
    },
    { 
        ime: "Naribano korenje z limono", 
        kolicine: "<ul><li>Korenje: 1 srednje veliko</li><li>Limonin sok: 1 čajna žlička</li></ul>", 
        priprava: "<ul><li>Korenje operite, ostrgajte in drobno naribajte.</li><li>Pokapajte z limoninim sokom in premešajte.</li></ul>" 
    },
    { 
        ime: "Pasiran fižol iz konzerve", 
        kolicine: "<ul><li>Fižol v zrnju: 1/2 konzerve (približno 200 g)</li></ul>", 
        priprava: "<ul><li>Odprite konzervo in dobro odcedite tekočino.</li><li>Fižol stresite v skledo in ga z vilicami temeljito pretlačite. Začinite.</li></ul>" 
    },
    { 
        ime: "Rezina sira z olivami", 
        kolicine: "<ul><li>Sir: 1-2 rezini</li><li>Olive: 4-5 kosov</li></ul>", 
        priprava: "<ul><li>Olive položite na rezino sira ali jih postrezite zraven.</li></ul>" 
    },
    { 
        ime: "Pečeno jajce s sirom", 
        kolicine: "<ul><li>Jajce: 1 kos</li><li>Nariban sir: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>V skodelico ubijte jajce, prebodite rumenjak.</li><li>Čez potresite nariban sir, posolite in kuhajte 1-2 minuti.</li></ul>" 
    },
    { 
        ime: "Rižev narastek (iz lončka)", 
        kolicine: "<ul><li>Rižev narastek: 1 lonček (150-200 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Sadna skuta", 
        kolicine: "<ul><li>Sadna skuta: 1 lonček (150 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Zelena solata s kisom in soljo", 
        kolicine: "<ul><li>Zelena solata: 2-3 listi</li><li>Kis: 1 žlica</li><li>Sol: po okusu</li></ul>", 
        priprava: "<ul><li>Liste solate dobro operite in jih natrgajte na manjše kose.</li><li>Prelijte s kisom, posolite in premešajte.</li></ul>" 
    },
    { 
        ime: "Rezina kruha z maslom in soljo", 
        kolicine: "<ul><li>Kruh: 1 rezina</li><li>Maslo: 10 g</li><li>Sol: ščepec</li></ul>", 
        priprava: "<ul><li>Rezino kruha namažite z maslom in rahlo posolite.</li></ul>" 
    },
    { 
        ime: "Rezina mortadele", 
        kolicine: "<ul><li>Mortadela: 2-3 rezine (približno 50 g)</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Pest indijskih oreščkov", 
        kolicine: "<ul><li>Indijski oreščki: 50 g</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Paradižnik, polnjen s tuno", 
        kolicine: "<ul><li>Paradižnik: 1 večji</li><li>Tuna v lastnem soku: 1/2 manjše konzerve</li></ul>", 
        priprava: "<ul><li>Paradižnik operite in mu odrežite vrh.</li><li>Z žličko previdno izdolbite sredico.</li><li>Tuno dobro odcedite in z njo napolnite paradižnik.</li></ul>" 
    },
    { 
        ime: "Kisla smetana s sesekljano čebulo", 
        kolicine: "<ul><li>Kisla smetana: 100 g</li><li>Čebula: 1/4 majhne čebule</li></ul>", 
        priprava: "<ul><li>Čebulo olupite in jo zelo na drobno sesekljajte.</li><li>Vmešajte jo v kislo smetano in posolite.</li></ul>" 
    },
    { 
        ime: "Kozarec pinjenca", 
        kolicine: "<ul><li>Pinjenec: 250 ml</li></ul>", 
        priprava: "<ul><li>Nalijte v kozarec.</li></ul>" 
    },
    { 
        ime: "Navadni jogurt s cimetom", 
        kolicine: "<ul><li>Navadni jogurt: 150 g</li><li>Cimet: 1/4 čajne žličke</li></ul>", 
        priprava: "<ul><li>V jogurt vmešajte cimet.</li></ul>" 
    },
    { 
        ime: "Rezina kruha z arašidovim maslom", 
        kolicine: "<ul><li>Kruh: 1 rezina</li><li>Arašidovo maslo: 1 velika žlica</li></ul>", 
        priprava: "<ul><li>Rezino kruha namažite z arašidovim maslom.</li></ul>" 
    },
    { 
        ime: "Kuhana koruza (storž, zamrznjen)", 
        kolicine: "<ul><li>Zamrznjen koruzni storž: 1 kos</li><li>Voda: 3-4 žlice</li></ul>", 
        priprava: "<ul><li>Koruzni storž položite v posodo, dodajte vodo in posolite.</li><li>Pokrito kuhajte v mikrovalovki 5-7 minut.</li></ul>" 
    },
    { 
        ime: "Skuta z rdečo papriko v prahu", 
        kolicine: "<ul><li>Pusta skuta: 200 g</li><li>Sladka rdeča paprika v prahu: 1/2 čajne žličke</li></ul>", 
        priprava: "<ul><li>V skuto vmešajte rdečo papriko in sol.</li></ul>" 
    },
    { 
        ime: "Rezina sira, ovita okoli rezine poli salame", 
        kolicine: "<ul><li>Rezine sira: 2 kosa</li><li>Rezine poli salame: 2 kosa</li></ul>", 
        priprava: "<ul><li>Vsako rezino poli salame ovijte z rezino sira.</li></ul>" 
    },
    { 
        ime: "Paradižnikova juha iz vrečke", 
        kolicine: "<ul><li>Paradižnikova juha v vrečki: 1 zavojček</li><li>Voda: 200-250 ml</li></ul>", 
        priprava: "<ul><li>Vsebino vrečke stresite v skodelico, prelijte z vrelo vodo in dobro premešajte.</li></ul>" 
    },
    { 
        ime: "Kefir z narezano kumaro", 
        kolicine: "<ul><li>Kefir: 250 ml</li><li>Sveža kumara: 1/4 manjše kumare</li></ul>", 
        priprava: "<ul><li>Kumaro operite in narežite na majhne kocke.</li><li>Kocke kumare vmešajte v kefir.</li></ul>" 
    },
    { 
        ime: "Rezina kruha s skuto in drobnjakom", 
        kolicine: "<ul><li>Kruh: 1 rezina</li><li>Pusta skuta: 3 žlice</li><li>Drobnjak</li></ul>", 
        priprava: "<ul><li>V manjši posodici zmešajte skuto, drobnjak in sol.</li><li>Z namazom namažite rezino kruha.</li></ul>" 
    },
    { 
        ime: "Pečeno jajce s paradižnikovo mezgo", 
        kolicine: "<ul><li>Jajce: 1 kos</li><li>Paradižnikova mezga: 2 žlici</li></ul>", 
        priprava: "<ul><li>V skodelici specite jajce (prebodite rumenjak).</li><li>Posebej segrejte paradižnikovo mezgo.</li><li>Pečeno jajce prelijte s toplo mezgo.</li></ul>" 
    },
    { 
        ime: "Pest sončničnih semen", 
        kolicine: "<ul><li>Sončnična semena: 50 g</li></ul>", 
        priprava: "<ul><li>Pripravljeno za takojšnje uživanje.</li></ul>" 
    },
    { 
        ime: "Kisla smetana z medom", 
        kolicine: "<ul><li>Kisla smetana: 100 g</li><li>Med: 1 čajna žlička</li></ul>", 
        priprava: "<ul><li>V kislo smetano vmešajte med.</li></ul>" 
    }
];

const glavneJedi = [
    { 
        ime: "Piščančja prsa, pečen krompir, brokoli na pari", 
        kolicine: "<ul><li>Sveža piščančja prsa: 250 g</li><li>Krompir: 1 velik</li><li>Zamrznjen brokoli: 150 g</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Krompir dobro operite in ga večkrat prebodite. Pecite ga v mikrovalovki 6-8 minut.</li><li>Piščanca natrite z začimbami. Pecite ga v mikrovalovki 8-10 minut.</li><li>Brokoli stresite v posodo z 2 žlicama vode in soljo. Kuhajte pokrito 3-4 minute.</li><li>Postrezite vse skupaj.</li></ul>" 
    },
    { 
        ime: "Piščančja bedra, pečen krompir, cvetača na pari", 
        kolicine: "<ul><li>Sveža piščančja bedra: 250 g</li><li>Krompir: 1 velik</li><li>Zamrznjena cvetača: 150 g</li><li>Začimbe: Sol, poper, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovki.</li><li>Piščanca natrite z začimbami in specite.</li><li>Cvetačo skuhajte na pari z malo vode in soljo (3-4 min).</li><li>Postrezite vse skupaj.</li></ul>" 
    },
    { 
        ime: "Kocke piščanca z rižem in mešano zelenjavo", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Riž: 80g</li><li>Mešana zelenjava: 150g</li><li>Začimbe: Sol, poper, peteršilj</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke in ga specite.</li><li>Riž skuhajte po navodilih v mikrovalovki (cca 10-12 min).</li><li>Zelenjavo skuhajte na pari (3-4 min).</li><li>Vse sestavine zmešajte.</li></ul>" 
    },
    { 
        ime: "Velika zelena solata s piščancem in jogurtovim prelivom", 
        kolicine: "<ul><li>Pečen piščanec: 150g</li><li>Zelena solata</li><li>Navadni jogurt: 100g</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke.</li><li>Solato operite in natrgajte.</li><li>Pripravite preliv iz jogurta in začimb.</li><li>Vse skupaj zmešajte v veliki skledi.</li></ul>" 
    },
    { 
        ime: "Piščanec v paradižnikovi omaki z rižem", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Riž: 80g</li><li>Pasiran paradižnik: 150ml</li><li>Začimbe: Sol, poper, origano, bazilika</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke.</li><li>V posodi zmešajte piščanca, pasiran paradižnik in začimbe.</li><li>Pokrito kuhajte v mikrovalovki 10-12 minut.</li><li>Posebej skuhajte riž in postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Piščančja prsa, pire krompir, stročji fižol na pari", 
        kolicine: "<ul><li>Piščančja prsa: 250g</li><li>Krompirjevi kosmiči za pire</li><li>Zamrznjen stročji fižol: 150g</li><li>Začimbe: Sol, poper, muškatni orešček</li></ul>", 
        priprava: "<ul><li>Piščanca specite v mikrovalovki.</li><li>Pripravite instant pire krompir po navodilih.</li><li>Stročji fižol skuhajte na pari (3-4 min).</li><li>Postrezite vse skupaj.</li></ul>" 
    },
    { 
        ime: "Trakovi piščanca z rižem in kremno špinačo", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Riž: 80g</li><li>Zamrznjena kremna špinača: 150g</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na trakove in ga specite.</li><li>Skuhajte riž.</li><li>Kremno špinačo pogrejte v mikrovalovki (2-3 min).</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Hladna piščančja solata s koruzo in fižolom", 
        kolicine: "<ul><li>Pečen piščanec (hladen): 150g</li><li>Koruza iz konzerve: 100g</li><li>Rjav fižol iz konzerve: 100g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Hladnega piščanca narežite na kocke.</li><li>Odcedite koruzo in fižol.</li><li>Vse sestavine zmešajte z 2 žlicama kisle smetane ali jogurta.</li></ul>" 
    },
    { 
        ime: "Kocke piščanca in paprike, dušene v mikrovalovki, s pečenim krompirjem", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Sveža paprika: 1/2 kosa</li><li>Krompir: 1 velik</li><li>Začimbe: Sol, poper, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovki.</li><li>Piščanca in papriko narežite na kocke, dodajte začimbe in 2 žlici vode.</li><li>Pokrito dušite v mikrovalovki 8-10 minut.</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Piščančji 'kari' z rižem", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Riž: 80g</li><li>Kisla smetana ali jogurt: 100g</li><li>Začimbe: Sol, kari v prahu, poper</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke in ga specite.</li><li>V skodelici zmešajte smetano (ali jogurt) z 1-2 čajnima žličkama karija.</li><li>Omako prelijte čez pečenega piščanca.</li><li>Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Gratinirana piščančja prsa s paradižnikom in sirom", 
        kolicine: "<ul><li>Piščančja prsa: 250g</li><li>Paradižnik: 1/2 kosa</li><li>Sir (nariban ali v lističih): 30g</li><li>Začimbe: Sol, poper, origano</li></ul>", 
        priprava: "<ul><li>Piščanca specite skoraj do konca (cca 8 min).</li><li>Obložite ga z rezinami paradižnika in sirom.</li><li>Pecite odkrito še 1-2 minuti, da se sir stopi.</li></ul>" 
    },
    { 
        ime: "Kocke piščanca z dušenim kislim zeljem in pečen krompir", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Kislo zelje (iz kozarca): 200g</li><li>Krompir: 1 velik</li><li>Začimbe: Poper, kumina</li></ul>", 
        priprava: "<ul><li>Piščanca in krompir specite.</li><li>Kislo zelje odcedite, začinite in pokrito dušite v mikrovalovki 5-6 minut.</li><li>Zmešajte piščanca z zeljem in postrezite s krompirjem.</li></ul>" 
    },
    { 
        ime: "Piščančja prsa z rižem in brstičnim ohrovtom", 
        kolicine: "<ul><li>Piščančja prsa: 250g</li><li>Riž: 80g</li><li>Zamrznjen brstični ohrovt: 150g</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Piščanca specite.</li><li>Skuhajte riž.</li><li>Brstični ohrovt skuhajte na pari z malo vode in soli (5-6 min).</li><li>Postrezite vse skupaj.</li></ul>" 
    },
    { 
        ime: "Velika solata s piščancem, pečenim jajcem in koruzo", 
        kolicine: "<ul><li>Pečen piščanec (hladen): 150g</li><li>Zelena solata</li><li>Jajce: 1 kos</li><li>Koruza iz konzerve: 100g</li><li>Začimbe: Sol, poper, kis</li></ul>", 
        priprava: "<ul><li>V skodelici specite jajce (1-2 min), ga ohladite in narežite.</li><li>Piščanca narežite na kocke, solato natrgajte, koruzo odcedite.</li><li>Vse sestavine zmešajte v veliki skledi in začinite.</li></ul>" 
    },
    { 
        ime: "'Rižota' s piščancem in gobami", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Riž: 80g</li><li>Gobe iz kozarca: 100g</li><li>Začimbe: Sol, poper, sušen peteršilj</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke in ga specite.</li><li>Riž skuhajte z dvojno količino vode.</li><li>Ko je riž skoraj kuhan, mu primešajte pečenega piščanca in odcejene gobe. Kuhajte še 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Piščančja enolončnica z zelenjavo", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Zamrznjena jušna zelenjava: 200g</li><li>Voda: 300ml</li><li>Jušna kocka: 1/2 kosa</li><li>Začimbe: Poper, lovorjev list</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke.</li><li>V večjo posodo dajte vse sestavine.</li><li>Zalijte z vodo, premešajte, pokrijte in kuhajte 15-20 minut.</li></ul>" 
    },
    { 
        ime: "Piščančja prsa, pečen krompir in solata iz rdeče pese", 
        kolicine: "<ul><li>Piščančja prsa: 250g</li><li>Krompir: 1 velik</li><li>Vložena rdeča pesa: 150g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Piščanca in krompir specite.</li><li>Rdečo peso vzemite iz kozarca in jo postrezite kot solato.</li></ul>" 
    },
    { 
        ime: "Piščanec z dušenimi bučkami in paradižnikom", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Bučka: 1/2 manjše</li><li>Paradižnik: 1 manjši</li><li>Začimbe: Sol, poper, bazilika</li></ul>", 
        priprava: "<ul><li>Piščanca, bučko in paradižnik narežite na kocke.</li><li>Vse skupaj stresite v posodo, začinite.</li><li>Pokrijte in dušite 10-12 minut, vmes premešajte.</li></ul>" 
    },
    { 
        ime: "Kremni piščanec z rižem in skuto", 
        kolicine: "<ul><li>Piščanec: 200g</li><li>Riž: 80g</li><li>Pusta skuta: 100g</li><li>Začimbe: Sol, poper, sušen drobnjak</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke in ga specite.</li><li>Skuhajte riž.</li><li>V skodelici zmešajte skuto z drobnjakom in soljo.</li><li>Pečenega piščanca vmešajte v skuto in postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Hrenovke v paradižnikovi omaki s pire krompirjem", 
        kolicine: "<ul><li>Hrenovke: 2 kosa</li><li>Pasiran paradižnik: 150ml</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper, bazilika</li></ul>", 
        priprava: "<ul><li>Pripravite pire krompir.</li><li>Hrenovke narežite na koleščke.</li><li>V posodi zmešajte hrenovke, pasiran paradižnik in začimbe.</li><li>Pokrito kuhajte 3-4 minute in prelijte čez pire.</li></ul>" 
    },
    { 
        ime: "'Musaka' iz mikrovalovke z mletim mesom", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Krompir: 1 velik</li><li>Jajce: 1 kos</li><li>Kisla smetana ali jogurt: 100 g</li><li>Začimbe: Sol, poper, česen v prahu, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovki (6-8 min), ga olupite in narežite na rezine.</li><li>Mleto meso začinite in ga pokrito pecite 5-6 minut. Odlijte odvečno tekočino.</li><li>V posodo zložite plast krompirja, plast mesa in zaključite s krompirjem.</li><li>Razžvrkljajte jajce s kislo smetano in prelijte čez krompir.</li><li>Pecite odkrito še 3-4 minute, da se preliv strdi.</li></ul>" 
    },
    { 
        ime: "Golaž iz konzerve s pire krompirjem", 
        kolicine: "<ul><li>Golaž iz konzerve: 1 manjša konzerva (cca 300 g)</li><li>Krompirjevi kosmiči za pire</li><li>Začimbe: Lovorjev list (po želji)</li></ul>", 
        priprava: "<ul><li>Pripravite instant pire krompir po navodilih.</li><li>Golaž stresite v posodo in ga pogrejte v mikrovalovni pečici 3-4 minute.</li><li>Postrezite pire, prelit z golažem.</li></ul>" 
    },
    { 
        ime: "Tuna zmešana z rižem in koruzo", 
        kolicine: "<ul><li>Tuna v lastnem soku: 1 konzerva (80 g)</li><li>Riž: 80 g</li><li>Koruza iz konzerve: 100 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Skuhajte riž po navodilih.</li><li>Tuno in koruzo dobro odcedite.</li><li>V skledi zmešajte topel riž, tuno in koruzo ter začinite.</li></ul>" 
    },
    { 
        ime: "Sarme iz konzerve s pečenim krompirjem", 
        kolicine: "<ul><li>Sarma iz konzerve: 2 kosa</li><li>Krompir: 1 velik</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovni pečici (6-8 minut).</li><li>Sarme skupaj z omako pogrejte v mikrovalovni pečici 3-4 minute.</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "'Hot dog' krompir", 
        kolicine: "<ul><li>Krompir: 1 zelo velik</li><li>Hrenovka: 1 kos</li><li>Sir v lističih: 1 listič</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovki (6-8 minut).</li><li>Medtem skuhajte hrenovko (2 minuti v vodi v mikrovalovki).</li><li>Pečen krompir po dolgem prerežite (ne do konca) in v zarezo položite hrenovko in sir.</li><li>Pecite še 30 sekund, da se sir stopi.</li></ul>" 
    },
    { 
        ime: "Rižota z mletim mesom", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Riž: 80 g</li><li>Voda: 200 ml</li><li>Začimbe: Sol, poper, rdeča paprika, čebula v prahu</li></ul>", 
        priprava: "<ul><li>Mleto meso začinite in specite v mikrovalovki (5-6 minut). Odlijte maščobo.</li><li>V posodo stresite riž, dodajte vodo, sol in pečeno meso. Premešajte.</li><li>Pokrito kuhajte 10-12 minut.</li></ul>" 
    },
    { 
        ime: "Pasulj iz konzerve s klobaso ali hrenovko", 
        kolicine: "<ul><li>Pasulj iz konzerve: 1 konzerva (cca 400 g)</li><li>Klobasa ali hrenovka: 1 kos</li><li>Začimbe: Poper, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Klobaso ali hrenovko narežite na koleščke.</li><li>V posodi zmešajte pasulj, narezano klobaso/hrenovko in začimbe.</li><li>Pokrito pogrevajte v mikrovalovni pečici 4-5 minut.</li></ul>" 
    },
    { 
        ime: "Piščančja jetrca z dušeno čebulo in rižem", 
        kolicine: "<ul><li>Sveža piščančja jetrca: 200 g</li><li>Čebula: 1/4 kosa</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper, majaron</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Čebulo narežite, jo dajte v posodo z žlico vode in pokrito dušite 2 minuti.</li><li>Dodajte jetrca in začimbe. Pokrito kuhajte 5-6 minut.</li><li>Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Krompirjeva solata s hrenovkami", 
        kolicine: "<ul><li>Krompir: 1 velik</li><li>Hrenovke: 2 kosa</li><li>Čebula: 1/4 kosa (po želji)</li><li>Začimbe: Sol, poper, kis</li></ul>", 
        priprava: "<ul><li>Krompir specite, olupite in narežite na rezine.</li><li>Hrenovke skuhajte in narežite na koleščke.</li><li>V skledi zmešajte topel krompir, hrenovke in čebulo ter začinite.</li></ul>" 
    },
    { 
        ime: "Tortilja 'pizza' s šunko in sirom", 
        kolicine: "<ul><li>Pšenična tortilja: 1 kos</li><li>Paradižnikova mezga: 2 žlici</li><li>Šunka: 2 rezini</li><li>Nariban sir: 30 g</li><li>Začimbe: Origano</li></ul>", 
        priprava: "<ul><li>Tortiljo položite na krožnik, premažite z mezgo.</li><li>Obložite s šunko in sirom, potresite z origanom.</li><li>Pecite v mikrovalovki 1-2 minuti.</li></ul>" 
    },
    { 
        ime: "Mleto meso v smetanovi omaki s pire krompirjem", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Kisla smetana: 100 g</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper, peteršilj</li></ul>", 
        priprava: "<ul><li>Pripravite pire krompir.</li><li>Mleto meso začinite in specite (5-6 minut).</li><li>Primešajte mu kislo smetano in peteršilj.</li><li>Postrezite s pirejem.</li></ul>" 
    },
    { 
        ime: "Zapečen riž s šunko in sirom", 
        kolicine: "<ul><li>Kuhan riž (ostanek): 150 g</li><li>Šunka: 2 rezini (50 g)</li><li>Nariban sir: 40 g</li><li>Jajce: 1 kos</li><li>Začimbe: Sol, poper, muškatni orešček</li></ul>", 
        priprava: "<ul><li>Šunko narežite na koščke.</li><li>V posodi zmešajte riž, šunko, večino sira in razžvrkljano jajce. Začinite.</li><li>Po vrhu potresite preostanek sira in pecite 3-4 minute.</li></ul>" 
    },
    { 
        ime: "Svinjska vratovina v omaki z rižem", 
        kolicine: "<ul><li>Svinjska vratovina (tanek zrezek): 200 g</li><li>Omaka iz vrečke (npr. lovska)</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Zrezek natrite z začimbami in ga specite v mikrovalovki (6-8 minut).</li><li>Pripravite omako po navodilih in jo prelijte čez zrezek. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Segedin golaž (iz konzerve) s krompirjem", 
        kolicine: "<ul><li>Segedin iz konzerve: 1 manjša konzerva</li><li>Krompir: 1 velik</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovki.</li><li>Segedin pogrejte v mikrovalovki 3-4 minute.</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Polnjene paprike (iz konzerve) s pire krompirjem", 
        kolicine: "<ul><li>Polnjena paprika iz konzerve: 1-2 kosa</li><li>Pire krompir (instant)</li></ul>", 
        priprava: "<ul><li>Pripravite pire krompir.</li><li>Polnjene paprike z omako pogrejte 3-4 minute.</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "'Pastirska pita' iz mikrovalovke", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Zamrznjena mešana zelenjava: 100 g</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Meso začinite in specite. Zelenjavo skuhajte na pari.</li><li>V posodo dajte plast mesa z zelenjavo.</li><li>Prekrijte s pire krompirjem in pecite še 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Piščančji paprikaš s pire krompirjem", 
        kolicine: "<ul><li>Piščančja prsa: 200 g</li><li>Kisla smetana: 100 g</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, sladka rdeča paprika</li></ul>", 
        priprava: "<ul><li>Pripravite pire.</li><li>Piščanca narežite na kocke, zmešajte s papriko, soljo in 2 žlicama vode. Kuhajte pokrito 8-10 minut.</li><li>Vmešajte kislo smetano in postrezite s pirejem.</li></ul>" 
    },
    { 
        ime: "Riž in fižol s klobaso", 
        kolicine: "<ul><li>Riž: 80 g</li><li>Rjav fižol iz konzerve: 150 g</li><li>Klobasa (npr. čajna): 50 g</li><li>Začimbe: Sol, poper, čili</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Klobaso narežite na kocke. Fižol odcedite.</li><li>V kuhan riž vmešajte fižol in klobaso, začinite in pogrejte še minuto.</li></ul>" 
    },
    { 
        ime: "'Slepi' makaroni (z rižem namesto testenin)", 
        kolicine: "<ul><li>Riž: 80 g</li><li>Smetana za kuhanje: 100 ml</li><li>Nariban sir: 40 g</li><li>Začimbe: Sol</li></ul>", 
        priprava: "<ul><li>Riž skuhajte v slani vodi.</li><li>V kuhan riž vmešajte smetano in sir.</li><li>Pogrejte še minuto, da se sir stopi.</li></ul>" 
    },
    { 
        ime: "Mleto meso z jajcem in špinačo", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Zamrznjena kremna špinača: 100 g</li><li>Jajce: 1 kos</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Meso začinite in specite.</li><li>Špinačo pogrejte.</li><li>V skodelici specite jajce (rumenjak prebodite).</li><li>Na krožnik naložite špinačo, nanjo meso in na vrh položite jajce.</li></ul>" 
    },
    { 
        ime: "Pečenice s kislim zeljem in pečenim krompirjem", 
        kolicine: "<ul><li>Surova pečenica: 1-2 kosa</li><li>Kislo zelje (iz kozarca): 200 g</li><li>Krompir: 1 velik</li><li>Začimbe: Poper</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovki (6-8 minut).</li><li>Pečenice večkrat prebodite, jih položite v posodo z 2-3 žlicami vode, pokrijte in kuhajte 6-8 minut.</li><li>Kislo zelje odcedite, začinite s poprom in ga pokrito dušite v mikrovalovki 5-6 minut.</li><li>Postrezite vse skupaj.</li></ul>" 
    },
    { 
        ime: "Krompirjev golaž s hrenovkami", 
        kolicine: "<ul><li>Krompir: 1 velik</li><li>Hrenovke: 2 kosa</li><li>Voda: 200 ml</li><li>Začimbe: Sol, poper, rdeča paprika, kumina</li></ul>", 
        priprava: "<ul><li>Krompir narežite na kocke, hrenovke na koleščke.</li><li>V posodi zmešajte krompir, vodo in začimbe. Pokrito kuhajte 10-12 minut.</li><li>Po potrebi zgostite z žličko moke, vmešane v malo vode. Dodajte hrenovke in kuhajte še 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Svinjski zrezek v gobovi omaki (iz vrečke) z rižem", 
        kolicine: "<ul><li>Svinjski zrezek (tanek): 200 g</li><li>Gobova omaka iz vrečke</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Zrezek začinite in ga specite v mikrovalovki (6-8 minut).</li><li>Pripravite omako po navodilih in jo prelijte čez zrezek. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Piščanec v smetanovi omaki z gobami in pire krompirjem", 
        kolicine: "<ul><li>Piščanec: 200 g</li><li>Gobe iz kozarca: 80 g</li><li>Kisla smetana: 100 g</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper, peteršilj</li></ul>", 
        priprava: "<ul><li>Pripravite pire.</li><li>Piščanca narežite na kocke, začinite in specite (6-8 minut).</li><li>Dodajte odcejene gobe in kislo smetano, potresite s peteršiljem in pogrejte še minuto.</li><li>Postrezite s pirejem.</li></ul>" 
    },
    { 
        ime: "Vratovina s pečeno papriko in pečenim krompirjem", 
        kolicine: "<ul><li>Svinjska vratovina (tanek zrezek): 200 g</li><li>Pečena paprika iz kozarca: 1-2 kosa</li><li>Krompir: 1 velik</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovki.</li><li>Zrezek natrite z začimbami in ga specite.</li><li>Pečeno papriko odcedite in jo postrezite kot prilogo.</li></ul>" 
    },
    { 
        ime: "Rižota s tuno in paradižnikom", 
        kolicine: "<ul><li>Riž: 80 g</li><li>Tuna v lastnem soku: 1 konzerva (80 g)</li><li>Paradižnik: 1/2 kosa</li><li>Začimbe: Sol, poper, bazilika</li></ul>", 
        priprava: "<ul><li>Paradižnik narežite na kocke. Tuno odcedite.</li><li>V posodi zmešajte riž, paradižnik, tuno, začimbe in 160 ml vode.</li><li>Pokrito kuhajte 12-15 minut.</li></ul>" 
    },
    { 
        ime: "Jota (iz konzerve) s klobaso", 
        kolicine: "<ul><li>Jota iz konzerve: 1 konzerva (cca 400 g)</li><li>Klobasa za kuhanje: 1/2 kosa</li></ul>", 
        priprava: "<ul><li>Klobaso narežite na koleščke.</li><li>V posodi zmešajte joto in klobaso.</li><li>Pokrito pogrevajte v mikrovalovni pečici 4-5 minut.</li></ul>" 
    },
    { 
        ime: "Mleto meso, polnjeno v bučke, s paradižnikovo omako", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Bučka: 1/2 večje</li><li>Pasiran paradižnik: 100 ml</li><li>Začimbe: Sol, poper, origano</li></ul>", 
        priprava: "<ul><li>Bučko po dolgem prerežite in izdolbite sredico.</li><li>Mleto meso začinite in z njim napolnite bučko.</li><li>Položite v posodo, prelijte s pasiranim paradižnikom in začinite z origanom.</li><li>Pokrito kuhajte 10-12 minut.</li></ul>" 
    },
    { 
        ime: "Kranjska klobasa z gorčico in pečenim krompirjem", 
        kolicine: "<ul><li>Kranjska klobasa: 1 kos</li><li>Gorčica: 1 velika žlica</li><li>Krompir: 1 velik</li></ul>", 
        priprava: "<ul><li>Krompir specite.</li><li>Klobaso prebodite in jo skuhajte v mikrovalovki (v posodi z malo vode, pokrito, 3-4 minute).</li><li>Postrezite vročo klobaso s krompirjem in gorčico.</li></ul>" 
    },
    { 
        ime: "Gratiniran krompir s slanino in sirom", 
        kolicine: "<ul><li>Krompir: 1 velik</li><li>Slanina v rezinah: 2 rezini</li><li>Nariban sir: 40 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Krompir specite, olupite in narežite na rezine.</li><li>Slanino narežite na koščke.</li><li>V posodi zložite plast krompirja, potresite s slanino in sirom, in ponavljajte.</li><li>Na vrhu naj bo sir. Pecite odkrito 3-4 minute.</li></ul>" 
    },
    { 
        ime: "Piščančja obara z rižem", 
        kolicine: "<ul><li>Piščančja prsa: 150 g</li><li>Zamrznjena jušna zelenjava: 150 g</li><li>Riž: 50 g</li><li>Začimbe: Sol, poper, peteršilj</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke.</li><li>V večjo posodo dajte piščanca, zelenjavo, riž, začimbe in 300 ml vode.</li><li>Pokrito kuhajte 15-20 minut, vmes premešajte.</li></ul>" 
    },
    { 
        ime: "Svinjski paprikaš z rižem", 
        kolicine: "<ul><li>Svinjski zrezek: 200 g</li><li>Kisla smetana: 100 g</li><li>Riž: 80 g</li><li>Začimbe: Sol, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Svinjino narežite na kocke, začinite s soljo in rdečo papriko. Dodajte 2 žlici vode.</li><li>Pokrito kuhajte 8-10 minut. Vmešajte kislo smetano in postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Pečena jajca z gobami in sirom", 
        kolicine: "<ul><li>Jajci: 2 kosa</li><li>Gobe iz kozarca: 50 g</li><li>Nariban sir: 30 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Gobe odcedite in jih razporedite po dnu posode.</li><li>Čez potresite sir, nato ubijte jajca. Prebodite rumenjaka, začinite.</li><li>Pecite 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Rižota z morskimi sadeži (zamrznjenimi)", 
        kolicine: "<ul><li>Riž: 80 g</li><li>Zamrznjeni morski sadeži: 150 g</li><li>Začimbe: Sol, poper, česen v prahu, peteršilj</li></ul>", 
        priprava: "<ul><li>V posodi zmešajte riž, morske sadeže, začimbe in 160 ml vode.</li><li>Pokrito kuhajte 12-15 minut.</li></ul>" 
    },
    { 
        ime: "Vampi po tržaško (iz konzerve) s krompirjem", 
        kolicine: "<ul><li>Vampi iz konzerve: 1 konzerva (cca 300 g)</li><li>Krompir: 1 velik</li></ul>", 
        priprava: "<ul><li>Krompir specite.</li><li>Vampe pogrejte v mikrovalovni pečici 3-4 minute. Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Mleto meso s koruzo in fižolom v 'chili' stilu", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Koruza iz konzerve: 80 g</li><li>Rjav fižol iz konzerve: 80 g</li><li>Pasiran paradižnik: 50 ml</li><li>Začimbe: Sol, čili, kumina, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Meso začinite in specite (5-6 minut).</li><li>Koruzo in fižol odcedite.</li><li>K mesu dodajte koruzo, fižol, pasiran paradižnik in začimbe. Premešajte in pogrejte še 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Piščančja prsa, polnjena s šunko in sirom ('cordon bleu')", 
        kolicine: "<ul><li>Piščančja prsa (tanek zrezek): 200 g</li><li>Rezina šunke: 1 kos</li><li>Rezina sira: 1 kos</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Zrezek potolcite, posolite in popoprajte.</li><li>Nanj položite rezino šunke in sira, nato pa ga prepognite ali zvijte.</li><li>Položite v posodo in pecite v mikrovalovni pečici 8-10 minut, vmes enkrat obrnite.</li></ul>" 
    },
    { 
        ime: "Krompir, polnjen z mleto meso in sirom", 
        kolicine: "<ul><li>Krompir: 1 zelo velik</li><li>Mleto mešano meso: 100 g</li><li>Nariban sir: 30 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Meso začinite in specite (4-5 minut).</li><li>Krompir specite (6-8 minut), ga prerežite in izdolbite del sredice.</li><li>Sredico zmešajte s pečenim mesom in s tem napolnite krompir.</li><li>Po vrhu potresite sir in pecite še 1-2 minuti.</li></ul>" 
    },
    { 
        ime: "Piščančji ražnjiči s papriko in čebulo, postreženi z rižem", 
        kolicine: "<ul><li>Piščanec: 150 g</li><li>Paprika: 1/4 kosa</li><li>Čebula: 1/4 kosa</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Piščanca, papriko in čebulo narežite na kocke.</li><li>Vse skupaj stresite v posodo (brez nabodal), začinite in dodajte 2 žlici vode.</li><li>Pokrito pecite 8-10 minut. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Svinjska rebra (kuhana) s pečenim krompirjem", 
        kolicine: "<ul><li>Kuhana svinjska rebra: 250 g</li><li>Krompir: 1 velik</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Krompir specite.</li><li>Rebra natrite z začimbami in jih pogrejte v mikrovalovni pečici 4-5 minut.</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Mesne kroglice v paradižnikovi omaki s pire krompirjem", 
        kolicine: "<ul><li>Pripravljene mesne kroglice: 150-200 g</li><li>Pasiran paradižnik: 150 ml</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper, origano</li></ul>", 
        priprava: "<ul><li>Pripravite instant pire krompir.</li><li>V posodi zmešajte mesne kroglice, pasiran paradižnik in začimbe.</li><li>Pokrito kuhajte v mikrovalovni pečici 5-7 minut.</li><li>Postrezite pire, prelit z mesnimi kroglicami v omaki.</li></ul>" 
    },
    { 
        ime: "Krompirjeva musaka s hrenovkami", 
        kolicine: "<ul><li>Krompir: 1 velik</li><li>Hrenovke: 2 kosa</li><li>Jajce: 1 kos</li><li>Kisla smetana: 100 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Krompir specite, olupite in narežite na rezine.</li><li>Hrenovke narežite na koleščke.</li><li>V posodo zložite plast krompirja, plast hrenovk in zaključite s krompirjem.</li><li>Razžvrkljajte jajce s kislo smetano, solite, poprajte in prelijte čez musako.</li><li>Pecite odkrito 3-4 minute.</li></ul>" 
    },
    { 
        ime: "Piščančja jetrca v smetanovi omaki z rižem", 
        kolicine: "<ul><li>Sveža piščančja jetrca: 200 g</li><li>Kisla smetana: 100 g</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Jetrca operite, osušite in začinite. Pecite jih pokrita v mikrovalovki 5-6 minut.</li><li>Pečenim jetrcem primešajte kislo smetano in pogrejte še minuto (ne pustite, da zavre).</li><li>Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Gratinirana cvetača s šunko in sirom", 
        kolicine: "<ul><li>Zamrznjena cvetača: 200 g</li><li>Šunka: 2 rezini (50 g)</li><li>Nariban sir: 40 g</li><li>Začimbe: Sol, poper, muškatni orešček</li></ul>", 
        priprava: "<ul><li>Cvetačo skuhajte na pari v mikrovalovki (4-5 min). Odcedite.</li><li>Šunko narežite na koščke.</li><li>V posodi zmešajte cvetačo in šunko. Začinite.</li><li>Po vrhu potresite sir in pecite odkrito 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Bograč (iz konzerve) s krompirjem", 
        kolicine: "<ul><li>Bograč iz konzerve: 1 konzerva (cca 400 g)</li><li>Krompir: 1 velik</li></ul>", 
        priprava: "<ul><li>Krompir specite v mikrovalovni pečici.</li><li>Bograč pogrejte v mikrovalovni pečici 3-4 minute.</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Piščanec z ananasom (iz konzerve) v sladko-kisli omaki", 
        kolicine: "<ul><li>Piščančja prsa: 200 g</li><li>Ananasovi koščki iz konzerve: 100 g</li><li>Sladko-kisla omaka (kupljena): 3-4 žlice</li><li>Začimbe: Sol</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke, posolite in specite (6-8 minut).</li><li>Ananas odcedite.</li><li>Pečenemu piščancu dodajte ananas in sladko-kislo omako. Premešajte in pogrejte še 1-2 minuti. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Pečena jajca s slanino in paradižnikom", 
        kolicine: "<ul><li>Jajci: 2 kosa</li><li>Slanina: 2 rezini</li><li>Paradižnik: 1/2 kosa</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Na dno posode položite rezini slanine. Pecite 1-2 minuti.</li><li>Dodajte narezan paradižnik.</li><li>Čez ubijte jajci, prebodite rumenjaka in začinite.</li><li>Pecite še 1-2 minuti.</li></ul>" 
    },
    { 
        ime: "Mleto meso z dušenim porom in rižem", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Por: 1/4 stebla</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Por narežite in ga z žlico vode dušite v mikrovalovki 2 minuti.</li><li>Dodajte začinjeno mleto meso in pecite še 5-6 minut.</li><li>Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Tuna 'polpeti' s pire krompirjem", 
        kolicine: "<ul><li>Tuna v lastnem soku: 1 konzerva (80 g)</li><li>Jajce: 1 kos</li><li>Krompirjevi kosmiči: 2 žlici</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper, drobnjak</li></ul>", 
        priprava: "<ul><li>Pripravite pire.</li><li>Tuno odcedite, zmešajte z jajcem, kosmiči in začimbami.</li><li>Oblikujte polpete in jih pecite v mikrovalovki 3-4 minute (vmes obrnite).</li><li>Postrezite s pirejem.</li></ul>" 
    },
    { 
        ime: "Svinjski zrezek s pečeno čebulo in krompirjem", 
        kolicine: "<ul><li>Svinjski zrezek (tanek): 200 g</li><li>Čebula: 1/2 kosa</li><li>Krompir: 1 velik</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Specite krompir.</li><li>Zrezek začinite in specite (6-8 minut).</li><li>Čebulo narežite na rezine in jo z žlico vode dušite 3-4 minute.</li><li>Postrezite zrezek s pečeno čebulo in krompirjem.</li></ul>" 
    },
    { 
        ime: "Piščanec z limono in zelišči, postrežen z rižem", 
        kolicine: "<ul><li>Piščančja prsa: 250 g</li><li>Limona: 1/4 kosa</li><li>Riž: 80 g</li><li>Začimbe: Sol, rožmarin, timijan</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Piščanca natrite z začimbami in pokapajte z limoninim sokom.</li><li>Pecite v mikrovalovni pečici 8-10 minut. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Krompirjev 'omlet' s sirom in šunko", 
        kolicine: "<ul><li>Kuhan krompir (ostanek): 150 g</li><li>Jajci: 2 kosa</li><li>Šunka: 1 rezina (25 g)</li><li>Nariban sir: 30 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Kuhan krompir in šunko narežite na kocke.</li><li>V posodi razžvrkljajte jajca, dodajte vse ostale sestavine in premešajte.</li><li>Pecite 3-4 minute, dokler se jajca ne strdijo.</li></ul>" 
    },
    { 
        ime: "Rižota s piščancem in grahom", 
        kolicine: "<ul><li>Piščančja prsa: 150 g</li><li>Riž: 80 g</li><li>Zamrznjen grah: 100 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Piščanca narežite na kocke, začinite in specite (5-6 minut).</li><li>V posodo stresite riž, grah, vodo (160 ml) in sol. Pokrito kuhajte 10-12 minut.</li><li>Vmešajte pečenega piščanca in postrezite.</li></ul>" 
    },
    { 
        ime: "Mleto meso z dušenim korenjem in pire krompirjem", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Korenje: 1 srednje veliko</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Pripravite pire.</li><li>Korenje narežite na kocke, ga dušite 3-4 minute.</li><li>Dodajte začinjeno mleto meso in pecite še 5-6 minut.</li><li>Postrezite s pirejem.</li></ul>" 
    },
    { 
        ime: "Klobasa s fižolovo solato", 
        kolicine: "<ul><li>Kranjska klobasa: 1 kos</li><li>Rjav fižol iz konzerve: 200 g</li><li>Čebula: 1/4 kosa</li><li>Začimbe: Sol, poper, kis</li></ul>", 
        priprava: "<ul><li>Klobaso skuhajte v mikrovalovki (3-4 min).</li><li>Fižol odcedite, mu dodajte narezano čebulo in začinite.</li><li>Postrezite toplo klobaso s hladno fižolovo solato.</li></ul>" 
    },
    { 
        ime: "Gratiniran brokoli s sirom in slanino", 
        kolicine: "<ul><li>Zamrznjen brokoli: 200 g</li><li>Slanina: 2 rezini</li><li>Nariban sir: 40 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Slanino specite, da postane hrustljava, in jo narežite.</li><li>Brokoli skuhajte na pari (3-4 minute) in odcedite.</li><li>Zmešajte brokoli s slanino, potresite s sirom in pecite 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Piščančji ragu z zelenjavo in rižem", 
        kolicine: "<ul><li>Piščanec: 150 g</li><li>Mešana zelenjava: 150 g</li><li>Paradižnikova mezga: 100 ml</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Piščanca narežite na kocke.</li><li>V posodi zmešajte piščanca, zelenjavo, mezgo in začimbe.</li><li>Pokrito kuhajte 10-12 minut. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Svinjska vratovina z dušenim kislim zeljem", 
        kolicine: "<ul><li>Svinjska vratovina (tanek zrezek): 200 g</li><li>Kislo zelje (iz kozarca): 200 g</li><li>Začimbe: Poper, kumina</li></ul>", 
        priprava: "<ul><li>Zrezek začinite in specite v mikrovalovki.</li><li>Kislo zelje odcedite, začinite in ga pokrito dušite 5-6 minut.</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Pečena jajca s tuno in čebulo", 
        kolicine: "<ul><li>Jajci: 2 kosa</li><li>Tuna v olju: 1/2 konzerve</li><li>Čebula: 1/4 majhne čebule</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Čebulo sesekljajte. Tuno odcedite.</li><li>V posodo dajte čebulo in tuno.</li><li>Čez ubijte jajci, prebodite rumenjaka in začinite.</li><li>Pecite 2-3 minute.</li></ul>" 
    },
    { 
        ime: "'Sataraš' s klobaso in rižem", 
        kolicine: "<ul><li>Klobasa (npr. čajna): 50 g</li><li>Paprika: 1/2 kosa</li><li>Paradižnik: 1/2 kosa</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Klobaso, papriko in paradižnik narežite na kocke.</li><li>Vse skupaj dušite 8-10 minut z 2 žlicama vode.</li><li>Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Piščanec v gorčični omaki s pire krompirjem", 
        kolicine: "<ul><li>Piščančja prsa: 200 g</li><li>Gorčica: 1 velika žlica</li><li>Kisla smetana: 100 g</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Pripravite instant pire krompir.</li><li>Piščanca narežite na kocke, začinite in specite (6-8 minut).</li><li>V skodelici zmešajte gorčico in kislo smetano.</li><li>Omako prelijte čez pečenega piščanca, premešajte in pogrejte še minuto.</li><li>Postrezite s pirejem.</li></ul>" 
    },
    { 
        ime: "Mleto meso z jajčevci in paradižnikovo omako", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Jajčevec: 1/4 kosa</li><li>Pasiran paradižnik: 150 ml</li><li>Začimbe: Sol, poper, bazilika</li></ul>", 
        priprava: "<ul><li>Jajčevec narežite na kocke, posolite in pustite stati, nato popivnajte tekočino.</li><li>Mleto meso začinite in specite (5-6 minut).</li><li>Mesu dodajte kocke jajčevca, pasiran paradižnik in baziliko. Pokrito kuhajte še 6-8 minut.</li><li>Postrezite samo ali z rižem.</li></ul>" 
    },
    { 
        ime: "Krompir, pečen s čebulo in slanino", 
        kolicine: "<ul><li>Krompir: 1 velik</li><li>Slanina: 2 rezini</li><li>Čebula: 1/4 kosa</li><li>Začimbe: Sol, poper, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Slanino in čebulo narežite in ju pecite v mikrovalovki 3-4 minute.</li><li>Krompir narežite na kocke, ga dodajte k slanini in čebuli.</li><li>Začinite, premešajte in pokrito pecite 10-12 minut.</li></ul>" 
    },
    { 
        ime: "Piščančja prsa z gobovo omako in rižem", 
        kolicine: "<ul><li>Piščančja prsa: 250 g</li><li>Gobova omaka iz vrečke</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper, peteršilj</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Piščanca začinite in specite (8-10 minut).</li><li>Pripravite omako po navodilih.</li><li>Pečenega piščanca prelijte z omako in postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Svinjski zrezek v pivski omaki z rižem", 
        kolicine: "<ul><li>Svinjski zrezek (tanek): 200 g</li><li>Jušna osnova ali voda: 100 ml</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Zrezek začinite in specite (6-8 minut). Shranite sok od peke.</li><li>V skodelici zmešajte sok od peke, jušno osnovo in žličko moke. Kuhajte 1-2 minuti, da se zgosti.</li><li>Prelijte čez zrezek in postrezite.</li></ul>" 
    },
    { 
        ime: "Rižota s klobaso in papriko", 
        kolicine: "<ul><li>Riž: 80 g</li><li>Klobasa (npr. čajna): 50 g</li><li>Paprika: 1/2 kosa</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Klobaso in papriko narežite na kocke.</li><li>V posodi zmešajte riž, klobaso, papriko, začimbe in 160 ml vode.</li><li>Pokrito kuhajte 12-15 minut.</li></ul>" 
    },
    { 
        ime: "Pečena jajca s feta sirom in špinačo", 
        kolicine: "<ul><li>Jajci: 2 kosa</li><li>Zamrznjena špinača: 100 g</li><li>Feta sir: 30 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Špinačo segrejte v mikrovalovki (2-3 min) in odcedite.</li><li>Na dno posode razporedite špinačo in nadrobite feto.</li><li>Čez ubijte jajca, prebodite rumenjaka in začinite.</li><li>Pecite še 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Piščanec s papriko in kislo smetano", 
        kolicine: "<ul><li>Piščanec: 200 g</li><li>Paprika: 1/2 kosa</li><li>Kisla smetana: 100 g</li><li>Začimbe: Sol, rdeča paprika</li></ul>", 
        priprava: "<ul><li>Piščanca in svežo papriko narežite na kocke.</li><li>Zmešajte s soljo in rdečo papriko.</li><li>Pokrito kuhajte v mikrovalovki 8-10 minut.</li><li>Na koncu vmešajte kislo smetano.</li></ul>" 
    },
    { 
        ime: "Mleto meso z ohrovtom in krompirjem", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Zamrznjen ohrovt: 150 g</li><li>Krompir: 1 velik</li><li>Začimbe: Sol, poper, česen v prahu</li></ul>", 
        priprava: "<ul><li>Specite krompir.</li><li>Mleto meso začinite in specite (5-6 minut).</li><li>Ohrovt skuhajte na pari z malo vode in soli (4-5 minut).</li><li>Postrezite vse skupaj.</li></ul>" 
    },
    { 
        ime: "Svinjska vratovina z jabolki in pečenim krompirjem", 
        kolicine: "<ul><li>Svinjska vratovina (tanek zrezek): 200 g</li><li>Jabolko: 1/2 kosa</li><li>Krompir: 1 velik</li><li>Začimbe: Sol, poper, cimet</li></ul>", 
        priprava: "<ul><li>Specite krompir.</li><li>Zrezek natrite s soljo in poprom ter ga specite.</li><li>Jabolko narežite na rezine, posujte s cimetom in zmehčajte v mikrovalovki (1-2 minuti).</li><li>Postrezite skupaj.</li></ul>" 
    },
    { 
        ime: "Krompirjeva solata s tuno in fižolom", 
        kolicine: "<ul><li>Krompir: 1 velik</li><li>Tuna v lastnem soku: 1 konzerva (80 g)</li><li>Rjav fižol iz konzerve: 100 g</li><li>Začimbe: Sol, poper, kis</li></ul>", 
        priprava: "<ul><li>Krompir specite, olupite in narežite na kocke.</li><li>Tuno in fižol odcedite.</li><li>V skledi zmešajte še topel krompir, tuno in fižol. Začinite.</li></ul>" 
    },
    { 
        ime: "Piščančji 'gyros' s pečenim krompirjem in jogurtovo omako", 
        kolicine: "<ul><li>Piščanec: 200 g</li><li>Krompir: 1 velik</li><li>Navadni jogurt: 100 g</li><li>Začimbe: Sol, poper, origano, česen v prahu</li></ul>", 
        priprava: "<ul><li>Specite krompir.</li><li>Piščanca narežite na tanke trakove, začinite in specite (6-8 minut).</li><li>V skodelici zmešajte jogurt s ščepcem soli in česna za omako.</li><li>Postrezite meso in krompir, prelito z omako.</li></ul>" 
    },
    { 
        ime: "Mesne kroglice v smetanovi omaki s pire krompirjem", 
        kolicine: "<ul><li>Pripravljene mesne kroglice: 150-200 g</li><li>Kisla smetana: 100 g</li><li>Pire krompir (instant)</li><li>Začimbe: Sol, poper, peteršilj</li></ul>", 
        priprava: "<ul><li>Pripravite pire.</li><li>Mesne kroglice specite ali pogrejte.</li><li>Primešajte jim kislo smetano in peteršilj ter pogrejte še minuto.</li><li>Postrezite s pirejem.</li></ul>" 
    },
    { 
        ime: "Rižota s piščančjimi jetrci in gobami", 
        kolicine: "<ul><li>Riž: 80 g</li><li>Sveža piščančja jetrca: 150 g</li><li>Gobe iz kozarca: 80 g</li><li>Začimbe: Sol, poper, majaron</li></ul>", 
        priprava: "<ul><li>Jetrca operite, narežite in začinite. Pecite jih 5-6 minut.</li><li>Gobe odcedite.</li><li>V posodi zmešajte riž, pečena jetrca, gobe, začimbe in 160 ml vode.</li><li>Pokrito kuhajte 12-15 minut.</li></ul>" 
    },
    { 
        ime: "Gratiniran krompir s piščancem in brokolijem", 
        kolicine: "<ul><li>Krompir: 1 velik</li><li>Piščanec: 150 g</li><li>Zamrznjen brokoli: 100 g</li><li>Nariban sir: 40 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Krompir specite in narežite. Piščanca specite. Brokoli skuhajte.</li><li>V posodo zložite plasti sestavin, potresite s sirom in ponavljajte.</li><li>Na vrhu naj bo sir. Pecite odkrito 3-4 minute.</li></ul>" 
    },
    { 
        ime: "Svinjska rebra v paradižnikovi omaki z rižem", 
        kolicine: "<ul><li>Kuhana svinjska rebra: 200 g</li><li>Pasiran paradižnik: 150 ml</li><li>Riž: 80 g</li><li>Začimbe: Sol, poper, bazilika</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>V posodi zmešajte rebra, pasiran paradižnik in začimbe.</li><li>Pokrito pogrevajte 5-6 minut. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Pečena jajca z ostanki pečenega mesa", 
        kolicine: "<ul><li>Jajci: 2 kosa</li><li>Ostanki pečenega mesa: 100 g</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Meso narežite na koščke in ga razporedite po dnu posode.</li><li>Čez ubijte jajci, prebodite rumenjaka in začinite.</li><li>Pecite 2-3 minute.</li></ul>" 
    },
    { 
        ime: "Piščanec v arašidovi omaki (iz arašidovega masla) z rižem", 
        kolicine: "<ul><li>Piščanec: 200 g</li><li>Arašidovo maslo: 1 velika žlica</li><li>Voda: 3-4 žlice</li><li>Riž: 80 g</li><li>Začimbe: Sol, čili</li></ul>", 
        priprava: "<ul><li>Skuhajte riž.</li><li>Piščanca narežite na kocke, posolite in specite.</li><li>V skodelici gladko zmešajte arašidovo maslo, vodo in čili.</li><li>Omako prelijte čez piščanca in pogrejte. Postrezite z rižem.</li></ul>" 
    },
    { 
        ime: "Mleto meso z rižem in lečo (iz konzerve)", 
        kolicine: "<ul><li>Mleto mešano meso: 150 g</li><li>Riž: 80 g</li><li>Leča iz konzerve: 100 g</li><li>Začimbe: Sol, poper, kumina</li></ul>", 
        priprava: "<ul><li>Meso začinite in specite. Lečo odcedite.</li><li>V posodi zmešajte riž, pečeno meso, lečo, začimbe in 160 ml vode.</li><li>Pokrito kuhajte 12-15 minut.</li></ul>" 
    },
    { 
        ime: "Klobasa, pečena s sirom in gorčico, s pečenim krompirjem", 
        kolicine: "<ul><li>Klobasa za kuhanje: 1 kos</li><li>Gorčica: 1 čajna žlička</li><li>Sir v lističih: 1 listič</li><li>Krompir: 1 velik</li><li>Začimbe: Sol, poper</li></ul>", 
        priprava: "<ul><li>Specite krompir.</li><li>Klobaso skuhajte (3-4 min), jo po dolgem prerežite.</li><li>Premažite z gorčico in pokrijte s sirom.</li><li>Pecite še minuto, da se sir stopi. Postrezite s krompirjem.</li></ul>" 
    }
];
