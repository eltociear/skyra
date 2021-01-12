import { FT, T } from '#lib/types';

export const Cooldown = FT<{ remaining: number }, string>('inhibitors:cooldown');
export const MissingBotPerms = FT<{ missing: string[] }, string>('inhibitors:missingBotPerms');
export const Nsfw = T<string>('inhibitors:nsfw');
export const Permissions = T<string>('inhibitors:permissions');
export const RequiredSettings = FT<{ settings: string; count: number }, string>('inhibitors:requiredSettings');
export const Runin = FT<{ type: string }, string>('inhibitors:runin');
export const RuninNone = FT<{ name: string }, string>('inhibitors:runinNone');
export const DisabledGuild = T<string>('inhibitors:disabledGuild');
export const DisabledGlobal = T<string>('inhibitors:disabledGlobal');
export const MusicQueueEmpty = T<string>('inhibitors:musicQueueEmpty');
export const MusicNotPlaying = T<string>('inhibitors:musicNotPlaying');
export const MusicPaused = T<string>('inhibitors:musicPaused');
export const MusicDjMember = T<string>('inhibitors:musicDjMember');
export const MusicUserVoiceChannel = T<string>('inhibitors:musicUserVoiceChannel');
export const MusicBotVoiceChannel = T<string>('inhibitors:musicBotVoiceChannel');
export const MusicBothVoiceChannel = T<string>('inhibitors:musicBothVoiceChannel');
export const MusicNothingPlaying = T<string>('inhibitors:musicNothingPlaying');
export const Spam = FT<{ channel: string }, string>('inhibitors:spam');
