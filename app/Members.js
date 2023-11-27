const Members =()=>{
    return(
        <div>
            <table class="table caption-top">
            <caption><h2 className="text-dark fw-bold">members</h2></caption>
            <thead className="table-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Book Name</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Return Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark </td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
export default Members;