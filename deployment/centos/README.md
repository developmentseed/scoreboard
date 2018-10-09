# Scoreboard on CentOS

These instructions are only useful if you are trying to deploy and run the scoreboard frontend and api on the same Centos machine.

* [Provisioning](#provisioning)
    * [General deps](#general-deps)
    * [sqlite3](#sqlite3)
    * [Node](#node)
    * [Nginx](#nginx)
* [Installing Scoreboard](#installing-scoreboard)
    * [Clone Repo](#clone-repo)
    * [Install Node Deps](#install-node-deps)
    * [Create build](#create-build)
    * [Create env file](#create-env-file)
    * [Systemd](#systemd)
    * [Start Services](#start-services)
* [NGINX](#nginx-1)
    * [Write configuration](#write-configuration)
    * [Restart nginx](#restart-nginx)
* [Adding a new feature](#adding-a-new-feature)

## Provisioning

### General deps
```
sudo yum install -y epel-release
sudo yum update -y
sudo yum install -y vim git wget bzip2 nano htop
```

### sqlite3
```
sudo yum install sqlite3
```

### Node
#### Install deps
```
sudo yum install gcc gcc-c++
sudo yum groupinstall "Development Tools"
```

#### Download/Install Node
https://www.liquidweb.com/kb/how-to-install-nvm-node-version-manager-for-node-js-on-centos-7/
```
curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash

---Exit and Re-enter server

nvm install 8.4
nvm alias default 8.4
```

#### Symlink to system
```
sudo ln -s $(which npm) /usr/bin/npm
sudo ln -s $(which node) /usr/bin/node
```

#### Check node version

```
node --version
```

### nginx
```
sudo yum install nginx
```

## Installing Scoreboard

### Prepare the environment

This guide assumes that you will store your secret environment variables at `/var/scoreboard-data/.env`.

We also strongly recommend that you move your sqlite3 database file to a location outside of the default `/var/www/scoreboard/api`.

One place to store it is `/var/scoreboard-data/`. If you change the location of the database file, make sure to add `DB_PATH` to your `.env` file.

Also make sure to run `sudo chown -R centos:centos /var/scoreboard-data` on the folder to ensure the nginx webserver has access to the .env and db files.

#### Add .env file

Add a file with the following content to `/var/scoreboard-data/.env`

```
NODE_ENV=production
DB_PATH=/var/scoreboard-data/db.sqlite3
TM_URL=xxxxx
USERS_URL=xxxx
TM_HASHTAG=xxxx
OSMESA_API=xxxxx
API_URL=xxxxx
FILTERED_USERS="0,1"
```

### Setup NGINX and Services
Make sure to put the correct version number in the url used by `wget`.

```
cd ~
wget https://github.com/developmentseed/scoreboard/blob/<put-version-number-here>/deployment/centos/bootstrap.sh
./bootstrap.sh
```


### Deploy the Repo 
Make sure to put the correct version number in the url used by `wget`.

```
sudo mkdir -p /var/www/
cd ~
wget https://github.com/developmentseed/scoreboard/blob/<put-version-number-here>/deployment/centos/deploy.sh
./deploy.sh
```

### Start Services
The deploy script in the previous step automatically restart the services, but in case you need to do it manually this how to do it.
```
sudo systemctl restart scoreboard-api
sudo systemctl restart scoreboard-timer
sudo systemctl restart nginx 
```

Voila! 👏

Navigate to your server's URL and you should see Scoreboard