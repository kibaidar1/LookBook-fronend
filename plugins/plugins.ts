export default defineNuxtPlugin((nuxtApp) => {
    return{
        provide: {
            //short: (str: string, maxlen: number) => str.length <= maxlen ? str : str.slice(0, maxlen) + '...',
            short_text: (str: string, maxlen: number) => str.slice(0, maxlen).replace(/\.(.*)$/, ''),
        },
    };
});