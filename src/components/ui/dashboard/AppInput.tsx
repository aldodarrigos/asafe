import { InputType } from "@/interfaces";

interface AppInputProps {
  name: string;
  type: InputType;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const AppInput = ({ name, placeholder, type, value, onChange }: AppInputProps) => {
  return <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background  placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 bg-white border-zinc-800 text-black" />;
};

