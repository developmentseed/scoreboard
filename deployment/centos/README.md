# Scoreboard on CentOS

These instructions are only useful if you are trying to deploy and run the scoreboard frontend and api on the same Centos machine.

* [Provisioning](#provisioning)
    * [General deps](#general-deps)
    * [Postgresql](#postgresql)
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

### Postgresql
Follow instructions to get postgresql set up on centos ([source](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-centos-7)).

```
sudo yum install postgresql-server postgresql-contrib
```

Create a new PostgreSQL database cluster:
```
sudo postgresql-setup initdb
```

Ensure that postgres allows password authentication

Open the HBA configuration with your favorite text editor. We will use vi:

```
sudo vi /var/lib/pgsql/data/pg_hba.conf
```

Find the lines in pg_hba.conf that look like this, near the bottom of the file:

```
host    all             all             127.0.0.1/32            ident
host    all             all             ::1/128                 ident
```

Replace `ident` with `md5`, so they look like this:
```
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
```

Start and enable PostgreSQL:

```
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Node
#### Install deps
```
sudo yum install gcc gcc-c++
sudo yum groupinstall "Development Tools"
```

#### Download/Install Node
Follow these instructions for installing node using nvm on centos: https://www.liquidweb.com/kb/how-to-install-nvm-node-version-manager-for-node-js-on-centos-7/

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

---Exit and Re-enter server

nvm install 8.13
nvm alias default 8.13
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

Also make sure to run `sudo chown -R centos:centos /var/scoreboard-data` on the folder to ensure the nginx webserver has access to the .env and db files.

#### Add .env file

Add a file with the following content to `/var/scoreboard-data/.env`

```
NODE_ENV=production
DATABASE_URL=postgres://scoreboard:test@localhost:5433/scoreboard
USERS_URL=xxxx
OSMESA_API=xxxxx
APP_URL=xxxxx
OSM_CONSUMER_KEY=xxxxx
OSM_CONSUMER_SECRET=xxxxx
OSM_TEAMS_SERVICE=xxxxxx
SESSION_SECRET=xxxxx
```

Here's what all the variables mean

| name | description
| ---  | -----
| NODE_ENV | The configuration to use, "test", "development" or "production"
| OSMESA_API | URL to the OSMESA http server that serves out statistics
| APP_URL | URL where the site will be hosted
| OSM_CONSUMER_KEY | An Oauth Key/Secret pair to authenticate with OSM
| OSM_CONSUMER_SECRET | An Oauth Key/Secret pair to authenticate with OSM
| OSM_DOMAIN | OSM endpoint (defaults to openstreetmap.com)
| OSM_TEAMS_SERVICE | Location of the OSM teams API
| SESSION_SECRET | A secret phrase to sign session tokens
| DATABASE_URL | The location of the postgres database

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
npm run build
sudo systemctl restart scoreboard-api
sudo systemctl restart scoreboard-timer
sudo systemctl restart nginx 
```

#### Note
If you have changed one of the systemd unit scripts, such as `scoreboard-timer`, you must run the following in order for those changes to take effect:
```
sudo systemctl daemon-reload
```

Voila! 👏

Navigate to your server's URL and you should see Scoreboard
