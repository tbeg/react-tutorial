FROM ubuntu:12.04
MAINTAINER Chilles

# TODO: REPLACE WITH PHUSION OR ALPINE

RUN apt-get update
RUN apt-get -y install vim python-libxml2 libxml2-dev python-libxslt1 libxslt-dev \
    python-psycopg2 postgresql-server-dev-9.1 graphviz graphviz-dev python-dev \
    binutils libproj-dev gdal-bin curl mailutils

RUN apt-get -y install libgraphviz-dev pkg-config
RUN apt-get -y install python-pip
RUN apt-get -y install build-essential libssl-dev libffi-dev python-dev

RUN mkdir /react_tutorial
WORKDIR /react_tutorial
ADD database-check.py /react_tutorial/
ADD setup.sh /react_tutorial/
ADD requirements.txt /react_tutorial/
RUN pip install -r requirements.txt
RUN pip install hendrix

# RUN adduser --disabled-password --gecos '' myuser
# RUN chown -R myuser:myuser /react_tutorial

RUN chmod +x /react_tutorial/setup.sh

EXPOSE 8000