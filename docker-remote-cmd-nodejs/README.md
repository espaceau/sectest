# docker-remote-cmd-nodejs

Docker container builder of a nodeJS server that executes remote commands on the server directly from the url suffix

Example usage:

curl http://<ipAddress>:port/exec/ls - executes 'ls' within the container
NB: This container should not be used in any production environment or exposed on the general internet
