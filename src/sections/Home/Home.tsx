import Main from "./components/Main";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar />
    <section className="pb-[2rem] px-[1rem] tablet:px-[1rem] laptop:px-[1rem] desktop:px-[2rem] flex justify-center bg-[url('/src/assets/Home/HomeBg.jpeg')] bg-cover rounded-lg">
      <div className="w-[1400px] w-max-[1400px]">
        <Main />
      </div>
    </section>
    </>
  );
}