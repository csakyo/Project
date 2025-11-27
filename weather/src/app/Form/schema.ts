import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
