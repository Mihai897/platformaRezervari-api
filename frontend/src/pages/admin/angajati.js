const angajati = [
  {
    id:1,
    img: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
    nume:"Andrei Popescu",
    email: "andrei.popesc@numesite.ro",
    nr: "+40 712 345 678",
    rol:"Administrator",
    hotAccesibile:"Toate hotelurile",
    status:"Activ",
    ultimaAutentificare: "23 mai 2026, 10:30",
    stareActivareAngajat: true,
    activitate: [
      {
        id:1,
        numeActiune:"Autentificare",
        detaliiActiune: "Autentificare reusita din IP 86.123.34.56",
        dataActiune: "23 mai 2026, 10:30"
      },
      {
        id:2,
        numeActiune:"Actualizare hotel",
        detaliiActiune: "Hotel 1 a fost actualizat",
        dataActiune: "1 mai 2026, 10:30"
      },
      {
        id:3,
        numeActiune:"Schimbare status rezervare",
        detaliiActiune: "Statusul rezervarii #SC-1248 a fost modificat",
        dataActiune: "18 aprilie 2026, 10:30"
      },
    ]
  },
  
  {
    id:2,
    img: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
    nume:"Maria Popa",
    email: "maria.popa@numesite.ro",
    nr: "+40 712 123 498",
    rol:"Manager",
    hotAccesibile:"Toate hotelurile",
    status:"Inactiv",
    ultimaAutentificare: "23 mai 2026, 10:30",
    stareActivareAngajat: false,
    activitate: [
      {
        id:1,
        numeActiune:"Autentificare",
        detaliiActiune: "Autentificare reusita din IP 86.123.34.56",
        dataActiune: "23 mai 2026, 10:30"
      },
      {
        id:2,
        numeActiune:"Actualizare hotel",
        detaliiActiune: "Hotel 1 a fost actualizat",
        dataActiune: "1 mai 2026, 10:30"
      },
      {
        id:3,
        numeActiune:"Schimbare status rezervare",
        detaliiActiune: "Statusul rezervarii #SC-1248 a fost modificat",
        dataActiune: "18 aprilie 2026, 10:30"
      },
    ]
  },
  {
    id:3,
    img: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
    nume:"Mihai Juliu",
    email: "mih39@numesite.ro",
    nr: "+40 712 345 678",
    rol:"Manager",
    hotAccesibile:"Toate hotelurile",
    status:"Activ",
    ultimaAutentificare: "23 mai 2026, 10:30",
    stareActivareAngajat: true,
    activitate: [
      {
        id:1,
        numeActiune:"Autentificare",
        detaliiActiune: "Autentificare reusita din IP 86.123.34.56",
        dataActiune: "23 mai 2026, 10:30"
      },
      {
        id:2,
        numeActiune:"Actualizare hotel",
        detaliiActiune: "Hotel 1 a fost actualizat",
        dataActiune: "1 mai 2026, 10:30"
      },
      {
        id:3,
        numeActiune:"Schimbare status rezervare",
        detaliiActiune: "Statusul rezervarii #SC-1248 a fost modificat",
        dataActiune: "18 aprilie 2026, 10:30"
      },
    ]
  },
  {
    id:4,
    img: `${import.meta.env.BASE_URL}home/descopera/exotic.jpg`,
    nume:"Carmen Banc",
    email: "carmbanc98@numesite.ro",
    nr: "+40 702 315 203",
    rol:"Receptioner",
    hotAccesibile:"Toate hotelurile",
    status:"Activ",
    ultimaAutentificare: "23 mai 2026, 10:30",
    stareActivareAngajat: true
  },

];
export default angajati;