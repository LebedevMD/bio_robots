import Wallet from "./Components/Wallet/Wallet.jsx";
import "./Styles/MainStyle.css";
import Header from "./Components/Header/Header.jsx";
import Title from "./Components/Title/Title.jsx"
import {useState} from "react";

function App() {
    const [coins, setCoins] = useState(0);


  return (
    <div className="App">
        <Header />
        <Title number={'01'} />
        <Wallet
            number={'02'}
            coins={coins}
            setCoins={setCoins}
        />
    </div>
  );
}

export default App;
