export default async (event) => {
    if (event.parent.id !== '1131319217719881889') return;
    
    const messages = await event.messages.fetch();
    const firstMessage = messages.first();

    if (firstMessage.author.bot) return;

    await firstMessage.react('👍');
    await firstMessage.react('👎');
}