import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { Button, Stack } from "@mui/material";
import HomePage from "@/components/Home_page";
import { useState } from "react";




export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  
  return (
    <Stack sx={{ overflowY: "scroll", height: "100vh" }}>
      <HomePage  
        setLoading={(val: any) => {
          setLoading(val);
          }}
        isTransparent={isTransparent}
      />
      {/* <Sidebar/> */}
    </Stack>
    
  );
}
