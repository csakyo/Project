'use client';

import { useState } from 'react';
import { submitContactForm } from './actions';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('送信中…');

    const result = await submitContactForm(formData);

    if (result?.success) {
      setStatus('送信が完了しました！');
    } else {
      setStatus('エラーが発生しました');
    }
  }

  return (
    <div className='max-w-lg mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>お問い合わせ</h1>

      <form action={handleSubmit} className='flex flex-col gap-4'>
        <label className='flex flex-col'>
          お名前
          <input
            type='text'
            name='name'
            required
            className='border p-2 rounded'
          />
        </label>

        <label className='flex flex-col'>
          メールアドレス
          <input
            type='email'
            name='email'
            required
            className='border p-2 rounded'
          />
        </label>

        <label className='flex flex-col'>
          メッセージ
          <textarea
            name='message'
            required
            rows={4}
            className='border p-2 rounded'
          />
        </label>

        <button
          type='submit'
          className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
        >
          送信
        </button>
      </form>

      {status && <p className='mt-3 text-sm text-gray-700'>{status}</p>}
    </div>
  );
}
