<script>
    import hidden from '$lib/stores/hidden';

    export let color;
    export let text;
    export let controls;
    export let key;

    const click = () => {
        let hiddenUpdate = $hidden;
        hiddenUpdate[key] = false;
        hidden.update(() => hiddenUpdate);
    };
</script>

<button class={color} on:click={click}>
    {text}
</button>

<svelte:component this={controls} />

<style>
    button {
        border: 0;
        border-radius: 18px;
        color: #fff;
        cursor: pointer;
        font-size: 24px;
        font-weight: 600;
        height: 60px;
        width: 100%;
    }
    :global {
        button.blue {
            background-color: #4169e1;
            &:hover {
                background-color: rgba(65, 105, 225, .8);
            }
            &:focus, &:active {
                border: 2px solid #00f;
            }
        }
        button.green {
            background-color: #41e141;
            &:hover {
                background-color: rgba(65, 225, 65, .8);
            }
            &:focus, &:active {
                border: 2px solid #00ac00;
            }
        }
        button.yellow {
            background-color: #ffd448;
            &:hover {
                background-color: rgba(255, 212, 72, .8);
            }
            &:focus, &:active {
                border: 2px solid #fffb00;
            }
        }
        button.orange {
            background-color: #ff6207;
            &:hover {
                background-color: rgba(255, 98, 7, .8);
            }
            &:focus, &:active {
                border: 2px solid #ff4800;
            }
        }
        button.red {
            background-color: #e14141;
            &:hover {
                background-color: rgba(225, 65, 65, .8);
            }
            &:focus, &:active {
                border: 2px solid #f00;
            }
        }
    }
</style>
