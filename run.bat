pushd %~dp0
echo "Starting Scum Wrapped"
cd server
start "Server" py app.py
cd ..
cd client
Title "Client"
call npm install
call npm run start
popd