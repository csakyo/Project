import { PrismaClient } from '@prisma/client';
import { auth } from '@/auth';
import { addTodo, toggleTodo } from './actions';

const prisma = new PrismaClient();

export default async function TodoPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return <p>ログインしてください</p>;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return <p>ユーザーが見つかりません</p>;
  }

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
  });

  return (
    <main>
      <h1>Todo</h1>

      <form
        action={async (formData) => {
          'use server';
          const title = formData.get('title') as string;
          if (!title) return;
          await addTodo(title);
        }}
      >
        <input name='title' />
        <button type='submit'>追加</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <form
              action={async () => {
                'use server';
                await toggleTodo(todo.id, todo.completed);
              }}
            >
              <button type='submit'>{todo.completed ? '☑' : '☐'}</button>
            </form>
            {todo.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
