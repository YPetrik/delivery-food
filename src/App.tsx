import { Button } from "./components/Button/index";
import { Input } from "./components/Input/index";

export const App = () => {
  return (
    <>
      <Button onClick={() => console.log("Click")}> Hello </Button>
      <Input placeholder="email" />
    </>
  );
}; 