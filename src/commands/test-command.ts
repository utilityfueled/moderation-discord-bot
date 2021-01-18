import { Message } from 'discord.js';

import { EventData } from '../models/internal-models';
import { Lang } from '../services';
import { MessageUtils } from '../utils';
import { Command } from './command';

export class TestCommand implements Command {
    public name = 'test';
    public aliases = ['t'];
    public requireGuild = false;
    public requirePerms = [];

    public async execute(msg: Message, args: string[], data: EventData): Promise<void> {
        await MessageUtils.send(msg.channel, Lang.getEmbed('commands.test', data.lang));
    }
}
