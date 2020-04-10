#!/bin/bash -e

# deploy scoreboard to a centos environment

# usage: 
#   deploy.sh {tag or branch}
#
# example:
#   deploy.sh v1.8.0
#

GIT_TAG=${1:-master}
NGINX_PATH=/var/www

echo "using git tag or branch: ${GIT_TAG}"
echo

cd ~

# find the tag or branch
rm -rf scoreboard
git clone https://github.com/developmentseed/scoreboard.git
pushd scoreboard
git checkout ${GIT_TAG}

# install & build steps
yarn install
yarn run migrate
yarn run build
popd

# update nginx directory
datestamp=$(date +%F)
if [ -d "${NGINX_PATH}/scoreboard" ]; then
    # backup previous deployment
    sudo mv -v ${NGINX_PATH}/scoreboard ${NGINX_PATH}/scoreboard_${datestamp}
fi
sudo mv -v scoreboard ${NGINX_PATH}

# restart services
sudo systemctl restart scoreboard-api.service
sudo systemctl restart scoreboard-timer.service
sudo systemctl restart scoreboard-timer.timer
sudo systemctl restart nginx.service
