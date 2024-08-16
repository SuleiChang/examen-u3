import { z } from "zod";

export const clienteSchema = z.object({
  nombres: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El nombre debe tener 50 caracteres o menos"),
  email: z
    .string()
    .email("Email inválido")
    .max(100, "El email debe tener 100 caracteres o menos"),
  direccion: z
    .string()
    .min(1, "La dirección es requerida")
    .max(100, "La dirección debe tener 100 caracteres o menos"),
  fono: z
    .string()
    .min(1, "El teléfono es requerido")
    .max(20, "El teléfono debe tener 20 caracteres o menos"),
});

export const clienteUpdateSchema = clienteSchema.extend({
  id: z.number(),
});

export type ClienteUpdate = z.infer<typeof clienteUpdateSchema>;
