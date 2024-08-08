<script lang="ts">
  import ProductForm from "$lib/ProductForm.svelte";

    let product: Product ={
     rowid:0,
     title:'',
     description:''   
    }
</script>

<ProductForm {product} />


