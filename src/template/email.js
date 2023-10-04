const Email = (name,email,mobile) => {
    return `<html>
                <head>
                        <style>
                            .container {
                                width: 80%;
                                height: 100vh;
                                margin:auto;
                                display: flex;
                                align-items: center;
                                justify-content:center;
                            }

                            .row {
                                display:flex;
                                align-items:center;
                                width: 100%;
                            }

                            .row h1 {
                                text-align:center;
                                color:slateblue;
                                font-size: 3rem;
                            }

                            table,tr,td,th {
                                border:1px solid #222;
                                border-collapse:collapse;
                                table-layout:fixed;
                            }

                            td,th {
                                padding: 10px;
                            }
                        </style>
                </head>
                <body>
                        <div className="container">
                            <div className="row">
                                <h1> Data Science Webinar Registration Details </h1>
                            </div>

                            <div className="row">
                                <table>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                        </tr>

                                        <tr>
                                            <td> ${name} </td>
                                            <td> ${email} </td>
                                            <td> ${mobile} </td>
                                        </tr>
                                </table>
                            </div>

                            <div className="row">
                                
                            </div>
                        </div>
                </body>
            </html>`
};


export default Email