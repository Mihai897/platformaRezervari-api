import { createBrowserRouter, createHashRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/noconnect/Home";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import CumFunctioneaza from "../pages/CumFunctioneaza";
import IntrebariFrecvente from "../pages/IntrebariFrecvente";
import CentrulDeAjutor from "../pages/centrulDeAjutor/CentrulDeAjutor";
import Ghid from "../pages/centrulDeAjutor/Ghid/Ghid";
import GhidRezervari from "../pages/centrulDeAjutor/Ghid/GhidRezervari";
import GhidMetodaPlata from "../pages/centrulDeAjutor/Ghid/GhidMetodaPlata/GhidMetodaPlata";
import GhidPoliticaAnulare from "../pages/centrulDeAjutor/Ghid/PoliticaAnulare/GhidPoliticaAnulare";
import GhidSuport from "../pages/centrulDeAjutor/Ghid/Suport/GhidSuport";
import GhidSecuritate from "../pages/centrulDeAjutor/Ghid/Securitate/GhidSecuritate";
import GhidIntrebariPlati from "../pages/centrulDeAjutor/Ghid/GhidIntrebarPlati/GhidIntrebariPlati";
import GhidGestionareCont from "../pages/centrulDeAjutor/Ghid/GhidGestionareCont/GhidGestionareCont";
import GhidCreareCont from "../pages/centrulDeAjutor/Ghid/GhidCreareCont/GhidCreareCont";
import GhidModificareRezervare from "../pages/centrulDeAjutor/Ghid/GhidModificareRezervare/GhidModificareRezervare";
import Articole from "../pages/centrulDeAjutor/Articole/Articole";
import ArticoleAnulareRezervare from "../pages/centrulDeAjutor/Articole/ArticoleAnulareRezervare";
import ArticoleMetodaPlata from "../pages/centrulDeAjutor/Articole/ArticoleMetodaPlata";
import ArticoleDate from "../pages/centrulDeAjutor/Articole/ArticoleDate";
import ArticoleCod from "../pages/centrulDeAjutor/Articole/ArticoleCod";
import ArticoleFidelitate from "../pages/centrulDeAjutor/Articole/ArticoleFidelitate";
import ArticoleContactareSuport from "../pages/centrulDeAjutor/Articole/ArticoleContactareSuport";

import ArticoleProblemaPlata from "../pages/centrulDeAjutor/Articole/ArticoleProblemaPlata";
import Hotels from "../pages/hotels/Hotels.jsx";
import Oferte from "../pages/oferte/Oferte";
import PaginaRecenzii from "../pages/paginaRecenzii/PaginaRecenzii";
import HotelPage from "../pages/hotels/Hotel/HotelPage";
import HotelRooms from "../pages/hotels/Hotel/HotelRooms";
import HotelPrezentare from "../pages/hotels/Hotel/HotelPrezentare.jsx";
import HotelFacilitati from "../pages/hotels/Hotel/HotelFacilitati.jsx";
import HotelPolitici from "../pages/hotels/Hotel/HotelPolitici.jsx";
import HotelRecenzii from "../pages/hotels/Hotel/HotelRecenzii.jsx";
import RoomsPage from "../pages/hotels/Hotel/RoomsPage.jsx";
import Rezervare from "../pages/hotels/Hotel/CameraRezervare/Rezervare.jsx";
import RezervareDetaliiOaspeti from "../pages/hotels/Hotel/CameraRezervare/RezervareDetaliiOaspeti.jsx";
import RezervarePlata from "../pages/hotels/Hotel/CameraRezervare/RezervarePlata.jsx";
import RezervareConfirmata from "../pages/hotels/Hotel/CameraRezervare/RezervareConfirmata.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import Forgot from "../components/Forgot.jsx";
import Admin from "../pages/admin/Admin.jsx";
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";
import AdminRezervari from "../pages/admin/AdminRezervari.jsx";
import AdminHoteluri from "../pages/admin/AdminHoteluri.jsx";
import AdminCamere from "../pages/admin/AdminCamere.jsx";
import AdminClienti from "../pages/admin/AdminClienti.jsx";
import AdminOferte from "../pages/admin/AdminOferte.jsx";
import AdminsSetari from "../pages/admin/AdminSetari/AdminsSetari.jsx";
import SetariGeneral from "../pages/admin/AdminSetari/SetariGeneral.jsx";
import Notificari from "../pages/admin/AdminSetari/Notificari.jsx";
import Securitate from "../pages/admin/AdminSetari/Securitate.jsx";
import Backup from "../pages/admin/AdminSetari/Backup.jsx";
import AdminAngajati from "../pages/admin/AdminAngajati.jsx";
import AdminAdaugaCamera from "../pages/admin/AdminAdaugaCamera.jsx";
import AdminAdaugaAngajati from "../pages/admin/AdminAdaugaAngajati.jsx";
import AdminAdaugaRezervare from "../pages/admin/AdminAdaugaRezervare.jsx";
import AdminAdaugaHotel from "../pages/admin/AdminAdaugaHotel.jsx";
import AdminAdaugaOferta from "../pages/admin/AdminAdaugaOferta.jsx";
import RezervarileMele from "../pages/user/RezervarileMele.jsx";
import Favorite from "../pages/user/Favorite.jsx";
import SetariCont from "../pages/user/SetariCont.jsx";
import SetarInfoPers from "../pages/user/SetarInfoPers.jsx";
import SetariSecuritate from "../pages/user/SetariSecuritate.jsx";
import SetariNotificari from "../pages/user/SetariNotificari.jsx";
import NotificariUser from "../pages/user/NotificariUser.jsx";
import DetaliiRezervariPage from "../pages/user/DetaliiRezervariPage.jsx";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: "admin-rezervari",
        element: <AdminRezervari />,
        children: [
          {
            path:"adauga-rezervare",
            element:<AdminAdaugaRezervare/>
          }
        ]
      },
      {
        path: "admin-hoteluri",
        element: <AdminHoteluri />,
        children: [{
          path: "adauga-hotel",
          element: <AdminAdaugaHotel />
        }]
      },
      {
        path: "admin-camere",
        element: <AdminCamere />,
        children: [
          {
            path: "adauga-camera",
            element: <AdminAdaugaCamera />
          }
        ]
      },
      {
        path:"admin-clienti",
        element: <AdminClienti/>
      },
      {
        path: "admin-oferte",
        element: <AdminOferte/>,
        children: [
          {
            path:"adauga-oferta",
            element: <AdminAdaugaOferta/>
          }
        ]
      },
      {
        path: "admin-angajati",
        element: <AdminAngajati />,
        children: [
          {
            path:"adauga-angajat",
            element:<AdminAdaugaAngajati/>
          }
        ]
      },
      {
        path: "admin-setari",
        element: <AdminsSetari/>,
        children: [
          {
            index: true,
            element: <SetariGeneral />,
            handle: {
              title: "General"
            }
          },
          {
            path: "notificari",
            element: <Notificari/>,
            handle:{
              title: "Notificari"
            }
          },
          {
            path: "securitate",
            element: <Securitate />,
            handle:{
              title: "Securitate"
            }
          },
          {
            path: "backup",
            element: <Backup />,
            handle: {
              title:"Backup & Export"
            }
          },
        ]
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgot",
    element: <Forgot />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },


      {
        path:"/rezervarile-mele",
        element: <RezervarileMele/>,
        children: [
          {
            path:":codRezervare",
            element:<DetaliiRezervariPage/>
          }
        ]
      },

      {
        path:"/favorite",
        element: <Favorite/>
      },

      {
        path:"/notificarile-mele",
        element:<NotificariUser/>
      },

      {
        path:"/setari-cont",
        element: <SetariCont/>,
        children: [
          {
            index: true,
            element: <SetarInfoPers />
          },
          {
            path:"securitate",
            element: <SetariSecuritate/>
          },
          {
            path:"notificari",
            element: <SetariNotificari/>
          }
        ]
      },


      
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/hotels",
        element: <Hotels />
      },
      {
        path: "/hotels/:slug",
        element: <HotelPage/>,
        children: [
          {
            path: "prezentare",
            element: <HotelPrezentare/>
          },
          {
            path: "camere",
            element: <HotelRooms/>,
            children: [
              {
                path: ":roomSlug",
                element: <RoomsPage />,
                children: [
                  {
                    path: "rezervare",
                    element: <Rezervare />,
                    children: [
                      {
                        path: "rezervare-confirmata",
                        element: <RezervareConfirmata/>
                      }
                    ]
                  }
                  
                ]
              }
            ] 
          },
          {
            path: "facilitati",
            element: <HotelFacilitati/>
          },
          {
            path: "politici",
            element: <HotelPolitici/>
          },
          {
            path: "recenzii",
            element: <HotelRecenzii />
          }
        ]
      },
      {
        path: "/offers",
        element: <Oferte />
      },
      {
        path:"/review",
        element: <PaginaRecenzii/>
      },
      {
        path: '/functionare',
        element: <CumFunctioneaza />
      },
      {
        path: '/intrebari',
        element: <IntrebariFrecvente/>
      },
      {
        path: '/centrul-ajutor',
        element: <CentrulDeAjutor />
      },
      {
        path: '/ghid',
        element: <Ghid />,
        children: [
          {
            index: true,
            element: <Navigate to="ghid-rezervari" replace />
          },
          {
            path: 'ghid-rezervari',
            element: <GhidRezervari />,
            handle: {
              title: "Ghid complet pentru rezervări",
              description: "Află pas cu pas cum să faci o rezervare rapid și fără stres.",
              time: "5-7 min citire"
      }
          },
          {
            path: 'ghid-metoda-plata',
            element: <GhidMetodaPlata />,
             handle: {
              title: "Metoda de plata disponibile",
              description: "Afla toate optiunile de plata acceptate, cum functioneaza si cum putem pastra datele tale in siguranta.",
              time: "6-8 min citire"
      }
          },
          {
            path: 'ghid-politica-anulare',
            element: <GhidPoliticaAnulare />,
             handle: {
              title: "Politica de anulare",
              description: "Intelege conditiile de anulare si rambursare pentru rezervarile facute.",
              time: "5-6 min citire"
      }
          },
          {
            path: 'ghid-modificare-rezervare',
            element: <GhidModificareRezervare />,
             handle: {
              title: "Cum modific o rezervare",
              description: "Ai nevoie sa schimbi datele, numarul de personae sau alte detalii ale rezervarii tale?",
              description2: "Urmeaza pasii de mai jos pentru a face modificarile rapid si fara stres.",
              time: "5-7 min citire"
      }
          },
          {
            path: 'ghid-creare-cont',
            element: <GhidCreareCont />,
             handle: {
              title: "Cum creez un cont",
              description: "Creearea unui cont este rapida, gratuita si iti ofera acces la oate functionalitatile platformei.",
              time: "5-7 min citire"
      }
          },
          {
            path: 'ghid-gestionare-cont',
            element: <GhidGestionareCont />,
             handle: {
              title: "Gestionarea contului meu",
              description: "In contul tau poti actualiza informatiile personale, gestiona securitatea si preferintele , precum si setarile de notificare si plata.",
              time: "7-9 min citire"
      }
          },
          {
            path: 'ghid-intrebari-plati',
            element: <GhidIntrebariPlati />,
             handle: {
              title: "Intrebari frecvente despre plati",
              description: "Aici gasesti raspunsuri la cele mai comune intrebari legate de plati, metode acceptate si siguranta tranzactiilor.",
              time: "5-7 min citire"
      }
          },
          {
            path: 'ghid-securitate',
            element: <GhidSecuritate />,
             handle: {
              title: "Securitate si confidentialitate",
              description: "Securitatea datelor tale este o prioritate.",
              description2: "Luam masuri serioase pentru a-ti proteja informatiile personale si pentru a-ti oferi o experienta sigura pe platforma noastra.",
              time: "5-7 min citire"
      }
          },
          
          {
            path: 'ghid-suport',
            element: <GhidSuport />,
             handle: {
              title: "Contact si suport",
              description: "Ai nevoie de ajutor? Echipa noastra este aici pentru tine. ",
              description2:"Gaseste mai jos toate metodele prin care ne poti contacta si cum te putem ajuta.",
              time: "5-7 min citire"
      }
          }
        ]
      },
      {
        path: '/articole',
        element: <Articole />,
        children: [
          {
            index: true,
            element: <Navigate to="articole-anulare" replace/>
          },
          {
            path: "articole-anulare",
            element: <ArticoleAnulareRezervare />,
            handle: {
              title: "Cum pot anula o rezervare"
            }
          },
          {
            path: "articole-metoda-plata",
            element: <ArticoleMetodaPlata/>,
            handle: {
              title: "Ce metoda de plata sunt acceptate"
            }
          },
          {
            path: "articole-date",
            element: <ArticoleDate/>,
            handle: {
              title: "Cum imi modific datele personale"
            }
          },
          {
            path: "articole-cod",
            element: <ArticoleCod/>,
            handle: {
              title: "Cum folosesc un cod de reducere"
            }
          },
          {
            path: "articole-fidelitate",
            element: <ArticoleFidelitate/>,
            handle: {
              title: "Ce este programul de fidelitate"
            }
          },
          {
            path: "articole-contactare-suport",
            element: <ArticoleContactareSuport/>,
            handle: {
              title: "Cum contactez suportul clienti"
            }
          },
          
          {
            path: "articole-problema-plata",
            element: <ArticoleProblemaPlata/>,
            handle: {
              title: "Ce fac daca am o problema cu plata"
            }
          }
        ]
      }
    ]
  },
]);

export default router;