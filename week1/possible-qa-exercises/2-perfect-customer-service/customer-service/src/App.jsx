import Guarantee from "./Guarantee/Guarantee.jsx";
import shippingIMG from "./assets/package_600268.png"
import moneyIMG from "./assets/purse_3207332.png"
import supportIMG from "./assets/customer-support_8744916.png"

function App() {
    const freeShippingDescription = "Enjoy the convenience of free delivery on all eligible orders — no hidden fees, no minimum spend. We’ll bring your items right to your door at no extra cost, so you can shop with ease and confidence."
    const moneyBackDescription = "Shop worry-free with our 30-day money-back guarantee. If you're not completely satisfied with your purchase, return it within 30 days for a full refund — no questions asked."
    const customerSupportDescription = "Our friendly customer service team is here to help — 24/7. Whether you need product advice, help with an order, or post-purchase support, we're just a call, email, or message away."

    return (
        <div className="guarantees">
            <Guarantee img={shippingIMG} title="Free Shipping" description={freeShippingDescription} />
            <Guarantee img={moneyIMG} title="Money Back Guarantee" description={moneyBackDescription} />
            <Guarantee img={supportIMG} title="Customer Support" description={customerSupportDescription} />
        </div>
    );
}

export default App
