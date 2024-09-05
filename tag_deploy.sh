#!/bin/bash
if [ "$1" = "fynd" ] || [ "$1" = "jioecomm" ] || [ "$1" = "jmd" ] || [ "$1" = "erase" ] || [ "$1" = "frolic" ] || [ "$1" = "jio" ]
  then
    branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
    if [ "$branch" = "master" ]
    then
      TAG=deploy.$1
      echo "Deploying $TAG $branch"
      git tag $TAG -f
      git push origin $TAG -f
    else
      echo "Error: Deploying prod from $branch"
    fi
  else
    TAG=deploy.$1.$(date +%s)
    echo "Deploying $TAG $branch"
    git tag $TAG
    git push origin $TAG
  fi
