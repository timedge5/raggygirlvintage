import { Header } from "./components/Header";
import { Main } from "./routes/Main";

export const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="pt-12 lg:pt-16">
        <Main />
      </div>
    </div>
  );
};
