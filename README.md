# Simple Pacman Game

This repo contains the code from a simple Pacman live implementation demo. The demo was written, with the help of [Aider](https://aider.chat/), in approx 20 min using GPT4 as a compiler from English to JavaScript. No prior knowledge of JavaScript were required. Details of the conversation with Aider are available in the commit messages.

## Prerequisites

You need to have Node.js and npm installed on your machine to run this game.

### macOS

If you're on macOS, you can install Node.js and npm using Homebrew:

```bash
# Check if Homebrew is installed, install if we don't have it
if test ! $(which brew); then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

# Update Homebrew recipes
brew update

# Install Node.js and npm
brew install node
```

### Linux

If you're on Linux, you can install Node.js and npm using apt-get and curl:

```bash
# Update package list and install curl
sudo apt-get update
sudo apt-get install -y curl

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

After installing Node.js and npm, you can check their versions with `node -v` and `npm -v`.

## Running the Game

To run the game, open `index.html` in your web browser.
