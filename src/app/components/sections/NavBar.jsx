"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import { CircularProgress } from "@mui/material";
import FadeInAnimation from "../animations/FadeIn";

function NavBar() {
  const { data: session } = useSession();
  const [anchorElement, setAnchorElement] = useState(null);
  const router = useRouter();

  function handleMenu(event) {
    router.prefetch("/auth/signin");
    setAnchorElement(event.currentTarget);
  }

  function handleClose() {
    setAnchorElement(null);
  }

  function handleClick() {
    setAnchorElement(null);

    signOut({ redirect: true, callbackUrl: "/auth/signin" });
  }

  return (
    <FadeInAnimation>
      <nav className="h-[80px] flex justify-between items-center bg-gradient-to-br from-violet-900 to-indigo-800 lg:px-14">
        <span></span>

        <section>
          <div className="flex items-center">
            <p>
              {session?.user ? (
                "Welcome, " + session?.user.name
              ) : (
                <CircularProgress size={25} />
              )}
            </p>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <PersonIcon className="hover:text-blue-600 text-3xl transition-colors duration-200 " />
            </IconButton>
            <Menu
              className="mt-12"
              id="menu-appbar"
              anchorEl={anchorElement}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElement)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClick}>Sign Out</MenuItem>
            </Menu>
          </div>
        </section>
      </nav>
    </FadeInAnimation>
  );
}

export default NavBar;
