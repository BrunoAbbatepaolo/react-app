import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [isloading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isloading);

  const list = ["Goku", "Tanjiro", "Eren"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
      <Button isLoading={isloading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
}

export default App;
