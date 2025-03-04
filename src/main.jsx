import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './pages/Mercancia/PanelControl'
import ListadoMercancia from './pages/Mercancia/ListadoMercancia'
import MenuNavegacion from './components/MenuNavegacion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section>
      <MenuNavegacion />
      <PanelControl />
      <ListadoMercancia />
    </section>
  </StrictMode>,
)