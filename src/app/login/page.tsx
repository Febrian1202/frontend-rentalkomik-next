import { loginAction } from "./actions";

function HalamanLogin() {
  return (
    <div className="app-login">
      <form className="login-form" action={loginAction}>
        <h2>Masuk ke RentalKomik Mini</h2>
        <label>
          Email
          <input
            type="email"
            name="email"
            defaultValue="test@example.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            defaultValue="password"
            required
          />
        </label>
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
}

export default HalamanLogin;
