

export default function Navbar() {
    return (

        <>

            <div className="container">
                <div className="d-flex flex-row justify-content-around">

                    <div>
                        <button type="button" className="btn btn-outline-warning">All</button>
                    </div>
                    <div >
                        <button type="button" className="btn btn-outline-danger">Active List</button>
                    </div>
                    <div >
                        <button type="button" className="btn btn-outline-success">Completed List</button>
                    </div>

                </div>



            </div>



        </>
    )
}
