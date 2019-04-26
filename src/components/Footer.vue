<template>
  <footer class="main-footer" v-scroll-reveal.reset:false="{ delay: 180 }">
    <div class="container footer-container">
      <div :class="'footer-box footer-box-' + footerInfoIndex" v-for="(footerInfo, footerInfoIndex) in footerInformation" :key="'footerInfo' + footerInfoIndex">
        <h3>{{ footerInfo.title }}</h3>
        <ul class="list">
          <li v-for="(link, linkIndex) in footerInfo.links" :key="'footerInfo' + footerInfoIndex + 'link' + linkIndex"><a href="#"> {{ link }} </a></li>
        </ul>
      </div>
      <div class="footer-box copyright"> 
        <p>Copyright &copy; 2019, All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    footerInformation: [
      {
        title: "Fracta",
        links: ["Features", "Downloads", "Security", "Business"],
      },
      {
        title: "Company",
        links: ["About", "News", "Blog", "Terms"],
      },
      {
        title: "Download",
        links: ["Windows", "Mac", "Apple", "Android"],
      },
      {
        title: "Support",
        links: ["Help & Support", "Privacy Policy", "About Us", "Contact"],
      }
    ]
  })
}
</script>