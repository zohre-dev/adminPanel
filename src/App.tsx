import { Provider } from "react-redux";
import { ConfigProviders } from "./components/ConfigProviders";
import appStore from "./store/store";
import { Routes } from "./routes";

function App() {
  return (
    <Provider store={appStore}>
      <ConfigProviders>
        <Routes />
      </ConfigProviders>
    </Provider>
  );
}

export default App;
