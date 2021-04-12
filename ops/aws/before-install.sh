cd /opt/smtm/ops
docker-compose down
docker volume prune -f
docker system prune -f
cd /
rm -rf /opt/smtm
