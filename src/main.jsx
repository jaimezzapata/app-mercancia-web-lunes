import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './pages/Mercancia/PanelControl'
import ListadoMercancia from './pages/Mercancia/ListadoMercancia'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl />
    <br />
    <ListadoMercancia />
  </StrictMode>,
)