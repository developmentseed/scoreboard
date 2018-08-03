# Scoreboard on CentOS

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

### Clone Repo
```
sudo mkdir -p /var/www/
cd /var/www
sudo git clone https://github.com/developmentseed/scoreboard
sudo chown -R centos:centos scoreboard/
```

### Install Node Deps
```
cd scoreboard/
npm install
```

### Create build
```
cd frontend/
npm run build
```

### Create env file
```
cd ../api
sudo vim .env
```

**Contents:**
```
PORT=5000
NODE_ENV=production
OSMESA_API=https://OSMESA_API_URL
TM_URL=https://TASKING_MANAGER_URL
TM_HASHTAG=campaign-hashtag-prefix
USERS_URL=https://LOCATION_OF_USER_INFO.csv
API_URL=https://EXAMPLE.ORG
```

### Systemd
```
sudo mv *.service *.timer /etc/systemd/system/ 
```

### Start Services
```
sudo systemctl enable scoreboard-api.service
sudo systemctl enable scoreboard-timer.service
sudo systemctl enable scoreboard-timer.timer

sudo systemctl start scoreboard-timer.timer
sudo systemctl start scoreboard-api
```

## NGINX
### Write configuration
```
sudo vim /etc/nginx/nginx.conf
```

We will handle /api and forward to the api, all other paths get the distribution.

```
server {
    listen 80;
    location /scoreboard {
        alias /var/www/scoreboard/frontend/build;
        try_files $uri $uri/ @proxy;
        expires max;
        client_max_body_size 200M;
        access_log off;
    }

    location @proxy {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_pass http://127.0.0.1:5000;
    }
}
```

### Restart nginx

```
sudo systemctl restart nginx
```

Voila! 👏

Navigate to your server's URL and you should see Scoreboard

## Adding a new feature
```
cd /var/www/scoreboard
git pull origin master
npm install

# If there is a new frontend feature
cd frontend && npm run build

sudo systemctl restart scoreboard-api
sudo systemctl restart scoreboard-timer.timer
```
