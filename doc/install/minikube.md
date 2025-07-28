# Install dev env using minikube

## Pre-requisites

* [kubernetes & minikube](https://kubernetes.io/docs/tasks/tools/)
* git-crypt (eventually via your distribution package manager)


## WARNING

Before starting the installation, make sure to read this carefully

If you disconnect your computor or change ip address it might goes into a loop and use 100% of your cpu.

Make sure to stop minikube before going offline.

## Install

After cloning the project, use git-crypt to unlock secret files

> **FIXME:** why this is required for dev purposes ? What if it is not encrypted for _me_ ? what if new contributors comes or leave ?

```sh
git-crypt unlock
```
Then build:

```
cd devtools/kubernetes
./deploy-minikube.sh
```

**During the installation**, you will be asked to which purpose you want to deploy: go, python or frontend development. You can select all or nothing. Afterward you will need to finish the installation manually according to what you choose. 

_For example, you want to do some frontend development, answer [y] then refer to [frontend native installation](./FIXME). Etc._

In case the command fails, after a fix or whatever, before restarting, clean the stack:

```
./clean-minikube.sh
```

## USAGE

**start** or restart

minikube start

**stop**

minikube stop
