import axios from 'axios';

export async function getResponse<T>(path: string): Promise<T> {
	const { data } = await axios.get(path);
	return data;
}

// TODO: re-write this as an arrow function
// export const getResponse = async (path: string): Promise<T> => {
//   const response = await axios.get(path);
//   return response.data;
// };
