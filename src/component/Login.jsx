import React from 'react'

const Login = () => {
  return (
    <div>

<form action="Welcome.html" method="post">
<table border="0" align="center">
<tbody>




<tr>
<td><label for="email">Email_Address:</label></td>
<td><input id="email" maxlength="50" name="email" type="text" /></td>
</tr>





<tr>
<td><label for="password">Password:</label></td>
<td><input id="password" maxlength="50" name="password"
type="password" /></td>
</tr>

<tr>
<td align="right"><input name="Submit" type="Submit" value="Add" /></td>
</tr>

</tbody>
</table>
</form>


    </div>
  )
}

export default Login