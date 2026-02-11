'use client';

import { useActionState, useOptimistic, startTransition } from 'react';
import CountDisplay from '../components/CountDisplay';

const Counter: React.FC = () => {
  // useActionState でサーバーアクションを管理
  const [count, formAction, isPending] = useActionState(
    async (_prevState: number, formData: FormData) => {
      // 模擬的なサーバー遅延（2秒）
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const action = formData.get('action') as string;
      if (action === 'increment') {
        return _prevState + 1;
      } else if (action === 'decrement') {
        return _prevState - 1;
      }
      return _prevState;
    },
    0,
  );

  // useOptimistic で楽観的UIを実現
  const [optimisticCount, addOptimistic] = useOptimistic(
    count,
    (state, newValue: number) => newValue,
  );

  // 方法1: フォームアクション（startTransitionは不要）
  const handleSubmit = async (formData: FormData) => {
    const action = formData.get('action') as string;
    const delta = action === 'increment' ? 1 : -1;

    // 楽観的に即座にUIを更新
    addOptimistic(count + delta);

    // サーバーアクションを実行
    // フォームのaction属性経由なので、自動的にトランジション内で実行される
    formAction(formData);
  };

  // 方法2: onClickで直接呼ぶ場合（startTransitionが必要）
  const handleClickIncrement = () => {
    // 楽観的に即座にUIを更新
    addOptimistic(count + 1);

    // startTransitionで囲む必要がある
    startTransition(() => {
      const formData = new FormData();
      formData.set('action', 'increment');
      formAction(formData);
    });
  };

  const handleClickDecrement = () => {
    addOptimistic(count - 1);

    startTransition(() => {
      const formData = new FormData();
      formData.set('action', 'decrement');
      formAction(formData);
    });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-2 text-purple-900'>
          useOptimistic + useActionState
        </h1>
        <p className='text-center text-gray-600 mb-8'>
          楽観的UIとサーバーアクションの組み合わせ
        </p>

        <div className='bg-white rounded-lg shadow-xl p-8 mb-6'>
          <CountDisplay count={optimisticCount} label='カウント' />

          {isPending && (
            <div className='mt-4 text-center text-sm text-purple-600 animate-pulse'>
              処理中... (2秒待機)
            </div>
          )}

          {/* 方法1: フォームアクション（推奨） */}
          <div className='mt-6'>
            <h3 className='text-sm font-semibold text-gray-700 mb-2'>
              方法1: フォームアクション (startTransition不要)
            </h3>
            <form action={handleSubmit} className='flex gap-4 justify-center'>
              <button
                type='submit'
                name='action'
                value='increment'
                disabled={isPending}
                className='bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition'
              >
                ➕ 増やす
              </button>
              <button
                type='submit'
                name='action'
                value='decrement'
                disabled={isPending}
                className='bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition'
              >
                ➖ 減らす
              </button>
            </form>
          </div>

          {/* 方法2: onClickで直接呼ぶ */}
          <div className='mt-6 pt-6 border-t border-gray-200'>
            <h3 className='text-sm font-semibold text-gray-700 mb-2'>
              方法2: onClickで直接呼ぶ (startTransition必要)
            </h3>
            <div className='flex gap-4 justify-center'>
              <button
                onClick={handleClickIncrement}
                disabled={isPending}
                className='bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition'
              >
                ➕ 増やす (onClick)
              </button>
              <button
                onClick={handleClickDecrement}
                disabled={isPending}
                className='bg-rose-600 hover:bg-rose-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition'
              >
                ➖ 減らす (onClick)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
