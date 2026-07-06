const hotels = [
  {
    "id":1,
    slug: "rosetti-hotel",
    "img": `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/rosetti-hotel.webp`,
    "nume": "ROSETTI Hotel",
    "locatie": "Strada Maria Rosetti 4, Sector 2, 020485 București, România",
    stareActivareHotel: false,
    favoriteHotel: true,
    rating: [
      {
        nrStele: 5,
        procent: "93%",
        procent1: "w-[93%]"
      },
      {
        nrStele: 4,
        procent: "7%",
        procent1: "w-[7%]"
      },
      {
        nrStele: 3,
        procent: "3%",
        procent1: "w-[3%]"
      },
      {
        nrStele: 2,
        procent: "0%",
        procent1: "w-[0%]"
      },
      {
        nrStele: 1,
        procent: "0%",
        procent1: "w-[0%]"
      }
    ],
    "nrRecenzie": 4.4,
    "textRecenzie": "1.245 recenzii",
    "facilitate": "Wi-fi gratuit",
    "facilitate1": "Parcare gratuita",
    "anulareGratuita": "Anulare gratuita",
    "dataAnulare": "Pana la 24 mai 2024",

    
    
    descriere: "Situat pe insula Male din Maldive, Maldives Paradise Resort ofera o experienta de neuitat pentru oaspeti combinand luxul absolut cu frumusetea naturala a lagunei cristaline. Resortul se mandreste cu o gama completa de facilitati: piscina infinita, spa & qwllness complet echipat, sali de fitness. activitati acvatice precum snorkeling si scuba divinig. Pentru cei care doresc experiente gastronomice de exceptie, restaurantul principal serveste preprarate internationale si locale, preparate din ingrediente proaspete, alaturi de optiuni personalizate pentru mese. Oaspetii beneficiaza de servicii exclusive, inclusiv de room service. Resortul este proiectat pentru confort maxim si intimitate, cu camere spatioase, elegante si tehnologii moderne, inclusiv WI-Fi gratuit si minibar. Indiferent daca alegi sa te relaxezi pe plaja, sa explorezi recifurile de corali sau sa savurezi o cina romantica sub cerul tropical, Maldive Paradise REsort ofera cadrul perfect pentru vacante memorabile fie ca este vorba de o escapada romantica, o aventura in familie sau o experienta de lux personalizata.",

    facilitati: [
      {
        
        "nume": "Piscina si wellness",
        facilitate: ["Piscina in aer liber","Piscina infinita","psicina pentru copii","Spa & wellness","Masaj","Sauna","Sala de Fitness","Sezlonguri si umbrele"]
      },
      {
        "nume": "Internet",
        facilitate: ["Wi-Fi gratuit in toate zonele","Interne de mare viteza","Wi-Fi in camera"]
      },
      { 
        "nume": "Mancare si bauturi",
        facilitate: ["Restaurant","Bar","Room Service","Mic dejun in camera","Snack bar", "Meniuri cu oferte speciale (la cerere)"]
      },
      {
        "nume": "Transport",
        facilitate: ["Transfer aeroport","Inchiriere biciclete","Serviciu de transfer","Parcare gratuita"]
      },
      {
        "nume": "Facilitati camera",
        facilitate: ["Aer conditionat","s", "TV inteligent","Minibar","Seif","Uscator de par","Masina de cafea","Halat de baie si papuci","Balcon/terasa"]
      },
      {
        "nume": "Servicii si receptie",
        facilitate: ["Receptie 24/7","Check-in/ Check-out privat","Depozit de bagaje","Schimb valutar","Serviciu de ","Menaj zilnic","Spalatorie/Caratatorie"]
      },
      {
        "nume": "Divertisment",
        facilitate: ["Activitati acvatice","Snokerling","Scufundari","Canoe","Divertismen de seara","Club pentru copii","Jocuri si puzzle-uri"]
      },
      {
        "nume": "Facilitati business",
        facilitate: ["Sali de conferinta","Fax/Copiere","Business centre"]
      },
    ],
    politici: [
      {
        nume: "Check-In / Check-Out",
        icon: "Calendar",
        politica: ["Check-in: de la 14.", "Check-Out: pana la 00:00.", "Te rugam sa prezinti un document de identitate cu fotografie si cardul de credit la check-in."]
      },
      {
        nume: "Anulare / Modificare",
        icon: "Star",
        politica: ["Anulare gratuita pana la 19 Mai, ora 19:00 (ora locala).", "Pentru anulari dupa aceasta data sau neprezentare, se va percepe 100% din valoarea rezervarii."]
      },
      {
        nume: "Plata si garantie",
        icon: "Card",
        politica: ["Plata se face online la momentul rezervarii.", "Hotelul poate autoriza cardul tau cu o suma pentru garantie, care va fi eliberata la check-out."]
      },
      {
        nume: "Politica pentru copii",
        icon: "Child",
        politica: ["Copii de toate varstele sunt bine veniti.","Copii cu varsta de 0-2 ani stau gratuit in patut (la cerere).", "Copii cu varsta de 3-11 ani beneficiaza de tarife reduse.","Copiii de 12 ani si peste sunt considerati adulti."]
      },
      {
        nume: "Paturi suplimentare",
        icon: "Pat",
        politica:["Paturi suplimentare sunt disponibile la cerere.", "Tarif pat supimentar: 150 RON /noapte /persoana.", "Numarul de paturi suplimentare permise depinde de tipul camerei alese."]
      },
      {
        nume: "Animale de companie",
        icon: "Animale",
        politica: ["Din pacate, animalele de companie nu sunt acceptate in incinta hotelului."]
      },
      {
        nume: "Politica de fumat",
        icon: "Fumat",
        politica: ["Fumatul nu este permis in camera.","Fumatul este permis doar in zonele special amenajate."]
      },
      {
        nume: "Taxe si impozite",
        icon: "Taxe",
        politica: ["Preturile includ TVA si taxa de servicii.","Se poate aplica o taxa de statiune la check-out, conform reglementarilor locale."]
      }
    ],

    tipCalator: ["Singur","Cuplu","Familie cu copii mici","Familie"],
    
    rooms: [


      {
      id: 1,
      codCamer: "C1",
      slugs: "camera1",
      stareActivare: false,
      favoriteCamera: true,
      title: "Camera 1",
      disponibil: "Disponibil",
      bgDis:"bg-green-400/30",
      culDis: "text-green-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 40000,
      oferta: {
        "pretReducere": "340 RON",
        "reducere": "-35%",
        stareActivareOferta: false,
        "bgreducere": "bg-lime-600",
        "stare": "Activ",
        "cod": "SDA",
        "bgStare": "bg-green-400/30",
        "textStareCol": "text-green-400",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/7.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera1/8.jpg`],
      nrCamera: "camera: 1",
      price: 410,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      {
      id: 2,
      codCamer: "C2",
      slugs: "camera2",
      stareActivare: false,
      favoriteCamera: false,
      title: "Camera 2",
      disponibil: "Asteptare",
      bgDis:"bg-orange-400/30",
      culDis: "text-orange-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 389380,
      oferta: {
        "pretReducere": "",
        "reducere": "",
        "bgreducere": "",
        stareActivareOferta: false,
        "stare": "",
        "cod": "",
        "bgStare": "",
        "textStareCol": "",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera2/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera2/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera2/2.jpg`,
        `${import.meta.env.BASE_URL}/home/imaginiHotel/hotelRosetti/camera2/3.jpg`,
        `${import.meta.env.BASE_URL}/home/imaginiHotel/hotelRosetti/camera2/4.jpg`,
        `${import.meta.env.BASE_URL}/home/imaginiHotel/hotelRosetti/camera2/5.jpg`,
        `${import.meta.env.BASE_URL}/home/imaginiHotel/hotelRosetti/camera2/6.jpg`,
        `${import.meta.env.BASE_URL}/home/imaginiHotel/hotelRosetti/camera2/7.jpg`,
        `${import.meta.env.BASE_URL}/home/imaginiHotel/hotelRosetti/camera2/8.jpg`],
      nrCamera: "camera: 1",
      price: 410,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      {
      id: 3,
      codCamer: "C9",
      slugs: "camera3",
      stareActivare: false,
      favoriteCamera: false,
      title: "Camera 3",
      disponibil: "Asteptare",
      bgDis:"bg-orange-400/30",
      culDis: "text-orange-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 389380,
      oferta: {
        "pretReducere": "",
        "reducere": "",
        "bgreducere": "",
        stareActivareOferta: false,
        "stare": "",
        "cod": "",
        "bgStare": "",
        "textStareCol": "",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera3/1.jpg`,
      imaginiCamera: [`home/imaginiHotel/hotelRosetti/camera3/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera3/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera3/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera3/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera3/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera3/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRosetti/camera3/7.jpg`],
      nrCamera: "camera: 1",
      price: 410,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}/home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      
      
      
    ],
  },

  

  {
    "id":2,
    slug: "hotel-continental",
    "img": `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/hotelContinental.jpg`,
    stareActivareHotel: false,
    favoriteHotel: true,
    "nume": "Hotel Continental",
    "locatie": "B-dul Revolutiei 1989, Nr 2A, 300054 Timișoara, România",
    
    rating: [
      {
        nrStele: 5,
        procent: "93%",
        procent1: "w-[93%]"
      },
      {
        nrStele: 4,
        procent: "7%",
        procent1: "w-[7%]"
      },
      {
        nrStele: 3,
        procent: "3%",
        procent1: "w-[3%]"
      },
      {
        nrStele: 2,
        procent: "0%",
        procent1: "w-[0%]"
      },
      {
        nrStele: 1,
        procent: "0%",
        procent1: "w-[0%]"
      }
    ],
    "nrRecenzie": 4.9,
    "textRecenzie": "1.245 recenzii",
    "facilitate": "Wi-fi gratuit",
    "facilitate1": "Parcare gratuita",
    "anulareGratuita": "Anulare gratuita",
    "dataAnulare": "Pana la 24 mai 2024",

    
    
    descriere: "Situat pe insula Male din Maldive, Maldives Paradise Resort ofera o experienta de neuitat pentru oaspeti combinand luxul absolut cu frumusetea naturala a lagunei cristaline. Resortul se mandreste cu o gama completa de facilitati: piscina infinita, spa & qwllness complet echipat, sali de fitness. activitati acvatice precum snorkeling si scuba divinig. Pentru cei care doresc experiente gastronomice de exceptie, restaurantul principal serveste preprarate internationale si locale, preparate din ingrediente proaspete, alaturi de optiuni personalizate pentru mese. Oaspetii beneficiaza de servicii exclusive, inclusiv de room service. Resortul este proiectat pentru confort maxim si intimitate, cu camere spatioase, elegante si tehnologii moderne, inclusiv WI-Fi gratuit si minibar. Indiferent daca alegi sa te relaxezi pe plaja, sa explorezi recifurile de corali sau sa savurezi o cina romantica sub cerul tropical, Maldive Paradise REsort ofera cadrul perfect pentru vacante memorabile fie ca este vorba de o escapada romantica, o aventura in familie sau o experienta de lux personalizata.",

    facilitati: [
      {
        
        "nume": "Piscina si wellness",
        facilitate: ["Piscina in aer liber","Piscina infinita","psicina pentru copii","Spa & wellness","Masaj","Sauna","Sala de Fitness","Sezlonguri si umbrele"]
      },
      {
        "nume": "Internet",
        facilitate: ["Wi-Fi gratuit in toate zonele","Interne de mare viteza","Wi-Fi in camera"]
      },
      { 
        "nume": "Mancare si bauturi",
        facilitate: ["Restaurant","Bar","Room Service","Mic dejun in camera","Snack bar", "Meniuri cu oferte speciale (la cerere)"]
      },
      {
        "nume": "Transport",
        facilitate: ["Transfer aeroport","Inchiriere biciclete","Serviciu de transfer","Parcare gratuita"]
      },
      {
        "nume": "Facilitati camera",
        facilitate: ["Aer conditionat","s", "TV inteligent","Minibar","Seif","Uscator de par","Masina de cafea","Halat de baie si papuci","Balcon/terasa"]
      },
      {
        "nume": "Servicii si receptie",
        facilitate: ["Receptie 24/7","Check-in/ Check-out privat","Depozit de bagaje","Schimb valutar","Serviciu de ","Menaj zilnic","Spalatorie/Caratatorie"]
      },
      {
        "nume": "Divertisment",
        facilitate: ["Activitati acvatice","Snokerling","Scufundari","Canoe","Divertismen de seara","Club pentru copii","Jocuri si puzzle-uri"]
      },
      {
        "nume": "Facilitati business",
        facilitate: ["Sali de conferinta","Fax/Copiere","Business centre"]
      },
    ],
    politici: [
      {
        nume: "Check-In / Check-Out",
        icon: "Calendar",
        politica: ["Check-in: de la 14.", "Check-Out: pana la 00:00.", "Te rugam sa prezinti un document de identitate cu fotografie si cardul de credit la check-in."]
      },
      {
        nume: "Anulare / Modificare",
        icon: "Star",
        politica: ["Anulare gratuita pana la 19 Mai, ora 19:00 (ora locala).", "Pentru anulari dupa aceasta data sau neprezentare, se va percepe 100% din valoarea rezervarii."]
      },
      {
        nume: "Plata si garantie",
        icon: "Card",
        politica: ["Plata se face online la momentul rezervarii.", "Hotelul poate autoriza cardul tau cu o suma pentru garantie, care va fi eliberata la check-out."]
      },
      {
        nume: "Politica pentru copii",
        icon: "Child",
        politica: ["Copii de toate varstele sunt bine veniti.","Copii cu varsta de 0-2 ani stau gratuit in patut (la cerere).", "Copii cu varsta de 3-11 ani beneficiaza de tarife reduse.","Copiii de 12 ani si peste sunt considerati adulti."]
      },
      {
        nume: "Paturi suplimentare",
        icon: "Pat",
        politica:["Paturi suplimentare sunt disponibile la cerere.", "Tarif pat supimentar: 150 RON /noapte /persoana.", "Numarul de paturi suplimentare permise depinde de tipul camerei alese."]
      },
      {
        nume: "Animale de companie",
        icon: "Animale",
        politica: ["Din pacate, animalele de companie nu sunt acceptate in incinta hotelului."]
      },
      {
        nume: "Politica de fumat",
        icon: "Fumat",
        politica: ["Fumatul nu este permis in camera.","Fumatul este permis doar in zonele special amenajate."]
      },
      {
        nume: "Taxe si impozite",
        icon: "Taxe",
        politica: ["Preturile includ TVA si taxa de servicii.","Se poate aplica o taxa de statiune la check-out, conform reglementarilor locale."]
      }
    ],

    tipCalator: ["Singur","Cuplu","Familie cu copii mici","Familie"],
    
    rooms: [


      {
      id: 1,
      codCamer: "C3",
      slugs: "camera1",
      stareActivare: false,
      favoriteCamera: true,
      title: "Camera 1",
      disponibil: "Ocupat",
      bgDis:"bg-red-400/30",
      culDis: "text-red-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 10420,
      oferta: {
        "pretReducere": "",
        "reducere": "",
        stareActivareOferta: false,
        "bgreducere": "",
        "stare":"",
        "cod":"",
        "bgStare": "",
        "textStareCol": "",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/7.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera1/8.jpg`],
      price: 432,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}/home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      {
      id: 2,
      codCamer: "C4",
      slugs: "camera2",
      stareActivare: false,
      favoriteCamera: true,
      title: "Camera 2",
      disponibil: "Disponibil",
      bgDis:"bg-green-400/30",
      culDis: "text-green-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal:13940,
      oferta: {
        "pretReducere": "340 RON",
        "reducere": "-35%",
        "bgreducere": "bg-lime-600",
        stareActivareOferta: false,
        "stare": "Inactiv",
        "cod": "NID",
        "bgStare": "bg-red-400/30",
        "textStareCol": "text-red-400",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelContinental/camera2/7.jpg`],
      nrCamera: "camera: 1",
      price: 410,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      
      
      
    ],
  },

  
  {
    "id":3,
    slug: "grand-hotel-napoca",
    stareActivareHotel: false,
    favoriteHotel: true,
    "img": `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/hotelNapoca.jpg`,
    "nume": "Grand Hotel Napoca",
    "locatie": "str. Octavian Goga, nr. 1, 400698 Cluj-Napoca, România",
    
    rating: [
      {
        nrStele: 5,
        procent: "93%",
        procent1: "w-[93%]"
      },
      {
        nrStele: 4,
        procent: "7%",
        procent1: "w-[7%]"
      },
      {
        nrStele: 3,
        procent: "3%",
        procent1: "w-[3%]"
      },
      {
        nrStele: 2,
        procent: "0%",
        procent1: "w-[0%]"
      },
      {
        nrStele: 1,
        procent: "0%",
        procent1: "w-[0%]"
      }
    ],
    "nrRecenzie": 4.9,
    "textRecenzie": "1.245 recenzii",
    "facilitate": "Wi-fi gratuit",
    "facilitate1": "Parcare gratuita",
    "anulareGratuita": "Anulare gratuita",
    "dataAnulare": "Pana la 24 mai 2024",

    
    
    descriere: "Situat pe insula Male din Maldive, Maldives Paradise Resort ofera o experienta de neuitat pentru oaspeti combinand luxul absolut cu frumusetea naturala a lagunei cristaline. Resortul se mandreste cu o gama completa de facilitati: piscina infinita, spa & qwllness complet echipat, sali de fitness. activitati acvatice precum snorkeling si scuba divinig. Pentru cei care doresc experiente gastronomice de exceptie, restaurantul principal serveste preprarate internationale si locale, preparate din ingrediente proaspete, alaturi de optiuni personalizate pentru mese. Oaspetii beneficiaza de servicii exclusive, inclusiv de room service. Resortul este proiectat pentru confort maxim si intimitate, cu camere spatioase, elegante si tehnologii moderne, inclusiv WI-Fi gratuit si minibar. Indiferent daca alegi sa te relaxezi pe plaja, sa explorezi recifurile de corali sau sa savurezi o cina romantica sub cerul tropical, Maldive Paradise REsort ofera cadrul perfect pentru vacante memorabile fie ca este vorba de o escapada romantica, o aventura in familie sau o experienta de lux personalizata.",

    facilitati: [
      {
        
        "nume": "Piscina si wellness",
        facilitate: ["Piscina in aer liber","Piscina infinita","psicina pentru copii","Spa & wellness","Masaj","Sauna","Sala de Fitness","Sezlonguri si umbrele"]
      },
      {
        "nume": "Internet",
        facilitate: ["Wi-Fi gratuit in toate zonele","Interne de mare viteza","Wi-Fi in camera"]
      },
      { 
        "nume": "Mancare si bauturi",
        facilitate: ["Restaurant","Bar","Room Service","Mic dejun in camera","Snack bar", "Meniuri cu oferte speciale (la cerere)"]
      },
      {
        "nume": "Transport",
        facilitate: ["Transfer aeroport","Inchiriere biciclete","Serviciu de transfer","Parcare gratuita"]
      },
      {
        "nume": "Facilitati camera",
        facilitate: ["Aer conditionat","s", "TV inteligent","Minibar","Seif","Uscator de par","Masina de cafea","Halat de baie si papuci","Balcon/terasa"]
      },
      {
        "nume": "Servicii si receptie",
        facilitate: ["Receptie 24/7","Check-in/ Check-out privat","Depozit de bagaje","Schimb valutar","Serviciu de ","Menaj zilnic","Spalatorie/Caratatorie"]
      },
      {
        "nume": "Divertisment",
        facilitate: ["Activitati acvatice","Snokerling","Scufundari","Canoe","Divertismen de seara","Club pentru copii","Jocuri si puzzle-uri"]
      },
      {
        "nume": "Facilitati business",
        facilitate: ["Sali de conferinta","Fax/Copiere","Business centre"]
      },
    ],
    politici: [
      {
        nume: "Check-In / Check-Out",
        icon: "Calendar",
        politica: ["Check-in: de la 14.", "Check-Out: pana la 00:00.", "Te rugam sa prezinti un document de identitate cu fotografie si cardul de credit la check-in."]
      },
      {
        nume: "Anulare / Modificare",
        icon: "Star",
        politica: ["Anulare gratuita pana la 19 Mai, ora 19:00 (ora locala).", "Pentru anulari dupa aceasta data sau neprezentare, se va percepe 100% din valoarea rezervarii."]
      },
      {
        nume: "Plata si garantie",
        icon: "Card",
        politica: ["Plata se face online la momentul rezervarii.", "Hotelul poate autoriza cardul tau cu o suma pentru garantie, care va fi eliberata la check-out."]
      },
      {
        nume: "Politica pentru copii",
        icon: "Child",
        politica: ["Copii de toate varstele sunt bine veniti.","Copii cu varsta de 0-2 ani stau gratuit in patut (la cerere).", "Copii cu varsta de 3-11 ani beneficiaza de tarife reduse.","Copiii de 12 ani si peste sunt considerati adulti."]
      },
      {
        nume: "Paturi suplimentare",
        icon: "Pat",
        politica:["Paturi suplimentare sunt disponibile la cerere.", "Tarif pat supimentar: 150 RON /noapte /persoana.", "Numarul de paturi suplimentare permise depinde de tipul camerei alese."]
      },
      {
        nume: "Animale de companie",
        icon: "Animale",
        politica: ["Din pacate, animalele de companie nu sunt acceptate in incinta hotelului."]
      },
      {
        nume: "Politica de fumat",
        icon: "Fumat",
        politica: ["Fumatul nu este permis in camera.","Fumatul este permis doar in zonele special amenajate."]
      },
      {
        nume: "Taxe si impozite",
        icon: "Taxe",
        politica: ["Preturile includ TVA si taxa de servicii.","Se poate aplica o taxa de statiune la check-out, conform reglementarilor locale."]
      }
    ],

    tipCalator: ["Singur","Cuplu","Familie cu copii mici","Familie"],
    
    rooms: [


      {
      id: 1,
      codCamer: "C5",
      stareActivare: false,
      favoriteCamera: false,
      slugs: "camera1",
      title: "Camera 1",
      disponibil: "Ocupat",
      bgDis:"bg-red-400/30",
      culDis: "text-red-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 3904,
      oferta: {
        "pretReducere": "340 RON",
        "reducere": "-35%",
        stareActivareOferta: true,
        "bgreducere": "bg-lime-600",
        "stare": "Programat",
        "cod": "PRA",
        "bgStare": "bg-orange-400/30",
        "textStareCol": "text-orange-400",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/7.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera1/8.jpg`],
      nrCamera: "camera: 1",
      price: 432,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      {
      id: 2,
      codCamer: "C6",
      slugs: "camera2",
      stareActivare: false,
      favoriteCamera: true,
      title: "Camera 2",
      disponibil: "Disponibil",
      bgDis:"bg-green-400/30",
      culDis: "text-green-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 30193,
      oferta: {
        "pretReducere": "340 RON",
        "reducere": "-35%",
        "bgreducere": "bg-lime-600",
        "stare": "Activ",
        stareActivareOferta: false,
        "cod": "MDE",
        "bgStare": "bg-green-400/30",
        "textStareCol": "text-green-400",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/7.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/8.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelNapoca/camera2/9.jpg`],
      nrCamera: "camera: 1",
      price: 410,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      
      
      
    ],
  },

  

  {
    "id":4,
    stareActivareHotel: false,
    favoriteHotel: false,
    slug: "hotel-romada-iasi",
    "img": `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/1.jpg`,
    "nume": "Ramada Iasi City Center",
    "locatie": "27 Grigore Ureche Street, 700023 Iaşi, România",
    
    rating: [
      {
        nrStele: 5,
        procent: "93%",
        procent1: "w-[93%]"
      },
      {
        nrStele: 4,
        procent: "7%",
        procent1: "w-[7%]"
      },
      {
        nrStele: 3,
        procent: "3%",
        procent1: "w-[3%]"
      },
      {
        nrStele: 2,
        procent: "0%",
        procent1: "w-[0%]"
      },
      {
        nrStele: 1,
        procent: "0%",
        procent1: "w-[0%]"
      }
    ],
    "nrRecenzie": 4.9,
    "textRecenzie": "1.245 recenzii",
    "facilitate": "Wi-fi gratuit",
    "facilitate1": "Parcare gratuita",
    "anulareGratuita": "Anulare gratuita",
    "dataAnulare": "Pana la 24 mai 2024",

    
    
    descriere: "Situat pe insula Male din Maldive, Maldives Paradise Resort ofera o experienta de neuitat pentru oaspeti combinand luxul absolut cu frumusetea naturala a lagunei cristaline. Resortul se mandreste cu o gama completa de facilitati: piscina infinita, spa & qwllness complet echipat, sali de fitness. activitati acvatice precum snorkeling si scuba divinig. Pentru cei care doresc experiente gastronomice de exceptie, restaurantul principal serveste preprarate internationale si locale, preparate din ingrediente proaspete, alaturi de optiuni personalizate pentru mese. Oaspetii beneficiaza de servicii exclusive, inclusiv de room service. Resortul este proiectat pentru confort maxim si intimitate, cu camere spatioase, elegante si tehnologii moderne, inclusiv WI-Fi gratuit si minibar. Indiferent daca alegi sa te relaxezi pe plaja, sa explorezi recifurile de corali sau sa savurezi o cina romantica sub cerul tropical, Maldive Paradise REsort ofera cadrul perfect pentru vacante memorabile fie ca este vorba de o escapada romantica, o aventura in familie sau o experienta de lux personalizata.",

    facilitati: [
      {
        
        "nume": "Piscina si wellness",
        facilitate: ["Piscina in aer liber","Piscina infinita","psicina pentru copii","Spa & wellness","Masaj","Sauna","Sala de Fitness","Sezlonguri si umbrele"]
      },
      {
        "nume": "Internet",
        facilitate: ["Wi-Fi gratuit in toate zonele","Interne de mare viteza","Wi-Fi in camera"]
      },
      { 
        "nume": "Mancare si bauturi",
        facilitate: ["Restaurant","Bar","Room Service","Mic dejun in camera","Snack bar", "Meniuri cu oferte speciale (la cerere)"]
      },
      {
        "nume": "Transport",
        facilitate: ["Transfer aeroport","Inchiriere biciclete","Serviciu de transfer","Parcare gratuita"]
      },
      {
        "nume": "Facilitati camera",
        facilitate: ["Aer conditionat","s", "TV inteligent","Minibar","Seif","Uscator de par","Masina de cafea","Halat de baie si papuci","Balcon/terasa"]
      },
      {
        "nume": "Servicii si receptie",
        facilitate: ["Receptie 24/7","Check-in/ Check-out privat","Depozit de bagaje","Schimb valutar","Serviciu de ","Menaj zilnic","Spalatorie/Caratatorie"]
      },
      {
        "nume": "Divertisment",
        facilitate: ["Activitati acvatice","Snokerling","Scufundari","Canoe","Divertismen de seara","Club pentru copii","Jocuri si puzzle-uri"]
      },
      {
        "nume": "Facilitati business",
        facilitate: ["Sali de conferinta","Fax/Copiere","Business centre"]
      },
    ],
    politici: [
      {
        nume: "Check-In / Check-Out",
        icon: "Calendar",
        politica: ["Check-in: de la 14.", "Check-Out: pana la 00:00.", "Te rugam sa prezinti un document de identitate cu fotografie si cardul de credit la check-in."]
      },
      {
        nume: "Anulare / Modificare",
        icon: "Star",
        politica: ["Anulare gratuita pana la 19 Mai, ora 19:00 (ora locala).", "Pentru anulari dupa aceasta data sau neprezentare, se va percepe 100% din valoarea rezervarii."]
      },
      {
        nume: "Plata si garantie",
        icon: "Card",
        politica: ["Plata se face online la momentul rezervarii.", "Hotelul poate autoriza cardul tau cu o suma pentru garantie, care va fi eliberata la check-out."]
      },
      {
        nume: "Politica pentru copii",
        icon: "Child",
        politica: ["Copii de toate varstele sunt bine veniti.","Copii cu varsta de 0-2 ani stau gratuit in patut (la cerere).", "Copii cu varsta de 3-11 ani beneficiaza de tarife reduse.","Copiii de 12 ani si peste sunt considerati adulti."]
      },
      {
        nume: "Paturi suplimentare",
        icon: "Pat",
        politica:["Paturi suplimentare sunt disponibile la cerere.", "Tarif pat supimentar: 150 RON /noapte /persoana.", "Numarul de paturi suplimentare permise depinde de tipul camerei alese."]
      },
      {
        nume: "Animale de companie",
        icon: "Animale",
        politica: ["Din pacate, animalele de companie nu sunt acceptate in incinta hotelului."]
      },
      {
        nume: "Politica de fumat",
        icon: "Fumat",
        politica: ["Fumatul nu este permis in camera.","Fumatul este permis doar in zonele special amenajate."]
      },
      {
        nume: "Taxe si impozite",
        icon: "Taxe",
        politica: ["Preturile includ TVA si taxa de servicii.","Se poate aplica o taxa de statiune la check-out, conform reglementarilor locale."]
      }
    ],

    tipCalator: ["Singur","Cuplu","Familie cu copii mici","Familie"],
    
    rooms: [


      {
      id: 1,
      codCamer: "C7",
      slugs: "camera1",
      stareActivare: false,
      favoriteCamera: true,
      title: "Camera 1",
      disponibil: "Disponibil",
      bgDis:"bg-green-400/30",
      culDis: "text-green-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 1230,
      oferta: {
        "pretReducere": "340 RON",
        "reducere": "-35%",
        "bgreducere": "bg-lime-600",
        "stare": "Activ",
        stareActivareOferta: false,
        "cod": "SEP",
        "bgStare": "bg-green-400/30",
        "textStareCol": "text-green-400",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/7.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera1/8.jpg`],
      nrCamera: "camera: 1",
      price: 432,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      {
      id: 2,
      codCamer: "C8",
      slugs: "camera2",
      stareActivare: false,
      favoriteCamera: false,
      title: "Camera 2",
      disponibil: "Disponibil",
      bgDis:"bg-green-400/30",
      culDis: "text-green-400",
      recenzieCamera: 4.9,
      recenziePers: "1.234 recenzii",
      recomandare: "Recomandat",
      dimensiune: "45",
      tipVedere: "Vedere la ocean",
      nrPersoane: "3 persoane",
      capacitate: "3 persoane",
      tipulPatului: "1 pat king size",
      durataSejur: "3 nopti",
      checkInC: "19 iun. 2026",
      checkInTime: "de la 14:00",
      checkOutC: "19 iun. 2026",
      checkOutTime: "pana la 14:00",
      venitTotal: 9000,
      oferta: {
        "pretReducere": "340 RON",
        "reducere": "-35%",
        "bgreducere": "bg-lime-600",
        stareActivareOferta: false,
        "stare": "Inactiv",
        "cod": "SQD",
        "bgStare": "bg-red-400/30",
        "textStareCol": "text-red-400",
        "ofertaStart": "",
        "ofertaEnd": ""
      },
      tarife: [
        {
          id: 1,
          titluTarif: "Tarif flexibil",
          pretTarif: 10.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 24 mai 2024","Plata la proprietate"]
        },
        {
          id: 2,
          titluTarif: "Tarif standard",
          pretTarif: 9.998,
          listaBen: ["Mic dejun inclus", "Anulare gratuita pana la 7 zile inainte","Plata online"]
        },
        {
          id: 3,
          titluTarif: "Tarif nerambursabil",
          pretTarif: 8.298,
          listaBen: ["Mic dejun inclus","Plata online - nerambursabil"]
        }
      ],

      metodePlata: [
        {
          id: 1,
          icon: "Proprietate",
          numePlata: "Plata la proprietate",
          textPlata: "Plateste direct la hotel la check-out"
        },
        {
          id: 2,
          icon: "Card",
          numePlata: "Plata cu cardul",
          textPlata: "Plateste online in siguranta acum."
        }
      ],
      

      despreCamera: ["Descopera o experienta exclusivista intr-o vila spectaculoasa construita deasupra apelor cristaline ale oceanului, unde confortul moder se imbina perfect cu frumusetea tropicala. Water Villa cu piscina privata este alegerea ideala pentru cupluri sau calatori care isi doresc relaxare absoluta, intimitate si privelsiti impresionante la orice ora a zilei.", "Camera spatioasa, amenajata elegant in tonuri naturale si accente contemporane, ofera acces direct catre terasa privata si piscina infinity cu vedere panoramica la ocean. Ferestrele mari si designul deschis permit luminii naturale sa creeze o atmosfera calda si relaxanta, in timp ce sunetul valurilor completeaza perfect experienta exotica.", "Vila dispune de un pat king-size confortabil, zona de relaxare, bai moderna cu cada si dus separat, precum si facilitati premium menite sa iti ofere tot confortul necesar. Balconul privat este locul perfect pentru a admira rasaritul, pentru o cina romantica sau pentru momente de liniste completa in mijlocul paradisului tropical.", "Fie ca alegi sa te relaxezi in piscina, sa admiri apusurile spectaculoase sau sa te bucuri de linistea oceanului chiar din confortul camerei tale, aceasta vila promite o experienta memorabila si un sejur de neuitat."],
      descriereCamera: "Vila de lux deasupra apei cu piscina privata, terasa si acces direct la laguna.",
      facilitatiCamera:["Aer conditionat","Wi-Fi gratuit", "Minibar", "TV cu ecran plat", "Seif", "Uscator de par","Masina de cafea","Balcon privat","Baie cu cada si dus","Halat de baie","Articole de toaleta gratuite", "Room service", "Birou","Priza langa pat"],
      iconiteFacilitati: ["Aer","WIFI","Minibar","TV","Seif","Uscator"],
      include: "Mic dejun inclus",
      anulareGratuita: "Anulare gratuita pana la 24 mai 2026",
      image: `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/1.jpg`,
      imaginiCamera: [`${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/1.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/2.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/3.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/4.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/5.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/6.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/7.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiHotel/hotelRomadaIasi/camera2/8.jpg`,
        `${import.meta.env.BASE_URL}home/imaginiGotel/hotelRomadaIasi/camera2/9.jpg`],
      nrCamera: "camera: 1",
      price: 410,

      recenzii:[
        {
          id: 1,
          numeUser: "Mihai Ionescu",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 2,
          numeUser: "Andina Buzat",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Cuplu",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
        {
          id: 3,
          numeUser: "Mita Buzadsadt",
          imgProfil: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
          tara: "Romania",
          tipCalator: "Cuplu",
          iconCalator: "Singur",
          iconPerioada: "Perioada",
          iconRoom: "Room",
          perioada: "2 nopti - aprilie 2025",
          nrRecenzieCamera: 4.3,
          timpPostare: "3 zile",
          titluRecenzieCamera: "O experienta de neuitat!",
          descriereRecenzieCamera: "Totul a fost perfect. Vila este spatioasa si curata, cu vedere la ocean si piscina privata. PErsonalul extrem de amabil, mancara delicioas si facilitati de top. Cu siguranta vom reveni."
        },
      ]
      },
      
      
      
    ],
  },

  



  










 
  
]






export default hotels;