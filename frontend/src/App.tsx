import { AsideBar } from "./components/AsideBar";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Container, GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
    <Header />

    <Container>
      <AsideBar />
      <Dashboard />
    </Container>

    <GlobalStyle />
    </>
  );
}
