CALL ng update @angular/cli
CALL git commit -am "cli update to latest"
CALL ng update @angular/core
CALL git commit -am "ng update to latest"
CALL npm audit fix
