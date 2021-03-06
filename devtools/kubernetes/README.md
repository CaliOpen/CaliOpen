# Install dev env using minikube

## Pre-requisites

* If you are **NOT** running Linux, you need to install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* If you are running Linux, you can **either**:
	* Use VirtualBox
	* Run the stack locally with [Docker](https://docs.docker.com/install/).
* [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) & [Minikube](https://github.com/kubernetes/minikube/releases)

## WARNING

Before starting the installation, make sure to read this carefully.

There is currently a bug with the Kubernetes dashboard **when running the stack locally with docker**: if you change networks while Kubernetes is running it might go into a crash loop and use 100% of your cpu after some time. To fix that you can manually delete the pod so that it is recreated:

```sh
kubectl delete pod $DASHBOARD_POD_NAME --namespace kube-system

```

You can find your pod's name with:

```sh
kubectl get pods --namespace kube-system
```
The pod's name should start with "kubernetes-dashboard" followed by a number.

You can also disable and re-enable the dashboard addon with minikube:

```
minikube addons [ disable | enable ] dashboard
```

Make sure to stop minikube before going offline to avoid any problems.

## Deployment

To start the deployment:

```sh
./deploy-minikube.sh
```

If it fails during the deployment but minikube started you can skip that part with the flag skip-setup:

```sh
 ./deploy-minikube.sh skip-setup
```

###### During the installation:

You can select for which kind of development your deployment is:

* Go
* Python
* Frontend

Refer to [this file](../../doc/install/minikube-local-development.md) for informations related to local development

 You can individually select them. Based on your choices some services are not deployed so that you can plug in your local development environment.

>_For example, you want to do some frontend development, answer [y] for that choice only, then refer to [frontend native installation](./FIXME)._


##### NOTE:

To deploy the stack with docker you'll need to run the script as sudo. See [kubernetes/kubeadm#57](https://github.com/kubernetes/kubeadm/issues/57).


## Deleting deployment

In case you are deploying the stack without a driver (locally) and the command fails or if you just want to restart the deployment from zero, clean the stack beforehand:

```sh
sudo ./clean-minikube.sh
```

##### NOTE:

This command resets kubeadm, so be careful if you have any other kubernetes clusters running on your machine (no need to worry about kube configs).

## Usage

_**Starting the cluster:**_

```sudo minikube start```

_**Stopping the cluster:**_

```sudo minikube stop```

## Additional info

* [**Kubectl**](https://kubernetes.io/docs/reference/kubectl/overview/)
* [**Minikube**](https://github.com/kubernetes/minikube)
