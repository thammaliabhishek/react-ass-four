import React from 'react';


const Students = () => {
  return (
    <>
    <div>
    <h1 style={{textAlign:'center'}} >Students Details 🏋️🏋️🏋️⛹️⛹️⛹️🤾‍♀️🤾‍♀️</h1>
    <button className='btn btn-dark'>Add New Student</button>
    </div>
    <table style={{border: '1px solid black',fontSize:'30px'}}>
        <tr style={{border: '1px solid black'}}>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        <tr style={{border: '1px solid black'}}>
            <td>Prasanna</td>
            <td>20</td>
            <td>Mech</td>
            <td>March</td>
            <td>Edit</td>
        </tr>
        <tr style={{border: '1px solid black'}}>
            <td>Naveen</td>
            <td>21</td>
            <td>ECE</td>
            <td>April</td>
            <td>Edit</td>
        </tr>
        <tr style={{border: '1px solid black'}}>
            <td>Nithin</td>
            <td>22</td>
            <td>Mech</td>
            <td>may</td>
            <td>Edit</td>
        </tr>
        <tr style={{border: '1px solid black'}}>
            <td>Mallikarjun</td>
            <td>23</td>
            <td>B.Com</td>
            <td>June</td>
            <td>Edit</td>
        </tr>
        <tr style={{border: '1px solid black'}}>
            <td>sai</td>
            <td>24</td>
            <td>B.Com</td>
            <td>July</td>
            <td>Edit</td>
        </tr>
    </table>
    </>
  )
}
export default Students
