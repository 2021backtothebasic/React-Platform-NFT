import { useEffect, useState } from "react";
import axios from "axios";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "why", 6.0, 24, 4.0),
  createData(2, "react", 9.0, 37, 4.3),
  createData(3, "so", 16.0, 24, 6.0),
  createData(4, "hard", 3.7, 67, 4.3),
];

export default function BasicTable() {
  const [inputData, setInputData] = useState([{
    bidx: '',
    buserid: 'b',
    btitle: '',
    bcontent: '',
    regdate: '',
    modidate: '',
    bhit: '',
    blikeuser: ''
  },
  {
    bidx: '',
    buserid: '',
    btitle: '',
    bcontent: '',
    regdate: '',
    modidate: '',
    bhit: '',
    blikeuser: ''
  }])

  const {bidx, buserid, btitle, bcontent, regdate, modidate, bhit, blikeuser} =inputData;

  const callApi = async() => {
    const response = await axios.get("http://localhost:5000/api/boards")
    // const _inputData = await response.data.map((rowData) => ({
    //   bidx: rowData.bidx,
    //   title: rowData.btitle,
    //   content: rowData.bcontent,
    //   writer: rowData.bidx,
    //   write_date: rowData.bidx,
    // }))
    console.log(inputData)
    console.log(response.data)
    // setInputData({...inputData, bidx:"ssssss", sdfsdf:"asda"})
    setInputData([...inputData,...response.data])
  }
  
  useEffect(() => {
    callApi();
  }, []);

  console.log(inputData)
  // return (inputData.map(a => {
  //   return (<div>{a.buserid}</div>)
  // })
  // )


  return (
    <TableContainer >
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>index</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">hit</TableCell>
            <TableCell align="right">userid</TableCell>
            <TableCell align="right">regdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.buserid}
              </TableCell>
              <TableCell align="right">{row.btitle}</TableCell>
              <TableCell align="right">{row.bhit}</TableCell>
              <TableCell align="right">{row.regdate}</TableCell>
              <TableCell align="right">{row.modidate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}