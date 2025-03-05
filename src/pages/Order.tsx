import { Eye, X } from "@phosphor-icons/react";
import LoadingSpinner from "../components/LoadingSpinner";
import { formatDate } from "../helpers/formatDate";
import { useOrders } from "../hooks/useOrders";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useState } from "react";
import ModalConfirm from "../components/ModalConfirm";
import { useAuthContext } from "../providers/AuthContext";
import { toast } from "sonner";

export default function Order() {
  const { orders, loading, deleteOrder } = useOrders();
  const { logout } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState<string | null>(null);

  const columns = [
    { key: "orderNumber", label: "Numero de orden" },
    { key: "entryMethod", label: "Medio de ingreso" },
    { key: "creationDate", label: "Fecha de creación" },
    { key: "customerName", label: "Nombre del cliente" },
    { key: "deliveryDay", label: "Fecha de entrega" },
    { key: "deliveryTime", label: "Hora de entrega" },
    { key: "actions", label: "Acciones" },
  ];

  const handleDelete = (id: string) => {
    deleteOrder(id);
  };

  const handleOpenModal = (id: string) => {
    setOrderToDelete(id);
    setIsOpen(true);
  };

  const handleLogout = () => {
    logout();
    toast.error("Sesión cerrada");
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="overflow-x-auto w-full bg-gray-50 p-6">
      <p className="text-3xl text-center font-bold p-8">Mis ordenes</p>
      <p
        className="text-end text-sm text-red-500 mb-4 cursor-pointer mr-4"
        onClick={handleLogout}
      >
        Cerrar sesion
      </p>
      <Table className="rounded-lg shadow-md bg-white">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              className="py-3 px-6 text-left text-sm font-semibold text-gray-800"
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const { datePart: deliveryDay, timePart: deliveryTime } =
              formatDate(order.delivery_time);
            return (
              <TableRow key={order.id} className="border-b hover:bg-gray-50">
                <TableCell className="py-3 px-6 text-black">
                  {order.order_num}
                </TableCell>
                <TableCell className="py-3 px-6 text-black">
                  {order.channel}
                </TableCell>
                <TableCell className="py-3 px-6 text-black">
                  {formatDate(order.created_at).datePart}
                </TableCell>
                <TableCell className="py-3 px-6 text-black">
                  {order.customer_name}
                </TableCell>
                <TableCell className="py-3 px-6 text-black">
                  {deliveryDay}
                </TableCell>
                <TableCell className="py-3 px-6 text-black">
                  {deliveryTime}
                </TableCell>
                <TableCell className="py-3 px-6 flex flex-row gap-4 text-black">
                  <div
                    className="p-1 border-2 border-red-500 cursor-pointer"
                    onClick={() => handleOpenModal(order.id)}
                  >
                    <X className="text-sm w-6 h-6" color="red" />
                  </div>
                  <div className="p-1 border-2 border-blue-500">
                    <Eye
                      className="text-sm w-6 h-6 cursor-pointer"
                      color="blue"
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <ModalConfirm
        headerText="¿Estas seguro que queres borrar este fila ?"
        onAction={() => orderToDelete && handleDelete(orderToDelete)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
