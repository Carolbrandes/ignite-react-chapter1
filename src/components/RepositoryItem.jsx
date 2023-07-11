export default function RepositoryItem({ repositorie }) {
  console.log(
    "🚀 ~ file: repositorieItem.jsx:2 ~ repositorieItem ~ repositorie:",
    repositorie
  );
  const { name, description, html_url } = repositorie;
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={html_url}>acessar repositorio</a>
    </li>
  );
}
