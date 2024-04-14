import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { PopularCardList } from "./components/CardList/PopularCardList";
import { NewCardList } from "./components/CardList/NewCardList";


export default function Home() {
  return (
    <main className="main">
      <Banner/>
      <PopularCardList/>
      <NewCardList/>
      <Promo/>
    </main>
  );
}
