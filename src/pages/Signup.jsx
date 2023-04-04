import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { InputField } from "../components/InputField";

export const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = form;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    await axios
      .post("http://localhost:8000/api/users/signup", JSON.stringify(form), {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
  };

  return (
    <div className="w-3/4 ">
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium mb-6">Sign up</h2>
        <InputField label="Email" type="email" id="email" name="email" value={email} onChange={onChange} />
        <InputField label="Name" id="name" name="name" value={name} onChange={onChange} />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Button type="button" text="Sign up" className="bg-green-500 hover:bg-green-600" onClick={handleSignup} />
      </section>
    </div>
  );
};
