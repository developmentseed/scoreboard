#!/bin/sh

echo 'Cloning the repo'
cd ~
rm -rf scoreboard
git clone https://github.com/developmentseed/scoreboard.git
cd scoreboard
git fetch --tags --all
git checkout master
echo 'Repo is cloned and ready'

echo 'Create postgresql database and user'
POSTGRES_USER=${1:-postgres}

psql $POSTGRES_USER -v ON_ERROR_STOP=1 <<-EOSQL
  CREATE DATABASE scoreboard;
  CREATE ROLE scoreboard WITH ENCRYPTED PASSWORD 'test';
  GRANT ALL PRIVILEGES ON DATABASE "scoreboard" TO "scoreboard";
  ALTER ROLE "scoreboard" WITH LOGIN;
EOSQL

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

