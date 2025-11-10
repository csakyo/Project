'use client';

import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.reply) {
      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
    }
  };

  return (
    <main className='flex flex-col items-center p-6'>
      <h1 className='text-2xl font-bold mb-4'>🤖 AI Chat</h1>

      <div className='w-full max-w-md border rounded-lg p-4 h-96 overflow-y-auto bg-gray-50'>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.role === 'user'
                ? 'text-right text-blue-700'
                : 'text-left text-green-700'
            }`}
          >
            <p className='p-2 inline-block rounded-lg bg-white shadow-sm'>
              {msg.text}
            </p>
          </div>
        ))}
        {loading && <p className='text-center text-gray-400'>AIが考え中...</p>}
      </div>

      <div className='flex w-full max-w-md mt-4'>
        <input
          className='flex-1 border rounded-l p-2'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='メッセージを入力...'
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className='bg-blue-500 text-white px-4 rounded-r'
          onClick={sendMessage}
          disabled={loading}
        >
          送信
        </button>
      </div>
    </main>
  );
}
