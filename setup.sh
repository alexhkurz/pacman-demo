#!/bin/bash

# Update package list and install curl
sudo apt-get update
sudo apt-get install -y curl

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Check Node.js and npm version
node -v
npm -v
