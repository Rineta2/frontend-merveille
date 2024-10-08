"use client";
import { useState } from "react";

import Link from "next/link";

import { navLink, megaMenu } from "@/components/UI/data/data";

import { LogIn, ShoppingCart } from "lucide-react";

import { ChevronDown } from "lucide-react";

import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = (id: number) => {
    const newState: Record<string, boolean> = {};
    setOpenMenu(prevState => {
      Object.keys(newState).forEach(key => {
        if (key !== String(id)) {
          newState[key] = false;
        }
      });
      newState[id] = !prevState[id];
      return newState;
    });
  };

  return (
    <header>
      <nav className="nav container">
        <div className="logo">
          <Link href={"/"}>Merveille</Link>
        </div>

        <ul className="nav__list">
          {
            megaMenu.map((item) => {
              return (
                <div key={item.id} className="mega__menu">
                  <label onClick={() => toggleMenu(item.id)}>
                    {item.name}
                    <ChevronDown className={`arrow ${openMenu[item.id] ? "open" : ""}`} />
                  </label>

                  <div className={`mega__list ${openMenu[item.id] ? "show" : ""}`}>
                    <div className="link">
                      {
                        item.list.map((subItem) => {
                          if ('title' in subItem) {
                            return (
                              <Link key={subItem.id} href={subItem.path}>
                                <span className="icons">{subItem.icons}</span>
                                <span className="name">{subItem.title}</span>
                              </Link>
                            );
                          }
                        })
                      }
                    </div>

                    <div className="img">
                      {
                        item.list.map((img) => {
                          return (
                            img.img !== "" && img.name !== "" && (
                              <div className="box" key={img.id}>
                                <Image src={img.img} alt="images" quality={100} />
                                <Link href={img.path}>{img.name}</Link>
                              </div>
                            )
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
              );
            })
          }

          {navLink.map((item) => {
            return (
              <li className="nav__item" key={item.id}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="nav__actions">
          <div className="login">
            <Link href={"/auth/login"}>
              <LogIn size={30} />
            </Link>
          </div>

          <div className="cart">
            <Link href={"/cart"}>
              <ShoppingCart size={30} />
            </Link>
          </div>
        </div>
      </nav>
    </header >
  );
}
