import { useSelector } from "react-redux";

function DisplayUser() {
  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <article>
      <h3>Användarnamn: {user.username}</h3>
      <h3>E-post: {user.email}</h3>
    </article>
  );
}

export default DisplayUser;
