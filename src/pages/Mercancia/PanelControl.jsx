import MenuNavegacion from "../../components/MenuNavegacion"

const PanelControl = () => {
  return (
    <section className="panel-control">
      <MenuNavegacion />
      <div className="panel-contenido">
        <h1>Mensaje de Bienvenida</h1>
      </div>
    </section>
  )
}

export default PanelControl