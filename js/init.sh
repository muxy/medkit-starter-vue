#!/usr/bin/env bash

if [ "$#" -ne 2 ]; then
	echo "Usage: $0 <project_name> <Extension Client ID>"
	exit 2
fi

mkdir -p $1/
shopt -s dotglob
cp -r * $1/
rm $1/init.sh
rm -rf $1/$1
rm -rf $1/.git

cd $1/
find . -type f | xargs sed -i "s/PROJECT_NAME/$1/g"

cat << EOF >> .env
VUE_APP_CLIENT_ID=$2
EOF

echo "New project $1 created in $PWD/"
