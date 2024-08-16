"use server";

import prisma from "@/lib/prisma";
import { clienteSchema } from "@/validations/clientSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createCliente(data: z.infer<typeof clienteSchema>) {
  const { nombres, email, direccion, fono } = data;

  await prisma.cliente.create({
    data: {
      nombres,
      email,
      direccion,
      fono
    },
  });

  revalidatePath("/clientes");
  redirect("/clientes");
}

export async function updateCliente(id: number, data: z.infer<typeof clienteSchema>) {
  const { nombres, email, direccion, fono } = data;

  await prisma.cliente.update({
    where: {
      id: id
    },
    data: {
      nombres,
      email,
      direccion,
      fono
    },
  });

  revalidatePath("/clientes");
  redirect("/clientes");
}

export async function removeCliente(formData: FormData) {
  const id = formData.get("id")?.toString();

  if (!id) {
    return;
  }

  await prisma.cliente.delete({
    where: {
      id: parseInt(id),
    },
  });

  revalidatePath("/clientes");
}

export async function getClientes() {
  return await prisma.cliente.findMany();
}

export async function getClienteById(id: number) {
  return await prisma.cliente.findUnique({
    where: { id },
  });
}