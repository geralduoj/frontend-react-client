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
            <DataGrids rows={data} />
        </div>
    </React.Fragment>
  );
}

export default withRouter(ListCourses);