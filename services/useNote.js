import useSWR from "swr";
import fetcher from "./fetcher";

//create fetch data function for notes
const useNote = (id) => {
  const { data, error } = useSWR(
    `https://notoapi.herokuapp.com/api/notes/${id}`,
    fetcher
  );
  return {
    note: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNote;
