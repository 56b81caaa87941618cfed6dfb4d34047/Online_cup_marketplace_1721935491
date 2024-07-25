/* Summary: Contains a bar fixed at the bottom of the page with a transparent background with a blur effect.
It has two buttons: Contact button that directs to the contact page and Pay button that directs to the payment page, styled with a blue background and a shine animation effect.
*/
Vue.component("bottom_bar_component_1721935492", {
    template: `
    <section id="bottom-bar-component" class="fixed bottom-0 z-30 w-full lg:w-1/2 !bg-opacity-80 backdrop-blur-sm" :class="bottomBarBackgroundStyle">
        <div id="bottom-bar-component-content" class="w-full max-w-xl mx-auto px-4 sm:px-6">
            <div id="action-buttons" class="flex py-4 md:py-6 space-x-4 justify-center">
                <a id="contact-button" class="btn flex items-center justify-center w-1/2 h-12 p-3" :class="[contactButtonStyle, contactButtonHoverStyle, shadowStyle, 'transition duration-200 ease-in-out']" href="contact.html">Contact</a>
                <a id="pay-button" class="btn flex items-center justify-center w-1/2 h-12 p-3 animate-shine bg-[size:200%_100%] hover:bg-[image:none] transition duration-200 ease-in-out bg-orange-500 hover:bg-orange-600 rounded-lg text-white shadow-lg" :class="[payButtonTextStyle, payButtonBackgroundStyle, shadowStyle, payButtonGradientStyle]">Pay</a>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            bottomBarBackgroundStyle: "bg-white dark:bg-slate-950",
            contactButtonStyle: "text-slate-900 dark:text-slate-200 dark:bg-slate-900 rounded-lg",
            contactButtonHoverStyle: "hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 border",
            shadowStyle: "shadow-lg",
            payButtonTextStyle: "text-white",
            payButtonBackgroundStyle: "bg-orange-500 hover:bg-orange-600 rounded-lg",
            payButtonGradientStyle: "bg-[linear-gradient(100deg, theme(colors.orange.500), 45%, theme(colors.orange.400), 55%, theme(colors.orange.500))] rounded-lg"
        };
    },
});
