import React, { useRef } from "react";
import "./styles.css";

interface props{
  todo:string;
  setTode:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) =>  void;
}
const InputField:React.FC<props> = ({ handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >InputField</form>
  )
}

export default InputField