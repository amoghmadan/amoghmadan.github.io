<template>
  <footer class="mastfoot mt-auto">
    <div class="inner">
      <p>Say hi to me, at <a :href="'mailto:' + email"><b>{{ email }}</b></a></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "VueFooter",
  data() {
    return {
      email: "amoghmadaan@gmail.com",
    };
  },
};
</script>
