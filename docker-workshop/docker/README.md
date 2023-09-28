# Examples

Example 1 - Simple docker image for node application 

Example 2 - Staged docker image for node application (with nonroot user) (separate into staged build to reduce the image size)

Example 3 - Build and run the image from Example 2, shell into it, show some capabilities 

Example 4 - Port-forward the previously created image from Example 2 (some basic frontend)

Example 5 - Kill the running container

Example 6 - Show volume persistence on database image  
Example 6a - Run the database without docker volume, save some data inside, restart the container and show data missing  
Example 6b - Run the database with docker volume, save some data inside, restart the container and show data persistence

Example 7 - Create a docker-compose file to run multiple docker images locally

<hr>

## Example 1
Node simple demo with dockerfile  
`docker build -t node-demo -f ../node-demo.dockerfile .`  
`docker run --rm -ti node-demo`
<hr>

## Example 2 
Node demo with staged build  
`docker build -t node-staged -f ../node-staged.dockerfile .`  
`docker run --rm -ti node-staged`
<hr>

## Example 3
Shell into the running container  
`docker ps` -> find the running container ID  
`docker exec -ti <container_id> /bin/bash`
<hr>

## Example 4
Kill the running container  
`docker ps` -> find the running container ID  
`docker stop <container_id>`
<hr>

## Example 5
Port forward the container
`docker run --rm -ti -p 3000:3000 node-staged`
<hr>

## Example 6
SQL script for populating random data into the database, for the demonstration purposes of example 6a and 6b.

```sql
create table if not exists users (
	id serial primary key,
	username varchar(50) unique not null,
	password varchar(50) not null,
	email varchar(50) unique not null,
	created_on timestamp not null
);

insert into users(username, password, email, created_on) values ('mirko', 'm1rk0.c@$t1.j@gnJ3t!n0M', 'mirko@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('slavko', '$L@wK0.c@$t1.j@gnJ3t!n0M', 'slavko@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('pero', 'p3R0.c@$t1.j@gnJ3t!n0M', 'pero@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('djuro', 'dJuR0.c@$t1.j@gnJ3t!n0M', 'djuro@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('vanja', 'v@Nj@.c@$t1.j@gnJ3t!n0M', 'vanja@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('branimir', 'Br@n1m!R.c@$t1.j@gnJ3t!n0M', 'branimir@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('bozo', 'B0zo.c@$t1.j@gnJ3t!n0M', 'bozo@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('zdravko', 'ZdR@wk0.c@$t1.j@gnJ3t!n0M', 'zdravko@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('zoran', 'Z0r@n.c@$t1.j@gnJ3t!n0M', 'zoran@barrage.net', NOW());
insert into users(username, password, email, created_on) values ('zdeslav', 'Zd3$l@v.c@$t1.j@gnJ3t!n0M', 'zdeslav@barrage.net', NOW());

```

## Example 6a
Start the postgres container without persistant volume  
`docker run --rm -e POSTGRESQL_PASSWORD=password123 --name postgres -p 5432:5432 bitnami/postgresql`

after restarting the container, the data is no longer visible.

## Example 6b
Start the postgres container with persistant volume  
`docker run --rm -e POSTGRESQL_PASSWORD=password123 --name postgres -p 5432:5432 -v /tmp/psql-demo-data:/bitnami/postgresql bitnami/postgresql`

after restarting the container, the data is still present like nothing happened.

<hr>

## Example 7
Docker compose for running multiple docker images simultaneously

### Starting the apps
`docker-compose up`

### Shuting them down
`docker-compose down`

<hr>