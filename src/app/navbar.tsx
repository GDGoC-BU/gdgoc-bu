export default function Navbar() {
  return (
    <header>
      <div>logo</div>
      <nav>
        <ul>
          <NavLink>1</NavLink>
          <NavLink>2</NavLink>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ children }: ComponentChildrenProp) {
  return <li>{children}</li>;
}
