// app/clientes/update/[id]/page.tsx
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import FormUpdateCliente from "./form-update-cliente";
import type { ClienteUpdate } from "@/validations/clientSchema";

export default async function UpdateClientePage({params}: {
  params: {
    id: string
  }
}) {
  const id = parseInt(params.id);
  const cliente = await prisma.cliente.findUnique({
    where: {
      id: id
    }
  });

  if (!cliente) {
    redirect("/clientes");
  }

  const clienteData: ClienteUpdate = {
    id: cliente.id,
    nombres: cliente.nombres,
    email: cliente.email,
    direccion: cliente.direccion,
    fono: cliente.fono
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-3xl font-bold">
      <FormUpdateCliente cliente={clienteData} />
    </div>
  );
}