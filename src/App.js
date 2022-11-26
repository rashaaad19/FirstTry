import Bottom from "./components/Bottom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Middle from "./components/Middle";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGear,
  faCircleUser,
  faTags,
  faArrowRight,
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Horizontal from "./components/Horizontal";
library.add(
  faGear,
  faCircleUser,
  faTags,
  faArrowRight,
  faHouse,
  faMagnifyingGlass,
  faUser
);

function App() {
  const middleCards = [
    {
      title: "Settings",
      key: "settingsButton",
      icon: faGear,
      function: null,
      type: "default",
      icon__1: faArrowRight,
    },
    {
      title: "Profile",
      key: "profileButton",
      icon: faCircleUser,
      function: null,
      type: "default ",
      icon__1: faArrowRight,
    },
    {
      title: "Preferences",
      key: "preferencesButton",
      icon: faTags,
      function: null,
      type: "default",
      icon__1: faArrowRight,
    },
  ];
  return (
    <div>
      <Header></Header>
      <Horizontal></Horizontal>
      <Middle
        title={middleCards[0].title}
        icon={middleCards[0].icon}
        icon__1={middleCards[0].icon__1}
      ></Middle>
      <Middle
        title={middleCards[1].title}
        icon={middleCards[1].icon}
        icon__1={middleCards[1].icon__1}
      ></Middle>
      <Middle
        title={middleCards[2].title}
        icon={middleCards[2].icon}
        icon__1={middleCards[2].icon__1}
      ></Middle>
      <Horizontal></Horizontal>

      <Bottom></Bottom>
      <Footer></Footer>
    </div>
  );
}

export default App;
