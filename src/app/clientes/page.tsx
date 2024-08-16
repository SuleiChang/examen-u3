import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getClientes } from "@/actions/client-actions";
import ClienteTable from "@/components/table-cliente";

export default async function Clientes() {
  const clientes = await getClientes();

  return (
    <div>
      <div className="flex justify-end items-center pt-16">
        <Link href="/clientes/create">
          <Button>
            Registrar cliente
          </Button>
        </Link>
      </div>
      <div className="flex min-h-screen flex-col items-center pb-24 ">
        <h1 className="text-3xl font-bold mb-10">Clientes</h1>
        <ClienteTable clientes={clientes} />
      </div>
    </div>
  );
}