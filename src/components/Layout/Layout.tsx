import { NavLink, Outlet } from 'react-router-dom';
import { publicRoute } from '../../route/publicRoute';
import classes from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header>
        <nav className={classes.navbar}>
          <NavLink className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`} to={publicRoute.home}>
            Main
          </NavLink>
          <NavLink className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`} to={publicRoute.characters}>
            Characters
          </NavLink>
          <NavLink className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`} to={publicRoute.episodes}>
            Episodes
          </NavLink>
          <NavLink className={({ isActive }) => `${classes.item} ${isActive ? classes.active : ''}`} to={publicRoute.locations}>
            Locations
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
