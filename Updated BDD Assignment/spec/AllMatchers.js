var UserregEx = new RegExp(/^[a-zA-Z]{5,}$/);	
var EmailRegExp = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-z0-9]+.[a-zA-Z0-9]+$/);	
var passwordRegExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]+$/);

describe('User Name Validation', function () 
{
    beforeEach(function () {
        jasmine.addMatchers({
            isUserNameValid: function () 
	   {
                return {
                    compare: function (actual) {
                        return {
                            pass: checkuser(actual)
                        };
                    }
                };
            }
        });
    });

    it('Check User Name by RegExp', function () 
   {
        expect("raj").not.isUserNameValid();
        expect("rajesh").isUserNameValid();
	expect("RajeSH").isUserNameValid();
    });
});

function checkuser(input)
{
	alert(input);
	if(UserregEx.test(input))
	{
		return true;
	}
	else
	{
		return false;
	}
}
describe('Email Validation', function () 
{
    beforeEach(function () {
        jasmine.addMatchers({
            isEmailValid: function () 
	   {
                return {
                    compare: function (actual) {
                        return {
                            pass: checkEmail(actual)
                        };
                    }
                };
            }
        });
    });

    it('Check Email by RegExp', function () 
   {
        expect("rajgmail@gmail").not.isEmailValid();
        expect("rajesh@raj.com").isEmailValid();
	expect("RajeSH@yahoo.in").isEmailValid();
    });
});
function checkEmail(input)
{
	if(EmailRegExp.test(input))
	{
		return true;
	}
	else
	{
		return false;
	}
}
describe('Password Validation', function () 
{
    beforeEach(function () {
        jasmine.addMatchers({
            isPasswordValid: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: checkpassword(actual)
                        };
                    }
                };
            }
        });
    });

    it('Check Password By RegExp', function () {
        expect("1raj$").isPasswordValid();
        expect("1raj*esh34").isPasswordValid();
	expect("Ra*1jeSH").isPasswordValid();
    });
});
function checkpassword(input)
{
	if(passwordRegExp.test(input))
	{
		return true;
	}
	else
	{
		return false;
	}
}

