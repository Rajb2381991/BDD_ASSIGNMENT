var passwordRegExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]+$/);

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
	return (passwordRegExp.test(input));
}
