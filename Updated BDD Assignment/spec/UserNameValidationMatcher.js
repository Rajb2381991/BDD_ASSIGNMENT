var UserregEx = new RegExp(/^[a-zA-Z]{5,}$/);	
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
	return (UserregEx.test(input));
}
