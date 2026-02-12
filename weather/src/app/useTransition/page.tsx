'use client';

import { useState, useTransition } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

export default function Page() {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 入力は即時更新（高優先度）
    setInputValue(value);

    // フィルタは低優先度
    startTransition(() => {
      setQuery(value);
    });
  };

  return (
    <div>
      <h1>useTransition あり</h1>

      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='検索してみて'
      />

      {isPending && <p>検索中...</p>}

      <p>{filtered.length} 件ヒット</p>

      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
