import "./App.css";
import styles from "./styles/Button.module.css";

import Button from "./components/Button";
import IconButton from "./components/IconButton";

import { MdAddShoppingCart } from "react-icons/md";

function App() {
  return (
    <div>
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
      <section className={styles.group}>
        <IconButton
          left
          css="icon"
          description={`<Button startIcon="local_grocery_store" />`}
          icon={<MdAddShoppingCart />}
        />
        <IconButton
          css="icon"
          description={`<Button endIcon="local_grocery_store" />`}
          icon={<MdAddShoppingCart />}
        />
      </section>
      <section className={styles.group}>
        <Button css="sm" description={`<Button size="sm" />`} />
        <Button css="md" description={`<Button size="md" />`} />
        <Button css="lg" description={`<Button size="lg" />`} />
      </section>
    </div>
  );
}

export default App;
