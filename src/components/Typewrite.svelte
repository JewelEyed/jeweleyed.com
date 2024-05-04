<script>
  import { onMount } from 'svelte';
    export let typedString = "Test test test";
    import Typewriter from 'typewriter-effect';
    const rand = crypto.randomUUID();
    onMount(() => {
        new Typewriter('#' + rand, {
        strings: [typedString],
        autoStart: true,
        loop: true
    });
    })
   
</script>
<span id={rand}>
    {typedString}
</span>