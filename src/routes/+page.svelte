<script lang="ts">
  import DeleteButton from "$lib/DeleteButton.svelte";
import type { PageServerData } from "./$types";
  export let data : PageServerData;
</script>

<h5>Products</h5>
<a href="/product/create" class="btn btn-primary">Create New</a>
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {#each data.products as product}
        <tr>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td><a href="/product/{product.rowid}" class="btn btn-small btn-warning">Edit</a>
            <DeleteButton {product} />
            </td>
        </tr>
        {/each}
    </tbody> 
</table>