import { Carousel, Recomendation } from "../components/";
const Home = () => {
  return (
    <main className="max-w-6xl m-auto w-full min-h-screen flex flex-col justify-center gap-8">
      <Carousel />
      <Recomendation />
    </main>
  );
};

export default Home;
