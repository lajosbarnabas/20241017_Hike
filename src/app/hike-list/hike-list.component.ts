import { Component } from '@angular/core';
import { ChallengeModel } from '../models/hike.model';

@Component({
  selector: 'app-hike-list',
  templateUrl: './hike-list.component.html',
  styleUrl: './hike-list.component.css',
})
export class HikeListComponent {
  detailsButton(challenges: ChallengeModel){
    
  }

  challenges: ChallengeModel[] = [
    {
      name: 'Írottkő - 50 / 35 / 20',
      from: 'Kőszeg, Petőfi tér 14/A',
      date: '2024 október 19. 06:00 - 20:00',
      image: 'images/irottko.png',
      info: [
        'A túrákra mindenki a helyszínen nevezhet, előnevezési lehetőség nincs.',
        'Kérünk minden túrázót, hogy saját poharat hozzon magával.',
        'Szállásfoglalás egyénileg.',
        'Térkép: Irottkő Geschriebenstein Naturpark Turistatérkép, Kőszegi hegység turistatérképe.',
      ],
      distances: [
        {
          name: 'Írottkő 50',
          distance: 50.12,
          fee: 2200,
          level: 1898,
          maxtime: 13,
        },
        {
          name: 'Írottkő 35',
          distance: 34.05,
          fee: 2000,
          level: 1110,
          maxtime: 10,
        },
        {
          name: 'Írottkő 20',
          distance: 24.74,
          fee: 1500,
          level: 687,
          maxtime: 6,
        },
      ],
    },
    {
      name: 'Sebes Pisztráng Teljesítménytúra Szilvásvárad',
      from: 'Szilvásváradi Szociális Szolgáltató Központ - 3348 Szilvásvárad Miskolci út 7',
      date: '2024. október 19. 06:30 - 20:00',
      image: 'images/sebes-pisztrang.jpg',
      info: [
        'Örömmel értesítjük a Kedves Túratársainkat, hogy 2024. október 19-én, szombaton megrendezzük a 6. Sebes Pisztráng Teljesítménytúrát. Célunk a régi: felhívni sokak figyelmét a Bükk-hegység csodáira, a mozgás örömére és a kikapcsolódás egyre népszerűbb formájára. Kitartunk az eredeti ötletünk mellett, igyekszünk évről évre változatos távokat kijelölni. ',
      ],
      distances: [
        {
          name: 'Sebes Pisztráng 30 km',
          distance: 29.7,
          fee: 4000,
          level: 930,
          maxtime: 9,
        },
        {
          name: 'Sebes Pisztráng 20 km',
          distance: 21.6,
          fee: 3000,
          level: 800,
          maxtime: 7,
        },
        {
          name: 'Némó nyomában 10 km',
          distance: 10.6,
          fee: 1500,
          level: 270,
          maxtime: 4,
        },
      ],
    },
    {
      name: 'Pilisi Forradalmi - Maraton / Félmaraton / Maratonka',
      from: 'Leányfalu, Móricz Zsigmond út 140. (Parkoló)',
      date: '2024. október 23. 07:00 - 20:00',
      image: 'images/pilisi-forradalmi.png',
      info: [
        'A túra általában végig jelzett turistaúton halad, a rajtnál minden távhoz szöveges itinert, és térképet adunk.',
        'A túra az alábbi kupamozgalom része: Pilis – Visegrádi hegység Kupa',
      ],
      distances: [
        {
          name: 'Maraton',
          distance: 42,
          fee: 2900,
          level: 1399,
          maxtime: 12,
        },
        {
          name: 'Félmaraton',
          distance: 21.68,
          fee: 2600,
          level: 825,
          maxtime: 6,
        },
        {
          name: 'Maratonka',
          distance: 10,
          fee: 2400,
          level: 292,
          maxtime: 3,
        },
      ],
    },
    {
      name: 'I. Szénás 50 éjszakai teljesítménytúra - Szénás 50 éjszakai',
      from: 'Pilisszántó, Kék Ház - 2095 Pilisszántó Kossuth Lajos utca',
      date: '2024. október 25 18:00 - 2024. október 26. 08:00',
      image: 'images/szanto-50.png',
      info: [
        'JUBILEUMI RENDEZÉS: A 3 X 50 TELJESÍTMÉNYTÚRA 20. RENDEZÉSE ÉS A SZÁNTÓ 50 TELJESÍTMÉNYTÚRA ELSŐ RENDEZÉSÉNEK 25. ÉVFORDULÓJA ALKALMÁBÓL.',
      ],
      distances: [
        {
          name: 'Szénás 50 éjszakai',
          distance: 53.4,
          fee: 5000,
          level: 1716,
          maxtime: 13,
        },
      ],
    },
    {
      name: 'XII. Szántó teljesítménytúrák - Szántó 50 / Szántó Maraton / Szántó 30 / Szántó Félmaraton / Szántó 15 / Szántó 10',
      from: 'Pilisszántó, Kék Ház - 2095 Pilisszántó Kossuth Lajos utca',
      date: '2024. október 26. 07:00 - 23:00',
      image: 'images/szanto-50-maraton-30.png',
      info: [
        'Ajánlott felszerelés: bejáratott bakancs vagy túracipő, íróeszköz, esőkabát, világítóeszköz tartalék elemmel vagy akkumulátorral. Kérjük, hogy saját poharat / bögrét mindenki hozzon magával! ',
        'A teljesítménytúra a Duna-Ipoly Nemzeti Park területén vezet, ezért fokozottan figyeljünk a természet és a környezet óvására, védelmére! A Pilisi Parkerdőgazdaság Zrt. jelzett turistaútjain haladó résztvevők csodálatos tájképi élményben részesülnek a túra folyamán. ',
        'A teljesítménytúra része a Barangolás a Dunazugban nevű teljesítménytúra-mozgalomnak.',
      ],
      distances: [
        {
          name: 'Szántó 50',
          distance: 52.12,
          fee: 6500,
          level: 2048,
          maxtime: 13,
        },
        {
          name: 'Szántó Maraton',
          distance: 43.71,
          fee: 6500,
          level: 1644,
          maxtime: 11,
        },
        {
          name: 'Szántó 30',
          distance: 29.6,
          fee: 5000,
          level: 1082,
          maxtime: 9,
        },
        {
          name: 'Szántó Félmaraton',
          distance: 22.12,
          fee: 5000,
          level: 688,
          maxtime: 6,
        },
        {
          name: 'Szántó 15',
          distance: 14.97,
          fee: 3500,
          level: 564,
          maxtime: 5,
        },
        {
          name: 'Szántó 10',
          distance: 9.84,
          fee: 3500,
          level: 349,
          maxtime: 4,
        },
      ],
    },
    {
      name: 'I. Szántó 200 teljesítménytúra - Szántó 200',
      from: 'I. Szántó 200 teljesítménytúra - Szántó 200',
      date: '2024. október 25. 18:00 - 2024. október 28. 00:00',
      image: 'images/szanto-200.png',
      info: [
        'JUBILEUMI RENDEZÉS: A 3 X 50 TELJESÍTMÉNYTÚRA 20. RENDEZÉSE ÉS A SZÁNTÓ 50 TELJESÍTMÉNYTÚRA ELSŐ RENDEZÉSÉNEK 25. ÉVFORDULÓJA ALKALMÁBÓL KERÜL MEGRENDEZÉSRE AZ I. SZÁNTÓ 200 ULTRATÁVÚ TELJESÍTMÉNYTÚRA',
      ],
      distances: [
        {
          name: 'Szántó 200',
          distance: 203.7,
          fee: 23000,
          level: 7381,
          maxtime: 55,
        },
      ],
    },
    {
      name: 'Colonia Savaria - 42 / 30 / 20 / 10 / 5 / Pinka 10',
      from: 'Oladi Katolikus Közösségi Ház - 9700 Szombathely Márton Áron utca 55.',
      date: '2024. október 26. 07:00 - 19:00',
      image: 'images/colonia-savaria.png',
      info: [
        'Szombathely, Dozmat vagy akár a Pinka-szurdok és a Vas-hegy legszebb vidékét járhatod be egy kellemes őszi napon. Az esemény neve, a Colonia Savaria tisztelgés a város kétezer éves történelme előtt. Öt távon mutatjuk be a környék nevezetességeit és szép tájait, látnivalóit. Lehet sétálni, kirándulni – de tempósan túrázni vagy futni is! ',
        'Mind az öt útvonal Szombathely nyugati részéről, Oladról indul, és – körtúra lévén – oda is térnek vissza.',
      ],
      distances: [
        {
          name: 'Colonia Savaria 42',
          distance: 43.9,
          fee: 3000,
          level: 839,
          maxtime: 11,
        },
        {
          name: 'Colonia Savaria 30',
          distance: 30,
          fee: 2400,
          level: 559,
          maxtime: 8,
        },
        {
          name: 'Colonia Savaria 20',
          distance: 22.5,
          fee: 2100,
          level: 384,
          maxtime: 6,
        },
        {
          name: 'Colonia Savaria 10',
          distance: 11.6,
          fee: 1800,
          level: 136,
          maxtime: 5,
        },
        {
          name: 'Colonia Savaria 5',
          distance: 5.9,
          fee: 1500,
          level: 102,
          maxtime: 3,
        },
        {
          name: 'Colonia Savaria Pinka 10',
          distance: 11.6,
          fee: 1800,
          level: 336,
          maxtime: 5,
        },
      ],
    },
    {
      name: 'Bükki Vándor - 12 hónap a Bükkben - október (Kazincbarcika)',
      from: 'Bükki Vándor - 12 hónap a Bükkben - október (Kazincbarcika)',
      date: '2024. október 26. 07:00 - 17:00',
      image: 'images/bukki-vandor.png',
      info: [
        'Bükki Vándor teljesítménytúráinkat, az év minden hónapjában más-más helyszínen tartjuk a Bükk-hegységben. ',
        'Minden hónapban két távon, 15 és 25 kilométeren várjuk a túrázókat. ',
        'A távok nem csak gyalogos, hanem futótávok is egyben.',
      ],
      distances: [
        {
          name: 'Bükki Vándor - 15 km',
          distance: 15,
          fee: 2500,
          level: 328,
          maxtime: 5,
        },
        {
          name: 'Bükki Vándor - 25 km',
          distance: 25,
          fee: 2500,
          level: 611,
          maxtime: 7,
        },
      ],
    },
    {
      name: 'Mecsek - 1800 / 1500 / 1000 / 700 / 400',
      from: 'Hosszúhetény, Fő u. 154. - Tavasz Vendéglő',
      date: '2024. október 26. 07:00 - 17:00',
      image: 'images/mecsek.png',
      info: [
        '2024-ben ismét találkozhatunk klasszikus őszi mecseki teljesítménytúránkon. A túra 5 résztávja Mecsek legmagasabb csúcsa, a Zengő felkeresése mellett további csodás kilátópontok és völgyek érintésével barangolja be a Keleti-Mecsek legszebb részeit. ',
        'A rajt és cél – mint régen – idén is Hosszúhetényben, a Hangulat étteremben lesz. ',
        'Előnevezés nem kötelező, de minden előnevező kedvezményt kap a nevezési díjból.',
      ],
      distances: [
        {
          name: 'Mecsek 1800',
          distance: 39.7,
          fee: 4000,
          level: 1705,
          maxtime: 10,
        },
        {
          name: 'Mecsek 1500',
          distance: 33.55,
          fee: 4000,
          level: 1450,
          maxtime: 8.5,
        },
        {
          name: 'Mecsek 1000',
          distance: 25.75,
          fee: 4000,
          level: 980,
          maxtime: 7.5,
        },
        {
          name: 'Mecsek 700',
          distance: 17.85,
          fee: 3500,
          level: 680,
          maxtime: 5,
        },
        {
          name: 'Mecsek 400',
          distance: 10.2,
          fee: 3000,
          level: 410,
          maxtime: 4,
        },
      ],
    },
    {
      name: '17. Continental ErdőtisztítóTúranap és Terepfutás',
      from: 'Csillaghegyi Általános Iskola - 1038 Budapest Dózsa György utca 42.',
      date: '2024. október 26. 08:15 - 16:30',
      image: 'images/continental.png',
      info: [
        'A Continental Erdőtisztító Túranap és Terepfutás résztvevői sok lépéssel tehetnek a kisebb lábnyomért: lehetőségük lesz a túra során az erdőben szemetet szedni, majd az összegyűjtött hulladékot a kihelyezett gyűjtőpontokon leadni, ehhez is hozzájárulva egy tisztább és élhetőbb környezet megteremtéséhez. ',
        'Az útvonalon látnivalóban nincs hiány, csodás kilátás a Nagy-Kevélyen, őszi hangulat a Szentkút környékén, történelmi kulisszák az Egri várnál.',
      ],
      distances: [
        {
          name: '17. Continental Erdőtisztító Túranap és Terepfutás 31 km',
          distance: 31,
          fee: 4000,
          level: 1139,
          maxtime: 9,
        },
        {
          name: '17. Continental Erdőtisztító Túranap és Terepfutás 21 km',
          distance: 21,
          fee: 4000,
          level: 776,
          maxtime: 7,
        },
        {
          name: '17. Continental Erdőtisztító Túranap és Terepfutás 9 km',
          distance: 9,
          fee: 4000,
          level: 289,
          maxtime: 4,
        },
      ],
    },
  ];
}
