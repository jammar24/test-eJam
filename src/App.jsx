import "./App.css";
import Buttomgr from "./Pages/Buttomgr";
import Check from "./Pages/Check";
import Containermain from "./Pages/Containermain";
import Description from "./Pages/Description";
import Footer from "./Pages/Footer";
import Info from "./Pages/Info";
import List from "./Pages/List";
import Namemain from "./Pages/Namemain";
import Navbar from "./Pages/Navbar";
import Navbarsecond from "./Pages/Navbarsecond";
import Review from "./Pages/Review";

function App() {
  return (
    <> 
    <div className="app">
      <Navbar />
      <Navbarsecond />
      <Namemain />
      <Check />
      <Description />
      <Containermain />
      <List />
      <Buttomgr />
      <Review />

      <Info />
      <Footer />
      </div>
    </>
  );
}

export default App;
