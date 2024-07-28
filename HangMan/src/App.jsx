import Button from "./components/Button/Button";
import InputText from "./components/InputText/InputText";
export default function App() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline text-center">
      HangMan
    </h1>
    <div className="flex w-full">
    <InputText/>
    <Button/>
    </div>
  
    </div>
  )
}