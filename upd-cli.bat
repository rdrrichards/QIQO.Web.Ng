call npm uninstall -g @angular/cli
call npm cache clean
call npm install -g @angular/cli@1.1.0-rc.1

rmdir node_modules /s /q
rmdir dist /s /q
rmdir tmp /s /q

call npm install --save-dev @angular/cli@1.1.0-rc.1
call npm install
