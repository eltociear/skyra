import { LanguageKeys } from '@lib/types/namespaces/LanguageKeys';
import { Command, Inhibitor, KlasaMessage } from 'klasa';

export default class extends Inhibitor {
	public async run(message: KlasaMessage, command: Command) {
		// If the message was sent in a guild, the command isn't guarded (they are all 0, and
		// cannot be denied), and the permission level is lower than 9, run the permission nodes.
		if (message.guild && message.member && message.author.id !== message.guild.ownerID && !command.guarded && command.permissionLevel < 9) {
			const [pnodes, language] = await message.guild.readSettings((settings) => [settings.permissionNodes, settings.getLanguage()]);

			const result = pnodes.run(message.member, command.name);
			if (result) return;
			if (result === false) throw language.get(LanguageKeys.Inhibitors.Permissions);
		}

		const { broke, permission } = await this.client.permissionLevels.run(message, command.permissionLevel);
		if (permission) return;

		throw broke ? await message.fetchLocale(LanguageKeys.Inhibitors.Permissions) : true;
	}
}
