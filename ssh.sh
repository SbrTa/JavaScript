#!/bin/bash

HOST=172.16.229.240

CD='cd'
LS='ls'
AND='&&'
HOME='/app/unet'
SERVICE='/service-app'
WEB='/web-app'
ADMIN='/admin-app'
START='sh startup.sh'
STOP='sh shutdown.sh'
USER=user
PASSWORD=bs23
# ssh $USER@$HOST $CD $WEB $AND $START


if ! ssh "${USER}@${HOST}" "ls" "${HOME}${WEB}/webapps/ROOT* >/dev/null 2>&1" ; then
     echo "dir does not exist"
else
     echo "dir does exist"
	 
fi

cmd /k
