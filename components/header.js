import { Link } from 'next/link';

const header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items items-center">
          {currentUser ? 'Sign out' : 'Sign in/up'}
        </ul>
      </div>
    </nav>
  );
};

export default header;
