import Dropdown from "@/components/Dropdown";
import { useTheme } from "@/lib/ThemeContext";
import styles from "@/styles/Setting.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Setting() {
  // const theme = 'dark'; // 이 코드를 지우고 Context를 활용해 주세요

  const { theme, setTheme } = useTheme();
  function handleDropdownChange(_, value) {
    const nextTheme = value;
    setTheme(nextTheme);
  }

  return (
    <>
      <Head>
        <title>설정 - watchit</title>
      </Head>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
        <Dropdown
          className={styles.dropdown}
          name="theme"
          value={theme}
          options={[
            { label: "다크", value: "dark" },
            { label: "라이트", value: "light" },
          ]}
          onChange={handleDropdownChange}
        />
      </section>
    </>
  );
}
