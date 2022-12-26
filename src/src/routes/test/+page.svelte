<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <h1>Test</h1>
    <hr />
    <div>{data.item.message}</div>
</main>
