del-docker-images:
	docker rmi $$(docker images -a -q) -f

del-docker-containers:
	docker stop $$(docker ps -a -q)
	docker rm $$(docker ps -a -q)

dev:
	docker-compose -f ./setup/development/docker-compose.yml up

install:
	npm install

