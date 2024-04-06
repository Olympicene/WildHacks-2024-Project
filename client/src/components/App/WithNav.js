import React from 'react';
import { Outlet } from 'react-router';
import NewNavBar from "../NavBar/NewNavBar"

export default function WithNav() {
  return (
    <>
      <NewNavBar />
      <Outlet />
    </>
  );
};
