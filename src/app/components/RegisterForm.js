import Link from "next/link"
import "../styles/auth.css" // Import the CSS file

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export function RegisterForm() {
  return (
    <div className="auth-card">
      <div className="auth-card-header">
        <h1 className="auth-card-title">Sign Up</h1>
        <p className="auth-card-description">
          Enter your information to create an account
        </p>
      </div>
      <div className="auth-card-content">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="first-name" className="auth-card-label">First name</label>
              <input id="first-name" className="auth-input" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="last-name" className="auth-card-label">Last name</label>
              <input id="last-name" className="auth-input" placeholder="Robinson" required />
            </div>
          </div>
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
            <label htmlFor="password" className="auth-card-label">Password</label>
            <input id="password" type="password" className="auth-input" required />
          </div>
          <button type="submit" className="auth-button">Create an account</button>
          <button type="button" className="auth-button-outline">Sign up with Google</button>
        </div>
        <div className="auth-footer-text">
          Already have an account?{" "}
          <Link href="../login" className="auth-link">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
