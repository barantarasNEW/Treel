import Main from "./components/Main";
import Header from "./components/Header";
import { useApp } from "./hooks/useApp";
import { TreeContext } from "./context";
import "./styles/normalize.scss";

const App = (): JSX.Element => {
  const {
    translateX,
    translateY,
    zoomLevel,
    setTranslateX,
    setTranslateY,
    setZoomLevel,
  } = useApp();

  return (
    <TreeContext.Provider
      value={{
        translateX,
        translateY,
        zoomLevel,
        setZoomLevel,
        setTranslateX,
        setTranslateY,
      }}
    >
      <div className="container">
        <Header />

        <Main />
      </div>
    </TreeContext.Provider>
  );
};

export default App;
