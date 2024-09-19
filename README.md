# sqaureLab



## Postgres DB initialization

# connect to postgres.db container 
* first time you will have to exec into the container and create db and users.

1. with only the db compose file 
  a. change .env to only have the username, password and database.  comment out others.
  b. run `docker compose up`
  c. follow steps 2-5 below
  
2. access shell of container and su to postgres user
  `su - postgres`

3. start postgres process
  `psql` 

4. set postgres password in database.
  `postgres=# \password <USERNAME>  {enter key}`
Enter new password for user "<username>":
Enter it again:
(no response when done)

5. create database user (not postgres please)
`postgres=# create user squarelab login;`
CREATE ROLE
`postgres=# \password squarelab  {enter key}`
Enter new password for user "<username>":
Enter it again:
(no response when done)

6. grant rights to database (should already exist)
  a. list databases
  `postgres-# \l`  < will list out databases >
  b. create db if needed
  `postgres=# create database squaredb with owner squarelab;`
CREATE DATABASE
  c. connect to database
  `postgres=# \c squaredb`
You are now connected to database "matrix" as user "postgres".
  d. grant all rights on database for it's user.
  `squaredb=# grant all on database squaredb to squarelab;`
GRANT
  e. grant all rights on public schema so user can create tables.
  `squaredb=# grant all on schema public to squarelab;`
GRANT

## Initialize API container

1. un-comment api section of docker compose
2. verify db user (squarelab) and password are in .env file
3. `docker compose up`
