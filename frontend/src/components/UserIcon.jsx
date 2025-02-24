import {
  FaUser,
  FaSignOutAlt,
  FaEdit,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa"; // Importa los íconos necesarios
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function UserIcon() {
  const token = useSelector((state) => state.auth.token);

  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleToggle = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <div className="App z-3">
      <Dropdown show={open} onToggle={handleToggle}>
        <Dropdown.Toggle
          as={Link}
          to="#"
          id="dropdown-basic"
          className="menu_trigger d-flex align-items-center p-0 border-0 bg-transparent"
          onClick={() => setOpen(!open)}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className={`dropdown-menu border shadow-lg z-3 text-decoration-none bg-white ${
            open ? "show" : ""
          }`}
          ref={menuRef}
          style={{ right: 0, left: "auto" }} // Menú a la derecha
        >
          <Dropdown.Header>
            {token === "" ? "" : "Nombre de usuario"}
          </Dropdown.Header>
          {token !== "" ? (
            <>
              <Dropdown.Item as={Link} to="/user">
                <FaUser className="dropdown-icon me-2" />
                Mi Perfil
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/ordenes">
                <FaEdit className="dropdown-icon me-2" />
                Ordenes
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/logout">
                <FaSignOutAlt className="dropdown-icon me-2" />
                Cerrar Sesión
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item as={Link} to="/login">
                <FaSignInAlt className="dropdown-icon me-2" />
                Iniciar Sesión
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/signup">
                <FaUserPlus className="dropdown-icon me-2" />
                Registrarse
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default UserIcon;
