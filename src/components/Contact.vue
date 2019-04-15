<template>
<section class="reservation">
            <div class="contact-form">
                <h2 class="heading-secondary">Get in touch</h2>
                <p class="subtitle">Contact us</p>
                <form>
                    <div>
                        <label for="name" class="text-primary">Name:</label>
                        <input type="text" id="name" placeholder="Full name.">
                    </div>
                    <div>
                        <label for="phone" class="text-primary">Phone Number:</label>
                        <input type="number" id="phone" placeholder="Contact number.">
                    </div>
                    <div>
                        <label for="email" class="text-primary">Email Address:</label>
                        <input type="email" id="email" placeholder="Email address.">
                    </div>
                    <div>
                        <label for="message" class="text-primary">Message:</label>
                        <textarea rows="6" id="message"
                            placeholder="Your message."></textarea>
                    </div>
                    <div>
                        <button type="button">Submit</button>
                    </div>
                </form>
            </div>
            <div class="contact-image">
                <img src="images/contact_right.jpg" alt="" srcset="">
            </div>
        </section>
</template>
