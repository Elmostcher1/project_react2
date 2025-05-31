import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { CartApiProvider } from './components/context/ApiCart'
import { WorkCartProvider } from './components/context/WorkCart'
import { WhishListApiProvider } from './components/context/WishListApi'

createRoot(document.getElementById('root')).render(
        <WhishListApiProvider>
    <CartApiProvider >
    <WorkCartProvider >
        <App />
     </WorkCartProvider>
    </CartApiProvider>
        </WhishListApiProvider>
 )
