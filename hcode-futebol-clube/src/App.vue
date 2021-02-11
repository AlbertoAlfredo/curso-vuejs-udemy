<template>
  <div id="app">
    <hcode-header/>
    <hcode-section/>
    <hcode-footer/>
  </div>
</template>

<script>
import HcodeHeader from './components/HcodeHeader';
import HcodeFooter from './components/HcodeFooter';
import HcodeSection from './components/HcodeSection';

export default {
  name: 'App',
  components: {
    HcodeHeader,
    HcodeFooter,
    HcodeSection,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
