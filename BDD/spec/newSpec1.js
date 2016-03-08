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
        expect("rajgmail").not.isEmailValid();
        expect("rajesh@raj").isEmailValid();
	expect("RajeSH@finish").isEmailValid();
    });
});

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

