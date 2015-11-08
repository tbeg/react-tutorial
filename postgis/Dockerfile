FROM mdillon/postgis:latest
MAINTAINER chilles

# COPY ./initdb-postgis.sh /docker-entrypoint-initdb.d/postgis.sh

COPY viquedata.sql /react_tutorial/postgis/viquedata.sql
COPY initdb-vique.sh /docker-entrypoint-initdb.d/vique.sh
