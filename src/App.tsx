import { Route, Routes } from 'react-router-dom';
import Main from './page/Main/Main';
import Characters from './page/Characters';
import Episodes from './page/Episodes';
import Locations from './page/Locations';
import NotFount from './page/NotFount';
import { publicRoute } from './route/publicRoute';
import Layout from './components/Layout/Layout';
import Character from './page/Character/Character';
import Episode from './page/Episode/Episode';
import Location from './page/Location/Location';
import Login from './page/Login/Login';
import { AuthProvider } from './contect/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path={publicRoute.home} element={<Layout />}>
            <Route index element={<Main />} />
            <Route element={<ProtectedRoute />}>
              <Route path={publicRoute.characters} element={<Characters />} />
              <Route path={`${publicRoute.characters}/:id`} element={<Character />} />
              <Route path={publicRoute.episodes} element={<Episodes />} />
              <Route path={`${publicRoute.episodes}/:id`} element={<Episode />} />
              <Route path={publicRoute.locations} element={<Locations />} />
              <Route path={`${publicRoute.locations}/:id`} element={<Location />} />
            </Route>
            <Route path={publicRoute.login} element={<Login />} />
            <Route path="*" element={<NotFount />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
