import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app.routes';

import Global from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Global />
      </BrowserRouter>
    </>
  );
}

export default App;
