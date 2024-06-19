"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function Upload() {
  const [formData, setFormData] = useState({
    name: "",
    cargo: "",
    role: "sec",
    myFile: "",
  });
  const [error, setError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { name, cargo, role, myFile } = formData;

    if (!name || !cargo || !role || !myFile) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const res = await fetch("/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setError("");
        setRegistrationMessage("Usuário registrado com sucesso!");
      }
    } catch (error) {
      setError("Erro, tente novamente ou consulte o administrador");
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData({
      ...formData,
      myFile: base64,
    });
  };

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="max-w-md mx-auto m-4 bg-white p-6 rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            placeholder="Nome"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="cargo"
            value={formData.cargo}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            placeholder="Cargo"
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            required
          >
            <option value="sec">sec</option>
            <option value="ddc">ddc</option>
            <option value="ddcr">ddcr</option>
            <option value="ddl">ddl</option>
            <option value="ddi">ddi</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400"
            accept="image/*"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Registrar
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {registrationMessage && (
          <p className="text-green-500">{registrationMessage}</p>
        )}
      </form>
    </div>
  );
}
