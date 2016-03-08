
function IsUserNameValid(UserName)
{
	var result=false;
	var UserregEx = new RegExp(/^[a-zA-Z]{5,}$/);
	var PasswordregEx = new RegExp(/^[a-zA-Z0-9]{8,}$/);
	if(UserName == '' || UserName == undefined)
	{
		result = false;	
	}
	else
 	{
		if(UserregEx.test(UserName))
		{
			result = true;
		}
		else
		{
			result = false;	
		}
	}
	return result;
}

