import React from 'react';
const AddUserForm = () => {
  return ( 
    <form>
<label> Name</label>
<input type="text" name="name" value=""/>
<label> Username </label>
<input type="text" name="username" value=""/>
<button>Add new uer</button>

    </form>
   );
}
 
export default AddUserForm;