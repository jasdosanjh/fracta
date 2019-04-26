<template>
  <section class="pricing">
    <h2 v-scroll-reveal.reset:false="{ delay: 180 }">Pricing</h2>
    <p class="subtitle" v-scroll-reveal.reset:false="{ delay: 180 }">Flexible pricing plans.</p>
    <div class="flex-container" v-scroll-reveal.reset:false="{ delay: 180 }">
      <div class="flex-item" v-for="(pricing, pricingIndex) in pricings" :key="'pricing' + pricingIndex">
        <div class="package">
          <h3 :class="'header-' + pricingIndex">{{ pricing.title }}</h3>
          <p class="gray">{{ pricing.price }}</p>
            <ul>
              <li 
              v-for="(service, serviceIndex) in pricing.services"
              :key="'pricing' + pricingIndex + 'service' + serviceIndex">
              {{ service }}
              </li>
            </ul>
          <div class="gray">
              <button :class="'btn-pricing-' + pricingIndex">{{ pricing.button }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    pricings: [
      {
        title: "Basic",
        price: "£20/month",
        services: ["20GB Storage", "100 Domains", "1TB Bandwidth", "1000 Email Boxes"],
        button: "Add to cart"
      },
      {
        title: "Premium",
        price: "£30/month",
        services: ["100GB Storage", "500 Domains", "2TB Bandwidth", "2500 Email Boxes"],
        button: "Add to cart"
      },
      {
        title: "Pro",
        price: "£50/month",
        services: ["250GB Storage", "500 Domains", "5TB Bandwidth", "5000 Email Boxes"],
        button: "Add to cart"
      }
    ]
  })
}
</script>