import React ,{useState,useEffect} from 'react'

export default function Comments() {
    const[data,SetData]=useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/comments").then((r)=>{
        r.json().then((response)=>{
          SetData(response)
        })
      })
    });
    
    
      return (
        <div>
    
    <table border='2'>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
          {
            data.map((i)=>
            <tr>
              <td>{i.postId}</td>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.body}</td>
            </tr>)
          }
        </table>
          
          
        </div>
      )
    }