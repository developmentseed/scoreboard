#!/bin/sh

echo 'Cloning the repo'
cd ~
rm -rf scoreboard
git clone https://github.com/developmentseed/scoreboard.git
cd scoreboard
git fetch --tags --all
git checkout -b v0.2.1 tags/v0.2.1
echo 'Repo is cloned and ready'

echo 'Copy services'
cd deployment/centos
sudo mv *.service *.timer /etc/systemd/system/

echo 'Enable services'
sudo systemctl enable scoreboard-api.service
sudo systemctl enable scoreboard-timer.service
sudo systemctl enable scoreboard-timer.timer

echo 'Copy nginx config'
sudo mv nginx.conf /etc/nginx/nginx.conf

echo 'Restart services'
sudo systemctl restart scoreboard-api
sudo systemctl restart scoreboard-timer
sudo systemctl restart scoreboard-timer.timer
sudo systemctl restart nginx

