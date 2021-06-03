<template>
    <!-- SHIMMER CONTENT -->
    <tbody>
        <tr v-for="i in row" :key="i">
            <td v-for="j in column" :key="j">
                <div class="shimmer shimmer-cell py-3"></div>
            </td>
        </tr>
    </tbody>
    <!-- END SHIMMER CONTENT -->
</template>

<script>
export default {
    props: ['column', 'row']
}
</script>