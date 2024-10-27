import Advantages from "./components/Advantages";
import ModelsGallery from "./components/ModelsGallery";
import WelcomeMessage from "./components/WelcomeMessage";

export default function Home() {
  return (
    <>
      <WelcomeMessage />
      <Advantages />
      <ModelsGallery />
    </>
  );
}
