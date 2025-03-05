/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../providers/AuthContext";

export default function LoginComponent() {
  const { setToken, setIsAuth } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        toast.success("Logueado correctamente");
        setIsAuth(true);
      } else {
        setError(data.message || "Credenciales invalidas");
        toast.error("Credenciales invalidas");
      }
    } catch (error) {
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="shadow-lg p-8 rounded-xl w-96 ">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Iniciar sesión
        </h2>

        <form
          onSubmit={handleLogin}
          className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4"
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            labelPlacement="outside"
            label="Correo electrónico"
            placeholder="example@gmail.com"
            type="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            labelPlacement="outside"
            label="Contraseña"
            placeholder="..."
            type="password"
          />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <Button
            type="submit"
            color="primary"
            size="md"
            className="text-white-200 w-[100px] mx-auto"
            isLoading={isLoading}
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
