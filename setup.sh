#!/bin/bash

# Check if Homebrew is installed, install if we don't have it
if test ! $(which brew); then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Update Homebrew recipes
brew update

# Install Node.js and npm
brew install node

# Check Node.js and npm version
node -v
npm -v
