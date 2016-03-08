describe('Hello world', function () 
{

    beforeEach(function () {
        jasmine.addMatchers({
            toBeDivisibleByTwo: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: (actual % 2) === 0
                        };
                    }
                };
            }
        });
    });

    it('is divisible by 2', function () {
        expect(gimmeANumber()).toBeDivisibleByTwo();
        expect(10).toBeDivisibleByTwo();
    });
});
function gimmeANumber()
{
	var x = 2;
	return x;	
}
