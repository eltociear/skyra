import { AdderKey, GuildEntity, GuildSettings } from '#lib/database';
import { SelfModerationCommand } from '#lib/structures/SelfModerationCommand';
import { SkyraCommandOptions } from '#lib/structures/SkyraCommand';
import { KeyOfType } from '#lib/types';
import { LanguageKeys } from '#lib/types/namespaces/LanguageKeys';
import { ApplyOptions } from '@skyra/decorators';

@ApplyOptions<SkyraCommandOptions>({
	aliases: ['message-mode', 'msg-mode', 'm-mode'],
	description: LanguageKeys.Commands.Management.MessageModeDescription,
	extendedHelp: LanguageKeys.Commands.Management.MessageModeExtended
})
export default class extends SelfModerationCommand {
	protected $adder: AdderKey = 'messages';
	protected keyEnabled: KeyOfType<GuildEntity, boolean> = GuildSettings.Selfmod.Messages.Enabled;
	protected keySoftAction: KeyOfType<GuildEntity, number> = GuildSettings.Selfmod.Messages.SoftAction;
	protected keyHardAction: KeyOfType<GuildEntity, number | null> = GuildSettings.Selfmod.Messages.HardAction;
	protected keyHardActionDuration: KeyOfType<GuildEntity, number | null> = GuildSettings.Selfmod.Messages.HardActionDuration;
	protected keyThresholdMaximum: KeyOfType<GuildEntity, number | null> = GuildSettings.Selfmod.Messages.ThresholdMaximum;
	protected keyThresholdDuration: KeyOfType<GuildEntity, number | null> = GuildSettings.Selfmod.Messages.ThresholdDuration;
}
