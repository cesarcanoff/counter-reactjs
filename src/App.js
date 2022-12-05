import { GlobalStyle } from "./css/global";
import { CounterContainer } from "./components/CounterContainer";
import { Button } from "./components/Button";
import { ButtonContainer } from "./components/ButtonContainer";
import { ContainerDisplay } from "./components/Display/styles";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  let iterateCounter = () => {
    setCounter(counter + 1);
  };

  let uniterateCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <GlobalStyle />
      <CounterContainer>
        <ContainerDisplay>
          <p>{counter}</p>
        </ContainerDisplay>
        <ButtonContainer>
          <Button text="-" position="left" onClick={uniterateCounter} />
          <Button text="+" position="right" onClick={iterateCounter} />
        </ButtonContainer>
      </CounterContainer>
    </div>
  );
}

export default App;
