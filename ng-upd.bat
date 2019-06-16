<<<<<<< HEAD
CALL git commit -am "pre update commit"
=======
>>>>>>> a9919e78d987fe8c0770808b78869a798d7a66e7
CALL ng update @angular/cli
CALL git commit -am "cli update to latest"
CALL ng update @angular/core
CALL git commit -am "ng update to latest"
CALL npm audit fix
CALL git commit -am "post update commit"
CALL build-test.bat
