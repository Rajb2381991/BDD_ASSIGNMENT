function checkuser(input)
{
	var UserregEx = new RegExp(/^[a-zA-Z]{5,}$/);	
	if(UserregEx.test(input))
	{
		return true;
	}
	else
	{
		return false;
	}
}
function checkEmail(input)
{
	var UserregEx = new RegExp(/^[a-zA-Z]+@[a-zA-z]+$/);	
	if(UserregEx.test(input))
	{
		return true;
	}
	else
	{
		return false;
	}
}
function checkpassword(input)
{
var passwordRegExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]+$/);
//var passwordRegExp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]+$/);

	if(passwordRegExp.test(input))
	{
		return true;
	}
	else
	{
		return false;
	}
}
