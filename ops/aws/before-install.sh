cd /opt/smtm/ops
docker-compose down --rmi local
docker volume prune -f
docker system prune -f

rm ../server/.env
touch ../server/.env

add_parameter() {
    PARAM=$1
    PARAM_VALUE=$(aws --region sa-east-1 ssm get-parameter --name /SMTM/dev/${PARAM} --query Parameter.Value | sed -e 's/^"//' -e 's/"$//')
    echo "$PARAM=$PARAM_VALUE" >> ../server/.env
}

add_parameter PORT
add_parameter HOST
add_parameter NODE_ENV
add_parameter APP_KEY
add_parameter DB_CONNECTION