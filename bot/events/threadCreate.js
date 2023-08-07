export default async (event) => {
    if (event.parent.id !== config.channelConfig.suggestions) return;
    
    const messages = await event.messages.fetch();
    const firstMessage = messages.first();

    if (firstMessage.author.bot) return;

    await firstMessage.react('👍');
    await firstMessage.react('👎');
}