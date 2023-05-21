import AOS from 'aos'
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Router';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div className="App max-w-screen-2xl mx-auto ">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
