call npm uninstall -g @angular/cli
REM call npm cache clean -- force
call npm install -g @angular/cli@latest

rmdir node_modules /s /q
rmdir dist /s /q
rmdir tmp /s /q

call npm install --save-dev @angular/cli@latest
call npm install
