'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactSchema } from './schema';
import { submitContactForm } from './actions';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactSchema) {
    setStatus('送信中…');

    const result = await submitContactForm(data);

    if (result?.success) {
      setStatus('送信が完了しました！');
      reset();
    } else {
      setStatus('エラーが発生しました');
    }
  }

  return (
    <div className='max-w-lg mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>お問い合わせ</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
        {/* お名前 */}
        <label className='flex flex-col'>
          お名前
          <input
            type='text'
            {...register('name')}
            className='border p-2 rounded'
          />
          {errors.name && (
            <p className='text-red-600 text-sm mt-1'>{errors.name.message}</p>
          )}
        </label>

        {/* メールアドレス */}
        <label className='flex flex-col'>
          メールアドレス
          <input
            type='email'
            {...register('email')}
            className='border p-2 rounded'
          />
          {errors.email && (
            <p className='text-red-600 text-sm mt-1'>{errors.email.message}</p>
          )}
        </label>

        {/* メッセージ */}
        <label className='flex flex-col'>
          メッセージ
          <textarea
            {...register('message')}
            rows={4}
            className='border p-2 rounded'
          />
          {errors.message && (
            <p className='text-red-600 text-sm mt-1'>
              {errors.message.message}
            </p>
          )}
        </label>

        <button
          type='submit'
          disabled={isSubmitting}
          className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400'
        >
          {isSubmitting ? '送信中…' : '送信'}
        </button>
      </form>

      {status && <p className='mt-3 text-sm text-gray-700'>{status}</p>}
    </div>
  );
}
