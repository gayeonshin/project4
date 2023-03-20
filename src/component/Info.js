import Accordion from 'react-bootstrap/Accordion';

function Info() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="option">SHIPPING & RETURNS</Accordion.Header>
        <Accordion.Body className="explain">
          <span>INTERNATIONAL SHIPPING</span>
          <p>We work with DHL Express <span>carbon neutral GoGreen</span> to ship all international orders.</p>
          <p>Orders are shipped within 10 working days and may take up to 20 days to be delivered. Please be aware that local customs may withhold your package, therefore may cause delays in delivery time.</p>
          <p>The shipping fee for international orders is based on the country where the order will be shipped. Your shipping fee is calculated after you enter your address as you complete your purchase.</p>
          <span>UNFORESEEN SHIPPING ISSUES AND CUSTOM CHARGES </span>
          <p>From the time your package leaves BORNN until it is delivered to your doorstep, all shipping liability lies with DHL Worldwide Express services in your country.</p>
          <p>Some countries might be subject to customs and taxes upon delivery which will be customer’s responsibility. Unfortunately, we have no control over these charges, and cannot notify you about what the cost might be, as customs policies and import duties vary from country to country. The customer must take full liability for any parcels returned to us due to unpaid customs charges. Please check with your DHL Express services in your country before you place an order.</p>
          <p>After the package is marked as delivered by the courier, packages become the customer’s responsibility. BORNN cannot provide refunds for lost or stolen packages post-delivery. Missing packages claims must be filed by the customer. In the rare case of missing parcels, please contact us via our contact page form.</p>
          <span>SIGNATURE</span>
          <p>All international packages require a signature upon delivery; a tracking number will be provided once your order is shipped.</p>
          <span>INTERNATIONAL RETURNS</span>
          <p>BORNN products are all handmade, therefore variations in color, pattern, should be expected and is in the nature of artisanal enamelware. We do not accept returns based on these irregularities and also in the cases below;</p>
          <ul>
            <li>During the production process of enamelware products are hung for drying and firing under their rims therefore there are hook marks under the rims.</li>
            <li>There are small holes to allow gas to escape on models with hollow handles. Here the air can escape during firing. The little bubbles are part of the enameling process.</li>
            <li>The colors of the end product may be different from the images on the website as the photo shoot has been made in a studio environment.</li>
            <li>There may be seams on the inside of the handle. Basic enamel leaks outwards slightly during firing, and a thin line appears this is part of the enamelling process.</li>
          </ul>
          <p>If for some other reason you are not satisfied with your BORNN product you may return your unused, resalable, in perfect condition product in its original packaging to us within 7 days of receipt; ATTN: please send us an email at returns@bornn.com.tr telling us why you are not satisfied with your purchase and we will provide you with the necessary return details and address.</p>
          <p>Please make sure all returned items are well packaged, so as not to be damaged in the post.</p>
          <p>Clearly mark the package "RETURNED GOODS", to avoid any customs charges. BORNN is not responsible for any return custom charges made.</p>
          <p>ATTN: Your original order shipping costs are non-refundable. Only the Items will be refunded.
          The products are the customer’s responsibility until it reaches us. We cannot recommend a delivery service that ensures the return of the products to us.</p>
          <p>Please send us the tracking code after shipment. Once the products are received and inspected by us and if your claim is accepted we will refund the amount via the same method used during payment.</p>
          <p>In case on cancellation there would be a 5% restocking and processing fee.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="option">HOW TO USE</Accordion.Header>
        <Accordion.Body className="explain">
          <p>Due to its smooth, non-porous surface made of glass, enamel is bacteria inhibiting and is easy to clean. With right care and use it can last for a lifetime and become a family heirloom and your dishes will look new for generations to come.</p>
          <ul>
            <li>Use the smooth side of the cleaning sponge or a soft brush for cleaning.</li>
            <li>Avoid wire brushes, steel wool, scouring powder containing sand and cleaning sponges with ceramic particles this can scratch the surface.</li>
            <li>When using the dishwasher, select the glass washing programme. We recommend washing by hand for long enjoyment of the radiant shine of enamel.</li>
            <li>Dry the cookware well. Any lime spots can effortlessly be removed with vinegar water.</li>
            <li>Do not use heavy duty cleaning products and harsh chemicals when cleaning, enamelware can easily be cleaned with a simple combination of lime juice and baking soda.</li>
            <li>What appear to be scratches in the enamel could be marks left by metal tools: streaks of metallic residue, which have caused little or no damage to the underlying enamel. Enamel is much harder than stainless steel, you can scrub the marks with a gentle cleaning compound.</li>
            <li>The shiny surface of coloured enamel can be affected by high acidic food. Using to serve citrus containing food can make the surface look matte, therefore we do not recommend using it with meals that contain too much lemon, lime, orange etc. to keep the shine of your product. White coloured enamelware is safe to use with acidic food.</li>
            <li>Enameled steel is incredibly strong, but the glass top coat will chip if handled too roughly or dropped onto hard surfaces (revealing the steel frame underneath) remember it is still safe to eat from your enamelware dishes even if the steel underneath the glass is exposed.</li>
            <li>During the production process of enamelware products are hung for drying and firing under their rims therefore flash rust can appear in these areas, they can be easily removed with a damp cloth.</li>
            <li>There are small holes to allow gas to escape on models with hollow handles. Here the air can escape during firing. The little bubbles are part of the enameling process.</li>
            <li>There may be seams on the inside of the handle. Basic enamel leaks outwards slightly during firing, and a thin line appears this is part of the enamelling process.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Info;