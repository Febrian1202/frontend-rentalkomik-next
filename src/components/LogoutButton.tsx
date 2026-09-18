import { logoutAction } from "../app/logout/actions";

function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit" className="logout-button">
        Logout
      </button>
    </form>
  );
}
export default LogoutButton;
