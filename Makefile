dalton-up: 
	docker-compose -f dalton/docker-compose.yaml up --build -d
dalton-down:
	docker-compose -f dalton/docker-compose.yaml down
	docker volume rm -f dalton_db-pg
	docker volume rm -f dalton_db-config
	docker volume rm -f dalton_lb-config