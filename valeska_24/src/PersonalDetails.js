import React from "react";
import "./personalDetails.css";

class PersonalDetails extends React.Component{
    render () {
        return(
            <div className="box" > 
                <h1 className="Details " >Details</h1>
                <div className="PD ">
                     <h2 className="head">Personal Detail </h2>
                    <p>Name : Valeska Rosario</p>
                    <p>PID : 221100</p>
                    <p>Class: TE IT B</p>
                    <p>College : St Francis Institue of Technology </p>
                    </div>
                    
                    <div className="AD ">
                    <h2  className="head">Academic Detail </h2>
                    <table border={1}>
                    <thead>
                        <tr>
                    <th>Sr.no </th>
                    <th>Exam Passed</th>
                    <th>College / Institue </th>
                    <th>Percentage/ Pointers </th>
                    </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td> 1 </td>
                        <td> SSC </td>
                        <td> St Charles High School </td>
                        <td> 89.4%</td>
                        </tr>

                        <tr>
                        <td> 2</td>
                        <td> HSC </td>
                        <td> St Andrews College of Arts Science and Commerce </td>
                        <td> 89.4 %</td>
                        </tr>

                        <tr>
                        <td> 3</td>
                        <td> French Certificate </td>
                        <td> University of Mumbai </td>
                        <td> 71 %</td>
                        </tr>

                        <tr>
                        <td> 4</td>
                        <td> Sem 4 IT   </td>
                        <td> St Francis Institue of Technology  </td>
                        <td> 9.6 CGPA</td>
                        </tr>

                        
                    </tbody>
                </table>
                </div>






            </div>
            
        );
    }
}

export default PersonalDetails;