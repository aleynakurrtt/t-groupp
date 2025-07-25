import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './style.css'
import './reset.css'
import router from './Routes'
import './i18n'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />

)