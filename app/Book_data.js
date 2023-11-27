const Book =()=>{
    return(
        <div>
            <table class="table caption-top">
            <caption><h2 className="text-dark fw-bold">books</h2></caption>
            <thead className="table-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN No</th>
                <th scope="col">Quantity</th>
                <th scope="col">Publish Date</th>
                <th scope="col">Updates</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark qwertyuisdfgjnsdfghjkkkkkwertfghjklsdfghjksdfghjksdfghjksdfghj</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>
                <button type="button" class="btn btn-success mx-2">Return</button>
                    <button type="button" class="btn btn-danger mx-2">Delete</button>
                    <button type="button" class="btn btn-primary mx-2">Issue</button>
                </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>
                    <button type="button" class="btn btn-success mx-2">Return</button>
                    <button type="button" class="btn btn-danger mx-2">Delete</button>
                    <button type="button" class="btn btn-primary mx-2">Issue</button>
                </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>
                <button type="button" class="btn btn-success mx-2">Return</button>
                    <button type="button" class="btn btn-danger mx-2">Delete</button>
                    <button type="button" class="btn btn-primary mx-2">Issue</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
export default Book;