describe("Check UserName", function() 
{
  it("User Name Should not Blank", function() 
  {
  	expect(isUserNameBlank('raj').toEquals(true));
  });
});

