import { CircleNotch } from "@phosphor-icons/react";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <CircleNotch size={50} className="animate-spin text-gray-500" />
    </div>
  );
}
