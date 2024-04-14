import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  isLoading?: boolean;
  loadingText?: string;
  children: ReactNode;
};

export function FormWrapper({
  title,
  isLoading = false,
  loadingText = "Loading...",
  children,
}: FormWrapperProps) {
  return (
    <div className="md:min-w-[400px] mx-auto">
      <h2 className="text-xl md:text-3xl text-center font-extrabold leading-tighter tracking-tight mt-3 py-5">
        {title}
      </h2>
      <div>
        {children}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-70 z-50">
            <p className="text-white text-lg">{loadingText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
