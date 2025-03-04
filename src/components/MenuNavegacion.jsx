import userLogo from '../assets/user.jpg'

const MenuNavegacion = () => {
  return (
    <aside className="menu-navegacion">
      <div className="menu-navegacion-logo">
        <img src={userLogo} alt="" />
      </div>
      <nav className="menu-navegacion-nav">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </aside>
  )
}

export default MenuNavegacion