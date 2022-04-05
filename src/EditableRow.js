

function EditableRow({editSave, handleSaveChange}){
  return(
   <tr>
     <td>
       <input type="text" 
       placeholder="enter name" 
       name="full name" 
       onChange={handleSaveChange}
       value={editSave.name}/>
       
     </td>
     <td>
     <input type="text" 
     placeholder="enter email"
      name="email"
      onChange={handleSaveChange}
      value={editSave.name} />
     </td>
     <td>
     <input type="text" 
     placeholder="enter role" 
     name="role"
     onChange={handleSaveChange} 
     value={editSave.name}/>
     </td>
     <td><button type="submit">save</button></td>
     
   </tr>
  )
}

export default EditableRow