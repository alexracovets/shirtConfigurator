import './index.css'
import ReactDOM from 'react-dom/client'
import { CanvasContainer } from './Components/CanvasContainer.jsx'
import Overlay from './Components/Overlay'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CanvasContainer />
    <Overlay />
  </>
)
