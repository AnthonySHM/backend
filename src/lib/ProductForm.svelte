<script lang="ts">
  export let product: Product;

  let action = product.rowid ? "update" : "create";
</script>

<div class="card">
  <div class="card-header">Product</div>
  <div class="card-body">
    <form method="post" action="/product/{product.rowid}?/{action}">
      <label for="title">Title</label>
      <input
        id="title"
        name="title"
        class="form-control"
        bind:value={product.title}
      />

      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        class="form-control"
        bind:value={product.description}
      ></textarea>

      <button class="btn btn-primary" type="submit">Save</button>
    </form>
  </div>
</div>
