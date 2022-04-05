

function ReadOnlyRow({data, handleEditclick}){
  return(
    <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
               <td><button onClick={(e)=>handleEditclick(e, data)}>edit</button></td>
    </tr>
  )
}

export default ReadOnlyRow;