<script>
    import '$lib/global.scss';
    import { onMount } from 'svelte';
    import overlay from '$lib/stores/overlay';
    import hidden from '$lib/stores/hidden';

    let div;

    const toggleOverlay = () => {
        if (!$overlay) {
            div.style.display = `none`;
            div.style.opacity = `0`;
        } else {
            div.style.display = `block`;
            div.style.opacity = `0`;
        }
    };

    const toggleHidden = () => {
        let isHidden = true;
        Object.keys($hidden).forEach((key) => $hidden[key] === false && (isHidden = false));
        if (!!isHidden) {
            overlay.update(() => false);
        } else {
            overlay.update(() => true);
        }
    };

    const hideOverlay = () => {
        const hiddenUpdate = {
            connectWalletOne: true,
            connectWalletTwo: true,
            connectWalletThree: true,
            signMessageOne: true,
            signTransactionOne: true,
            addNetworkOne: true,
            switchNetworkOne: true,
        };
        hidden.update(() => hiddenUpdate);
    };

    onMount(() => {
        hidden.subscribe(toggleHidden);
        overlay.subscribe(toggleOverlay);
    });
</script>

<div bind:this={div} on:click={hideOverlay} class="overlay" />

<slot />

<style>
    .overlay {
        background-color: #000;
        height: 100vh;
        left: 0;
        opacity: .4;
        position: fixed;
        top: 0;
        transition: opacity .2;
        width: 100vw;
        will-change: opacity;
        z-index: 9999999;
    }
</style>
