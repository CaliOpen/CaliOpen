# This file creates a container that runs a {package} caliopen frontend
# Important:
# Author: Caliopen
# Date: 2018-10-22

FROM node:16 as builder
MAINTAINER Caliopen

ADD . /srv/caliopen/api-mock/
WORKDIR /srv/caliopen/api-mock/
EXPOSE 31415

CMD ["bin/start"]
