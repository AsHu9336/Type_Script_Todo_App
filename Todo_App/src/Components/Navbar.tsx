

export default function Navbar() {
    return (

        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid text-center">
                    
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Remaining</a>
                            </li>
                        </ul>
                    
                </div>
            </nav>


        </>
    )
}
