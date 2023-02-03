export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: { todos: data },
  };
};

export default function todosList({ todos, id }) {
  return todos.map((todo) => (
    <div key={id}>
      <h2>{todo.userId}</h2>
      <p>{todo.title}</p>
    </div>
  ));
}
