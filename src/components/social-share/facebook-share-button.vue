<template>
  <div>
    <div id="fb-root"></div>
    <!--  share button code -->
    <div class="fb-share-button" data-href="https://gorillalogic.com/" data-layout="button_count" />
  </div>
</template>

<script>
export default {
  name: 'FacebookShareButton',
};

/**
 * Load Facebook SDK for JavaScript
 */
(function loadFacebookSdk(d, s, id) {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  const js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
