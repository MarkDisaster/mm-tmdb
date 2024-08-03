import { z } from 'zod';

export const schema = z.object({
   username: z.string().min(1, 'Uživatelské jméno je vyžadováno'),
   password: z.string().min(1, 'Heslo je vyžadováno'),
});
