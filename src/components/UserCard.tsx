import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};
export const UserCard: VFC<Props> = (props) => {
  const { user } = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0rem 1rem",
    margin: ".5rem",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2)"
  };

  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
