"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Header() {
  return (
    <>
      <header>
        <figure className="icon">
          <Image alt="icon" src="/images/image01.jpg" width={35} height={35} />
        </figure>
        <div className="search">
          <div>
            <input
              type="text"
              placeholder="グループを検索"
              style={{
                width: "251px",
                height: "31px",
                borderRadius: "25px",
                position: "relative",
                paddingLeft: "40px",
                fontSize: "14px",
              }}
            />
          </div>
        </div>
        <figure>
          <Image alt="mail" src="/images/mail.svg" width={35} height={35} />
        </figure>
      </header>
    </>
  );
}
