#!/bin/bash

# Stop the most recently created container if it is running
CONTAINER_ID=$(docker ps -lq)
echo "Most recently created container ID: $CONTAINER_ID"
if [ -n "$CONTAINER_ID" ]; then
    echo "Stopping the running container..."
    docker stop ${CONTAINER_ID}
    echo "Container stopped."
fi

# Define the Docker image names
FE_IMAGE="pardhuguttula/fe"
BE_IMAGE="pardhuguttula/be"

# Get the latest Docker tags from DockerHub
FE_TAG=$(curl -s "https://hub.docker.com/v2/repositories/${FE_IMAGE}/tags/" | jq -r '.results[0].name')
BE_TAG=$(curl -s "https://hub.docker.com/v2/repositories/${BE_IMAGE}/tags/" | jq -r '.results[0].name')

# Pull the images with the dynamically determined tags
echo "Pulling image ${FE_IMAGE}:${FE_TAG}..."
docker pull "${FE_IMAGE}:${FE_TAG}"

echo "Pulling image ${BE_IMAGE}:${BE_TAG}..."
docker pull "${BE_IMAGE}:${BE_TAG}"

# Update docker-compose.yml with the latest tags
echo "Updating docker-compose.yml with the latest tags..."
sed -i "s|image: ${FE_IMAGE}:.*|image: ${FE_IMAGE}:${FE_TAG}|g" docker-compose.yml
sed -i "s|image: ${BE_IMAGE}:.*|image: ${BE_IMAGE}:${BE_TAG}|g" docker-compose.yml

# Run the Docker Compose file to start the containers
echo "Starting containers with Docker Compose..."
docker-compose up -d
echo "Containers started with Docker Compose."