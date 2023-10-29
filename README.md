# ETH_LONDON
 
# Discord Bot for Rarimo's Proof of Humanity Verification

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Discord bot is designed to streamline the verification process for users using Rarimo's Proof of Humanity (PoH) platform. With this bot, you can effortlessly grant verified users a custom Discord role and personalize the greeting message they receive when joining your server. Discord server admins can easily configure the role assigned to verified users, enhancing the security and verification process on your server.

## Features

- **Custom Discord Roles**: Grant users who have successfully completed the Proof of Humanity verification a custom Discord role, distinguishing them from others on your server.

- **Role Configuration**: Discord server admins can easily configure the role assigned to verified users. This allows for flexibility in defining the privileges and permissions of verified members.

- **Custom Greeting Message**: Tailor the greeting message that verified users receive when they join your server. This personal touch helps you create a welcoming and informative environment for your members.

## Prerequisites

Before getting started with this Discord bot, make sure you have the following:

- A Discord account with administrative privileges on the server where you want to implement the verification process.

- A registered application on the [Discord Developer Portal](https://discord.com/developers/applications). This will provide you with the bot token required to run the bot.

- Node.js installed on your server or local machine.

## Installation

1. Clone this repository to your local machine or server.

   ```shell
   git clone 
   ```

2. Install the required Node.js dependencies.

   ```shell
   cd your-repo-name
   yarn 
   ```

3. Create a `.env` file in the project root directory and add your Discord bot token.

   ```plaintext
    DISCORD_BOT_TOKEN=your-bot-token
    GUILD_ID=your-guild-id
    CLIENT_ID=your-client-id
    VERIFY_ROLE=your-verify-role-id
    VERIFY_CHANNEL=your-verify-channel-id
   ```

4. Start the bot by running the following command:

   ```shell
   yarn start
   ```

## Usage

1. Invite the bot to your Discord server using the OAuth2 URL generated in the [Discord Developer Portal](https://discord.com/developers/applications).

2. Set up the bot's configuration (see [Configuration](#configuration)).

3. When users complete the Proof of Humanity verification, the bot will automatically assign the custom role and greet them according to your settings.


## Contributing

Contributions to this project are welcome! If you have any ideas for improvements or new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.