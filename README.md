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