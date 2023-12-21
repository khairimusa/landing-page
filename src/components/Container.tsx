export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col space-y-4 sm:p-8 pt-6 max-w-4xl mx-auto">
      {children}
    </div>
  );
}
