<template>
<section class="contact" id="contact-scroll" v-scroll-reveal.reset:false="{ delay: 180 }">
            <div class="contact-form">
                <h2 class="heading-secondary">Get in touch</h2>
                <p class="subtitle">Contact us</p>
                <form>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" placeholder="Full name." required>
                    </div>
                    <div>
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" placeholder="Contact number." minlength="9" maxlength="14" required>
                    </div>
                    <div>
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" placeholder="Email address." required>
                    </div>
                    <div>
                        <label for="message">Message:</label>
                        <textarea rows="6" id="message" placeholder="Your message."></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div class="contact-image">
                <img src="images/contact_right.jpg" alt="Illustration of a person sitting in front of a laptop making notes.">
            </div>
        </section>
</template>
