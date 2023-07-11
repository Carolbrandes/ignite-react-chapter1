interface RepositoriyItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export default function RepositoryItem({ repository }: RepositoriyItemProps) {
  const { name, description, html_url } = repository;
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={html_url}>acessar repositorio</a>
    </li>
  );
}
