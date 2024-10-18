<template>
    <div>
        <h1>All Books</h1>
        <pre>{{ books }}</pre>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'GetAllBookAPI',
    data() {
        return {
            books: null,
        };
    },
    async mounted() {
        try {
            const response = await axios.get("https://countbooks-6qkluh4uca-uc.a.run.app");
            this.books = JSON.stringify(response.data, null, 2);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    },
};
</script>

<style scoped>
pre {
    text-align: left;
    margin: 20px auto;
    padding: 10px;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
}
</style>
