import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const faq = [
  {
    id: "1",
    title: "What is the proccess?",
    description: "Once you succesfully paid your order, make a ticket on our discord channel. We will let you know when we can start and other additionals informations.",
  },
  {
    id: "2",
    title: "Is my account safe?",
    description: "We are not using any cheats, there is no way someone can get VAC from using our services.",
  },
  {
    id: "3",
    title: "How does it works?",
    description: "You will get an invite to join one of our lobbies and just sit and wait for your order to be done.",
  },
  {
    id: "4",
    title: "Are my credentials safe?",
    description: "Since we invite you in our lobby we don't need to share your account credentials.",
  },
];

function Faq() {
  return (
    <div>
      <section id="faq" className="py-20 2xl:py-40 bg-l-2 dark:bg-d-2">
        <div className="container px-4 mx-auto">
          <div className="mb-20 text-center">
            <span className="text-2xl font-bold dark:text-white text-black">
              Hey! Have any questions?
            </span>
            <h2 className="mt-8 text-7xl font-bold font-heading">FAQ&apos;s</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul>
              {faq.map((item) => (
                <Menu
                  as="li" key={item.id}
                  className="mb-4 px-4 lg:px-12 py-8 bg-l-3 dark:bg-d-3 rounded-2xl"
                >
                  <Menu.Button className="flex w-full text-left">
                    <div className="w-auto mr-8">
                      <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full text-black">
                        {item.id}
                      </span>
                    </div>
                    <div className="w-full mt-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                    </div>
                    <ChevronDownIcon className="items-center dark:text-white text-black h-12 w-12" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="mt-6 pl-10">
                            <p className="mb-5 text-xl">{item.description}</p>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
