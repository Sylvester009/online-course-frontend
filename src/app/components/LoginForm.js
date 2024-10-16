import Link from "next/link"
import "../styles/auth.css" // Import the CSS file

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function LoginForm() {
  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <h1 className="auth-card-title">Login</h1>
        <p className="auth-card-description">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="auth-card-content">
        <div className="grid gap-2">
          <label htmlFor="email" className="auth-card-label">Email</label>
          <input
            id="email"
            type="email"
            className="auth-input"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <label htmlFor="password" className="auth-card-label">Password</label>
            <Link href="#" className="auth-link" style={{ marginLeft: "auto" }}>
              Forgot your password?
            </Link>
          </div>
          <input id="password" type="password" className="auth-input" required />
        </div>
        <button type="submit" className="auth-button">Login</button>
        <button type="button" className="auth-button-outline">Login with Google</button>
      </div>
      <div className="auth-footer-text">
        Do not have an account?{" "}
        <Link href="../register" className="auth-link">
          Sign up
        </Link>
      </div>
    </div>
  )
}
