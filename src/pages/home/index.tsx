import { HomeProvider } from "./context/provider";
import { HomePage } from "./homePage";

export default function Home() {
  return (
    <HomeProvider>
      <HomePage />
    </HomeProvider>
  );
}
