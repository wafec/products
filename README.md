# Products Project

## Prerequisites

- Docker
- Docker Compose

## Running Locally

```shell
cd infra
docker-compose up
```

Open http://localhost:3333 on your browser

## Troubleshooting

### Reset Database

```shell
cd infra
docker-compose down --volume
docker-compose up
```

## Running Frontend tests

```
cd ./apps/frontend
npm test
```

Press the `a` key to run all tests.

## Running backend tests

```
cd ./apps/backend/Products.Tests
dotnet test
```

## Future Work

- Implement all the TODOs