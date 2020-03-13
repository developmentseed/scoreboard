#!/bin/bash -e

# deploy scoreboard to a centos environment

# usage: 
#   deploy.sh {tag or branch}
#
# example:
#   deploy.sh v1.8.0
#

GIT_TAG=${1:-master}

echo "using git tag or branch: ${GIT_TAG}"
echo

cd ~
rm -rf scoreboard
git clone https://github.com/developmentseed/scoreboard.git
cd scoreboard
git checkout ${GIT_TAG}

# installation
yarn install
yarn run migrate
yarn run build

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
