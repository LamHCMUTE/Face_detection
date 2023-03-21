import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <Stack sx={{ overflowY: "scroll", height: "100vh" }}>
      <Sidebar />
    </Stack>
  );
}
