import { writable } from 'svelte/store';

export default writable({
    connectWalletOne: true,
    connectWalletTwo: true,
    connectWalletThree: true,
    signMessageOne: true,
    signTransactionOne: true,
    addNetworkOne: true,
    switchNetworkOne: true,
});
