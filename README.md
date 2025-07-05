# Generator Naključnih Obrokov

Preprosta spletna aplikacija za generiranje naključnih predlogov za predjedi in glavne jedi, zasnovana za hitro in enostavno kuhanje z mikrovalovno pečico. Aplikacija je idealna za iskanje hitrega navdiha za obrok in je prilagojena za uporabo na mobilnih napravah kot "spletna aplikacija".

## Funkcionalnosti

* **Naključni predlogi:** Z enim klikom dobite naključno kombinacijo predjedi in glavne jedi.
* **Ločeno osveževanje:** Možnost osvežitve samo predjedi ali samo glavne jedi, ne da bi se zamenjal celoten obrok.
* **Podrobna navodila:** Vsak recept vključuje seznam sestavin in navodila za pripravo po korakih.
* **Pripravljeno za mobilne naprave (PWA):** Aplikacijo je mogoče "namestiti" na domači zaslon telefona za hitrejši dostop in izkušnjo, podobno nativni aplikaciji.
* **Enostavno prilagajanje:** Vsi recepti so shranjeni v eni, ločeni datoteki (`recepti.js`), kar omogoča enostavno dodajanje in urejanje.

## Struktura Projekta

Projekt sestavljajo tri glavne datoteke, ki morajo biti v isti mapi:

1.  `index.html`: Glavna datoteka, ki vsebuje strukturo in obliko spletne strani ter logiko za prikazovanje receptov.
2.  `recepti.js`: Baza podatkov z vsemi recepti. **To je edina datoteka, ki jo morate urejati za dodajanje novih jedi.**
3.  `manifest.json`: Konfiguracijska datoteka, ki omogoča, da se spletna stran obnaša kot aplikacija na mobilnih napravah (npr. da ima svojo ikono in se zažene v celozaslonskem načinu).

## Kako Uporabljati

1.  **Lokalna uporaba:** Prenesite vse tri datoteke (`index.html`, `recepti.js`, `manifest.json`) v isto mapo na vašem računalniku. Odprite datoteko `index.html` v katerem koli spletnem brskalniku (npr. Chrome, Firefox, Edge).
2.  **Gostovanje (npr. GitHub Pages):** Naložite vse tri datoteke v GitHub repozitorij. V nastavitvah repozitorija omogočite GitHub Pages in vaša aplikacija bo dostopna na spletu.

### Dodajanje Novih Receptov

Če želite dodati nov recept:
1.  Odprite datoteko `recepti.js` v urejevalniku besedila.
2.  Poiščite seznam, ki ga želite dopolniti (`const predjedi` ali `const glavneJedi`).
3.  Na konec seznama (pred `];`) dodajte nov objekt po naslednjem vzorcu. Ne pozabite na vejico (`,`) za prejšnjim receptom!

```javascript
    { 
        ime: "Ime Vaše Nove Jedi", 
        kolicine: "<ul><li>Sestavina 1</li><li>Sestavina 2</li></ul>", 
        priprava: "<ul><li>Korak 1 priprave.</li><li>Korak 2 priprave.</li></ul>",
        image: "[https://url-do-vase-slike.com/slika.jpg](https://url-do-vase-slike.com/slika.jpg)" // Ta vrstica ni obvezna
    },
```

### Namestitev na Telefon

Na mobilni napravi (Android/iOS) odprite spletno stran v brskalniku (npr. Chrome). V meniju brskalnika poiščite možnost **"Dodaj na začetni zaslon"** (Add to Home Screen) ali **"Namesti aplikacijo"** (Install App). Na domačem zaslonu se bo pojavila ikona za hiter dostop.

---
*Ta projekt je bil ustvarjen za osebno uporabo in lažje načrtovanje obrokov.*
