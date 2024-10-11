import Image from "next/image";
import { format } from "date-fns"
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookinItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/Barbershop-item";
import { Button } from "../_components/ui/button";

export default async function Home() {
  const barbershop = await db.barbershop.findMany({})
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

      <div className="px-5 mt-6">
        <h2 className="uppercase text-gray-400 text-xs font-bold mb-3">Agendamentos</h2>
        <BookinItem/>
      </div>

      <div className="mt-6">
        <h2 className="px-5 uppercase text-gray-400 text-xs font-bold mb-3">Recomendados</h2>

        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="px-5 uppercase text-gray-400 text-xs font-bold mb-3">Populares</h2>

        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
    </>
  );
}
