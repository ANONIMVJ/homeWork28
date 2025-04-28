import { useUsers, useDeleteUser } from "./hooks/users";
import UserCard from "./components/UserCard";

function App() {
  const { data: users, isLoading, isError } = useUsers();
  const deleteUser = useDeleteUser();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users.</div>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ color: "teal", textAlign: "center" }}>Users List</h1>
      {users?.map((user) => (
        <UserCard key={user.id} user={user} onDelete={(id) => deleteUser.mutate(id)} />
      ))}
    </div>
  );
}

export default App;
