```sh
docker login -u= -p= registry.caliopen.org
docker-compose build

docker tag <LOCAL IMAGE NAME> registry.caliopen.org/cli:<TAG>
docker push registry.caliopen.org/cli:<TAG>
docker tag <LOCAL IMAGE NAME> registry.caliopen.org/frontend:<TAG>
docker push registry.caliopen.org/frontend:<TAG>
docker tag <LOCAL IMAGE NAME> registry.caliopen.org/api:<TAG>
docker push registry.caliopen.org/api:<TAG>
docker tag <LOCAL IMAGE NAME> registry.caliopen.org/apiv1:<TAG>
docker push registry.caliopen.org/apiv1:<TAG>
docker tag <LOCAL IMAGE NAME> registry.caliopen.org/message-handler:<TAG>
docker push registry.caliopen.org/message-handler:<TAG>
docker tag <LOCAL IMAGE NAME> registry.caliopen.org/broker:<TAG>
docker push registry.caliopen.org/broker:<TAG>
docker tag <LOCAL IMAGE NAME> registry.caliopen.org/identity-poller:<TAG>
docker push registry.caliopen.org/identity-poller:<TAG>
docker tag <LOCAL IMAGE NAME> registry.caliopen.org/identity-worker:<TAG>
docker push registry.caliopen.org/identity-worker:<TAG>
```

Where \<TAG> corresponds to:
- :latest for kubernetes images built from master
- :compose for docker-compose images built from master
- :develop for docker-compose images built from develop

and \<LOCAL IMAGE NAME> is the name you built the image with

## registry API

**list images**

https://public-registry.caliopen.org/v2/_catalog

**tag details of an image**

`https://public-registry.caliopen.org/v2/<name>/tags/list`
