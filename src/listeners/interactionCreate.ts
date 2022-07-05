import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interfaction: BaseCommandInteraction
): Promise<void> => {

	const slashCommand = Commands.find(c => c.name === interfaction.commandName);
	if(!slashCommand) {
		interfaction.followUp({ content: "An error has occured" });
		return;
	}

	await interfaction.deferReply();

	slashCommand.run(client, interfaction);

};
