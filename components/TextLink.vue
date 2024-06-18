<script setup lang="ts">
    interface Props {
        href: String,
        type: String
    }
    const props = defineProps<Props>()
</script>

<template>
    <v-if >

    </v-if>
    <a href="{{ href }}"><slot></a>
</template>