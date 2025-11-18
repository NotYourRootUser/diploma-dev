import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


const message1 = "Hey you";
const message2 = "What's going on";
function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>{message1}</h2>
      <p>{message2 + "??"}</p>
       <Header />
      <Footer />
    </>
  );
}

export default App;
