<script>
    import Button from '$lib/components/Button.svelte';
    import ConnectWalletOne from '$lib/components/Popups/ConnectWallet/ConnectWalletOne.svelte';
    import ConnectWalletTwo from '$lib/components/Popups/ConnectWallet/ConnectWalletTwo.svelte';
    import ConnectWalletThree from '$lib/components/Popups/ConnectWallet/ConnectWalletThree.svelte';
    import SignMessageOne from '$lib/components/Popups/SignMessage/SignMessageOne.svelte';
    import SignTransactionOne from '$lib/components/Popups/SignTransaction/SignTransactionOne.svelte';
    import AddNetworkOne from '$lib/components/Popups/AddNetwork/AddNetworkOne.svelte';
    import SwitchNetworkOne from '$lib/components/Popups/SwitchNetwork/SwitchNetworkOne.svelte';

    let height = 0;
    let width = 0;
</script>

<svelte:head>
    <title>Web View Playground</title>
</svelte:head>

<svelte:window bind:innerHeight={height} bind:innerWidth={width} />

<p>Viewport <strong>height</strong>: {height}px<br>Viewport <strong>width</strong>: {width}px</p>

<h1>Web View Playground</h1>

<h2>Connect Wallet</h2>

<section>
    <Button
        color="blue"
        text="1"
        controls={ConnectWalletOne}
        key="connectWalletOne"
    />
    <Button
        color="blue"
        text="2"
        controls={ConnectWalletTwo}
        key="connectWalletTwo"
    />
    <Button
        color="blue"
        text="3"
        controls={ConnectWalletThree}
        key="connectWalletThree"
    />
</section>

<h2>Sign Message</h2>

<section>
    <Button
        color="green"
        text="1"
        controls={SignMessageOne}
        key="signMessageOne"
    />
</section>

<h2>Sign Transaction</h2>

<section>
    <Button
        color="yellow"
        text="1"
        controls={SignTransactionOne}
        key="signTransactionOne"
    />
</section>

<h2>Add Network</h2>

<section>
    <Button
        color="orange"
        text="1"
        controls={AddNetworkOne}
        key="addNetworkOne"
    />
</section>

<h2>Switch Network</h2>

<section>
    <Button
        color="red"
        text="1"
        controls={SwitchNetworkOne}
        key="switchNetworkOne"
    />
</section>

<style>
    section:last-of-type {
        margin-bottom: 64px;
    }
</style>
