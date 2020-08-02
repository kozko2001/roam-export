#!/bin/bash
FOLDER=$1

git -C $FOLDER add .
git -C $FOLDER status

git -C blog diff --cached --exit-code

if [ $? -eq 0 ]
then
  echo "no changes found"
else
  git -C $FOLDER commit  -m "add content from roam-export"
  git -C $FOLDER push
fi
