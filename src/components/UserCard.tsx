import { User } from "../types/users";

interface Props {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard = ({ user, onDelete }: Props) => {
  return (
    <div style={{
      backgroundColor: "teal",
      color: "white",
      padding: "1rem",
      borderRadius: "8px",
      marginBottom: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <h2 style={{ margin: 0 }}>{user.name}</h2>
        <p style={{ margin: 0 }}>{user.email}</p>
      </div>
      <button
        style={{
          backgroundColor: "white",
          color: "teal",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "0.5rem 1rem",
          cursor: "pointer"
        }}
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserCard;
