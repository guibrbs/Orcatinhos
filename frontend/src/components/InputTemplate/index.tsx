import "./styles.css";

interface InputTemplateInterface {
  type: string;
  placeholder: string;
  setProps: React.Dispatch<React.SetStateAction<string>>;
}

export function InputTemplate({
  type,
  placeholder,
  setProps,
}: InputTemplateInterface) {
  return (
    <>
      <p>{type}</p>
      <input
        required
        type={type === "Senha" ? "password" : "text"}
        placeholder={placeholder}
        className="auth-input"
        onChange={(e) => setProps(e.target.value)}
      />
    </>
  );
}
