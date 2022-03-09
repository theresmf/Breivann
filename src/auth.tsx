import { useState } from "react";
import { supabase } from "./server/superbaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [ps, setPs] = useState("");

  const handleLogin = async (email: string, ps: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password: ps });
      if (error) throw error;
      alert("Could not sign you up because of " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>{" "}
        <div>
          <input
            className="inputField"
            type="password"
            placeholder="Your password"
            value={ps}
            onChange={(e) => setPs(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email, ps);
            }}
            className={"button block"}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Sign up</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
