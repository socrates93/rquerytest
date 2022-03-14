import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='super-heroes'>Traditional SuperHeroes</Link>
          </li>
          <li>
            <Link to='rq-super-heroes'>RQ SuperHeroes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
