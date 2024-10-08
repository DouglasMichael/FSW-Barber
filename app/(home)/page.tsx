import Image from "next/image";
import { format } from "date-fns"
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Fulano!</h2>
        <p className="capitalize">
          {format(new Date(), "EEEE',' d 'de' MMMM 'de' yyyy", { locale: ptBR })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search/>
      </div>
    </>
  );
}
