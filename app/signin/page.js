"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }
      router.push("/dashboard"); // change to your post-login page
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

    return (
        <>

            <div className="sign-form-area bg-13">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 m-auto">
                            <div className="sign-form-wrap">
                                <div className="sign-logo text-center">
                                    <Link href="/"><img src="/assets/img/logo/site-logo-6.svg" alt="" /></Link>
                                </div>
                                <div className="sign-form">
                                    <div className="form-heading">
                                        <h3>Sign In</h3>
                                        <p>
                                            Welcome back! Enter your email and password below to sign in
                                        </p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="email">EMAIL </label>
                                        <input type="email"  id="email" placeholder="Enter Your Email" value={email}
                                        onChange={(e) => setEmail(e.target.value)} required/>
                                        <label htmlFor="password">PASSWORD</label>
                                        <input type="password" name="password" id="password" placeholder="Enter Your Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} required/>
                                        <div className="theme-input-group">
                                            <div className="check-box-wrap">
                                                <input className="check-box" 
                                                 type="checkbox"
                                                id="keep-logged-in"
                                                checked={remember}
                                                onChange={(e) => setRemember(e.target.checked)} />
                                                <label htmlFor="check-box">Keep me logged in</label>
                                            </div>
                                            <Link href="/forgot">Forgot Password?</Link>
                                        </div>
                                        {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}
                                        <div className="space40" />
                                        <button type="submit" className="theme-btn-11 full-btn" disabled={loading}>
                                            {loading ? "Signing In..." : "Sign In"}
                                        </button>
                                    </form>
                                    <div className="space20" />
                                    <h4>
                                        Already have an account?
                                        <Link href="/signup">Create for free</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}