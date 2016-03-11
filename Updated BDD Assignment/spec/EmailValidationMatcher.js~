var EmailRegExp = new RegExp(/^[a-zA-Z0-9._]+@[a-zA-z0-9]+.[a-zA-Z0-9]+$/);
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
        expect("rajgmail0911@gmail.com").isEmailValid();
        expect("rajesh@raj.com").isEmailValid();
	expect("RajeSH@yahoo.in").isEmailValid();
    });
});
function checkEmail(input)
{
	return (EmailRegExp.test(input));
}
