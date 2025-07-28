#!/bin/bash

set +e
set -v

DOCKER_TAG="develop"
DOCKER_IMAGE_PREFIX="devtools_"

for DOCKER_NAME in api apiv1 broker frontend identity_poller identity_worker message_handler cli
do
  docker tag $DOCKER_IMAGE_PREFIX$DOCKER_NAME registry.caliopen.org/$DOCKER_NAME:$DOCKER_TAG
  docker push registry.caliopen.org/$DOCKER_NAME:$DOCKER_TAG
done
