docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss31/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss31/app ../..
