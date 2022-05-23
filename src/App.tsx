import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/layouts/Header';
import { AppRoutes } from './routes/app.routes';

import Global from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Global />
      </BrowserRouter>
    </>
  );
}

export default App;
