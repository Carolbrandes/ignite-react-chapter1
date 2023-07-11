import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

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
        {repositories.map((repositorie) => (
          <RepositoryItem key={repositorie.name} repositorie={repositorie} />
        ))}
      </ul>
    </section>
  ) : (
    <p>nenhum repositorio</p>
  );
}
