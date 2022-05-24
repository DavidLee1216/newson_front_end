import { useRouter } from "next/router";
import React, { useState, useEffect, useLayoutEffect } from "react";

const ROUTE_USER_CAMPAIGN = "campaign/[id]";
const ROUTE_LOGIN = "login";

function Campaign() {
  const router = useRouter();

  useLayoutEffect(() => {
    if (localStorage.user) {
      const userInfo = JSON.parse(localStorage.user);
      let id = userInfo.id;
      router.push({ pathname: ROUTE_USER_CAMPAIGN, query: { id } });
    } else {
      router.push({ pathname: ROUTE_LOGIN });
    }
  }, []);
  return <div></div>;
}

export default Campaign;
