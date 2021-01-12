import { FT, T } from '#lib/types';
import { LanguageHelpDisplayOptions } from '#utils/LanguageHelp';
import { Role, User } from 'discord.js';

export const AttachmentsModeDescription = T<string>('commands/management:attachmentsModeDescription');
export const AttachmentsModeExtended = T<LanguageHelpDisplayOptions>('commands/management:attachmentsModeExtended');
export const CapitalsModeDescription = T<string>('commands/management:capitalsModeDescription');
export const CapitalsModeExtended = T<LanguageHelpDisplayOptions>('commands/management:capitalsModeExtended');
export const CreateMuteDescription = T<string>('commands/management:createMuteDescription');
export const CreateMuteExtended = T<LanguageHelpDisplayOptions>('commands/management:createMuteExtended');
export const FilterAdded = FT<{ word: string }, string>('commands/management:filterAdded');
export const FilterAlreadyFiltered = T<string>('commands/management:filterAlreadyFiltered');
export const FilterDescription = T<string>('commands/management:filterDescription');
export const FilterExtended = T<LanguageHelpDisplayOptions>('commands/management:filterExtended');
export const FilterModeDescription = T<string>('commands/management:filterModeDescription');
export const FilterModeExtended = T<LanguageHelpDisplayOptions>('commands/management:filterModeExtended');
export const FilterNotFiltered = T<string>('commands/management:filterNotFiltered');
export const FilterRemoved = FT<{ word: string }, string>('commands/management:filterRemoved');
export const FilterReset = T<string>('commands/management:filterReset');
export const FilterShow = FT<{ words: string }, string>('commands/management:filterShow');
export const FilterShowEmpty = T<string>('commands/management:filterShowEmpty');
export const FilterUndefinedWord = T<string>('commands/management:filterUndefinedWord');
export const GuildInfoChannels = FT<{ text: number; voice: number; categories: number; afkChannelText: string }, string>(
	'commands/management:guildInfoChannels'
);
export const GuildInfoChannelsAfkChannelText = FT<{ afkChannel: string; afkTime: number }, string>(
	'commands/management:guildInfoChannelsAfkChannelText'
);
export const GuildInfoDescription = T<string>('commands/management:guildInfoDescription');
export const GuildInfoExtended = T<LanguageHelpDisplayOptions>('commands/management:guildInfoExtended');
export const GuildInfoMembers = FT<{ memberCount: number; owner: User }, string>('commands/management:guildInfoMembers');
export const GuildInfoNoroles = T<string>('commands/management:guildInfoNoroles');
export const GuildInfoOther = FT<
	{ size: number; region: string; createdAt: number; verificationLevel: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH' },
	string
>('commands/management:guildInfoOther');
export const GuildInfoRoles = FT<{ roles: string }, string>('commands/management:guildInfoRoles');
export const GuildInfoTitles = T<Record<string, string>>('commands/management:guildInfoTitles');
export const InviteModeDescription = T<string>('commands/management:inviteModeDescription');
export const InviteModeExtended = T<LanguageHelpDisplayOptions>('commands/management:inviteModeExtended');
export const LinkModeDescription = T<string>('commands/management:linkModeDescription');
export const LinkModeExtended = T<LanguageHelpDisplayOptions>('commands/management:linkModeExtended');
export const ManageCommandAutoDeleteAdd = FT<{ channel: string; time: number }, string>('commands/management:manageCommandAutoDeleteAdd');
export const ManageCommandAutoDeleteDescription = T<string>('commands/management:managecommandautodeleteDescription');
export const ManageCommandAutoDeleteExtended = T<LanguageHelpDisplayOptions>('commands/management:managecommandautodeleteExtended');
export const ManageCommandAutoDeleteRemove = FT<{ channel: string }, string>('commands/management:manageCommandAutoDeleteRemove');
export const ManageCommandAutoDeleteRemoveNotSet = FT<{ channel: string }, string>('commands/management:manageCommandAutoDeleteRemoveNotset');
export const ManageCommandAutoDeleteRequiredDuration = T<string>('commands/management:manageCommandAutoDeleteRequiredDuration');
export const ManageCommandAutoDeleteReset = T<string>('commands/management:manageCommandAutoDeleteReset');
export const ManageCommandAutoDeleteShow = FT<{ codeblock: string }, string>('commands/management:manageCommandAutoDeleteShow');
export const ManageCommandAutoDeleteShowEmpty = T<string>('commands/management:manageCommandAutoDeleteShowEmpty');
export const ManageCommandAutoDeleteTextChannel = T<string>('commands/management:manageCommandAutoDeleteTextChannel');
export const ManageCommandChannelAdd = FT<{ channel: string; command: string }, string>('commands/management:manageCommandChannelAdd');
export const ManageCommandChannelAddAlreadySet = T<string>('commands/management:manageCommandChannelAddAlreadyset');
export const ManageCommandChannelDescription = T<string>('commands/management:manageCommandChannelDescription');
export const ManageCommandChannelExtended = T<LanguageHelpDisplayOptions>('commands/management:manageCommandChannelExtended');
export const ManageCommandChannelRemove = FT<{ channel: string; command: string }, string>('commands/management:manageCommandChannelRemove');
export const ManageCommandChannelRemoveNotSet = FT<{ channel: string }, string>('commands/management:manageCommandChannelRemoveNotset');
export const ManageCommandChannelRequiredCommand = T<string>('commands/management:manageCommandChannelRequiredCommand');
export const ManageCommandChannelReset = FT<{ channel: string }, string>('commands/management:manageCommandChannelReset');
export const ManageCommandChannelResetEmpty = T<string>('commands/management:manageCommandChannelResetEmpty');
export const ManageCommandChannelShow = FT<{ channel: string; commands: string }, string>('commands/management:manageCommandChannelShow');
export const ManageCommandChannelShowEmpty = T<string>('commands/management:manageCommandChannelShowEmpty');
export const ManageCommandChannelTextChannel = T<string>('commands/management:manageCommandChannelTextChannel');
export const ManageReactionRolesAdd = FT<{ emoji: string; url: string }, string>('commands/management:manageReactionRolesAdd');
export const ManageReactionRolesAddChannel = FT<{ emoji: string; channel: string }, string>('commands/management:manageReactionRolesAddChannel');
export const ManageReactionRolesAddMissing = T<string>('commands/management:manageReactionRolesAddMissing');
export const ManageReactionRolesAddPrompt = T<string>('commands/management:manageReactionRolesAddPrompt');
export const ManageReactionRolesDescription = T<string>('commands/management:manageReactionRolesDescription');
export const ManageReactionRolesExtended = T<LanguageHelpDisplayOptions>('commands/management:manageReactionRolesExtended');
export const ManageReactionRolesRemove = FT<{ emoji: string; url: string }, string>('commands/management:manageReactionRolesRemove');
export const ManageReactionRolesRemoveNotExists = T<string>('commands/management:manageReactionRolesRemoveNotExists');
export const ManageReactionRolesReset = T<string>('commands/management:manageReactionRolesReset');
export const ManageReactionRolesResetEmpty = T<string>('commands/management:manageReactionRolesResetEmpty');
export const ManageReactionRolesShowEmpty = T<string>('commands/management:manageReactionRolesShowEmpty');
export const MessageModeDescription = T<string>('commands/management:messageModeDescription');
export const MessageModeExtended = T<LanguageHelpDisplayOptions>('commands/management:messageModeExtended');
export const NewlineModeDescription = T<string>('commands/management:newlineModeDescription');
export const NewlineModeExtended = T<LanguageHelpDisplayOptions>('commands/management:newlineModeExtended');
export const NickCleared = T<string>('commands/management:nickCleared');
export const NickDescription = T<string>('commands/management:nickDescription');
export const NickExtended = T<LanguageHelpDisplayOptions>('commands/management:nickExtended');
export const NickSet = FT<{ nickname: string }, string>('commands/management:nickSet');
export const PermissionNodesAdd = T<string>('commands/management:permissionNodesAdd');
export const PermissionNodesCommandNotExists = T<string>('commands/management:permissionNodesCommandNotExists');
export const PermissionNodesDescription = T<string>('commands/management:permissionNodesDescription');
export const PermissionNodesExtended = T<LanguageHelpDisplayOptions>('commands/management:permissionNodesExtended');
export const PermissionNodesHigher = T<string>('commands/management:permissionNodesHigher');
export const PermissionNodesInvalidType = T<string>('commands/management:permissionNodesInvalidType');
export const PermissionNodesNodeNotExists = T<string>('commands/management:permissionNodesNodeNotExists');
export const PermissionNodesRemove = T<string>('commands/management:permissionNodesRemove');
export const PermissionNodesReset = T<string>('commands/management:permissionNodesReset');
export const PermissionNodesShowAllow = FT<{ allow: string }, string>('commands/management:permissionNodesShowAllow');
export const PermissionNodesShowDeny = FT<{ deny: string[] }, string>('commands/management:permissionNodesShowDeny');
export const PermissionNodesShowName = FT<{ name: string }, string>('commands/management:permissionNodesShowName');
export const ReactionModeDescription = T<string>('commands/management:reactionModeDescription');
export const ReactionModeExtended = T<LanguageHelpDisplayOptions>('commands/management:reactionModeExtended');
export const RoleInfoAll = T<string>('commands/management:roleInfoAll');
export const RoleInfoData = FT<{ role: Role; hoisted: string; mentionable: string }, string>('commands/management:roleInfoData');
export const RoleInfoDescription = T<string>('commands/management:roleInfoDescription');
export const RoleInfoExtended = T<LanguageHelpDisplayOptions>('commands/management:roleInfoExtended');
export const RoleInfoNoPermissions = T<string>('commands/management:roleInfoNoPermissions');
export const RoleInfoTitles = T<Record<string, string>>('commands/management:roleInfoTitles');
export const RolesAbort = FT<{ prefix: string }, string>('commands/management:rolesAbort');
export const RolesAdded = FT<{ roles: string }, string>('commands/management:rolesAdded');
export const RolesAuditLog = T<string>('commands/management:rolesAuditlog');
export const RolesDescription = T<string>('commands/management:rolesDescription');
export const RolesExtended = T<LanguageHelpDisplayOptions>('commands/management:rolesExtended');
export const RolesListEmpty = T<string>('commands/management:rolesListEmpty');
export const RolesListTitle = T<string>('commands/management:rolesListTitle');
export const RolesNotManageable = FT<{ roles: string }, string>('commands/management:rolesNotManageable');
export const RolesNotPublic = FT<{ roles: string }, string>('commands/management:rolesNotPublic');
export const RolesRemoved = FT<{ roles: string }, string>('commands/management:rolesRemoved');
export const SetIgnoreChannelsDescription = T<string>('commands/management:setIgnoreChannelsDescription');
export const SetIgnoreChannelsExtended = T<LanguageHelpDisplayOptions>('commands/management:setIgnoreChannelsExtended');
export const SetIgnoreChannelsRemoved = FT<{ channel: string }, string>('commands/management:setIgnoreChannelsRemoved');
export const SetIgnoreChannelsSet = FT<{ channel: string }, string>('commands/management:setIgnoreChannelsSet');
export const SetImageLogsDescription = T<string>('commands/management:setImageLogsDescription');
export const SetImageLogsExtended = T<LanguageHelpDisplayOptions>('commands/management:setImageLogsExtended');
export const SetImageLogsSet = FT<{ channel: string }, string>('commands/management:setImageLogsSet');
export const SetMemberLogsDescription = T<string>('commands/management:setMemberLogsDescription');
export const SetMemberLogsExtended = T<LanguageHelpDisplayOptions>('commands/management:setMemberLogsExtended');
export const SetMemberLogsSet = FT<{ channel: string }, string>('commands/management:setMemberLogsSet');
export const SetMessageLogsDescription = T<string>('commands/management:setMessageLogsDescription');
export const SetMessageLogsExtended = T<LanguageHelpDisplayOptions>('commands/management:setMessageLogsExtended');
export const SetMessageLogsSet = FT<{ channel: string }, string>('commands/management:setMessageLogsSet');
export const SetModerationLogsDescription = T<string>('commands/management:setmodlogsDescription');
export const SetModerationLogsExtended = T<LanguageHelpDisplayOptions>('commands/management:setmodlogsExtended');
export const SetModerationLogsSet = FT<{ channel: string }, string>('commands/management:setModLogsSet');
export const SetPrefixDescription = T<string>('commands/management:setprefixDescription');
export const SetPrefixExtended = T<LanguageHelpDisplayOptions>('commands/management:setprefixExtended');
export const SetPrefixSet = FT<{ prefix: string }, string>('commands/management:setPrefixSet');
export const SetRoleChannelDescription = T<string>('commands/management:setrolechannelDescription');
export const SetRoleChannelExtended = T<LanguageHelpDisplayOptions>('commands/management:setrolechannelExtended');
export const SetRoleMessageDescription = T<string>('commands/management:setrolemessageDescription');
export const SetRoleMessageExtended = T<LanguageHelpDisplayOptions>('commands/management:setrolemessageExtended');
export const SetStarboardEmojiDescription = T<string>('commands/management:setStarboardEmojiDescription');
export const SetStarboardEmojiExtended = T<LanguageHelpDisplayOptions>('commands/management:setStarboardEmojiExtended');
export const SetStarboardEmojiSet = FT<{ emoji: string }, string>('commands/management:setStarboardEmojiSet');
export const StickyRolesAdd = FT<{ user: string }, string>('commands/management:stickyRolesAdd');
export const StickyRolesAddExists = FT<{ user: string }, string>('commands/management:stickyRolesAddExists');
export const StickyRolesDescription = T<string>('commands/management:stickyRolesDescription');
export const StickyRolesExtended = T<LanguageHelpDisplayOptions>('commands/management:stickyRolesExtended');
export const StickyRolesNotExists = FT<{ user: string }, string>('commands/management:stickyRolesNotExists');
export const StickyRolesRemove = FT<{ user: string }, string>('commands/management:stickyRolesRemove');
export const StickyRolesRequiredRole = T<string>('commands/management:stickyRolesRequiredRole');
export const StickyRolesRequiredUser = T<string>('commands/management:stickyRolesRequiredUser');
export const StickyRolesReset = FT<{ user: string }, string>('commands/management:stickyRolesReset');
export const StickyRolesShowEmpty = T<string>('commands/management:stickyRolesShowEmpty');
export const StickyRolesShowSingle = FT<{ user: string; roles: string }, string>('commands/management:stickyRolesShowSingle');
export const TriggersAdd = T<string>('commands/management:triggersAdd');
export const TriggersAddTaken = T<string>('commands/management:triggersAddTaken');
export const TriggersDescription = T<string>('commands/management:triggersDescription');
export const TriggersExtended = T<LanguageHelpDisplayOptions>('commands/management:triggersExtended');
export const TriggersInvalidAlias = T<string>('commands/management:triggersInvalidalias');
export const TriggersInvalidReaction = T<string>('commands/management:triggersInvalidreaction');
export const TriggersListEmpty = T<string>('commands/management:triggersListEmpty');
export const TriggersNoOutput = T<string>('commands/management:triggersNooutput');
export const TriggersNoType = T<string>('commands/management:triggersNotype');
export const TriggersRemove = T<string>('commands/management:triggersRemove');
export const TriggersRemoveNotTaken = T<string>('commands/management:triggersRemoveNottaken');
