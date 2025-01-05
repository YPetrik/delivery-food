import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Карзина</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
