/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Rank Boost", href: "/boost", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { data: session }: any = useSession();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-l-1 dark:bg-d-1">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a
                              className={classNames(
                                item.current
                                  ? "text-black dark:text-white hover:text-indigo-400 dark:hover:text-white"
                                  : "text-black dark:text-white hover:text-black dark:hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        className="p-1 rounded-full font-semibold  mr-3 text-white dark:text-black bg-b-1 dark:bg-white hover:text-l-3 dark:hover:text-amber-500
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                        "
                        onClick={() => {
                          setTheme(theme === "light" ? "dark" : "light");
                        }}
                      >
                        <MoonIcon className="h-6 w-6 block dark:hidden" />
                        <SunIcon className="h-6 w-6 dark:block hidden" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative z-50">
                        <div>
                          <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            {session?.user?.email ? (
                              <div className="rounded-full bg-l-1 dark:bg-d-1">
                                Account
                              </div>
                            ) : (
                              <div>
                                <Link href="/login">
                                  <a>Sign In</a>
                                </Link>
                              </div>
                            )}
                          </Menu.Button>
                        </div>
                        {session?.user?.email && (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 bg-white dark:bg-d-3 ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {session?.user?.email ? (
                                <Menu.Item key="1">
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 dark:text-black hover:bg-d-4"
                                    onClick={() => {
                                      signOut();
                                    }}
                                  >
                                    Sign out
                                  </a>
                                </Menu.Item>
                              ) : (
                                <Menu.Item key="1">
                                  <Link href="/login">
                                    <a>Sign In</a>
                                  </Link>
                                </Menu.Item>
                              )}
                            </Menu.Items>
                          </Transition>
                        )}
                      </Menu>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-black dark:text-white hover:text-indigo-400 dark:hover:text-white"
                          : "text-black dark:text-white hover:text-black dark:hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <button
                      className="ml-auto p-1 rounded-full font-semibold  mr-3 text-white dark:text-black bg-b-1 dark:bg-white hover:text-l-3 dark:hover:text-amber-500
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                        "
                      onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                      }}
                    >
                      <MoonIcon className="h-6 w-6 block dark:hidden" />
                      <SunIcon className="h-6 w-6 dark:block hidden" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {session?.user?.email ? (
                      <Disclosure.Button
                        key="3"
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Sign out
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        key="3"
                        as="a"
                        href="/login"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        Sign in
                      </Disclosure.Button>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
