import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

export default function RepositoryList() {
  const repository = {
    name: "unform",
    description: "forms in react",
    link: "",
  };
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
