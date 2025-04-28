import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "home", href: "#", current: true },
  { name: "about", href: "#", current: false },
  { name: "projects", href: "#", current: false },
  { name: "experience", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const styles = {
  disclosureContainer: "bg-components-primary fixed top-0 w-full z-10",
  container: "w-full px-2",
  navBarContentContainer: "flex flex-row h-16 items-center justify-between",
  itemContainer: "relative flex h-12 items-center",
  largeScreenContainer:
    "flex flex-1 items-center justify-center sm:items-stretch sm:justify-end",
  selectedItem: "bg-components-secondary text-fontColor-lightAccent",
  header:
    "text-fontColor-darkAccent text-largeSubheader hidden md:flex px-3 font-header font-bold",
  unselectedItem:
    "text-fontColor-darkAccent hover:bg-components-background hover:text-fontColor-lightAccent hover:opacity-75",
  menuItemsFullScreen: "rounded-md px-3 py-2 font-largeBody font-bold",
  menuItemsSmallScreen:
    "block rounded-md px-3 py-2 text-base font-largeBody font-bold",
  mobileButton:
    "group relative inline-flex items-center justify-center rounded-md p-2 text-fontColor-darkAccent hover:bg-components-background hover:opacity-75 hover:text-fontColor-lightAccent focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset",
};

export default function NavBar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className={styles.disclosureContainer}>
      <div className={styles.container}>
        <div className={styles.itemContainer}>
          <div className="flex flex-1 md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className={styles.mobileButton}>
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          {/* Full navbar */}
          <div className="flex flex-1 justify-between items-center w-full">
            {/* Left-aligned name (hidden on small screens) */}
            <h1 className={styles.header}>Neeti Desai</h1>

            {/* Right-aligned nav links (hidden on small screens) */}
            <div className="hidden md:flex space-x-4 font-body">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      isCurrent ? styles.selectedItem : styles.unselectedItem,
                      styles.menuItemsFullScreen
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 font-body">
          {navigation.map((item) => {
            const isCurrent = location.pathname === item.href;

            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  isCurrent ? styles.selectedItem : styles.unselectedItem,
                  styles.menuItemsSmallScreen
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
