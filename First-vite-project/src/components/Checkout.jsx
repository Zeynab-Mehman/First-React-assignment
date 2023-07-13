import Input from "./Input";
import Backbak from '../assets/images/8 1.png';
import Shoes from "../assets/images/Frame 29.png";
import { styled } from 'styled-components';

const Checkout = () => {
  return (
    <Container>
      <div>
        <div>
          <h2 className="font-montserat text-3xl font-semibold text-dark-liver">
            Checkout
          </h2>
        </div>
        <div>
          <h2 className="font-montserat text-dark-liver font-semibold text-lg mt-5">
            Contact information
          </h2>
        </div>
        <Input contact="Email" icon="fa-solid fa-envelope fa-xl" placeholder="Enter your email..." />
        <Input contact="Phone" icon="fa-solid fa-phone fa-xl" placeholder="Enter your phone..." />

        <div>
          <h2 className="font-montserat text-dark-liver font-semibold text-lg mt-5">
            Shipping address
          </h2>
          <Input contact="Full name" icon="fa-solid fa-user fa-xl" placeholder="Your fullname..." />
          <Input contact="Address" icon="fa-solid fa-house fa-xl" placeholder="Your address..." />
          <Input contact="City" icon="fa-solid fa-city fa-xl" placeholder="Your city.." />
          <div className="flex flex-col md:flex-row gap-2">
            <div className="mb-2">
              <p className="text-old-silver text-sm font-semibold font-montserat mt-5">
                Country
              </p>
              <div className="relative">
                <input
                  className="border-2 border-old-silver rounded-lg w-full md:w-[215px] h-[55px] px-3 md:px-12"
                  type="text"
                  placeholder="Your city..."
                />
                <i className="fa-solid fa-earth-americas fa-xl absolute text-old-silver left-[10px] top-2/4 transform -translate-y-2/4"></i>
              </div>
            </div>
            <div className="mb-2">
              <p className="text-old-silver text-sm font-semibold font-montserat mt-5">
                Postal Code
              </p>
              <div className="relative">
                <input
                  className="border-2 border-old-silver rounded-lg w-full md:w-[215px] h-[55px] px-3 md:px-12"
                  type="text"
                  placeholder="Your postal code..."
                />
                <i className="fa-brands fa-usps fa-xl absolute text-old-silver left-[10px] top-2/4 transform -translate-y-2/4"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <input type="checkbox" />
          <span className="font-semibold font-montserat text-dark-liver ml-5">Save this information for next time</span>
        </div>
        <div className="mt-5">
          <button className="bg-royal-orange text-white w-[165px] h-[55px] rounded-lg">Continue</button>
        </div>
      </div>
      <div className="w-full md:w-[385px] h-[535px] bg-anti-flash-white rounded-xl mt-10 md:mt-0 p-8">
        <div className="flex justify-between">
          <img className="w-[165px] h-[135px] object-cover rounded-lg" src={Backbak} alt="" />
          <div>
            <h2 className="font-montserat font-semibold text-base text-dark-liver">Vintage Backpack</h2>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-lg font-semibold text-royal-orange">$54.99</span>
              <span className="text-sm line-through font-montserat font-semibold text-dark-liver">$94.99</span>
            </div>
            <div className="w-[135px] h-[52px] border-2 border-old-silver rounded-xl flex items-center justify-between p-2">
              <button className="bg-chinese-white rounded-md text-lg px-1 py-0 text-old-silver"><i className="fa-solid fa-minus"></i></button>
              <button className="font-montserat font-semibold">1</button>
              <button className="bg-chinese-white rounded-md text-lg px-1 py-0 text-old-silver"><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <img className="w-[165px] h-[135px] object-cover rounded-lg" src={Shoes} alt="" />
          <div>
            <h2 className="font-montserat font-semibold text-base text-dark-liver">Levi Shoes</h2>
            <div className="flex items-center gap-2 mb-8">
              <span className="text-lg font-semibold text-royal-orange">$74.99</span>
              <span className="text-sm line-through font-montserat font-semibold text-dark-liver">$124.99</span>
            </div>
            <div className="w-[135px] h-[52px] border-2 border-old-silver rounded-xl flex items-center justify-between p-2">
              <button className="bg-chinese-white rounded-md text-lg px-1 py-0 text-old-silver"><i className="fa-solid fa-minus"></i></button>
              <button className="font-montserat font-semibold">1</button>
              <button className="bg-chinese-white rounded-md text-lg px-1 py-0 text-old-silver"><i className="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <hr className="my-2" />
          <div className="flex justify-between">
            <h2 className="font-montserat font-semibold text-dark-liver">Shipping</h2>
            <span className="font-montserat font-semibold text-base text-dark-liver">$19</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <h2 className="font-montserat font-semibold text-dark-liver">Total</h2>
            <span className="font-montserat font-semibold text-base text-dark-liver">$148.98</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin: 0 10%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    margin: 0 5%;
  }
  @media (max-width: 640px) {
    margin: 10px;
  }`