import "./App.css";

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button css="default" description="<Button />" />
      <Button grayText css="defaultHover" description="&:hover, &:focus" />
      <Button css="outline" description={`<Button variant="outline" />`} />
      <Button grayText css="outlineHover" description={`&:hover, &:focus`} />
      <Button css="text" description={`<Button variant="text" />`} />
      <Button css="textHover" description="&:hover, &:focus" />
    </div>
  );
}

export default App;
