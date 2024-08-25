import { ConfigProviders } from "./components/ConfigProviders";
import { Routes } from "./routes";
import { MainLayoutProvider } from "./template/mainLayout/context";

function App() {
  return (
    <ConfigProviders>
      <MainLayoutProvider>
        <Routes />
      </MainLayoutProvider>
    </ConfigProviders>
  );
}

export default App;
