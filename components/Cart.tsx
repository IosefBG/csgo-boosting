import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import crypto from "crypto";
import Head from "next/head";

export default function Checkout(this: any) {
  const { data: session }: any = useSession();
  const ranks = [
    {
      id: 1,
      name: "Silver I",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/silver_i.png",
    },
    {
      id: 2,
      name: "Silver II",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/silver_ii.png",
    },
    {
      id: 3,
      name: "Silver III",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/silver_iii.png",
    },
    {
      id: 4,
      name: "Silver IV",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/silver_iv.png",
    },
    {
      id: 5,
      name: "Silver Elite",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/silver_elite.png",
    },
    {
      id: 6,
      name: "Silver Elite Master",
      avatar:
        "https://boostcsgo.net/img/csgo/rank-boost/silver_elite_master.png",
    },
    {
      id: 7,
      name: "Gold Nova I",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/gold_nova_i.png",
    },
    {
      id: 8,
      name: "Gold Nova II",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/gold_nova_ii.png",
    },
    {
      id: 9,
      name: "Gold Nova III",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/gold_nova_iii.png",
    },
    {
      id: 10,
      name: "Gold Nova Master",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/gold_nova_master.png",
    },
    {
      id: 11,
      name: "Master Guardian I",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/master_guardian_i.png",
    },
    {
      id: 12,
      name: "Master Guardian II",
      avatar:
        "https://boostcsgo.net/img/csgo/rank-boost/master_guardian_ii.png",
    },
    {
      id: 13,
      name: "Master Guardian Elite",
      avatar:
        "https://boostcsgo.net/img/csgo/rank-boost/master_guardian_elite.png",
    },
    {
      id: 14,
      name: "Distinguished Master Guardian",
      avatar:
        "https://boostcsgo.net/img/csgo/rank-boost/distinguished_master_guardian.png",
    },
    {
      id: 15,
      name: "Legendary Eagle",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/legendary_eagle.png",
    },
    {
      id: 16,
      name: "Legendary Eagle Master",
      avatar:
        "https://boostcsgo.net/img/csgo/rank-boost/legendary_eagle_master.png",
    },
    {
      id: 17,
      name: "Supreme Master First Class",
      avatar:
        "https://boostcsgo.net/img/csgo/rank-boost/supreme_master_first_class.png",
    },
    {
      id: 18,
      name: "Global Elite",
      avatar: "https://boostcsgo.net/img/csgo/rank-boost/global_elite.png",
    },
  ];
  const router = useRouter();
  const { from, to }: any = router.query;
  var value: any = "" + (to - from) * 4;
  var stripped: any = "" + (to - from) * 6 + "€";

  const [disable, setDisable] = useState(false);
  async function addNewCheckout() {
    var currentdate: any = new Date();

    setDisable(true);
    const ordernumber = crypto.randomBytes(8).toString("hex");
    const email = session.user.email;
    const type = "CS:GO Rank Boost";
    const details = ranks[from].name + " to " + ranks[to].name;
    const amount = parseInt(value);
    const date = currentdate;
    await axios.post("/api/addcheckout", {
      ordernumber,
      email,
      type,
      details,
      amount,
      date,
    });
    setDisable(false);
    router.push({
      pathname: "/checkout",
      query: { id: ordernumber },
    });
  }

  const sendcheckout = (e: any) => {
    e.preventDefault();
    if (e.target.skrill.checked) {
      addNewCheckout();
    }
  };
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="py-12 bg-l-2 dark:bg-d-2">
        <div className="min-w-screen min-h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto rounded-lg bg-l-3 dark:bg-d-3 shadow-lg p-5 text-gray-700">
            <div className="w-full pt-1 pb-5">
              <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i className="mdi mdi-credit-card-outline text-3xl"></i>
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-center font-bold text-xl uppercase text-black dark:text-white">
                Secure payment info
              </h1>
            </div>
            <div className="mx-40">
              {!ranks[from]?.name ? (
                <Skeleton />
              ) : (
                <div className="mb-2 text-center text-black dark:text-white">
                  CS:GO Rank Boost: {ranks[from]?.name} to {ranks[to]?.name}
                </div>
              )}
            </div>
            <div className="mx-96">
              {!ranks[from]?.name ? (
                <Skeleton />
              ) : (
                <div className="mb-2 text-center text-black dark:text-white">
                  <span className="font-bold text-xl">
                    Total Price: {value}$
                  </span>
                  <span className="line-through ml-3">{stripped}</span>
                </div>
              )}
            </div>
            <form onSubmit={sendcheckout}>
              <div className="mb-3 flex mx-2 flex-col">
                <span className="text-black dark:text-white">
                  Payment type:
                </span>
                <div className="px-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      className="form-radio h-5 w-5 text-indigo-500"
                      id="skrill"
                      value="skrill"
                      name="method"
                      type="radio"
                      defaultChecked
                      // onChange={this.handleChange}
                    />
                    <Image
                      width={96}
                      height={64}
                      src="/payment_skrill.png"
                      className="border-solid border-2 border-rounded-full border-white"
                    />
                  </label>
                </div>
                {/* <div className="px-2">
                            <label className="flex items-center cursor-pointer">
                            <input
                            type="radio"
                            className="form-radio h-5 w-5 text-indigo-500"
                            name="type"
                                    id="type1"
                                    //   checked
                                    />
                                    <img
                                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                    className="h-8 ml-3"
                                    />
                            </label>
                        </div>
                        <div className="px-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-indigo-500"
                                    name="type"
                                    id="type2"
                                    />
                                <img
                                src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                                className="h-8 ml-3"
                                />
                            </label>
                        </div> */}
              </div>

              <div>
                <button
                  type="submit"
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                >
                  <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
