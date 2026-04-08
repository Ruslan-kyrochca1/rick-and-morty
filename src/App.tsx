import { Route, Routes } from 'react-router-dom';
import Main from './page/Main/Main';

import NotFount from './page/NotFount';
import { publicRoute } from './route/publicRoute';
import MainLayout from './components/templates/MainLayout/MainLayout';
import Character from './page/Character/Character';
import Episode from './page/Episode/Episode';
import Location from './page/Location/Location';
import { AuthProvider } from './contect/AuthProvider';
import ProtectedRoute from './components/utils/ProtectedRoute';
import { Component } from './components/utils/ComponentName';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path={publicRoute.home} element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route element={<ProtectedRoute />}>
              <Route path={publicRoute.characters} element={<Component name="Characters" />} />
              <Route path={`${publicRoute.characters}/:id`} element={<Character />} />
              <Route path={publicRoute.episodes} element={<Component name="Episodes" />} />
              <Route path={`${publicRoute.episodes}/:id`} element={<Episode />} />
              <Route path={publicRoute.locations} element={<Component name="Locations" />} />
              <Route path={`${publicRoute.locations}/:id`} element={<Location />} />
            </Route>
            <Route path={publicRoute.login} element={<Component name="Login" />} />
            <Route path="*" element={<NotFount />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
