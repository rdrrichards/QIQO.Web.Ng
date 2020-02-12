CALL git commit -am "pre update commit"
CALL ng update @angular/core --force
CALL git commit -am "ng update to latest"
CALL ng update @angular/cli --force
CALL git commit -am "cli update to latest"
CALL npm audit fix
CALL git commit -am "post update commit"
CALL bt.bat
