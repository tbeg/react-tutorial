#!/bin/sh



if psql -lqt | cut -d \| -f 1 | grep -w react_tutorial; then
    echo "YEEEEEEEEEEEEEAAAAAAAAAAAAH"
else
    su - postgres -c "createdb react_tutorial"
fi

if psql -lqt | cut -d \| -f 1 | grep -w viquedata; then
    echo "YEEEEEEEEEEEEEAAAAAAAAAAAAH"
else
    su - postgres -c "createdb viquedata"
    su - postgres -c "psql viquedata -f /react_tutorial/postgis/viquedata.sql"
fi
