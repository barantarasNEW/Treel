import Tree from "../Tree";
import Arrows from "../Arrows";
import "./styles.scss";

const App = (): JSX.Element => {
  return (
    <main className="main">
      <Tree />

      <Arrows />
    </main>
  );
};

export default App;
