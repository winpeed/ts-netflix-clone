export type ComponentProps = {
    children?: React.ReactNode;
    country ?: string;
  };

  export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string,
    name ?:string,
    required?: boolean,
    placeholder:string
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
 onSubmit ?: any
  }

  
  export interface ListButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    onClick ?:  () => void
     }

  export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
   country?: string;
   children: React.ReactNode;
     }
