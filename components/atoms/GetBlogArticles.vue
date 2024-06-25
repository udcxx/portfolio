<script setup>
    const { data } = await useFetch('https://app.udcxx.me/api/blog/?type=article&limit=3&order=DESC');
    const response = JSON.parse(data._rawValue);
</script>

<template>
    <ul>
        <li>
            <a :href="response.articles[0].url">{{ response.articles[0].eyecatchemoji }} {{ response.articles[0].title }}</a>
        </li>
        <li>
            <a :href="response.articles[1].url">{{ response.articles[1].eyecatchemoji }} {{ response.articles[1].title }}</a>
        </li>
        <li>
            <a :href="response.articles[2].url">{{ response.articles[2].eyecatchemoji }} {{ response.articles[2].title }}</a>
        </li>
    </ul>
</template>