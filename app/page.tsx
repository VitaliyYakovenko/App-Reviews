import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Title tag="h1">Курси з Photoshop</Title>
      <Button  appearance="primary">Дізнатись детальніше</Button>
    </div>
  );
}
