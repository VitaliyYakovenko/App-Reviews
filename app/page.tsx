import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Title tag="h1">Курси з Photoshop</Title>
      <Button appearance="primary" arrow="right">Дізнатись детальніше</Button>
      <Button appearance="ghost" arrow="right">Залишити відгук</Button>
      <Paragraph size="medium">Студенти освоять не тільки hard skills, необхідні для
        роботи веб-дизайнером, а й soft skills — навички, які дозволять
        ефективно взаємодіяти в команді з менеджерами, розробниками та
        маркетологами. Випускники факультету можуть успішно конкурувати з
        веб-дизайнерами рівня middle.</Paragraph>
    </div>
  );
}
