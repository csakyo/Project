'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // ここで email 送信 / DB 保存など
  console.log({ name, email, message });

  return { success: true };
}
