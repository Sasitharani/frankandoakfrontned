import React from "react";
import {
  faTruck,
  faUndoAlt,
  faMousePointer,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-4 bg-black">
        <div className="text-white text-md">
          Free Shipping
          <div>
            <FontAwesomeIcon
              icon={faTruck}
              className="text-white border-2 border-black rounded-full p-1 bg-black"
            />
            <div> On orders over $99.</div>
          </div>
        </div>

        <div className="text-white text-md">
          Free Returns
          <div>
            <FontAwesomeIcon
              icon={faUndoAlt}
              className="text-white border-2 border-black rounded-full p-1 bg-black"
            />
          </div>
          <div>Only keep what you love.</div>
        </div>

        <div className="text-white text-md">
          Frank's Club
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faMousePointer}
              className="text-white border-2 border-black rounded-full p-1 bg-black"
            />
          </div>
          <div>Earn points and get rewards.</div>
        </div>

        <div className="text-white text-md">
          Buy Now, Pay Later
          <div>
            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-white border-2 border-black rounded-full p-1 bg-black"
            />
          </div>
          <div>Select Klarna at checkout.</div>
        </div>
      </div>


      <div className="bg-black text-white grid grid-cols-5 pt-16">
        <div className="">
            <div className="grid grid-rows-3">
                <div className="">Frank and Oak</div>
                <div className="">Social Media</div>
                <div className="">Certified</div>
            </div>
        </div>
        <div className="">
            <div className="grid grid-rows-7">
                <div className="">Dicover</div>
                <div className="">Gift Cards</div>
                <div className="">Frank's Club</div>
                <div className="">Give Get</div>
                <div className="">Affiliate</div>
                <div className="">Blog</div>
                <div className="">Work with us</div>
                <div className="">Our Stories</div>
            </div>
            </div>
        <div className="">
            <div className="grid grid-rows-11">
                <div className="">Customer Care</div>
                <div className="">Shipping information</div>
                <div className="">Returns and Exchange</div>
                <div className="">Coupon Codes</div>
                <div className="">F.A.Q</div>
                <div className="">Terms And Condition</div>
                <div className="">Refund Policy</div>
                <div className="">Privacy Policy</div>
                <div className="">Accessibilty Statement</div>
                <div className="">Customer Data Request</div>
                <div className="">Data</div>
            </div>
        </div>
        <div className="">Stay in touch</div>
        <div className=""></div>

      </div>
      
    </>
  );
}
