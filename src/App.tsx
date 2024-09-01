import '@styles/app.css';

import { usePageRoutes } from './views/router';

function App() {
  const elements = usePageRoutes();
  return <>{elements}</>;
}

export default App;
