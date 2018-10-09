#!/bin/sh

cd ~
rm -rf scoreboard
git clone https://github.com/developmentseed/scoreboard.git
cd scoreboard
git fetch --tags --all
git checkout -b v0.2.1 tags/v0.2.1

# installation
npm install
cd api
npm install
cd ../frontend
npm install
npm run build

# move to nginx folder
cd ../..
suffix=$(date +%s)
sudo mv /var/www/scoreboard /var/www/scoreboard_$suffix || echo 'this is the first deployment'
sudo mv scoreboard /var/www/

# restart services
sudo systemctl restart scoreboard-api
sudo systemctl restart scoreboard-timer
sudo systemctl restart scoreboard-timer.timer
sudo systemctl restart nginx
