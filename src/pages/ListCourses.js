import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddGridSquare from '../components/AddGridSquare';
import DataGrids from '../components/DataGrids';
import { Link as ReactLink, withRouter} from "react-router-dom";
import axios from 'axios';
import Button from '@material-ui/core/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Gerald & Shima. © '}
      <Link color="inherit" href="http://localhost:3000/">
        LAB 3
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const columns = [
    { field: "courseCode", headerName: "Course Code", width: 200 },
    { field: "courseName", headerName: "Course name", width: 200 },
    { field: "section", headerName: "Section", width: 200 },
    {
      field: "semester",
      headerName: "Semester",
      width: 200
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <strong>
          
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
        </strong>
      ),
    }
  ];

  
  const rows = [
    { id:1, courseCode: 100, courseName: "Snow", section: "Jon", semester: 35 },
    { id:2, courseCode: 2, courseName: "Lannister", section: "Cersei", semester: 35 },
    { id:3, courseCode: 3, courseName: "Lannister", section: "Jaime", semester: 35 },
    { id:4, courseCode: 4, courseName: "Stark", section: "Arya", semester: 16 },
    { id:5, courseCode: 5, courseName: "Targaryen", section: "Daenerys", semester: 35 },
    { id:6, courseCode: 6, courseName: "Melisandre", section: null, semester: 150 },
    { id:7, courseCode: 7, courseName: "Clifford", section: "Ferrara", semester: 44 },
    { id:8, courseCode: 8, courseName: "Frances", section: "Rossini", semester: 36 },
    { id:9, courseCode: 9, courseName: "Roxie", section: "Harvey", semester: 35 }
  ];

  function rowsArray(data){
    let rowData = [];
    for (let i = 0; i < data.length; i++) {
      rowData.push({
        id: i+1,
        courseCode: data[i].courseCode,
        courseName: data[i].courseName,
        section: data[i].section,
        semester: data[i].semester
      });
    }
    return rowData;
  }


function ListCourses() {
  const apiUrl = "http://localhost:3000/api/your-courses";
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState([]);

  

  useEffect(() => {
    const getCourses = async () => {
      await axios.get(apiUrl)
        .then(result => {
          //console.log('result.data:',result.data)
          //check if the user has logged in
          //if(result.data.screen !== 'auth')
          //{
            
            //console.log('data in if:', result.data )
            setData(result.data);
            setRowData(result.data);
            
          //}
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
        //rowsArray(data);
      };  
      getCourses();
  }, []);
  console.log('data in data:', data )
  const rows = rowsArray(data);
  //setRowData(rowData);
  console.log('data in data:', rowData )
    

  return (
    <React.Fragment>
        <div style={{ margin:100 }}>
            <Typography variant="h2" color="textSecondary" align="center">YOUR COURSES</Typography>
            <DataGrids rows={rows} columns={columns} />
        </div>
    </React.Fragment>
  );
}

export default withRouter(ListCourses);