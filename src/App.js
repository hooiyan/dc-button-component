import "./App.css";
import styles from "./styles/Button.module.css";

import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <section className={styles.group}>
        <Button css="default" description="<Button />" />
        <Button grayText css="defaultHover" description="&:hover, &:focus" />
      </section>
      <section className={styles.group}>
        <Button css="outline" description={`<Button variant="outline" />`} />
        <Button grayText css="outlineHover" description={`&:hover, &:focus`} />
      </section>
      <section className={styles.group}>
        <Button css="text" description={`<Button variant="text" />`} />
        <Button grayText css="textHover" description="&:hover, &:focus" />
      </section>
      <Button css="disableShadow" description="<Button disableShadow />" />
      <section className={styles.group}>
        <Button
          css="disabled"
          description="<Button disabled />"
          text="Disabled"
        />
        <Button
          css="textDisabled"
          description={`<Button variant="text" disabled />`}
          text="Disabled"
        />
      </section>
    </div>
  );
}

export default App;
