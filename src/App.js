import "./App.css";
import ParentNav from "./components/ParentNav";
import CozyMain from "./components/CozyMain";
import CheckInOut from "./components/CheckInOut";
import CozyResort from "./components/CozyResort";
import CozyRoom from "./components/CozyRoom";
import Services from "./components/Services";
import Activity from "./components/Activity";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ParentNav></ParentNav>
      <CozyMain></CozyMain>
      <CheckInOut></CheckInOut>
      <CozyResort></CozyResort>
      {/* <CozyRoom></CozyRoom> */}
      {/* <Services></Services> */}
      {/* <Activity></Activity> */}
      {/* <Review></Review> */}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
