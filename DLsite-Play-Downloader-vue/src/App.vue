<script setup>
import { hookXorEnc } from "./dlsiteplay-enc-detector/xor";
import { origConsole } from "./origConsole";

hookXorEnc().then(({ method, data }) => {
  origConsole.log(method, data);
});
</script>

<template></template>

<style scoped></style>
