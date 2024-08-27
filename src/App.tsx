import { Provider } from "react-redux";
import { ConfigProviders } from "./components/ConfigProviders";
// import LoginPage from "./pages/public/LoginPage";
import LoginLayout from "./template/loginLayout";
import appStore from "./store/store";
// import { Routes } from "./routes";
// import { MainLayoutProvider } from "./template/mainLayout/context";

function App() {
  return (
    <Provider store={appStore}>
      <ConfigProviders>
        <LoginLayout />
        {/* <LoginPage /> */}
        {/* <MainLayoutProvider>
        <Routes />
      </MainLayoutProvider> */}
      </ConfigProviders>
    </Provider>
  );
}

export default App;
