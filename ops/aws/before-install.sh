cd /opt/smtm/ops
docker-compose down
docker volume prune -f
docker system prune -f
docker rmi ops_client
docker rmi ops_server