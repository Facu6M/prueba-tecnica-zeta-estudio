import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center gap-6 w-full  ">
        <Link
          to="/"
          className="text-warning hover:underline mt-6"
          aria-label="Ir a la página de inicio"
        >
          Inicio
        </Link>
        <p className="text-base font-custom text-warning text-center">
          &copy; 2025 . Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <Link
            to="/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a la politica y privacidad"
            className="text-warning text-sm hover:underline first-line:"
          >
            Terminos y condiciones
          </Link>
          <Link
            to="/privacy-and-policy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a la politica y privacidad"
            className="text-warning text-sm hover:underline first-line:"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
