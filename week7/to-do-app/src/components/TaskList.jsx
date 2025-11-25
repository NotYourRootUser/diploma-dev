export default function TaskList({ taskArray }) {
  return (
    <div>
      {taskArray.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  );
}
