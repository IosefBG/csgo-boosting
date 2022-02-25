/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useCallback, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

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
    avatar: "https://boostcsgo.net/img/csgo/rank-boost/silver_elite_master.png",
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
    avatar: "https://boostcsgo.net/img/csgo/rank-boost/master_guardian_ii.png",
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Ranks() {
  const router = useRouter();
  const [selectedC, setSelectedC] = useState(ranks[0]);
  const [selectedD, setSelectedD] = useState(ranks[1]);
  const [isOpen, setIsOpen] = useState(false);
  var from: string = selectedC.name;
  var error: string = "";
  var value: any = null;
  var stripped: any = null;

  if (selectedC.id >= selectedD.id) {
    error = "Current Level can't be higher than Desired Level";
    from = "Silver I";
  }
  if (selectedC.id < selectedD.id) {
    value = "" + (selectedD.id - selectedC.id) * 4 + "€";
    stripped = "" + (selectedD.id - selectedC.id) * 6 + "€";
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    if (error === "") {
      router.push({
        pathname: "/cart",
        query: { from: selectedC.id, to: selectedD.id },
      });
    }
  }
  return (
    <>
      <div id="ranks" className="bg-l-3 dark:bg-d-3 pt-5">
        <div className="max-w-7xl mx-auto px-4  lg:px-8 py-2 sm:py-4 lg:py-6 grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="pt-4">
            <Listbox value={selectedC} onChange={setSelectedC}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-lg font-medium text-black dark:text-white">
                    CS:GO CURRENT RANK
                  </Listbox.Label>
                  <div className="mt-1 w-full relative">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-3">
                        <Listbox.Button className="text-black relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <span className="flex items-center">
                            <span className="ml-3 block truncate ">
                              {selectedC.name}
                            </span>
                          </span>
                          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                      </div>
                      <div className="col-span-1 w-24 my-auto">
                        {/* <img src={selectedC.avatar} alt="" className="bg-red-500 transition-opacity duration-500 ease-in-out"/> */}
                        <Transition
                          show={!open}
                          enter="transition ease-out duration-100"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <img src={selectedC.avatar} alt="" />
                        </Transition>
                      </div>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-84 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {ranks.map((rank) => (
                          <Listbox.Option
                            key={rank.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={rank}
                          >
                            {({ selectedC, active }: any) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selectedC
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {rank.name}
                                  </span>
                                </div>

                                {selectedC ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            <Listbox value={selectedD} onChange={setSelectedD}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-lg font-medium text-black dark:text-white">
                    CS:GO DESIRED RANK
                  </Listbox.Label>
                  <div className="mt-1 w-full relative">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-3">
                        <Listbox.Button className="text-black relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <span className="flex items-center">
                            <span className="ml-3 block truncate ">
                              {selectedD.name}
                            </span>
                          </span>
                          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                      </div>
                      <div className="col-span-1 w-24 my-auto">
                        <Transition
                          show={!open}
                          enter="transition ease-out duration-100"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <img src={selectedD.avatar} alt="" />
                        </Transition>
                      </div>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-84 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {ranks.map((rank) => (
                          <Listbox.Option
                            key={rank.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={rank}
                          >
                            {({ selectedD, active }: any) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selectedD
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {rank.name}
                                  </span>
                                </div>

                                {selectedD ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          <div className="rounded-lg bg-l-2 dark:bg-d-2 sm:ml-8">
            <div className="px-10 py-8 shadow-lg">
              <div className="font-bold text-xl mb-2 text-center">
                Your Order
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-2 text-center">
                  CS:GO Rank Boost: {from} to {selectedD.name}
                </div>
                <div className="mb-2 text-center">
                  <span className="font-bold text-xl">
                    Total Price: {value}
                  </span>
                  <span className="line-through ml-3">{stripped}</span>
                </div>
                <div className="font-bold text-xl text-red-900 mb-2 text-center">
                  {error}
                </div>
                <button
                  type="submit"
                  className="mx-auto w-full text-white content-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Order now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
