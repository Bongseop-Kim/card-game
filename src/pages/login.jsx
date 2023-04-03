import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { Layout } from "../components/Layout";
import "../styles.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <Layout>
      <div className="w-3/4 ">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-medium mb-6">Login</h2>
          <InputField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button buttonName={"Login"} />
        </form>
      </div>
    </Layout>
  );
};
