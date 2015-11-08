FROM ubuntu:12.04
MAINTAINER Chilles

# TODO: REPLACE WITH PHUSION OR ALPINE

RUN apt-get update && apt-get install -y vim python-libxml2 libxml2-dev python-libxslt1 libxslt-dev \
    python-psycopg2 postgresql-server-dev-9.1 graphviz graphviz-dev python-dev \
    binutils libproj-dev gdal-bin curl mailutils openssh-server supervisor libgraphviz-dev \
    pkg-config python-pip

RUN mkdir -p /var/run/sshd /var/log/supervisor
RUN echo "root:root" | chpasswd

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN mkdir /react_tutorial
WORKDIR /react_tutorial
ADD database-check.py /react_tutorial/
ADD setup.sh /react_tutorial/
ADD requirements.txt /react_tutorial/
RUN pip install -r requirements.txt

RUN chmod +x /react_tutorial/setup.sh

EXPOSE 22 8000
CMD /usr/bin/supervisord -n