'use server';

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}) {
  console.log('受信データ:', data);

  // ここでメール送信や DB 保存

  return { success: true };
}
