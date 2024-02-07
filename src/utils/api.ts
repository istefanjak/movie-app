import { PosterSize, TmdbErrorResponse } from "@/types/types";
import toast from "react-hot-toast";

export async function fetchApi<T>(
  input: URL | RequestInfo,
  init?: (RequestInit & { params?: Record<string, string>; }) | undefined
) {
  const url = input instanceof URL
    ? input
    : new URL(process.env.NEXT_PUBLIC_TMDB_BASE_URL + input.toString());

  if (process.env.NEXT_PUBLIC_TMDB_API_KEY) {
    url.searchParams.set("api_key", process.env.NEXT_PUBLIC_TMDB_API_KEY);
  }
  init?.params &&
    Object.keys(init.params).forEach((key) => {
      url.searchParams.set(key, init.params![key]);
    });

  const res = await fetch(url.toString(), init);

  try {
    if (!res.ok) {
      throw (await res.json()) as TmdbErrorResponse;
    }
    return (await res.json()) as T;
  } catch (e) {
    console.log(e);
    if (e && typeof e === "object" && "status_code" in e) {
      toast.error((e as TmdbErrorResponse).status_message);
    } else {
      toast.error("Greška sa pozadinskim servisom.");
    }

    throw e;
  }
}

export async function fetchPoster(
  path: RequestInfo,
  posterSize: PosterSize,
  init?: RequestInit | undefined
) {
  const url = new URL(getPosterUrl(path, posterSize));

  const res = await fetch(url.toString(), init);
  if (!res.ok) {
    throw new Error(`Request failed with status: ${res.status}`);
  }
  return await res.json();
}

export function getPosterUrl(path: RequestInfo, posterSize: PosterSize) {
  return (
    process.env.NEXT_PUBLIC_TMDB_IMAGE_URL + "/" + posterSize + path.toString()
  );
}

