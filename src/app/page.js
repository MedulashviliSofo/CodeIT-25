import styles from "./page.module.css";
import Input from "@/components/Input/Input";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Title title={'Enter Your Name'}/>
        <Input />
      </section>
    </div>
  );
}
