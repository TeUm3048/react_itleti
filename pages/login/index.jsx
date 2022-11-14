import css from "../../styles/Login.module.css"
export default function LoginPage() {
  return (
    <div className={css.login_wrapper}>
      <div className={css.login_inner}>
        <h2 className={css.login_title}>Login</h2>
        <form className={css.form_box}>
          <div className={css.login_box}>
            <label>Username</label>
            <input type="text" placeholder="Ivan" />
          </div>
          <div className={css.login_box}>
            <label>Password</label>
            <input type="password" placeholder="Ivanov" />
          </div>
          <button type="submit" className={css.submit}>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}