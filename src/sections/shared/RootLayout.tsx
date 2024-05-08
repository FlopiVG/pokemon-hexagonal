import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Typography from './Typography';
import NavItem from './NavItem';
import Navbar from 'navbar/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Suspense fallback="loading">
        <Navbar />
      </Suspense>
      <div className="flex gap-8">
        <div className="w-1/6">
          <Typography as="h1" variant="title" className="text-center">
            Pokédex
          </Typography>
          <nav className="m-4">
            <ul>
              <NavLink to="/">
                {({ isActive }) => (
                  <NavItem active={isActive} iconName="house">
                    Home
                  </NavItem>
                )}
              </NavLink>
              <NavLink to="/pokemon">
                {({ isActive }) => (
                  <NavItem active={isActive} iconName="box">
                    Pokemon
                  </NavItem>
                )}
              </NavLink>
              <NavLink to="/trainer">
                {({ isActive }) => (
                  <NavItem active={isActive} iconName="people">
                    Trainers
                  </NavItem>
                )}
              </NavLink>
              <NavLink to="/analytic">
                {({ isActive }) => (
                  <NavItem active={isActive} iconName="analytics">
                    Analytics
                  </NavItem>
                )}
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="w-5/6 bg-slate-200 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
