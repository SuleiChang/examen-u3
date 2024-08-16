// app/clientes/update/[id]/form-update-cliente.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateCliente } from "@/actions/client-actions";
import { clienteUpdateSchema, ClienteUpdate } from "@/validations/clientSchema";

interface FormUpdateClienteProps {
  cliente: ClienteUpdate;
}

function FormUpdateCliente({ cliente }: FormUpdateClienteProps) {
  const form = useForm<ClienteUpdate>({
    resolver: zodResolver(clienteUpdateSchema),
    defaultValues: {
      id: cliente.id,
      nombres: cliente.nombres,
      email: cliente.email,
      direccion: cliente.direccion,
      fono: cliente.fono,
    }
  });

  const onSubmit = async (data: ClienteUpdate) => {
    try {
      await updateCliente(data.id, data);
      console.log("Cliente actualizado correctamente");
      // Aquí podrías añadir alguna notificación de éxito o redirección
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
      // Aquí podrías añadir alguna notificación de error
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Actualizar Cliente</CardTitle>
            <CardDescription>
              Actualiza la información del cliente.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="nombres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombres del Cliente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email del Cliente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="direccion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Input placeholder="Dirección del Cliente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input placeholder="Teléfono del Cliente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Actualizar Cliente</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default FormUpdateCliente;