import { Header, Layout, Card, Main, Footer, Slider } from "./components";
import AppContext from "./context/AppContext";
import HeaderContext from "./context/HeaderContext";

function App() {
  return (
    <AppContext>
      <Layout>
        <Card>
          <HeaderContext>
            <Header />
          </HeaderContext>
          <Main />
          <Slider />
          <Footer />
        </Card>
      </Layout>
    </AppContext>
  );
}

export default App;
