import React from "react";


function Home(){
    return (
        <div>
            <h1>Topics To be covered</h1>
            <table border={2}>
                <tr>
                    <th>Sr.no </th>
                    <th> topics</th>
                </tr>
                <tr>
                    <td>1 </td>
                    <td> Web servers</td>
                </tr>
                <tr>
                    <td>2 </td>
                    <td> JavaScript</td>
                </tr>
                <tr>
                    <td>3 </td>
                    <td>React</td>
                </tr>
                <tr>
                    <td>4 </td>
                    <td> Advanced React</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td> Node</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td> ExpressJs</td>
                </tr>

            </table>
        </div>
    );
}


export default Home;
