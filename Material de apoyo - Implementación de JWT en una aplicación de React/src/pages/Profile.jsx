import { useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const cart = {
    items: [
      { productId: "12345", name: "Producto A", quantity: 2, price: 25.99 },
      { productId: "67890", name: "Producto B", quantity: 1, price: 10.5 },
    ],
    totalPrice: 62.48,
  };

  const user = {
    id: "abc123",
    name: "Juan Pérez",
    email: "juan.perez@example.com",
  };

  useEffect(() => {
    try {
      // extraigo el token del local storage
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Error: Token no encontrado en el almacenamiento local.");
        return;
      }

      // seteo la url a la cual voy a hcacer una peticion para extraer data
      const url = "http://localhost:8080/api/checkouts";
      createCheckout(url, cart, user, token);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const createCheckout = async (url, cart, user, token) => {
    const response = await axios.post(
      url,
      { cart, user }, // payload
      // seteo los headers
      // envio estos headers dentro del objeto headers de axios o de la peticion
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("checkout creado", response.data);
    
    return response.data;
  };

  return <div>checkout</div>;
};
export default Profile;
