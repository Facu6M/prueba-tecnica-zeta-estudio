/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { toast } from "sonner";

type Order = {
  id: string;
  order_num: string;
  channel: string;
  delivery_date: string;
  created_at: string;
  customer_name: string;
  delivery_time: string;
  actions: string;
};

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch(
          "https://67aa117865ab088ea7e58c36.mockapi.io/api/v1/order"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  const deleteOrder = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    toast.success("Eliminaste con exito la fila");
  };

  return { orders, loading, error, deleteOrder };
}
