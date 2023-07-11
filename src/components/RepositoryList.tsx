import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const getReposGit = async () => {
    const resp = await fetch("https://api.github.com/orgs/rocketseat/repos");
    const respJson = await resp.json();

    setRepositories(respJson);
  };

  useEffect(() => {
    getReposGit();
  }, []);

  return repositories.length ? (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  ) : (
    <p>nenhum repositorio</p>
  );
}
