export default function RepositoryItem({ repository }) {
  console.log(
    "🚀 ~ file: RepositoryItem.jsx:2 ~ RepositoryItem ~ repository:",
    repository
  );
  const { name, description, link } = repository;
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={link}>acessar repositorio</a>
    </li>
  );
}
