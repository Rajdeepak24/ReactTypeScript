import React, { useRef } from "react";
import "./Style.css";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFields = ({ todo, setTodo, handleAdd }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>
        <form className="input" onSubmit={handleAdd}>
          <input
            type="input"
            placeholder="Enter your Task"
            className="input__box"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
              inputRef.current?.blur(); //we use useRef to focus on the input box when we are typing aynthinn
            }}
          />
          <button className="input_submit" type="submit">
            Go
          </button>
        </form>
      </div>
    </>
  );
};

export default InputFields;
