import {Link} from 'react-router'
export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>  Dashboard  </Link>
                        <Link to='/add'>    add     </Link>
                        <Link to='/update'>     update   </Link>
                        <Link to='/delete'>     delete  </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}