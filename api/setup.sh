#! /bin/bash

# Removed "set -e" because the script database-check.py returns a sys.exit(1)
# when it can't connect to the database. Otherwise this script will exit with
# an error code and the creation of the container will stop

#####
# Postgres: wait until container is created
#
# $?                most recent foreground pipeline exit status
# > /dev/null 2>&1  get stderr while discarding stdout
#####
python /react_tutorial/database-check.py > /dev/null 2>&1
while [[ $? != 0 ]] ; do
    sleep 1; echo "*** Waiting for postgres container ..."
    python /react_tutorial/database-check.py > /dev/null 2>&1
done

#####
# Django setup
#####
#python /react_tutorial/api/manage.py migrate && python /react_tutorial/api/manage.py runserver 0.0.0.0:8000

#cd myproject
# migrate db, so we have the latest db schema
# su -m myuser -c "python /react_tutorial/api/manage.py migrate"
python /react_tutorial/api/manage.py migrate
# start development server on public ip interface, on port 8000
# su -m myuser -c "python /react_tutorial/api/manage.py runserver 0.0.0.0:8000"
python /react_tutorial/api/manage.py runserver 0.0.0.0:8000
hx start --dev