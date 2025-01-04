import { Button } from "./components/Button/index";

export const App = () => {
  return (
    <>
      <Button onClick={() => console.log("Click")}> Hello </Button>
    </>
  );
};
