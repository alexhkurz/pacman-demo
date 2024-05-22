#!/bin/bash

# Determine operating system
OS=$(uname)

if [ "$OS" == "Darwin" ]; then  # macOS
    # Check if Homebrew is installed, install if we don't have it
    if test ! $(which brew); then
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi

    # Update Homebrew recipes
    brew update

    # Install Node.js and npm
    brew install node
else  # assume Linux
    # Update package list and install curl
    sudo apt-get update
    sudo apt-get install -y curl

    # Install Node.js and npm
    curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Check Node.js and npm version
node -v
npm -v
