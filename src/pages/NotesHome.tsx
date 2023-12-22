const NotesComponent: React.FC = () => {
  return (
    <div className="bg-white flex flex-col pl-11 pr-20 py-12 items-start max-md:px-5">
      <header className="text-neutral-800 text-3xl font-bold max-w-[1189px] mt-5 max-md:max-w-full">
        Notes
      </header>
      <div className="text-neutral-800 text-7xl font-bold max-w-[621px] self-center mt-72 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        <span>Welcome to</span> <span className="font-bold">Notes</span>{" "}
      </div>
      <CreateFolderForm />
    </div>
  );
};

const CreateFolderForm: React.FC = () => {
  return (
    <form className="items-center self-center border flex gap-2.5 mt-11 mb-64 pl-2.5 pr-20 py-2.5 rounded-lg border-solid border-stone-300 max-md:max-w-full max-md:flex-wrap max-md:my-10 max-md:pr-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9172272352bae70f9f60525fbd1c2ddf9e84e0dd839de32c87af6f0f906e2cd7?apiKey=eadbdee2663e48d780585bb2a19947da&"
        className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full my-auto"
        alt="Icon"
      />
      <div className="text-stone-300 text-lg tracking-wide self-stretch grow whitespace-nowrap">
        Create your first folder here.
      </div>
    </form>
  );
};

export default NotesComponent;