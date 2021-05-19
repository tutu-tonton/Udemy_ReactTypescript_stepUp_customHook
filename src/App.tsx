import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import "./styles.css";

// const user = {
//   id: 1,
//   name: "hogehoge",
//   email: "gg@gmail.com",
//   address: "tokyo"
// };
export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
