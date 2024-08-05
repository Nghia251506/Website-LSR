import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Base.css';
import { routes } from './router/routes';

function App() {
  return (
    <>
      <Routes>
      {routes.map((item, index) => {
          const Page = item.component;
          const Layout =  item.layout;
          return <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
         })}
      </Routes>
    </>
  );
}

export default App;
