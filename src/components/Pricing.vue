<template>
<section class="pricing">
  <h2 v-scroll-reveal.reset:false="{ delay: 180 }">Pricing</h2>
  <p class="subtitle" v-scroll-reveal.reset:false="{ delay: 180 }">Flexible pricing plans.</p>
	<div class="flex-container" v-scroll-reveal.reset:false="{ delay: 180 }">
  <div class="flex-item">
    <ul class="package">
      <li class="header green">Basic</li>
      <li class="gray">£20/month</li>
      <li>20GB Storage</li>
      <li>100 Domains</li>
      <li>1TB Bandwidth</li>
      <li>1000 Email Boxes</li>
      <li class="gray">
        <button class="green">Add to Cart</button>
      </li>
    </ul>
  </div>
  <div class="flex-item">
    <ul class="package">
      <li class="header purple">Pro</li>  
      <li class="gray">£30/month</li>
      <li>100GB Storage</li>
      <li>500 Domains</li>
      <li>2TB Bandwidth</li>
      <li>1000 Email Boxes</li>
      <li class="gray">
        <button class="purple">Add to Cart</button>
      </li>
    </ul>
  </div>
  <div class="flex-item">
   <ul class="package">
      <li class="header pink">Premium</li>
      <li class="gray">£60/month</li>
      <li>250GB Storage</li>
      <li>500 Domains</li>
      <li>5TB Bandwidth</li>
      <li>1000 Email Boxes</li>
      <li class="gray">
        <button class="pink">Add to Cart</button>
      </li>
    </ul>
  </div>
</div>
  </section>
</template>